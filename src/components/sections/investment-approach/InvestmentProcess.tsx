'use client';

import AnimatedHeader from '@/components/common/AnimatedHeader';
import Container from '@/components/common/Container';
import React, { useState, useCallback, useRef } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const CRIMSON = '#9B0000';
const CRIMSON_LIGHT = '#F5EDED';
const CRIMSON_BORDER = 'rgba(139,0,0,0.22)';

const stages = [
  {
    key: 'idea',
    label: 'Idea generation',
    short: 'Idea',
    tag: 'Screening',
    y: 38,
    stat: { num: '2,000+', label: 'Companies screened' },
    description:
      'Systematic screening of the investment universe based on quality parameters — ROE, debt levels, earnings growth, and competitive positioning. We filter thousands of companies to a focused watchlist of high-conviction candidates.',
    pills: ['ROE > 15%', 'Low leverage', 'Earnings momentum', 'Moat analysis'],
  },
  {
    key: 'research',
    label: 'Fundamental research',
    short: 'Research',
    tag: 'Deep dive',
    y: 82,
    stat: { num: '360°', label: 'Business model coverage' },
    description:
      'Deep-dive analysis of business models, industry dynamics, management quality, and financial health. We speak with management, customers, suppliers, and competitors to build a complete picture before proceeding.',
    pills: ['Primary research', 'Mgmt quality', 'Industry dynamics', 'Financial health'],
  },
  {
    key: 'valuation',
    label: 'Valuation analysis',
    short: 'Valuation',
    tag: 'Pricing',
    y: 54,
    stat: { num: '3×', label: 'Valuation methodologies' },
    description:
      'Rigorous valuation using DCF, relative multiples, and sum-of-parts — ensuring adequate margin of safety and an attractive risk-reward ratio before any capital is deployed into a position.',
    pills: ['DCF model', 'Peer multiples', 'Sum-of-parts', 'Margin of safety'],
  },
  {
    key: 'portfolio',
    label: 'Portfolio construction',
    short: 'Portfolio',
    tag: 'Sizing',
    y: 91,
    stat: { num: '< 5%', label: 'Max single-position size' },
    description:
      'Disciplined portfolio building with position sizing based on conviction level, sector diversification, and correlation-aware risk management. No single position creates undue concentration risk.',
    pills: ['Conviction sizing', 'Sector limits', 'Correlation checks', 'Risk budgets'],
  },
  {
    key: 'monitoring',
    label: 'Continuous monitoring',
    short: 'Monitor',
    tag: 'Ongoing',
    y: 66,
    stat: { num: 'Quarterly', label: 'Portfolio review cycle' },
    description:
      'Regular review of portfolio companies, tracking business performance against our thesis. We rebalance based on changing fundamentals or valuations and exit decisively when the thesis is broken.',
    pills: ['Quarterly reviews', 'Thesis tracking', 'Exit discipline', 'Rebalancing'],
  },
];

const chartData = stages.map((s, i) => ({ name: s.short, value: s.y, index: i }));

const CustomDot = (props: any) => {
  const { cx, cy, index, activeIndex, onClick } = props;
  const isActive = index === activeIndex;
  return (
    <g onClick={() => onClick(index)} style={{ cursor: 'pointer' }}>
      {isActive && (
        <circle
          cx={cx}
          cy={cy}
          r={18}
          fill={CRIMSON}
          fillOpacity={0.1}
          stroke={CRIMSON}
          strokeWidth={0.5}
          strokeOpacity={0.3}
        />
      )}
      <circle
        cx={cx}
        cy={cy}
        r={isActive ? 9 : 6}
        fill={isActive ? CRIMSON : '#fff'}
        stroke={CRIMSON}
        strokeWidth={isActive ? 2.5 : 2}
      />
      {isActive && <circle cx={cx} cy={cy} r={4} fill="#fff" />}
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const stage = stages[payload[0]?.payload?.index];
  if (!stage) return null;
  return (
    <div
      style={{
        background: CRIMSON,
        borderRadius: 8,
        padding: '8px 14px',
        pointerEvents: 'none',
      }}
    >
      <p style={{ color: '#fff', fontSize: 13, fontWeight: 500, margin: 0 }}>{stage.label}</p>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 11, margin: '2px 0 0' }}>{stage.tag}</p>
    </div>
  );
};

const YAxisTick = ({ x, y, payload }: any) => {
  const labels: Record<number, string> = { 0: 'Entry', 50: 'Mid', 100: 'Peak' };
  const label = labels[payload.value];
  if (!label) return null;
  return (
    <text x={x - 6} y={y} fill="rgba(0,0,0,0.3)" fontSize={11} textAnchor="end" dominantBaseline="central">
      {label}
    </text>
  );
};

export default function InvestmentProcess() {
  const [active, setActive] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);

  const handleSetActive = useCallback(
    (i: number) => {
      if (i === active) return;
      setCardVisible(false);
      setTimeout(() => {
        setActive(i);
        setCardVisible(true);
      }, 160);
    },
    [active]
  );

  const stage = stages[active];

 return (
  <section className="bg-white py-10">
    <Container className="space-y-6 relative">

      {/* Header */}
<AnimatedHeader
          title="Our Investment Process"
          highlight="Investment"
          subheading='A disciplined path to superior returns'
          highlightColor="brand-maroon"
          className="text-h4 sm:text-h3 text-black"
          subheadingClassName="text-sm sm:text-base md:text-body-lg tracking-wide text-black"
          titleClassName="leading-tight"
        />

      {/* Tabs */}
      <div className="sticky top-20 z-10 bg-white overflow-x-auto">
        <div
          className="flex min-w-max rounded-lg overflow-hidden"
          style={{ border: `0.5px solid ${CRIMSON_BORDER}` }}
        >
          {stages.map((s, i) => (
            <button
              key={s.key}
              onClick={() => handleSetActive(i)}
              className="flex-1 px-3 py-2 text-h6 whitespace-nowrap"
              style={{
                background: i === active ? CRIMSON : 'transparent',
                color: i === active ? '#fff' : '#9ca3af',
                borderRight:
                  i !== stages.length - 1 ? `0.5px solid ${CRIMSON_BORDER}` : 'none',
              }}
            >
              <span className="block text-body-sm font-medium mb-[2px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              {s.short}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-[#f9f9f8] rounded-lg px-4 py-3">
          <div className="text-xl sm:text-2xl font-medium mb-1" style={{ color: CRIMSON }}>
            {stage.stat.num}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-400 tracking-wider">
            {stage.stat.label}
          </div>
        </div>

        <div className="bg-[#f9f9f8] rounded-lg px-4 py-3">
          <div className="text-xl sm:text-2xl font-medium mb-1 text-gray-900">
            {String(active + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-400 tracking-wider">
            Current stage
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CRIMSON} stopOpacity={0.13} />
                <stop offset="100%" stopColor={CRIMSON} stopOpacity={0.01} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" stroke="rgba(0,0,0,0.06)" strokeWidth={0.5} />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={<YAxisTick />}
              axisLine={false}
              tickLine={false}
              width={30}
            />

            <ReferenceLine
              y={50}
              stroke={CRIMSON}
              strokeWidth={1}
              strokeDasharray="6 4"
              strokeOpacity={0.2}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="value"
              stroke={CRIMSON}
              strokeWidth={2}
              fill="url(#areaGrad)"
              dot={(props: any) => (
                <CustomDot
                  key={`dot-${props.index}`}
                  {...props}
                  activeIndex={active}
                  onClick={handleSetActive}
                />
              )}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Detail Card */}
      <div
        className={`bg-white border rounded-xl p-4 sm:p-5 relative overflow-hidden transition-all duration-200 ${
          cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        }`}
        style={{ borderColor: CRIMSON_BORDER }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: CRIMSON }} />

        <div className="flex items-start justify-between mb-2">
          <span className="text-sm sm:text-base font-medium" style={{ color: CRIMSON }}>
            {stage.label}
          </span>

          <span
            className="text-[10px] sm:text-xs px-3 py-1 rounded-full border"
            style={{
              borderColor: CRIMSON_BORDER,
              background: CRIMSON_LIGHT,
              color: CRIMSON,
            }}
          >
            {stage.tag}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">
          {stage.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stage.pills.map((pill) => (
            <span
              key={pill}
              className="text-[10px] sm:text-xs bg-[#f9f9f8] border px-3 py-1 rounded-full text-gray-500"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

    </Container>
  </section>
);
}