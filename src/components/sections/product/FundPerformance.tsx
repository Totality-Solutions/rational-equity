'use client';

import React, { useState } from 'react';
import {
  LineChart, Line, ResponsiveContainer, Tooltip,
  CartesianGrid, XAxis, YAxis, LabelList,
} from 'recharts';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';
import type { ChartDataPoint, KPIItem, BacktestKPIItem } from '@/data/Funds';

/* ──────────────────────────────────────────────
   Props
   ────────────────────────────────────────────── */

interface FundPerformanceProps {
  chartData?: Record<string, ChartDataPoint[]>;
  kpis: KPIItem[];
  fundTitle?: string;
  variant?: 'chart' | 'backtest';
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  backtestKpis?: BacktestKPIItem[];
}

/* ──────────────────────────────────────────────
   Shared label / tooltip helpers
   ────────────────────────────────────────────── */

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

/* ──────────────────────────────────────────────
   Backtest KPI Card (Absolute Return variant)
   ────────────────────────────────────────────── */

function BacktestKPICard({ value, label, description, color }: BacktestKPIItem) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-[#FCFBFA] p-8 md:p-10 text-center flex flex-col items-center">
      <h3
        className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold"
        style={{ color }}
      >
        {value}
      </h3>
      <p className="mt-4 text-lg md:text-xl font-semibold text-[#1a1a1a]">
        {label}
      </p>
      <p className="mt-3 text-neutral-500 text-sm md:text-base leading-7">
        {description}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Standard chart KPI Card
   ────────────────────────────────────────────── */

const KPICard = ({
  icon,
  label,
  value,
  valueColor,
  sub,
}: {
  icon?: string;
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

/* ──────────────────────────────────────────────
   Returns Table (shared between variants)
   ────────────────────────────────────────────── */

function ReturnsTable({
  fullData,
  active,
  setActive,
  disclaimer,
}: {
  fullData: ChartDataPoint[];
  active: string;
  setActive: (p: string) => void;
  disclaimer: string;
}) {
  return (
    <div className="bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden">
      <div className="grid grid-cols-[1fr_0.6fr_0.6fr] bg-[#F9F5F5] border-b border-[#EDE8E0] px-4 py-2.5">
        {['Period', 'Fund', 'Benchmark'].map((h, i) => (
          <span
            key={h}
            className={`text-[10px] tracking-[0.16em] uppercase text-[#8A7A60] font-medium ${i > 0 ? 'text-right' : ''}`}
          >
            {h}
          </span>
        ))}
      </div>
      {fullData.map((row, i) => {
        const isActive = row.period === active;
        return (
          <div
            key={row.period}
            onClick={() => setActive(row.period)}
            className={`grid grid-cols-[1fr_0.6fr_0.6fr] px-4 py-2.5 border-b border-[#F5F1EC] last:border-0 cursor-pointer transition-colors duration-150
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
        {disclaimer}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Chart Panel (shared between variants)
   ────────────────────────────────────────────── */

function ChartPanel({
  data,
  periods,
  active,
  setActive,
  fundTitle,
  disclaimer,
}: {
  data: ChartDataPoint[];
  periods: string[];
  active: string;
  setActive: (p: string) => void;
  fundTitle: string;
  disclaimer: string;
}) {
  return (
    <div className="bg-white border border-[#E8E2D8] rounded-2xl p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex gap-5">
          <span className="flex items-center gap-2 text-xs text-[#444441]">
            <span className="w-7 h-[2.5px] bg-brand-maroon rounded-full inline-block" />
            {fundTitle}
          </span>
          <span className="flex items-center gap-2 text-xs text-[#444441]">
            <span className="w-7 border-t-2 border-dashed border-[#B4B2A9] inline-block" />
            Nifty 500 TRI (Benchmark)
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {periods.map((p) => (
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
        {disclaimer}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Standard Chart Section
   ────────────────────────────────────────────── */

function StandardPerformance({
  chartData,
  kpis,
  fundTitle,
  heading,
  headingHighlight,
  subheading,
}: {
  chartData?: Record<string, ChartDataPoint[]>;
  kpis: KPIItem[];
  fundTitle: string;
  heading: string;
  headingHighlight: string;
  subheading?: string;
}) {
  const periods = React.useMemo(
    () => (chartData ? Object.keys(chartData) : []),
    [chartData],
  );
  const lastPeriod = periods[periods.length - 1] ?? '';
  const [active, setActive] = useState(lastPeriod);
  const fullData = chartData && lastPeriod ? chartData[lastPeriod] ?? [] : [];
  const data = chartData && active ? chartData[active] ?? [] : [];
  const activeRow = fullData.find((r) => r.period === active) ?? null;

  return (
    <>
      <div className="text-center mb-8">
        <AnimatedHeader
          title={heading}
          highlight={headingHighlight}
          highlightColor="#9B0000"
          subheading={subheading}
          variant="light"
          titleClassName="text-h3-mobile md:text-h3-tab lg:text-h3 text-black mb-2"
          subheadingClassName="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg tracking-wide text-black"
        />
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {kpis.map((kpi, i) => {
          const item =
            kpi.isPeriodKpi && activeRow
              ? {
                  ...kpi,
                  label: kpi.label.replace('{period}', activeRow.label),
                  value: kpi.value.replace('{fund}', `+${activeRow.fund.toFixed(2)}%`),
                  sub: kpi.sub.replace('{bench}', `+${activeRow.bench.toFixed(2)}%`),
                }
              : kpi;
          return (
            <KPICard
              key={i}
              icon={item.icon}
              label={item.label}
              value={item.value}
              valueColor={item.valueColor}
              sub={item.sub}
            />
          );
        })}
      </div>

      {/* Table + Chart — only when chartData exists */}
      {chartData && periods.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-4">
          <ReturnsTable
            fullData={fullData}
            active={active}
            setActive={setActive}
            disclaimer="* Returns as on 31 May 2024"
          />
          <ChartPanel
            data={data}
            periods={periods}
            active={active}
            setActive={setActive}
            fundTitle={fundTitle}
            disclaimer="* Returns as on 31 May 2024"
          />
        </div>
      )}
    </>
  );
}

/* ──────────────────────────────────────────────
   Backtest Section (Absolute Return variant)
   ────────────────────────────────────────────── */

function AbsoluteBacktestSection({
  chartData,
  backtestKpis,
  heading,
  headingHighlight,
  subheading,
}: {
  chartData?: Record<string, ChartDataPoint[]>;
  backtestKpis?: BacktestKPIItem[];
  heading: string;
  headingHighlight: string;
  subheading?: string;
}) {
  const periods = React.useMemo(
    () => (chartData ? Object.keys(chartData) : []),
    [chartData],
  );
  const lastPeriod = periods[periods.length - 1] ?? '';
  const [active, setActive] = useState(lastPeriod);
  const fullData = chartData && lastPeriod ? chartData[lastPeriod] ?? [] : [];
  const data = chartData && active ? chartData[active] ?? [] : [];

  return (
    <>
      <div className="text-center mb-8">
        <AnimatedHeader
          title={heading}
          highlight={headingHighlight}
          highlightColor="#9B0000"
          subheading={subheading}
          variant="light"
          titleClassName="text-h3-mobile md:text-h3-tab lg:text-h3 text-black mb-2"
          subheadingClassName="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg tracking-wide text-black"
        />
      </div>

      {/* Backtest KPI cards */}
      {backtestKpis && backtestKpis.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {backtestKpis.map((kpi, i) => (
            <BacktestKPICard key={i} {...kpi} />
          ))}
        </div>
      )}

      {/* Chart + Table — only when chartData exists */}
      {chartData && periods.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-4">
          <ReturnsTable
            fullData={fullData}
            active={active}
            setActive={setActive}
            disclaimer="* Model returns. Past performance does not guarantee future results."
          />
          <ChartPanel
            data={data}
            periods={periods}
            active={active}
            setActive={setActive}
            fundTitle="Absolute Return Fund"
            disclaimer="* Model returns. Past performance does not guarantee future results."
          />
        </div>
      )}
    </>
  );
}

/* ──────────────────────────────────────────────
   Main Component — delegates by variant
   ────────────────────────────────────────────── */

export default function FundPerformance({
  chartData,
  kpis,
  fundTitle = 'Fund',
  variant = 'chart',
  heading = 'Fund',
  headingHighlight = 'Performance',
  subheading,
  backtestKpis,
}: FundPerformanceProps) {
  if (variant === 'backtest') {
    return (
      <section className="bg-white py-12">
        <Container>
          <AbsoluteBacktestSection
            chartData={chartData}
            backtestKpis={backtestKpis}
            heading={heading}
            headingHighlight={headingHighlight}
            subheading={subheading}
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-white py-12">
      <Container>
        <StandardPerformance
          chartData={chartData}
          kpis={kpis}
          fundTitle={fundTitle}
          heading={heading}
          headingHighlight={headingHighlight}
          subheading={subheading}
        />
      </Container>
    </section>
  );
}
