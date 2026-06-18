'use client';

import React, { useState } from 'react';
import {
  LineChart, Line, ResponsiveContainer, Tooltip,
  CartesianGrid, XAxis, YAxis, LabelList,
} from 'recharts';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';

const PERIODS = ['1M', '3M', '6M', '1Y', '2Y', '3Y', '5Y', 'SI'];

const ALL_DATA: Record<string, { period: string; label: string; fund: number; bench: number }[]> = {
  '1M': [{ period: '1M', label: '1 Month', fund: 4.20, bench: 3.10 }],
  '3M': [
    { period: '1M', label: '1 Month',  fund: 4.20, bench: 3.10 },
    { period: '3M', label: '3 Months', fund: 8.75, bench: 6.40 },
  ],
  '6M': [
    { period: '1M', label: '1 Month',  fund: 4.20,  bench: 3.10 },
    { period: '3M', label: '3 Months', fund: 8.75,  bench: 6.40 },
    { period: '6M', label: '6 Months', fund: 13.42, bench: 9.85 },
  ],
  '1Y': [
    { period: '1M', label: '1 Month',  fund: 4.20,  bench: 3.10  },
    { period: '3M', label: '3 Months', fund: 8.75,  bench: 6.40  },
    { period: '6M', label: '6 Months', fund: 13.42, bench: 9.85  },
    { period: '1Y', label: '1 Year',   fund: 21.68, bench: 15.32 },
  ],
  '2Y': [
    { period: '1M', label: '1 Month',        fund: 4.20,  bench: 3.10  },
    { period: '3M', label: '3 Months',       fund: 8.75,  bench: 6.40  },
    { period: '6M', label: '6 Months',       fund: 13.42, bench: 9.85  },
    { period: '1Y', label: '1 Year',         fund: 21.68, bench: 15.32 },
    { period: '2Y', label: '2 Yrs (CAGR)',   fund: 22.91, bench: 16.47 },
  ],
  '3Y': [
    { period: '1M', label: '1 Month',       fund: 4.20,  bench: 3.10  },
    { period: '3M', label: '3 Months',      fund: 8.75,  bench: 6.40  },
    { period: '6M', label: '6 Months',      fund: 13.42, bench: 9.85  },
    { period: '1Y', label: '1 Year',        fund: 21.68, bench: 15.32 },
    { period: '2Y', label: '2 Yrs (CAGR)',  fund: 22.91, bench: 16.47 },
    { period: '3Y', label: '3 Yrs (CAGR)',  fund: 24.35, bench: 17.98 },
  ],
  '5Y': [
    { period: '1M', label: '1 Month',       fund: 4.20,  bench: 3.10  },
    { period: '3M', label: '3 Months',      fund: 8.75,  bench: 6.40  },
    { period: '6M', label: '6 Months',      fund: 13.42, bench: 9.85  },
    { period: '1Y', label: '1 Year',        fund: 21.68, bench: 15.32 },
    { period: '2Y', label: '2 Yrs (CAGR)',  fund: 22.91, bench: 16.47 },
    { period: '3Y', label: '3 Yrs (CAGR)',  fund: 24.35, bench: 17.98 },
    { period: '5Y', label: '5 Yrs (CAGR)',  fund: 23.17, bench: 16.12 },
  ],
  'SI': [
    { period: '1M', label: '1 Month',             fund: 4.20,  bench: 3.10  },
    { period: '3M', label: '3 Months',            fund: 8.75,  bench: 6.40  },
    { period: '6M', label: '6 Months',            fund: 13.42, bench: 9.85  },
    { period: '1Y', label: '1 Year',              fund: 21.68, bench: 15.32 },
    { period: '2Y', label: '2 Yrs (CAGR)',        fund: 22.91, bench: 16.47 },
    { period: '3Y', label: '3 Yrs (CAGR)',        fund: 24.35, bench: 17.98 },
    { period: '5Y', label: '5 Yrs (CAGR)',        fund: 23.17, bench: 16.12 },
    { period: 'SI', label: 'Since Inception',     fund: 19.28, bench: 13.14 },
  ],
};

const FundLabel = ({ x, y, value }: any) => (
  <text x={x} y={y - 11} fill="#800000" fontSize={10} fontWeight={600} textAnchor="middle">
    +{value?.toFixed(2)}%
  </text>
);

const BenchLabel = ({ x, y, value }: any) => (
  <text x={x} y={y + 18} fill="#888780" fontSize={10} textAnchor="middle">
    +{value?.toFixed(2)}%
  </text>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#E8E2D8] rounded-xl px-3 py-2.5 text-xs shadow-sm">
      <p className="text-[#8A7A60] mb-1.5 font-medium">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color }} className="font-semibold">
          {p.name}: +{p.value.toFixed(2)}%
        </p>
      ))}
    </div>
  );
};

const KPICard = ({
  icon,
  label,
  value,
  valueColor,
  sub,
}: {
  icon?: string; // make optional
  label: string;
  value: string;
  valueColor?: string;
  sub: string;
}) => (
  <div className="bg-white border border-[#E8E2D8] rounded-2xl p-4 flex items-center gap-4">

    <div className="w-11 h-11 rounded-full bg-brand-maroon/10 flex items-center justify-center shrink-0">
      
      {icon ? (
        <Image
          src={icon}
          alt={label}
          width={30}
          height={30}
          className="object-contain"
        />
      ) : (
        <span className="text-brand-maroon text-sm font-semibold">
          {label.charAt(0)}
        </span>
      )}

    </div>

    <div>
      <p className="text-[11px] text-[#8A7A60] mb-1 tracking-wide">{label}</p>
      <p className={`text-xl font-semibold leading-none ${valueColor ?? 'text-[#1a1a1a]'}`}>
        {value}
      </p>
      <p className="text-[11px] text-[#8A7A60] mt-1">{sub}</p>
    </div>
  </div>
);

export default function FundPerformance() {
  const [active, setActive] = useState('SI');
  const data = ALL_DATA[active];
  const activeRow = ALL_DATA['SI'].find((r) => r.period === active) ?? ALL_DATA['SI'].at(-1)!;

  return (
    <section className="bg-white py-12">
      <Container>

        {/* Hero title */}
        <div className="text-center mb-8">
          <AnimatedHeader
          title="Fund Performance"
          highlight="Performance"
          highlightColor="#9B0000"
          // subheading="Live historical returns and trend analysis"
          variant="light"
          titleClassName="text-h3-mobile md:text-h3-tab lg:text-h3 text-black mb-2"
          subheadingClassName="  text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg tracking-wide text-black"
        />
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <KPICard
            icon="/images/icons/fund-nav.png"
            label="Current NAV"
            value="₹ 34.75"
            sub="As on 31 May 2024"
          />
          <KPICard
            icon="/images/icons/fund-return.png"
            label={`Return (${activeRow.label})`}
            value={`+${activeRow.fund.toFixed(2)}%`}
            valueColor="text-green-700"
            sub={`Benchmark: +${activeRow.bench.toFixed(2)}%`}
          />
          <KPICard
            icon="/images/icons/fund-category.png"
            label="Category"
            value="Equity – Multi Cap"
            sub="Nifty 500 TRI benchmark"
          />
        </div>

        {/* Table + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4">

          {/* Returns table */}
          <div className="bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_72px_84px] bg-[#F9F5F5] border-b border-[#EDE8E0] px-4 py-2.5">
              {['Period', 'Fund', 'Benchmark'].map((h, i) => (
                <span
                  key={h}
                  className={`text-[10px] tracking-[0.16em] uppercase text-[#8A7A60] font-medium ${i > 0 ? 'text-right' : ''}`}
                >
                  {h}
                </span>
              ))}
            </div>
            {ALL_DATA['SI'].map((row, i) => {
              const isActive = row.period === active;
              return (
                <div
                  key={row.period}
                  onClick={() => setActive(row.period)}
                  className={`grid grid-cols-[1fr_72px_84px] px-4 py-2.5 border-b border-[#F5F1EC] last:border-0 cursor-pointer transition-colors duration-150
                    ${isActive ? 'bg-[#FDF0F0]' : i % 2 === 1 ? 'bg-[#FDFCFB] hover:bg-[#FDF6F6]' : 'hover:bg-[#FDF6F6]'}`}
                >
                  <span className={`text-[13px] ${isActive ? 'text-brand-maroon font-semibold' : 'text-[#2c2c2a]'}`}>
                    {row.label}
                  </span>
                  <span className={`text-[13px] font-semibold text-right ${isActive ? 'text-brand-maroon' : 'text-green-700'}`}>
                    +{row.fund.toFixed(2)}%
                  </span>
                  <span className="text-[13px] text-[#5F5E5A] text-right">
                    +{row.bench.toFixed(2)}%
                  </span>
                </div>
              );
            })}
            <p className="px-4 py-2.5 text-[11px] text-[#8A7A60] border-t border-[#F0EBE4]">
              * Returns as on 31 May 2024
            </p>
          </div>

          {/* Chart */}
          <div className="bg-white border border-[#E8E2D8] rounded-2xl p-5">

            {/* Legend + period selector in one row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex gap-5">
                <span className="flex items-center gap-2 text-xs text-[#444441]">
                  <span className="w-7 h-[2.5px] bg-brand-maroon rounded-full inline-block" />
                  RATIONAL India Equity Fund
                </span>
                <span className="flex items-center gap-2 text-xs text-[#444441]">
                  <span className="w-7 border-t-2 border-dashed border-[#B4B2A9] inline-block" />
                  Nifty 500 TRI (Benchmark)
                </span>
              </div>

              {/* Period buttons */}
              <div className="flex flex-wrap gap-1.5">
                {PERIODS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setActive(p)}
                    className={`px-3 py-1.5 text-[11px] rounded-md border transition-all duration-150 ${
                      active === p
                        ? 'bg-brand-maroon text-white border-brand-maroon'
                        : 'border-[#E0D9CE] text-[#8A7A60] hover:bg-[#F7F3EE] hover:text-[#333]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={data} margin={{ top: 24, right: 12, bottom: 0, left: 0 }}>
                <CartesianGrid stroke="#F5F1EC" />
                <XAxis
                  dataKey="period"
                  stroke="#E8E2D8"
                  tick={{ fontSize: 11, fill: '#8A7A60' }}
                />
                <YAxis
                  stroke="#E8E2D8"
                  tick={{ fontSize: 11, fill: '#8A7A60' }}
                  tickFormatter={(v) => `${v}%`}
                  domain={[0, 32]}
                  ticks={[0, 10, 20, 30]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="fund"
                  name="Fund"
                  stroke="#800000"
                  strokeWidth={2.5}
                  dot={{ r: 5, fill: '#800000', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 7 }}
                  isAnimationActive={true}
                >
                  <LabelList content={<FundLabel />} dataKey="fund" />
                </Line>
                <Line
                  type="monotone"
                  dataKey="bench"
                  name="Benchmark"
                  stroke="#B4B2A9"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  dot={{ r: 4, fill: '#B4B2A9', stroke: '#fff', strokeWidth: 2 }}
                  isAnimationActive={true}
                >
                  <LabelList content={<BenchLabel />} dataKey="bench" />
                </Line>
              </LineChart>
            </ResponsiveContainer>

            <p className="text-[11px] text-[#8A7A60] text-right mt-2">
              * Returns as on 31 May 2024
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}