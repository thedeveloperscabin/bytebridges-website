export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 100 100"
        className="text-indigo-600 dark:text-indigo-400"
        fill="currentColor"
      >
        {/* Left Pillar */}
        <rect x="20" y="30" width="12" height="40" rx="3" />
        
        {/* Right Pillar */}
        <rect x="68" y="30" width="12" height="40" rx="3" />
        
        {/* Bridge Arc */}
        <path
          d="M26 40 Q50 10 74 40"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-xl font-bold tracking-wide">
        <span className="text-black dark:text-white">Binary</span>
        <span className="text-indigo-600 dark:text-indigo-400">
          Base
        </span>
      </span>
    </div>
  );
}