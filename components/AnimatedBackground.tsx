export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 dot-grid opacity-[0.08]" />
      <div className="absolute top-[-10%] left-[-10%] w-[42rem] h-[42rem] rounded-full bg-violet-600/25 blur-[130px] animate-blob" />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[38rem] h-[38rem] rounded-full bg-fuchsia-500/15 blur-[130px] animate-blob"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="absolute top-[35%] right-[15%] w-[26rem] h-[26rem] rounded-full bg-purple-700/20 blur-[120px] animate-blob"
        style={{ animationDelay: '-13s' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />
    </div>
  );
}
