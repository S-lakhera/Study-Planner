export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div className="relative w-10 h-10 bg-[#111] border border-[#2a2a2a] rounded-lg flex items-center justify-center shrink-0">
        <svg width="28" height="25" viewBox="0 0 22 20" fill="none">
          {/* Left page */}
          <rect x="0" y="0" width="10" height="14" rx="1.5" fill="#4f46e5"/>
          {/* Right page */}
          <rect x="10" y="0" width="10" height="14" rx="1.5" fill="#6366f1"/>
          {/* Spine */}
          <line x1="10" y1="0" x2="10" y2="14" stroke="#111" strokeWidth="1.2"/>
          {/* Lines */}
          <line x1="1.5" y1="4"   x2="8.5" y2="4"   stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
          <line x1="1.5" y1="6.5" x2="8.5" y2="6.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.45"/>
          <line x1="1.5" y1="9"   x2="8.5" y2="9"   stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.3"/>
        </svg>
        {/* Check badge */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M1.5 4.5 L3.5 6.5 L7.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none gap-1">
        <span className="text-white font-bold md:text-xl tracking-wider" >
          Study-Planner
        </span>
      </div>
    </div>
  );
}