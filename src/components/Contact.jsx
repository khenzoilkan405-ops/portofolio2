import Gmail from './Gmail';
import Github from './Github';
import Instagram from './Instagram';
const links = [
  { icon: Gmail(), label: 'khenzoilkan405@gmail.com', href: 'mailto:khenzoilkan405@gmail.com' },
  { icon: Github(), label: 'https://github.com/khenzoilkan405-ops', href: 'https://github.com/khenzoilkan405-ops' },
  { icon: Instagram(), label: 'instagram.com/khenzo_sj/', href: 'https://www.instagram.com/khenzo_sj/' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-14 border-b border-white/8">
      <div className="flex items-center gap-3 mb-9">
        <span className="text-[11px] text-[#888] tracking-widest">05</span>
        <span className="text-xl font-medium">Contact</span>
      </div>

      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-[28px] font-medium leading-snug mb-3">
            Mari kita bangun sesuatu yang hebat bersama.
          </h3>
          <p className="text-[14px] text-[#888] leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan peluang baru,
               proyek, atau sekadar berbincang tentang teknologi.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {links.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 px-4 py-3.5 bg-[#1a1a1a] border border-white/8 rounded-xl text-[13px] text-[#f0f0f0] no-underline hover:border-white/20 transition-colors"
            >
              <span className="text-[#888] text-base w-5 text-center">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
