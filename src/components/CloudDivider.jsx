export default function ShapeDivider({ opacity = "0.5" }) {
  return (
    <div className="relative w-full overflow-hidden pointer-events-none">
      <svg
        xmlns="http://w3.org"
        viewBox="0 0 35.28 2.17"
        preserveAspectRatio="none"
        className="block w-full z-10 
                   h-22.5 
                   md:h-22.5 
                   lg:h-31.25 
                   2xl:h-[calc(2vw+125px)]"
      >
        {/* gradient that replicates gradient from app.jsx*/}
        <defs>
          <linearGradient
            id="tailwindPageGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#45556c" /> {/* slate-600 */}
            <stop offset="100%" stopColor="#94a3b8" /> {/* slate-400 */}
          </linearGradient>
        </defs>

        {/* applying gradient with fill="url(#tailwindPageGradient)" */}
        {/* first layer (Solid) */}
        <path
          d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z"
          fill="url(#tailwindPageGradient)"
        />
        {/* second layer (Semi-transparent) */}
        <path
          d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
          opacity={opacity}
          fill="url(#tailwindPageGradient)"
        />
        {/* third layer (Semi-transparent) */}
        <path
          d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z"
          opacity={opacity}
          fill="url(#tailwindPageGradient)"
        />
      </svg>
    </div>
  );
}
