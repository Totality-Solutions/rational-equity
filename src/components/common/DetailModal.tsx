import React from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Wrapper Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl flex flex-col font-sans text-gray-800">
        
        {/* Sticky Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-700 hover:text-black hover:bg-white shadow-md transition-all border border-gray-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 1. Hero Image / Top Banner */}
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 relative overflow-hidden">
          {/* Fallback stylized presentation background using gradients if image isn't loaded */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/20 via-neutral-900/10 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?auto=format&fit=crop&q=80&w=1200" 
            alt="Digital Gold App and Physical Gold Bullion" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Article Content Body */}
        <div className="p-6 sm:p-10 md:p-16 max-w-3xl mx-auto flex flex-col gap-8">
          
          {/* Header Typography */}
          <header className="flex flex-col gap-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Why the <span className="italic text-amber-600 font-serif">gold cycle</span> isn't over.
            </h1>
            <p className="text-gray-500 font-medium text-sm sm:text-base border-b border-gray-100 pb-4">
              A look at our macro liquidity outlook, and why gold finds momentum early.
            </p>
          </header>

          {/* Intro Section */}
          <section className="text-gray-700 space-y-4 text-[15px] sm:text-base leading-relaxed">
            <p>
              Gold has once again captured investor attention. After many years of being underperforming against traditional asset classes, macro liquidity cycles have reached an inflection point. Is gold truly overvalued or is there still room for growth?
            </p>
            <p>
              While short-term price fluctuations are inevitable, the macroeconomics support the structural bull market for gold. Rather than treating it solely as a safe-haven asset, fundamental metrics continue to signal that it is deep into a structural multi-year cycle, as part of balanced macroeconomic portfolios.
            </p>
          </section>

          {/* Subheader Context */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">Understanding the Gold Cycle</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Gold historically moves in cycles influenced by systemic conditions: inflation expectations, structural yields, geopolitical shifts, and central bank actions. Historically, central banks have turn to gold as a primary reserve to hedge system-based volatility.
            </p>
          </section>

          {/* Point 1 */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-start gap-2">
              <span>1.</span> Central Banks Continue to Accumulate Gold
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              One of the strongest indicators supporting gold's long-term outlook is the steady and heavy purchasing from central banks around the world.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              These institutions are increasing their gold reserves to diversify away from traditional sovereign paper and currency risks. This sustained demand acts as a solid floor foundation for gold prices, reinforcing its growing performance in global macroeconomics.
            </p>
          </section>

          {/* Mid-article Graphic Container */}
          <div className="w-full bg-neutral-50 rounded-xl overflow-hidden my-2 border border-gray-100 p-4 flex flex-col items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800" 
              alt="Economic Growth Metrics Chart" 
              className="max-h-56 w-auto object-contain rounded-lg mix-blend-multiply"
            />
          </div>

          {/* Point 2 */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-start gap-2">
              <span>2.</span> Inflation Risks Remain Present
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              Although inflation has decreased historically, the risk of long-term stickiness remains present. 
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              Gold has long proven itself to be an exceptional hedge against inflation, safeguarding purchasing power over time. When the cost of living and inflation rises, investors often turn to gold to keep their wealth safe from fiat currency depreciation.
            </p>
          </section>

          {/* Point 3 */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-start gap-2">
              <span>3.</span> Geopolitical Uncertainty Continues to Gain Ground
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              Global markets continue to face geopolitical pressures, impacting trade, regional conflicts, and economic sovereignty.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              When standard systemic risks increase, investors look for reliable assets, and gold remains one of the options. As a direct result, modern portfolios maintain systemic allocations to protect against downside volatility.
            </p>
          </section>

          {/* Point 4 */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-start gap-2">
              <span>4.</span> Portfolio Diversification is More Important Than Ever
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              Modern investment portfolios face multiple challenges, including regulatory shifts, changing interest rates, and macro headwinds.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              Gold provides a balance because it has low or negative correlation with traditional equity markets, allowing it to preserve stability during market adjustments.
            </p>
          </section>

          {/* Point 5 */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-start gap-2">
              <span>5.</span> Growing Digital and Liquid Access to Gold
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              Investing in gold has become easier than ever before.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed pl-5">
              Through Gold ETFs, Sovereign Gold Bonds, Gold Mutual Funds, and digital gold platforms, a broader range of investors can participate without the legacy challenges of physical storage and security.
            </p>
          </section>

          {/* Summary Segment Heading */}
          <h2 className="text-lg font-bold text-neutral-900 mt-4 border-t border-gray-100 pt-6">What This Means For Investors</h2>

          {/* Bottom Article Image */}
          <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1599690925058-90e1a0b41144?auto=format&fit=crop&q=80&w=1000" 
              alt="Hands holding gold bricks" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Final Key Takeaways / List */}
          <footer className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              The asset decision on allocating gold allocation inside your portfolio is subjective based on individual portfolio goals and risk tolerances.
            </p>
            <p className="font-medium text-gray-800">
              Without doubt, the systemic themes supporting gold demand remain strong:
            </p>
            <ul className="list-decimal list-inside pl-2 space-y-1.5 text-neutral-800 font-medium">
              <li>Persistent central bank buying</li>
              <li>Persistent inflationary concerns</li>
              <li>Geopolitical adjustments</li>
              <li>Rising demand for liquidity</li>
              <li>Increasing ease of access globally</li>
            </ul>
            <p className="pt-2 text-sm italic text-gray-500">
              These factors support that the current global macro landscape remains favorable for long-term allocation planning.
            </p>
          </footer>

        </div>

      </div>
    </div>
  );
};