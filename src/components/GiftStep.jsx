const GiftStep = ({
  number,
  title,
  message,
  buttonText,
  icon = "♡",
  onNext,
  onBack,
}) => {
  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-6 duration-700">
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

      <p className="pt-14 text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
        ♡ {number}
      </p>

      <div className="mt-8">
        <p className="text-2xl font-medium leading-10 tracking-tight text-gray-800 sm:text-3xl">
          {title}
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          {message}
        </p>
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        className="group relative mt-9 inline-flex cursor-pointer animate-[gentleFloat_3s_ease-in-out_infinite] items-center gap-3 overflow-hidden rounded-full border border-rose-300 bg-gradient-to-r from-white to-rose-50 px-7 py-3.5 text-sm font-semibold text-rose-500 shadow-[0_8px_30px_rgba(244,114,182,0.14)] transition-all duration-300 hover:animate-none hover:-translate-y-1 hover:scale-[1.05] hover:border-rose-400 hover:shadow-[0_14px_38px_rgba(244,114,182,0.22)] active:translate-y-0 active:scale-95"
      >
        {/* Shine */}
        <span className="pointer-events-none absolute inset-y-0 -left-16 w-12 -skew-x-12 bg-white/70 transition-all duration-700 group-hover:left-[120%]" />

        <span className="relative">{buttonText}</span>

        <span className="relative text-base transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110">
          {icon}
        </span>
      </button>

      <p className="mt-3 animate-pulse text-xs text-rose-300">
        Click to continue
      </p>
    </div>
  );
};

export default GiftStep;