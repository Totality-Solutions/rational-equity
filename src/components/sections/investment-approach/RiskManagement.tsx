
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, BarChart3, Users } from 'lucide-react';

// const risks = [
//   {
//     icon: <Shield className="w-10 h-10 text-brand-maroon" />,
//     title: "Diversification",
//     desc: "Appropriate diversification across sectors, market caps, and business models to reduce concentration risk."
//   },
//   {
//     icon: <BarChart3 className="w-10 h-10 text-brand-maroon" />,
//     title: "Position Sizing",
//     desc: "Disciplined position sizing based on conviction levels and risk-reward assessment of each investment."
//   },
//   {
//     icon: <Users className="w-10 h-10 text-brand-maroon" />,
//     title: "Continuous Review",
//     desc: "Regular portfolio reviews and rebalancing to ensure alignment with investment objectives and risk parameters."
//   }
// ];

// export default function RiskManagement() {
//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif text-5xl text-gray-900 mb-6">
//             <span className="text-brand-maroon">Risk Management</span> Framework
//           </h2>
//           <p className="font-sans text-gray-600 text-lg">
//             Protecting capital is as important as generating returns
//           </p>
//         </div>

//         {/* 3-Column Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {risks.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               // Removed the "i * 0.1" delay so they all move at once
//               transition={{ 
//                 duration: 0.8, 
//                 ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for a premium feel
//               }}
//               viewport={{ once: true }}
//               className="p-10 rounded-[20px] border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="mb-8">
//                 {item.icon}
//               </div>
//               <h4 className="font-sans font-bold text-xl text-gray-900 mb-4">
//                 {item.title}
//               </h4>
//               <p className="font-sans text-gray-500 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Users } from 'lucide-react';
import Container from '@/components/common/Container';

const risks = [
  {
    icon: <Shield className="w-10 h-10 lg:w-12 lg:h-12 text-[#8B0000]" />,
    title: "Diversification",
    desc: "Appropriate diversification across sectors, market caps, and business models to reduce concentration risk."
  },
  {
    icon: <BarChart3 className="w-10 h-10 lg:w-12 lg:h-12 text-[#8B0000]" />,
    title: "Position Sizing",
    desc: "Disciplined position sizing based on conviction levels and risk-reward assessment of each investment."
  },
  {
    icon: <Users className="w-10 h-10 lg:w-12 lg:h-12 text-[#8B0000]" />,
    title: "Continuous Review",
    desc: "Regular portfolio reviews and rebalancing to ensure alignment with investment objectives and risk parameters."
  }
];

export default function RiskManagement() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            <span className="text-[#8B0000]">Risk Management</span> Framework
          </h2>
          <p className="font-sans text-gray-600 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Protecting capital is as important as generating returns
          </p>
          <div className="mt-8 h-1 w-20 bg-[#8B0000]/20 mx-auto" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10  mx-auto">
          {risks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 lg:p-12 rounded-[24px] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#8B0000]/10 transition-all duration-500 flex flex-col items-start group"
            >
              <div className="mb-8 transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="font-sans font-bold text-xl lg:text-2xl text-gray-900 mb-4 tracking-tight">
                {item.title}
              </h4>
              <p className="font-sans text-gray-500 text-base lg:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}