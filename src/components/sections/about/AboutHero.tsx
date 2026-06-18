export default function AboutHero() {
  return (
    <section className="relative bg-white h-fit py-16 px-6 overflow-hidden font-playfair">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 0, 0, 0.08) 0%, transparent 70%)"
        }}
      />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-6 ">
        <h1 className="text-h1-mobile md:text-h1-tab lg:text-h1 leading-tight font-playfair">
          We invest our own{" "} <br/>
          <span className="italic font-playfair text-[#8B0000]">capital first.</span>
        </h1>

        <p className="text-h4-mobile md:text-h4-tab lg:text-h4 leading-relaxed text-gray-800">
          Rational is an investment house with a singular focus: identifying global mega-trends
          and durable mispricings in the system. We hold them long enough
          for compounding to do its work.
        </p>

        <p className="text-h4-mobile md:text-h4-tab lg:text-h4 leading-relaxed italic text-gray-700">
          We are not asset gatherers. We are investors — with our own net worth tied to every fund
          we launch. Our fee structure rewards us only when you win.
        </p>
      </div>
    </section>
  );
}