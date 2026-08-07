import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import SpiralBalancesSEO from "@/components/repairs/SpiralBalancesSEO";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import RelatedResources from "@/components/seo/RelatedResources";

const LearnAboutSpiralBalances = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SpiralBalancesSEO />
    <MainNav />
    <main className="container mx-auto px-4 py-12 flex-grow">
      <BreadcrumbNav />
      <h1 className="text-4xl font-bold mb-8">Learn About Spiral Balances</h1>
      <div className="prose max-w-none mb-10">
        <p className="text-lg">
          Spiral balances are spring-loaded mechanisms that allow vertical sliding secondary glazing windows to operate smoothly and stay open at any height. They counteract the weight of the glazing unit, making them essential for easy, safe window use.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How Spiral Balances Work</h2>
            <p className="text-gray-700 mb-2">
              Spiral balances act as counterweights within the frame of a vertical sliding window. As you open or close the sash, the spiral rod inside the balance turns, adjusting tension and providing balanced movement that prevents the window from slamming shut or being hard to move.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Smooth window operation</li>
              <li>Secure sash positioning</li>
              <li>Improved safety and usability</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Window won’t stay open or slams shut</li>
              <li>Sashes are difficult to move</li>
              <li>Component wear or breakage over time</li>
              <li>Noisy window operation</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Addressing these issues promptly prevents further damage and maintains the performance of your secondary glazing.
            </p>
          </CardContent>
        </Card>
      </div>
      <section className="mb-10" aria-labelledby="balance-spec">
        <h2 id="balance-spec" className="text-2xl font-semibold mb-4">Specifying the right balance</h2>
        <p className="text-gray-700 mb-4">
          Spiral balances are selected by sash weight and travel, not by window size alone. Each balance is rated for
          a working load, and a vertical sliding secondary unit normally carries two balances per sash — one each
          side — so the rating you need is roughly half the finished sash weight plus a 15% allowance for friction
          and seal drag. Getting this wrong is the single most common cause of a sash that creeps down overnight or
          fights you on the way up.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">Spiral balance selection by sash weight</caption>
            <thead>
              <tr className="bg-muted">
                <th scope="col" className="text-left p-3 border">Sash glass specification</th>
                <th scope="col" className="text-left p-3 border">Typical sash weight (1.0 × 1.2m)</th>
                <th scope="col" className="text-left p-3 border">Balance rating per side</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">4mm float</td>
                <td className="p-3 border">~14 kg</td>
                <td className="p-3 border">8 kg</td>
              </tr>
              <tr>
                <td className="p-3 border">6.4mm laminated</td>
                <td className="p-3 border">~21 kg</td>
                <td className="p-3 border">12 kg</td>
              </tr>
              <tr>
                <td className="p-3 border">8.8mm acoustic laminate</td>
                <td className="p-3 border">~28 kg</td>
                <td className="p-3 border">16 kg</td>
              </tr>
              <tr>
                <td className="p-3 border">10.8mm Stadip Silence</td>
                <td className="p-3 border">~34 kg</td>
                <td className="p-3 border">20 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          Because acoustic glass is substantially heavier than float glass, an upgrade from 4mm to 10.8mm acoustic
          laminate almost always requires the balances to be uprated at the same time. If you are planning an
          acoustic upgrade to an existing vertical slider, budget for new balances as part of the works rather than
          discovering the shortfall after installation.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Diagnosing a failing balance</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong>Sash drops slowly:</strong> the spring has lost tension — often recoverable by re-tensioning the spiral rod a turn or two at the shoe.</li>
          <li><strong>Sash drops immediately:</strong> the spring or spiral rod has fractured and the balance needs replacing in pairs, never singly.</li>
          <li><strong>Sash rises on its own:</strong> the balance is over-rated or over-tensioned for the glass weight.</li>
          <li><strong>Sash binds or racks:</strong> unequal tension between the two sides, or a frame that has moved out of square in an older reveal.</li>
          <li><strong>Grinding or clicking:</strong> a dry or contaminated spiral rod; clean and apply a dry PTFE lubricant, not oil, which attracts dust.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Maintenance schedule</h2>
        <p className="text-gray-700 mb-6">
          Balances are low-maintenance but not maintenance-free. We recommend an annual check: operate each sash
          through its full travel, confirm it holds position at mid-height, clean the tracks, and apply dry lubricant
          to the spiral rod. On coastal or heavily polluted urban elevations, shorten that to six-monthly. Serviced
          this way, a quality balance set typically lasts 10–15 years before replacement.
        </p>
      </section>

      <div className="bg-green-50 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold mb-2">Repair & Sustainability</h2>
        <p className="text-gray-700">
          Repairing spiral balances is a sustainable, cost-effective alternative to window replacement. It keeps materials out of landfill and extends the lifespan of your glazing system by 10-15 years.
        </p>
      </div>
      <div className="flex items-center justify-center mb-8">
        <img loading="lazy" decoding="async" 
          src="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png" 
          alt="Spiral balance mechanism in secondary glazing"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
      <RelatedResources
        title="Related repair and glazing resources"
        links={[
          { title: "Secondary glazing repairs", href: "/secondary-glazing-repairs", description: "Balance, track, seal and lock repairs across London." },
          { title: "Vertical sliding units", href: "/residential/sash-windows", description: "Sash-style secondary glazing that balances support." },
          { title: "Horizontal sliding", href: "/residential/horizontal-sliding", description: "An alternative where sash weight is a constraint." },
          { title: "Acoustic glass options", href: "/blog/best-acoustic-glass-secondary-glazing-compared", description: "Weight and performance trade-offs for heavier glass." },
          { title: "Sash window service", href: "/sash-windows", description: "Full specification and installation for sash openings." },
          { title: "Request a repair quote", href: "/quote-request", description: "Send sash dimensions and glass type for a fixed price." },
        ]}
      />

      <div className="text-center">
        <Link
          to="/secondary-glazing-repairs"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors"
        >
          Back to Repairs Page
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default LearnAboutSpiralBalances;
