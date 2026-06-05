import teachicon from "../assets/Teach-icon.png";
export default function TeachIcon() {
  return (
    <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
      <img src={teachicon} alt="Teach Icon" className="w-full h-full p-1" />
    </div>
  );
}