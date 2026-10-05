import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Plus, Trash2, Copy, Printer } from "lucide-react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const PROPERTY_TYPES = ["Victorian", "Georgian", "Edwardian", "1930s", "Modern flat", "Mansion block", "Listed building", "Other"];
const WINDOW_TYPES = ["Sash", "Casement", "Bay", "Crittall / steel", "Large fixed", "French doors", "Not sure"];
const CONDITIONS = ["Original timber, good order", "Original timber, draughty", "Painted shut / stiff", "Metal frames", "Recently restored", "Not sure"];
const CONCERNS = ["Traffic noise", "Aircraft noise", "Train noise", "Draughts & cold", "Condensation", "Security", "Heating bills"];
const OBSTACLES = ["Internal shutters", "Blinds", "Curtain pole", "Radiator under window", "Deep sill / cill", "Window seat", "Stone or tiled cill", "Alarm sensors"];

const selectClass = "w-full h-10 rounded-md border border-input bg-background px-3 text-sm";

type Room = {
  id: number;
  name: string;
  windowType: string;
  count: string;
  condition: string;
  concerns: string[];
  obstacles: string[];
};

const newRoom = (id: number): Room => ({ id, name: "", windowType: "", count: "1", condition: "", concerns: [], obstacles: [] });

type Group = { title: string; items: string[] };
type Section = { heading: string; groups: Group[]; items: string[] };

function parseChecklist(md: string): Section[] {
  const sections: Section[] = [];
  let section: Section | null = null;
  let group: Group | null = null;
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("## ")) {
      section = { heading: line.slice(3).trim(), groups: [], items: [] };
      group = null;
      sections.push(section);
    } else if (line.startsWith("### ") && section) {
      group = { title: line.slice(4).trim(), items: [] };
      section.groups.push(group);
    } else if ((line.startsWith("- ") || line.startsWith("* ")) && section) {
      const item = line.slice(2).replace(/\*\*/g, "").trim();
      if (!item) continue;
      if (group) group.items.push(item);
      else section.items.push(item);
    }
  }
  return sections.filter((s) => s.items.length || s.groups.length);
}

export default function QuotePreparationChecklist() {
  const [propertyType, setPropertyType] = useState("");
  const [borough, setBorough] = useState("");
  const [notes, setNotes] = useState("");
  const [rooms, setRooms] = useState<Room[]>([newRoom(1)]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checklist, setChecklist] = useState("");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sections = useMemo(() => parseChecklist(checklist), [checklist]);
  // Key each item by section + room group so identical lines (e.g. "Width…")
  // in different rooms tick independently.
  const allItems = useMemo(
    () =>
      sections.flatMap((s) => [
        ...s.items.map((i) => `${s.heading}|${i}`),
        ...s.groups.flatMap((g) => g.items.map((i) => `${s.heading}|${g.title}|${i}`)),
      ]),
    [sections],
  );
  const completed = allItems.filter((k) => done[k]).length;

  const updateRoom = (id: number, patch: Partial<Room>) =>
    setRooms((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const toggleIn = (id: number, key: "concerns" | "obstacles", value: string) =>
    setRooms((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, [key]: r[key].includes(value) ? r[key].filter((v) => v !== value) : [...r[key], value] }
          : r,
      ),
    );

  const addRoom = () => setRooms((prev) => (prev.length >= 12 ? prev : [...prev, newRoom(Date.now())]));
  const removeRoom = (id: number) => setRooms((prev) => (prev.length === 1 ? prev : prev.filter((r) => r.id !== id)));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(""); setChecklist(""); setDone({}); setSent(false);
    const { data, error: fnError } = await supabase.functions.invoke("quote-checklist", {
      body: { rooms: rooms.map(({ id, ...r }) => r), propertyType, borough, notes },
    });
    setLoading(false);
    if (fnError || data?.error) {
      let msg = data?.error;
      try { msg = msg || (await (fnError as any)?.context?.json())?.error; } catch { /* ignore */ }
      setError(msg || "Something went wrong. Please try again or call 0207 060 1572.");
      return;
    }
    setChecklist(data.checklist);
  };

  const plainText = () =>
    sections
      .map((s) => {
        const body = [
          ...s.items.map((i) => `- ${i}`),
          ...s.groups.map((g) => `${g.title}\n${g.items.map((i) => `- ${i}`).join("\n")}`),
        ].join("\n");
        return `${s.heading}\n${body}`;
      })
      .join("\n\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(plainText());
      toast.success("Checklist copied — paste it into your notes.");
    } catch {
      toast.error("Could not copy. Please use the print option instead.");
    }
  };

  const sendLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mpwlvvvz", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Quote preparation checklist enquiry",
          ...lead,
          propertyType,
          borough,
          notes,
          rooms: rooms
            .map((r) => `${r.name} — ${r.windowType || "window type not given"} x${r.count}; concerns: ${r.concerns.join(", ") || "none"}; obstacles: ${r.obstacles.join(", ") || "none"}`)
            .join(" | "),
          checklist,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      toast.success("Thanks — we'll be in touch to arrange your free survey.");
    } catch {
      toast.error("Sorry, your request could not be sent. Please call 0207 060 1572.");
    } finally {
      setSending(false);
    }
  };

  const Checkbox = ({ item, id }: { item: string; id: string }) => (
    <li className="flex items-start gap-3">
      <input
        type="checkbox"
        id={`chk-${id}`}
        checked={!!done[id]}
        onChange={() => setDone((p) => ({ ...p, [id]: !p[id] }))}
        className="mt-1 h-4 w-4 shrink-0 accent-primary"
      />
      <label htmlFor={`chk-${id}`} className={`text-sm ${done[id] ? "line-through text-muted-foreground" : ""}`}>
        {item}
      </label>
    </li>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Quote Preparation Checklist | Secondary Glazing London</title>
        <meta name="description" content="Build a tailored checklist of window measurements and photos to prepare before your London secondary glazing quote. Room by room, free and instant." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/quote-checklist" />
      </Helmet>
      <header><MainNav /></header>
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Quote Preparation Checklist</h1>
        <p className="text-muted-foreground mb-8">
          Tell us about your rooms and windows, and we'll build a checklist of the measurements and photos to gather. It
          makes your quote faster and more accurate — and you can tick items off on your phone as you go.
        </p>

        <form onSubmit={submit} className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium space-y-2 block">Property type
              <select className={selectClass} value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="">Select…</option>{PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium space-y-2 block">Area / borough
              <Input value={borough} onChange={(e) => setBorough(e.target.value)} placeholder="e.g. Islington" maxLength={80} />
            </label>
          </div>

          <div className="space-y-5">
            <h2 className="text-lg font-semibold">Your rooms</h2>
            {rooms.map((room, index) => (
              <div key={room.id} className="rounded-lg border border-border p-4 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold">Room {index + 1}</span>
                  {rooms.length > 1 && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeRoom(room.id)}>
                      <Trash2 className="h-4 w-4 mr-1" aria-hidden="true" />Remove
                    </Button>
                  )}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-medium space-y-2 block">Room name
                    <Input required maxLength={80} value={room.name} onChange={(e) => updateRoom(room.id, { name: e.target.value })} placeholder="e.g. Front bedroom (street side)" />
                  </label>
                  <label className="text-sm font-medium space-y-2 block">Window style
                    <select className={selectClass} value={room.windowType} onChange={(e) => updateRoom(room.id, { windowType: e.target.value })}>
                      <option value="">Select…</option>{WINDOW_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                  <label className="text-sm font-medium space-y-2 block">How many windows
                    <Input type="number" min={1} max={20} value={room.count} onChange={(e) => updateRoom(room.id, { count: e.target.value })} />
                  </label>
                  <label className="text-sm font-medium space-y-2 block">Condition
                    <select className={selectClass} value={room.condition} onChange={(e) => updateRoom(room.id, { condition: e.target.value })}>
                      <option value="">Select…</option>{CONDITIONS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                </div>
                <fieldset>
                  <legend className="text-sm font-medium mb-2">Main concerns in this room</legend>
                  <div className="flex flex-wrap gap-2">
                    {CONCERNS.map((c) => (
                      <button type="button" key={c} onClick={() => toggleIn(room.id, "concerns", c)} aria-pressed={room.concerns.includes(c)}
                        className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${room.concerns.includes(c) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-medium mb-2">Anything around the window</legend>
                  <div className="flex flex-wrap gap-2">
                    {OBSTACLES.map((c) => (
                      <button type="button" key={c} onClick={() => toggleIn(room.id, "obstacles", c)} aria-pressed={room.obstacles.includes(c)}
                        className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${room.obstacles.includes(c) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
            {rooms.length < 12 && (
              <Button type="button" variant="outline" onClick={addRoom}>
                <Plus className="h-4 w-4 mr-1" aria-hidden="true" />Add another room
              </Button>
            )}
          </div>

          <label className="text-sm font-medium space-y-2 block">Anything else we should know (optional)
            <Textarea maxLength={2000} className="min-h-[100px]" value={notes} onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Grade II listed, first-floor flat with no lift, original working shutters in the living room…" />
          </label>

          <Button type="submit" disabled={loading || rooms.some((r) => !r.name.trim())} className="w-full">
            {loading ? "Building your checklist…" : "Build my checklist"}
          </Button>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        </form>

        {sections.length > 0 && (
          <section className="mt-10 space-y-8" aria-live="polite">
            <div className="rounded-xl border border-border bg-card p-6 print:border-0 print:p-0">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <p className="text-sm text-muted-foreground">{completed} of {allItems.length} ticked off</p>
                <div className="flex gap-2 print:hidden">
                  <Button type="button" variant="outline" size="sm" onClick={copy}>
                    <Copy className="h-4 w-4 mr-1" aria-hidden="true" />Copy
                  </Button>
                  <Button type="button" variant="outline" size="sm" onClick={() => window.print()}>
                    <Printer className="h-4 w-4 mr-1" aria-hidden="true" />Print
                  </Button>
                </div>
              </div>
              <div className="space-y-8">
                {sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-semibold mb-3">{s.heading}</h2>
                    {s.items.length > 0 && <ul className="space-y-2 mb-4">{s.items.map((i) => <Checkbox key={`${s.heading}|${i}`} item={i} id={`${s.heading}|${i}`} />)}</ul>}
                    {s.groups.map((g) => (
                      <div key={g.title} className="mb-4">
                        <h3 className="text-base font-medium mb-2">{g.title}</h3>
                        <ul className="space-y-2">{g.items.map((i) => <Checkbox key={`${s.heading}|${g.title}|${i}`} item={i} id={`${s.heading}|${g.title}|${i}`} />)}</ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-6">AI-generated guidance — your surveyor will confirm all final sizes on site.</p>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-6 print:hidden">
              <h2 className="text-xl font-semibold mb-2">Send this to us with your survey request</h2>
              {sent ? <p className="text-sm">Thank you — your details and checklist have been sent.</p> : (
                <form onSubmit={sendLead} className="grid gap-4 md:grid-cols-3">
                  <Input required placeholder="Name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
                  <Input required type="email" placeholder="Email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
                  <Input type="tel" placeholder="Phone" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
                  <Button type="submit" disabled={sending} className="md:col-span-3">{sending ? "Sending…" : "Request free survey"}</Button>
                </form>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
