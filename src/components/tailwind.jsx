import tailwindcss from "../assets/tailwind.png";
export default function Tailwind() {
  return (
    <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
      <img src={tailwindcss} alt="Tailwind CSS Logo" className="w-full h-full p-1" />
    </div>
  );
}