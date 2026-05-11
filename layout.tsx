import type { Metadata } from "next";
import { PulseShell } from "@/components/pulse-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulse - AI 原生兴趣流平台",
  description: "一个由兴趣状态驱动的 AI 原生内容平台概念项目。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <PulseShell>{children}</PulseShell>
      </body>
    </html>
  );
}
