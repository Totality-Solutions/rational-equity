'use client';

import React, { useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Container from '@/components/common/Container';
import type { SanityApproachPage } from '@/sanity/queries';

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay
    }
  })
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' }
  })
};

export default function ApproachHero({ hero }: { hero?: SanityApproachPage['hero'] }) {
  const title = hero?.title || 'How we think';
  const titleItalic = hero?.titleItalic || 'about capital.';
  const subheading =
    hero?.subheading ||
    'Our investment approach is built on one conviction: the best returns come from identifying the right macro theme, selecting the most powerful instrument to capture it, and holding with discipline through the inevitable volatility.';

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const hero = canvas.parentElement;
    if (!hero) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NODES = 72, CONNECT_DIST = 160;
    const NODE_COLOR = 'rgba(180,50,50,', LINE_COLOR = 'rgba(180,50,50,', GOLD = 'rgba(200,169,110,';

    let nodes: { x: number; y: number; vx: number; vy: number; r: number; gold: boolean }[] = [];
    let W: number, H: number, raf: number;

    const resize = () => { W = canvas.width = hero.offsetWidth; H = canvas.height = hero.offsetHeight; };
    const init = () => {
      resize(); nodes = [];
      for (let i = 0; i < NODES; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.8 + 0.8, gold: Math.random() < 0.12 });
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) { const alpha = (1 - d / CONNECT_DIST) * 0.35; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.strokeStyle = (a.gold || b.gold) ? GOLD + alpha + ')' : LINE_COLOR + alpha + ')'; ctx.lineWidth = 0.6; ctx.stroke(); }
        }
      }
      for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fillStyle = n.gold ? GOLD + '0.9)' : NODE_COLOR + '0.75)'; ctx.fill(); }
    };
    const tick = () => { for (const n of nodes) { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1; } draw(); raf = requestAnimationFrame(tick); };

    init(); tick();
    const handleResize = () => { resize(); init(); };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      <canvas
        ref={canvasRef}
        id="heroCanvas"
        className="absolute inset-0 pointer-events-none"
      />

      <Container className="relative z-10 text-center">
        <div className="max-w-[840px] mx-auto space-y-8">
          {/* Title */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="font-playfair text-h1 leading-15 text-white"
          >
            <motion.span
              variants={slideUpVariants}
              custom={0}
              className="block"
            >
              {title}
            </motion.span>
            <motion.span
              variants={slideUpVariants}
              custom={0.05}
              className="block italic"
            >
              {titleItalic.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariants}
            custom={0.4}
            className="font-sans text-[18px] leading-[28px] tracking-[0.04em] text-[#E3DFDB] max-w-[640px] mx-auto"
          >
            {subheading}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
