import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText } from "npm:ai";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-lovable-aig-run-id",
  "Access-Control-Expose-Headers": "X-Lovable-AIG-Run-ID",
};

const SYSTEM = `You are the glazing advisor for Secondary Glazing Specialist, a London firm specialising in heritage, listed and conservation-area properties.
Recommend suitable SECONDARY glazing (never replacement windows) based on the homeowner's description.
Our product range: vertical sliding sash units, horizontal sliding units, hinged/casement units, lift-out units, fixed panels, bay-window systems, Crittall/steel-window solutions.
Glass options: 4mm float, 6.4mm laminated, 6.8mm / 8.8mm / 10.8mm Stadip Silence acoustic laminate (10.8mm with 100mm air gap gives up to 54dB reduction), Pilkington K Glass low-E (up to 60% better heat retention), 6.4/6.8/8.8mm low-E laminate.
Secondary glazing is reversible and usually acceptable in listed buildings and conservation areas; mention Listed Building Consent where relevant.
Write in plain British English, no jargon, under 350 words. Use markdown with these headings:
## Recommended system
## Recommended glass
## Why this suits your property
## Planning & practical notes
Finish with one sentence inviting a free survey. Do not quote exact prices.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

  try {
    const { description, concerns, propertyType, windowType, borough } = await req.json();
    if (!description || typeof description !== "string" || description.length > 3000) {
      return json({ error: "Please describe your property (up to 3000 characters)." }, 400);
    }
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "Advisor is not configured." }, 500);

    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });

    const prompt = [
      `Property type: ${propertyType || "not specified"}`,
      `Window type: ${windowType || "not specified"}`,
      `Area/borough: ${borough || "London"}`,
      `Main concerns: ${Array.isArray(concerns) && concerns.length ? concerns.join(", ") : "not specified"}`,
      `Description: ${description}`,
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
    if (!text.trim()) return json({ error: "No recommendation could be generated. Please call 0207 060 1572." }, 502);
    return json({ recommendation: text });
  } catch (e) {
    const status = (e as { statusCode?: number })?.statusCode;
    console.error("advisor error", e);
    if (status === 429) return json({ error: "The advisor is busy right now. Please try again in a minute." }, 429);
    if (status === 402) return json({ error: "The advisor is temporarily unavailable. Please call 0207 060 1572." }, 402);
    return json({ error: "Something went wrong. Please try again or call 0207 060 1572." }, status && status >= 400 ? status : 500);
  }
});
