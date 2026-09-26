import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const CONCERNS = ["Traffic / street noise", "Aircraft noise", "Train noise", "Draughts & cold", "Condensation", "Security", "Heating bills / EPC", "Listed building rules"];
const PROPERTY_TYPES = ["Victorian", "Georgian", "Edwardian", "1930s", "Modern flat", "Mansion block", "Listed building", "Other"];
const WINDOW_TYPES = ["Sash", "Casement", "Bay", "Crittall / steel", "Large fixed", "Not sure"];

const selectClass = "w-full h-10 rounded-md border border-input bg-background px-3 text-sm";

export default function GlazingAdvisor() {
  const [propertyType, setPropertyType] = useState("");
  const [windowType, setWindowType] = useState("");
  const [borough, setBorough] = useState("");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggle = (c: string) => setConcerns((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(""); setResult(""); setSent(false);
    const { data, error } = await supabase.functions.invoke("glazing-advisor", {
      body: { description, concerns, propertyType, windowType, borough },
    });
    setLoading(false);
    if (error || data?.error) {
      let msg = data?.error;
      try { msg = msg || (await (error as any)?.context?.json())?.error; } catch { /* ignore */ }
      setError(msg || "Something went wrong. Please try again or call 0207 060 1572.");
      return;
    }
    setResult(data.recommendation);
  };

  const sendLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mpwlvvvz", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Glazing Advisor enquiry",
          ...lead, propertyType, windowType, borough,
          concerns: concerns.join(", "), description, ai_recommendation: result,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      toast.success("Thanks — we'll be in touch to arrange your free survey.");
    } catch {
      toast.error("Sorry, your request could not be sent. Please call 0207 060 1572.");
    } finally { setSending(false); }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Advisor | Free Recommendation London</title>
        <meta name="description" content="Describe your London property and window concerns to get an instant AI-powered secondary glazing recommendation for noise, heat and listed buildings." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/glazing-advisor" />
      </Helmet>
      <header><MainNav /></header>
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Secondary Glazing Advisor</h1>
        <p className="text-muted-foreground mb-8">Tell us about your home and what's bothering you. Our AI-powered advisor will suggest the secondary glazing system and glass that suit your property — then you can send it to us for a free survey.</p>

        <form onSubmit={submit} className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <label className="text-sm font-medium space-y-2 block">Property type
              <select className={selectClass} value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="">Select…</option>{PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium space-y-2 block">Window type
              <select className={selectClass} value={windowType} onChange={(e) => setWindowType(e.target.value)}>
                <option value="">Select…</option>{WINDOW_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium space-y-2 block">Area / borough
              <Input value={borough} onChange={(e) => setBorough(e.target.value)} placeholder="e.g. Islington" maxLength={80} />
            </label>
          </div>
          <fieldset>
            <legend className="text-sm font-medium mb-2">Main concerns</legend>
            <div className="flex flex-wrap gap-2">
              {CONCERNS.map((c) => (
                <button type="button" key={c} onClick={() => toggle(c)} aria-pressed={concerns.includes(c)}
                  className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${concerns.includes(c) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}>
                  {c}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="text-sm font-medium space-y-2 block">Describe your property and windows
            <Textarea required maxLength={3000} className="min-h-[140px]" value={description} onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Grade II listed Georgian terrace near a bus route. Original timber sash windows on the front, bedroom is noisy and cold in winter…" />
          </label>
          <Button type="submit" disabled={loading || !description.trim()} className="w-full">
            {loading ? "Preparing your recommendation…" : "Get my recommendation"}
          </Button>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        </form>

        {result && (
          <section className="mt-10 space-y-8" aria-live="polite">
            <div className="rounded-xl border border-border bg-card p-6 prose prose-neutral dark:prose-invert max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
              <p className="text-xs text-muted-foreground">AI-generated guidance — a surveyor will confirm the final specification.</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <h2 className="text-xl font-semibold mb-2">Send this to us for a free survey</h2>
              {sent ? <p className="text-sm">Thank you — your details and recommendation have been sent.</p> : (
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
