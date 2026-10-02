const FinalMessage = ({ onBack }) => {
  return (
    <div className="relative animate-in fade-in zoom-in-95 duration-1000">
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="group absolute left-0 top-0 z-20 inline-flex cursor-pointer items-center gap-2 rounded-full border border-rose-200 bg-white/90 px-4 py-2 text-sm font-medium text-rose-400 shadow-[0_6px_20px_rgba(244,114,182,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500 hover:shadow-[0_8px_25px_rgba(244,114,182,0.16)] active:scale-95"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>

        <span>Back</span>
      </button>

      <div className="pt-14">
        <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-pink-100/40 [animation-duration:3s]" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 shadow-[0_12px_40px_rgba(244,114,182,0.15)]">
            <span className="animate-pulse text-4xl">💗</span>
          </div>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
          SO... HERE&apos;S THE THING
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-gray-900 sm:text-5xl">
          You deserve to be appreciated.
        </h1>

        <div className="my-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200" />

          <span className="text-sm text-rose-300">♡</span>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200" />
        </div>

        <p className="text-lg leading-8 text-gray-500">
          So keep being yourself,
          <br />
          keep smiling,
          <br />
          and never forget how wonderful you are.
        </p>

        <p className="mt-8 text-sm leading-7 text-gray-400">
          Anyway...
          <br />
          just wanted you to know that.{" "}
          <span className="text-rose-400">♡</span>
        </p>

        <div className="mt-9">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/80 px-5 py-2.5 text-sm font-medium text-rose-400 shadow-[0_8px_30px_rgba(244,114,182,0.08)] backdrop-blur-sm">
            Made with HRIDOY...
            <span>🤍</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinalMessage;