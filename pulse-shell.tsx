"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { InterestStateId, interestStates, pulseNav } from "@/lib/pulse-data";

type PulseContextValue = {
  state: (typeof interestStates)[number];
  setStateId: (id: InterestStateId) => void;
};

const PulseContext = createContext<PulseContextValue | null>(null);

export function usePulse() {
  const value = useContext(PulseContext);
  if (!value) throw new Error("usePulse must be used inside PulseShell");
  return value;
}

export function PulseShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [stateId, setStateId] = useState<InterestStateId>("exploration");
  const state = useMemo(
    () => interestStates.find((item) => item.id === stateId) ?? interestStates[0],
    [stateId]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStateId((current) => {
        const index = interestStates.findIndex((item) => item.id === current);
        return interestStates[(index + 1) % interestStates.length].id;
      });
    }, 9000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <PulseContext.Provider value={{ state, setStateId }}>
      <main className="min-h-screen overflow-hidden bg-[#07090c] text-[#f5f7f7]">
        <motion.div
          className="pointer-events-none fixed inset-0"
          animate={{
            background: `radial-gradient(circle at 16% 8%, ${state.soft}, transparent 30rem), radial-gradient(circle at 82% 12%, rgba(108,140,255,.14), transparent 28rem), linear-gradient(135deg,#07090c,#10161a 54%,#090b10)`
          }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative mx-auto min-h-screen max-w-7xl px-5 py-5 sm:px-8">
          <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-lg font-bold text-[#07090c]">
                P
              </span>
              <span>
                <span className="block text-xl font-semibold">Pulse</span>
                <span className="block text-xs text-[#9aa4ad]">AI 原生兴趣流平台</span>
              </span>
            </Link>
            <nav className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-2xl">
              {pulseNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} className="relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold text-[#a7b0b8]">
                    {active && <motion.span layoutId="pulse-nav" className="absolute inset-0 rounded-full bg-white" />}
                    <span className={active ? "relative text-[#101316]" : "relative"}>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </header>

          <section className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {interestStates.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setStateId(item.id)}
                  className="rounded-full px-3 py-2 text-xs font-semibold"
                  style={{
                    background: item.id === state.id ? item.accent : "rgba(255,255,255,.09)",
                    color: item.id === state.id ? "#06100e" : "#a7b0b8"
                  }}
                >
                  {item.cn}
                </button>
              ))}
            </div>
            <div className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs text-[#a7b0b8] backdrop-blur-xl">
              当前：<span className="text-white">{state.label}</span> · {state.signal}
            </div>
          </section>
          {children}
        </div>
      </main>
    </PulseContext.Provider>
  );
}

export function PulseCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[30px] border border-white/14 bg-white/[0.08] p-5 shadow-[0_28px_90px_rgba(0,0,0,.34),inset_0_1px_0_rgba(255,255,255,.16)] backdrop-blur-3xl ${className}`}>{children}</div>;
}
