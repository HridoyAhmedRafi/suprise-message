import Link from "next/link";

import BackgroundDecor from "../components/BackgroundDecor";

const HomePage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fffdfd] px-6 py-12">
      <BackgroundDecor />

      <section className="relative z-10 w-full max-w-xl text-center">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-pink-100/40 [animation-duration:3s]" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 shadow-[0_12px_40px_rgba(244,114,182,0.15)]">
            <span className="text-5xl">💌</span>
          </div>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
          JUST A LITTLE SOMETHING
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-gray-900 sm:text-5xl">
          Wait...
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          I made something for you.
          <br />
          But there&apos;s one tiny problem...
        </p>

        <p className="mt-2 text-sm text-gray-400">
          you have to find it. <span className="text-rose-400">♡</span>
        </p>

        {/* Open Your Gift */}
        <Link
          href="/gift"
          className="group relative mt-9 inline-flex cursor-pointer animate-[gentleFloat_3s_ease-in-out_infinite] items-center gap-3 overflow-hidden rounded-full border border-rose-300 bg-gradient-to-r from-white to-rose-50 px-7 py-3.5 text-sm font-semibold text-rose-500 shadow-[0_10px_35px_rgba(244,114,182,0.18)] transition-all duration-300 hover:animate-none hover:-translate-y-1 hover:scale-[1.05] hover:border-rose-400 hover:shadow-[0_16px_45px_rgba(244,114,182,0.28)] active:translate-y-0 active:scale-95"
        >
          {/* Shine effect */}
          <span className="pointer-events-none absolute inset-y-0 -left-20 w-16 -skew-x-12 bg-white/70 transition-all duration-700 group-hover:left-[120%]" />

          <span className="relative text-base transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
            💗
          </span>

          <span className="relative">Open Your Gift</span>

          <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </Link>

        <p className="mt-3 animate-pulse text-xs text-rose-300">
          Click to open
        </p>
      </section>
    </main>
  );
};

export default HomePage;