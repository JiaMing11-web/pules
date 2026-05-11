"use client";

import { motion } from "framer-motion";
import { PulseCard, usePulse } from "@/components/pulse-shell";
import { creatorMetrics, creators } from "@/lib/pulse-data";

export default function CreatorChannelPage() {
  const { state } = usePulse();
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_400px]">
      <section className="glass rounded-[34px] p-7">
        <p className="text-sm text-[#9aa4ad]">创作者频道</p>
        <h2 className="mt-3 text-5xl font-semibold leading-tight">
          关注正在推动 AI 产品、工作流和未来界面的创作者。
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {creators.map((creator) => (
            <article key={creator.handle} className="rounded-[28px] bg-white/8 p-5">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full text-sm font-bold text-white" style={{ background: creator.color }}>
                  {creator.avatar}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{creator.name}</h3>
                  <p className="text-sm text-[#9aa4ad]">{creator.handle}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-[#b3bcc4]">{creator.role}</p>
              <p className="mt-3 text-sm" style={{ color: state.accent }}>信任分 {creator.trust}</p>
            </article>
          ))}
        </div>
      </section>
      <aside className="grid gap-5">
        <PulseCard>
          <p className="text-xs uppercase text-[#9aa4ad]">内容表现</p>
          {creatorMetrics.map(([label, value, delta]) => (
            <div key={label} className="mt-4">
              <div className="mb-2 flex justify-between text-sm"><span>{label}</span><span>{delta}</span></div>
              <div className="h-2 rounded-full bg-white/10">
                <motion.div className="h-full rounded-full" style={{ width: `${value}%`, background: state.accent }} />
              </div>
            </div>
          ))}
        </PulseCard>
        <PulseCard>
          <p className="text-xs uppercase text-[#9aa4ad]">今日建议</p>
          <h3 className="mt-3 text-2xl font-semibold">发布短观点：“Agent 是工作流产品，不是聊天机器人。”</h3>
          <p className="mt-3 text-sm leading-6 text-[#b3bcc4]">该主题在当前兴趣人群中互动提升 24%，适合用 3 分钟短视频切入。</p>
        </PulseCard>
      </aside>
    </div>
  );
}
