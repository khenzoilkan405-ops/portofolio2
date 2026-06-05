import canvaLogo from "./Canva";
import figmaLogo from "./Figma";
import Capcut from "./Capcut";
import Tailwind from "./tailwind";
import React from "./react";
import Js from "./js";
import Node from "./node";
import Html from "./html";
import Css from "./css";

const skills = [
  { icon: React(), name: 'React JS', level: 'Advanced' },
  { icon: Tailwind(), name: 'Tailwind CSS', level: 'Advanced' },
  { icon: Js(), name: 'JavaScript', level: 'Advanced' },
  { icon: Node(), name: 'Node JS', level: 'Intermediate' },
  { icon: Html(), name: 'HTML', level: 'Advanced' },
  { icon: Css(), name: 'CSS', level: 'Advanced' },
  { icon: Capcut(), name: 'Capcut', level: 'Advanced' },
  { icon: figmaLogo(), name: 'Figma', level: 'Intermediate' },
  { icon: canvaLogo(), name: 'Canva', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-b border-white/8">
      <div className="flex items-center gap-3 mb-9">
        <span className="text-[11px] text-[#888] tracking-widest">02</span>
        <span className="text-xl font-medium">Skills</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {skills.map(({ icon, name, level }) => (
          <div
            key={name}
            className="flex items-center gap-3 bg-[#1a1a1a] border border-white/8 rounded-lg p-4 hover:border-white/20 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-lg shrink-0">
              {icon}
            </div>
            <div>
              <div className="text-[13px] font-medium">{name}</div>
              <div className="text-[11px] text-[#888] mt-0.5">{level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
