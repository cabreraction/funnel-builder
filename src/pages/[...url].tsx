// external dependencies
import { Geist, Geist_Mono } from "next/font/google";

// internal modules
import { funnelMock } from "./mocks";
import { FunnelBuilder } from "@/features/funnel-builder";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Funnel() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-full min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <FunnelBuilder brand={'Hypertrophy Program'} components={funnelMock} />
    </div>
  );
}