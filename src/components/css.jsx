import cssLogo from "../assets/css.png";
export default function Css() {
  return (
    <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
      <img src={cssLogo} alt="CSS Logo" className="w-full h-full p-1" />
    </div>
  );
}