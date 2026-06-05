export default function Button({ children, onClick, variant = 'primary' }) {
  const baseClasses = 'px-5 py-2.5 text-[13px] font-medium rounded-md transition-all'
  const variants = {
    primary: 'bg-[#f0f0f0] text-black hover:opacity-85',
    secondary: 'bg-transparent text-[#888] border border-white/8 hover:border-white/25 hover:text-[#f0f0f0]',
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
