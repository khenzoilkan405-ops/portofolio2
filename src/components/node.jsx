import nodeLogo from "../assets/node.png";
export default function Node() {
  return (
    <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
      <img src={nodeLogo} alt="Node Logo" className="w-full h-full p-1" />
    </div>
  );
}