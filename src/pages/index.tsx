import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex justify-center items-center w-full bg-black min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="text-3xl lg:text-5xl text-white">
        FUNNEL BUILDER
      </div>
    </div>
  );
}
