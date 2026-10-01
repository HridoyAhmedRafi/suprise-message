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
    <div className="relative">
      {/* Back button */}
      <button
        type="button"
        onClick={() => {
          console.log("BACK CLICKED");
          onBack();
        }}
        className="absolute left-0 top-0 z-50 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-rose-400"
      >
        ← Back
      </button>

      <p className="pt-14 text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
        ♡ {number}
      </p>

      <div className="mt-8">
        <p className="text-2xl font-medium leading-10 text-gray-800 sm:text-3xl">
          {title}
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          {message}
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="mt-9 inline-flex items-center gap-3 rounded-full border border-rose-100 bg-white px-6 py-3 text-sm text-rose-400"
      >
        <span>{buttonText}</span>
        <span>{icon}</span>
      </button>
    </div>
  );
};

export default GiftStep;