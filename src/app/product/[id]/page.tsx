"use client";

import { useParams } from "next/navigation";
import FundOverview from "@/components/sections/product/FundOverview";
import ProductHero from "@/components/sections/product/ProductHero";
import FundDocuments from "@/components/sections/product/FundDocuments";
import { FUND_DATA } from "@/data/Funds";
import FAQ from "@/components/sections/home/FAQ";
import FundCTA from "@/components/sections/product/FundCTA";
import Philosophy from "@/components/sections/product/Philosophy";
import FundPerformance from "@/components/sections/product/FundPerformance";
import ProductNav from "@/components/sections/product/ProductNav";
import ReadyToStart from "@/components/common/ReadyToStart";

export default function FundPage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id) return <section className="py-20 text-center">Loading...</section>;

  const fund = FUND_DATA[id as keyof typeof FUND_DATA];

  if (!fund) return <section className="py-20 text-center">Fund not found</section>;

  return (
    <main className="scroll-smooth">

        <ProductHero
          title={fund.title}
          description={fund.description}
          // titleColor={fund.color}
        />
      
      {/* <ProductNav /> */}

      <section id="overview">
        <FundOverview 
          title={fund.overviewTitle}
          titleItalics={fund.overviewTitleItalics}
          description={fund.overviewDesc} 
          stats={fund.stats} 
        />
      </section>

      <section id="performance">
        {/* <FundPerformance data={fund.performance} /> */}
        <FundPerformance />
      </section>

      <section id="cta" className='max-w-[90rem] mx-auto'>
        <ReadyToStart />
      </section>

      <section id="philosophy">
        <Philosophy points={fund.philosophyPoints || []} />
      </section>

      <section id="documents">
        <FundDocuments  
          documents={fund.documents} 
        />
      </section>

      <section id="cta-2">
        <ReadyToStart {...fund.finalCTA} />
      </section>

      <section id="faqs">
        <FAQ />
      </section>
    </main>
  );
} 