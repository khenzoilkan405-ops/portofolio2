console.log("token:", import.meta.env.VITE_GITHUB_TOKEN)
import { useEffect, useState } from "react";

const FEATURED_REPOS = ["Poertofolio", "Lasles", "club5"];

const LANG_COLOR = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python: "bg-blue-700",
  HTML: "bg-orange-500",
  CSS: "bg-purple-700",
};

export default function Projects() {
  const [repos, setRepos] = useState([]);

useEffect(() => {
  Promise.all(
    ["Poertofolio", "Lasles", "club5"].map(async (name) => {
      const res = await fetch(
        `https://api.github.com/repos/khenzoilkan405-ops/${name}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );

      const data = await res.json();
      console.log(name, data);

      return data;
    })
  )
    .then((data) => {
      setRepos(data.filter((repo) => repo.id));
    })
    .catch(console.error);
}, []);

  return (
    <section id="projects" className="py-14 border-b border-zinc-800 text-white">
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-[11px] text-zinc-500 tracking-widest font-mono">04</span>
        <span className="text-xl font-bold tracking-tight">Projects</span>
      </div>

      <div className="grid md:grid-cols-3 divide-x divide-y divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-5 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-200 flex flex-col gap-2"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-mono font-medium break-word">{repo.name}</h3>
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1 shrink-0">
                ★ {repo.stargazers_count}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed flex-1">
              {repo.description || "no description available."}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 mt-auto">
              <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                <span className={`w-2 h-2 rounded-full ${LANG_COLOR[repo.language] ?? "bg-zinc-600"}`} />
                {repo.language ?? "unknown"}
              </span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}