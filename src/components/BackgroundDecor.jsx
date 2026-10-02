const BackgroundDecor = () => {
  return (
    <>
      {/* Graph Paper Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundColor: "#fffdfd",
          backgroundImage: `
            linear-gradient(rgba(244, 114, 182, 0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 114, 182, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[100px]" />

      {/* Pink Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose-200/30 blur-[100px]" />

      {/* Violet Glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-200/30 blur-[100px]" />

      {/* Floating Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[18%] animate-bounce text-xl text-rose-300/80 [animation-duration:4s]">
          ♡
        </span>

        <span className="absolute left-[18%] top-[70%] animate-pulse text-sm text-violet-300/80">
          ✦
        </span>

        <span className="absolute right-[10%] top-[22%] animate-pulse text-lg text-pink-300/80">
          ✧
        </span>

        <span className="absolute bottom-[22%] right-[18%] animate-bounce text-xl text-rose-300/80 [animation-duration:5s]">
          ♡
        </span>

        <span className="absolute left-[50%] top-[10%] text-xs text-pink-300/70">
          ✦
        </span>

        <span className="absolute bottom-[12%] right-[45%] text-xs text-violet-300/70">
          ✧
        </span>
      </div>

      {/* Soft Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(244,114,182,0.06)_100%)]" />
    </>
  );
};

export default BackgroundDecor;
