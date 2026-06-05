import capcutLogo from "../assets/Capcut.png";
export default function Capcut() {
  return (
    <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
      <img src={capcutLogo} alt="Capcut Logo" className="w-full h-full p-1" />
    </div>
  );
}