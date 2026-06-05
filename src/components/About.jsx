const stats = [
  { num: '1+', label: 'Years of experience' },
  { num: '20+', label: 'Projects completed' },
  { num: '10+', label: 'Happy mentors' },
  { num: '5+', label: 'Open source repos' },
]

export default function About() {
  return (
    <section id="about" className="py-14 border-b border-white/8">
      <div className="flex items-center gap-3 mb-9">
        <span className="text-[11px] text-[#888] tracking-widest">01</span>
        <span className="text-xl font-medium">About</span>
      </div>

      <div className="grid grid-cols-2 gap-10 items-start">
        <div className="text-[15px] text-[#888] leading-relaxed space-y-3">
          <p>
            Saya seorang pengembang frontend yang berbasis di Indonesia dengan minat untuk membangun
pengalaman digital yang bersih dan minimalis. Saya senang mengubah masalah yang kompleks
menjadi solusi yang elegan dan intuitif. Dengan latar belakang yang kuat dalam React dan Tailwind CSS, saya fokus pada pembuatan antarmuka yang responsif dan ramah pengguna yang mewujudkan ide-ide.
          </p>
          <p>
           Saat tidak sedang melakukan pemrograman, saya menikmati menjelajahi sistem desain baru, berkontribusi pada proyek open source, dan mempelajari teknologi yang sedang berkembang.
            Saya percaya bahwa pembelajaran berkelanjutan adalah kunci untuk tetap berada di depan dalam industri yang terus berubah ini, dan saya selalu mencari peluang untuk tumbuh dan meningkatkan
             keterampilan saya.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ num, label }) => (
            <div key={label} className="bg-[#1a1a1a] border border-white/8 rounded-xl p-5">
              <div className="text-3xl font-medium leading-none mb-1.5">{num}</div>
              <div className="text-[12px] text-[#888]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
