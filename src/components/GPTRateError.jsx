const GPTRateError = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(229,9,20,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black" />
      <div className="absolute inset-0 shadow-[inset_0_0_160px_60px_rgba(0,0,0,0.85)]" />
      <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(229,9,20,0.2)]">
          <span className="text-3xl">🎬</span>
        </div>

        <p className="text-xs font-semibold tracking-[0.2em] text-red-500 uppercase mb-4">
          Temporarily unavailable
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          We can't load recommendations right now
        </h2>

        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md mx-auto">
          Our recommendation service is experiencing higher traffic than usual.
          This is temporary — please try again in a moment.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-7 py-3.5 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            Try Again
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-600">
          Error code: 429 · Rate limit exceeded
        </p>
      </div>
    </div>
  );
};

export default GPTRateError;
