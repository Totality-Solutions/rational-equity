"use client";

import React, { useState, useMemo } from "react";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface PerformanceProps {
  data: {
    weekly: { name: string; fund: number; bench: number; status: number }[];
    monthly: { name: string; fund: number; bench: number; status: number }[];
    yearly: { name: string; fund: number; bench: number; status: number }[];
  };
}

export default function FundPerformance({ data }: PerformanceProps) {
  // 1. Timeframe State (Functionality)
  const [timeframe, setTimeframe] = useState<keyof typeof data>("monthly");

  // 2. Sync Table Data with Selected Timeframe
  const tableData = useMemo(() => {
    return data[timeframe].map(item => ({
      period: item.name,
      fundReturn: (item.fund >= 0 ? "+" : "") + item.fund + "%",
      benchmark: (item.bench >= 0 ? "+" : "") + item.bench + "%",
    }));
  }, [data, timeframe]);

  // 3. Dynamic Growth Calculation for Header
  const currentGrowth = useMemo(() => {
    const activeList = data[timeframe];
    if (!activeList.length) return "0.0";
    return activeList[activeList.length - 1].fund.toFixed(1);
  }, [data, timeframe]);

  return (
    <section className="py-20 px-6 bg-[#F8F8F8] font-sans">
      <div className="max-w-7xl mx-auto">
        <AnimatedHeader 
          title="Fund Performance"
          highlight="Performance"
          highlightColor="#8B0000"
          subheading="Live historical returns and trend analysis"
          variant="light"
          className="mb-16 text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-stretch">
          
          {/* COLUMN 1: Dynamic Table (Synced with Graph Data) */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col">
            <div className="grid grid-cols-3 bg-gray-50/50 border-b border-gray-100 px-6 py-5">
              <span className="text-body-sm uppercase tracking-widest font-bold text-gray-400">Period</span>
              <span className="text-body-sm uppercase tracking-widest font-bold text-gray-400 text-center">Fund</span>
              <span className="text-body-sm uppercase tracking-widest font-bold text-gray-400 text-right">Bench.</span>
            </div>

            <div className="divide-y divide-gray-50 flex-grow">
              {tableData.map((row, index) => (
                <div key={index} className="grid grid-cols-3 px-6 py-5 items-center bg-white hover:bg-gray-50/50 transition-colors">
                  <span className="text-body-md font-medium text-gray-900">{row.period}</span>
                  <span className={`text-body-md font-bold text-center ${row.fundReturn.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>
                    {row.fundReturn}
                  </span>
                  <span className="text-body-md text-gray-400 text-right">{row.benchmark}</span>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-[10px] text-gray-400 text-center italic">
              *All values represent percentage growth (%)
            </div>
          </div>

          {/* COLUMN 2: Linear Line Graph (Dynamic mapping) */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
            
            <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium text-body-md">Net Growth :</span>
                <span className="text-[#10B981] font-bold text-body-md">+{currentGrowth}%</span>
              </div>

              {/* Legend Layout */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#818CF8]" />
                  <span className="text-body-sm font-semibold text-gray-400 uppercase">Benchmark</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                  <span className="text-body-sm font-bold text-black uppercase">Fund</span>
                </div>
              </div>

              {/* Time Selection Switcher (Mapping keys from Props) */}
              <div className="flex bg-gray-100 p-1 rounded-xl items-center border border-gray-100">
                {(Object.keys(data) as Array<keyof typeof data>).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-5 py-2 text-xs transition-all duration-300 rounded-lg font-bold uppercase ${
                      timeframe === t 
                      ? "bg-[#8B0000] text-white shadow-lg" 
                      : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chart Area: type="linear" for no curves */}
            <div className="min-h-[400px] w-full flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={data[timeframe]} 
                  margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F3F4F6" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={{ stroke: '#E5E7EB' }} 
                    tickLine={false} 
                    tick={{ fill: '#9CA3AF', fontSize: 11, fontWeight: 500 }} 
                    dy={15}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9CA3AF', fontSize: 11 }}
                    tickFormatter={(val) => `${val}%`}
                  />
                  <Tooltip 
                    cursor={{ stroke: '#E5E7EB', strokeWidth: 2 }}
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: '1px solid #F3F4F6', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                      fontSize: '12px'
                    }}
                  />
                  
                  {/* Purple Line: Benchmark */}
                  <Line 
                    type="linear" 
                    dataKey="bench" 
                    stroke="#818CF8" 
                    strokeWidth={2.5} 
                    dot={{ r: 4, fill: '#fff', strokeWidth: 2, stroke: '#818CF8' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                    animationDuration={800}
                  />
                  
                  {/* Cyan Line: Fund */}
                  <Line 
                    type="linear" 
                    dataKey="fund" 
                    stroke="#22D3EE" 
                    strokeWidth={2.5} 
                    dot={{ r: 4, fill: '#fff', strokeWidth: 2, stroke: '#22D3EE' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                    animationDuration={800}
                  />

                  {/* Salmon Line: Status (Dashed) */}
                  <Line 
                    type="linear" 
                    dataKey="status" 
                    stroke="#F87171" 
                    strokeWidth={1.5} 
                    strokeDasharray="4 4"
                    dot={false}
                    animationDuration={800}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}