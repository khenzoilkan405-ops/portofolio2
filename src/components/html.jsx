import htmlLogo from "../assets/html.png";
export default function Html() {
  return (
    <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
      <img src={htmlLogo} alt="HTML Logo" className="w-full h-full p-1" />
    </div>
  );
}