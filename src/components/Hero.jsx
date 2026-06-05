import Button from './Button.jsx'
export default function Hero() {
  return (
    <section id="Hero" className="py-20 border-b border-white/8">
      {/* Status badge */}
      <div className="flex items-center gap-2 text-[11px] text-[#888] tracking-widest uppercase mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
        Available for work
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-medium leading-tight tracking-tight mb-3">
        Hi, I'm{' '}
        <span className="relative inline-block text-[#f0f0f0]">
          Khenzo Ilkan
          {/* Garis aksen di bawah nama */}
          <span className="absolute left-0 -bottom-1 w-3/5 h-0.5 rounded-sm bg-linear-to-r from-[#f0f0f0] to-transparent" />
        </span>
        <br />
        <span className="text-[#888]">Frontend Developer</span>
      </h1>

      <p className="text-base text-[#888] max-w-lg leading-relaxed mt-5 mb-9">
        Saya seorang pengembang frontend yang bersemangat dengan bakat dalam menciptakan pengalaman web yang indah dan fungsional. Dengan fondasi yang kuat dalam React dan
         Tailwind CSS, saya mengkhususkan diri dalam membangun antarmuka
          yang responsif dan ramah pengguna yang mewujudkan ide-ide.
      </p>

      <div className="flex gap-3">
        <Button variant="primary" onClick={() => window.location.href = '#projects'}>
          View My Work
        </Button>
        <Button variant="secondary" onClick={() => window.location.href = '#contact'}>
          Contact Me
        </Button>
      </div>
    </section>
  )
}
