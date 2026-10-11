import Link from "next/link";

const Loading = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#faf8f4] px-6 py-8 text-[#27231f] sm:px-10 sm:py-10">
      <style>{`
        @keyframes loader-drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @keyframes loader-orbit {
          to { transform: rotate(360deg); }
        }
        @keyframes loader-progress {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(260%); }
        }
        .loader-drift { animation: loader-drift 2.8s ease-in-out infinite; }
        .loader-orbit { animation: loader-orbit 8s linear infinite; }
        .loader-progress { animation: loader-progress 1.7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .loader-drift, .loader-orbit, .loader-progress { animation: none; }
        }
      `}</style>

      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link href="/" aria-label="Omni Mall home" className="text-xl font-bold tracking-[-0.06em]">
          omni<span className="text-[#e66b3d]">.</span>
        </Link>
        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8e8982] sm:block">
          A little something for everyone
        </span>
      </div>

      <section
        className="relative flex w-full max-w-md flex-col items-center text-center"
        aria-live="polite"
        aria-busy="true"
      >
        <div className="relative mb-10 flex h-48 w-48 items-center justify-center">
          <div className="absolute inset-2 rounded-full border border-dashed border-[#e8ddd2] loader-orbit motion-reduce:animate-none" />
          <span className="absolute left-3 top-9 h-2.5 w-2.5 rounded-full bg-[#e66b3d]/70" />
          <span className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-[#d8b878]" />
          <div className="loader-drift relative flex h-32 w-32 items-center justify-center rounded-full bg-[#f1e9df] shadow-[0_18px_45px_-25px_rgba(106,76,47,0.4)] motion-reduce:animate-none">
            <svg
              viewBox="0 0 72 72"
              fill="none"
              aria-hidden="true"
              className="h-16 w-16 text-[#d9683e]"
            >
              <path
                d="M17 27h38l3 34H14l3-34Z"
                fill="currentColor"
                fillOpacity=".12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M26 29v-7a10 10 0 0 1 20 0v7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M29 43c2.1 2.4 4.4 3.6 7 3.6s4.9-1.2 7-3.6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9683e]">
          Good things are on their way
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          Finding your favorites
        </h1>
        <p className="mt-3 max-w-xs text-sm leading-6 text-[#817b73]">
          Just a moment while we get the good stuff ready for you.
        </p>

        <div
          className="mt-9 h-1 w-40 overflow-hidden rounded-full bg-[#e9e2d9]"
          role="progressbar"
          aria-label="Loading"
        >
          <div className="loader-progress h-full w-1/3 rounded-full bg-[#e66b3d] motion-reduce:animate-none" />
        </div>
        <span className="sr-only">Loading your shopping experience</span>
      </section>

      <div className="flex w-full max-w-7xl items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#a19a91]">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
          <path
            d="M8 1.5 13 3.5v4c0 3.1-2.1 5.4-5 7-2.9-1.6-5-3.9-5-7v-4l5-2Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path d="m5.8 7.8 1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        A smooth and secure shopping experience
      </div>
    </main>
  );
};

export default Loading;
