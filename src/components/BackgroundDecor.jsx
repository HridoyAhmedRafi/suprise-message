const BackgroundDecor = () => {
  return (
    <>
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose-100/50 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-100/50 blur-[100px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-50/50 blur-[100px]" />

      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[18%] animate-bounce text-xl text-rose-200">
          ♡
        </span>

        <span className="absolute left-[18%] top-[70%] animate-pulse text-sm text-violet-200">
          ✦
        </span>

        <span className="absolute right-[10%] top-[22%] animate-pulse text-lg text-pink-200">
          ✧
        </span>

        <span className="absolute bottom-[22%] right-[18%] animate-bounce text-xl text-rose-200">
          ♡
        </span>

        <span className="absolute left-[50%] top-[10%] text-xs text-pink-200">
          ✦
        </span>

        <span className="absolute bottom-[12%] right-[45%] text-xs text-violet-200">
          ✧
        </span>
      </div>
    </>
  );
};

export default BackgroundDecor;