import TeachIcon from "./Teach-icon.jsx";
export default function Experience() {
  return (
    <section id="experience" className="py-14 border-b border-zinc-800 text-white">
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-[11px] text-zinc-500 tracking-widest font-mono">03</span>
        <span className="text-xl font-bold tracking-tight">Experience</span>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-5">
          <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
            <TeachIcon />
          </div>

          <div>
            <h3 className="text-sm font-mono font-medium">Al-Quran</h3>
            <p className="text-xs font-mono text-zinc-500">Teaching Assistant</p>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Studying Qur'an recitation, tajwid, and memorization while participating in religious learning activities and community events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}