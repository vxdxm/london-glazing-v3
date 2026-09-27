import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText } from "npm:ai";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-lovable-aig-run-id",
  "Access-Control-Expose-Headers": "X-Lovable-AIG-Run-ID",
};

const SYSTEM = `You are a senior surveyor for Secondary Glazing Specialist, a London firm specialising in heritage, listed and conservation-area properties.
The homeowner has described their rooms and windows. Produce a tailored checklist of MEASUREMENTS and PHOTOS they should prepare before requesting a secondary glazing quote.

Rules:
- Only secondary glazing (never replacement windows).
- Plain British English, no jargon, friendly and practical.
- Measurements in millimetres. Explain measuring width and height in three places (top/middle/bottom, left/centre/right) because older London openings are rarely square.
- Always ask for the reveal (recess) depth, because a deeper reveal allows a wider air gap; note that around 100mm gives the best noise reduction with 10.8mm acoustic laminate.
- Mention obstacles the homeowner listed (shutters, blinds, radiators, deep sills, window handles, curtain poles, meeting rails, tiled or stone cills).
- Give 3-5 specific photo angles per room.
- Do NOT quote prices.

Use this exact markdown structure:
## What to measure in each room
### <Room name>
- checklist items (one measurement per line, each starting with a dash)
## Photos to take
### <Room name>
- checklist items (one photo per line, each starting with a dash)
## Handy tips before the survey
- 4 to 6 short tips
Finish with one sentence inviting them to book a free survey.
Keep the whole reply under 600 words.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

  try {
    const { rooms, propertyType, borough, notes } = await req.json();
    if (!Array.isArray(rooms) || rooms.length === 0 || rooms.length > 12) {
      return json({ error: "Please add between one and twelve rooms." }, 400);
    }
    if (typeof notes === "string" && notes.length > 2000) {
      return json({ error: "Please keep extra notes under 2000 characters." }, 400);
    }
    const lines: string[] = [];
    for (const r of rooms) {
      const name = String(r?.name ?? "").slice(0, 80).trim();
      if (!name) return json({ error: "Please name each room." }, 400);
      lines.push(
        [
          `Room: ${name}`,
          `  Window style: ${String(r?.windowType ?? "not specified").slice(0, 60)}`,
          `  Number of windows: ${String(r?.count ?? "1").slice(0, 10)}`,
          `  Condition/age: ${String(r?.condition ?? "not specified").slice(0, 60)}`,
          `  Concerns: ${Array.isArray(r?.concerns) && r.concerns.length ? r.concerns.slice(0, 10).join(", ") : "not specified"}`,
          `  Obstacles: ${Array.isArray(r?.obstacles) && r.obstacles.length ? r.obstacles.slice(0, 10).join(", ") : "none mentioned"}`,
        ].join("\n"),
      );
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "Checklist tool is not configured." }, 500);

    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });

    const prompt = [
      `Property type: ${String(propertyType || "not specified").slice(0, 80)}`,
      `Area/borough: ${String(borough || "London").slice(0, 80)}`,
      `Extra notes: ${String(notes || "none").slice(0, 2000)}`,
      "",
      "Rooms:",
      ...lines,
    ].join("\n");

    let streamErr: unknown;
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system: SYSTEM,
      prompt,
      abortSignal: req.signal,
      onError: ({ error }) => { streamErr = error; },
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });
    let text = "";
    try { text = await result.text; } catch (err) { throw streamErr ?? err; }
    if (!text.trim()) return json({ error: "No checklist could be generated. Please call 0207 060 1572." }, 502);
    return json({ checklist: text });
  } catch (e) {
    const status = (e as { statusCode?: number })?.statusCode;
    console.error("quote-checklist error", e);
    if (status === 429) return json({ error: "The checklist tool is busy right now. Please try again in a minute." }, 429);
    if (status === 402) return json({ error: "The checklist tool is temporarily unavailable. Please call 0207 060 1572." }, 402);
    return json({ error: "Something went wrong. Please try again or call 0207 060 1572." }, status && status >= 400 ? status : 500);
  }
});
