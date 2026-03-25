"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import FundOverview from "@/components/sections/product/FundOverview";
import ProductHero  from "@/components/sections/product/ProductHero";
import { FUND_DATA } from "@/data/Funds"


export default async function FundPage() {
  const params = useParams();

  const id = params?.id as string;

  if (!id) {
    return <div>No ID found</div>;
  }

  const fund = FUND_DATA[id as keyof typeof FUND_DATA];

  if (!fund) {
    return <div>Fund not found</div>; // temporarily avoid notFound()
  }

  return (
    <main>
      <ProductHero
        title={fund.title}
        description={fund.description}
        titleColor={fund.color}
      />
      <FundOverview 
        description={fund.overviewDesc} 
        stats={fund.stats} 
      />
    </main>
  );
}