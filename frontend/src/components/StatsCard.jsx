function StatsCard({ title, value, icon }) {
  return (
    <div className="group bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-sm text-slate-400 font-medium tracking-wide">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">

          {icon}

        </div>

      </div>

      <div className="mt-6 h-px bg-slate-800"></div>

      <p className="mt-4 text-sm text-slate-500">
        Projects overview
      </p>

    </div>
  );
}

export default StatsCard;