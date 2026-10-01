"use client";

import { useState } from "react";

import BackgroundDecor from "../../components/BackgroundDecor";
import GiftStep from "../../components/GiftStep";
import FinalMessage from "../../components/FinalMessage";

const GiftPage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const backStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fffdfd] px-6 py-12">
      <BackgroundDecor />

      <section className="relative z-10 w-full max-w-xl text-center">
        {/* Step 0 */}
        {step === 0 && (
          <div className="animate-in fade-in zoom-in duration-700">
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

            <button
              type="button"
              onClick={nextStep}
              className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-full border border-rose-200 bg-white px-7 py-3.5 text-sm font-medium text-rose-400 shadow-[0_10px_35px_rgba(244,114,182,0.14)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-pink-300 hover:text-rose-500 hover:shadow-[0_15px_45px_rgba(244,114,182,0.25)] active:scale-95"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-pink-200/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative text-base transition-all duration-300 group-hover:scale-125">
                💗
              </span>

              <span className="relative">Find it</span>

              <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <GiftStep
            number="01"
            title={
              <>
                There&apos;s something
                <br />
                For You
              </>
            }
            message={
              <>
                A little reminder
                <br />
                that you are genuinely appreciated. ♡
              </>
            }
            buttonText="See next"
            icon="♡"
            onNext={nextStep}
            onBack={backStep}
          />
        )}

        {/* Step 2 */}
        {step === 2 && (
          <GiftStep
            number="02"
            title="You are beautiful."
            message={
              <>
                And believe it,
                <br />
                you really are.
                <br />
                Never forget that. ♡
              </>
            }
            buttonText="One more thing"
            icon="✨"
            onNext={nextStep}
            onBack={backStep}
          />
        )}

        {/* Step 3 */}
        {step === 3 && (
          <GiftStep
            number="03"
            title="You are also a good person."
            message={
              <>
                Your kindness,
                <br />
                your little moments,
                <br />
                and the way you treat people
                <br />
                make you more special than you think.
              </>
            }
            buttonText="Okay... last one"
            icon="💗"
            onNext={nextStep}
            onBack={backStep}
          />
        )}

        {/* Final Message */}
        {step === 4 && <FinalMessage onBack={backStep} />}
      </section>
    </main>
  );
};

export default GiftPage;