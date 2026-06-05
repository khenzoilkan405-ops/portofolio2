import Logo from "./logo.jsx"

export default function Navbar() {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact',]

  return (
   <nav className="flex justify-between items-center py-5 border-b border-white/8 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 ">
      <div className="flex items-center gap-2">
        <a href="#Hero" className="flex items-center gap-2 no-underline">
      <Logo/>
      <span className="text-sm font-medium tracking-widest">Khenzo.dev </span>
    </a>
      </div>

      <div className="flex gap-7">
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[13px] text-[#888] hover:text-[#f0f0f0] transition-colors duration-200 no-underline"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}
