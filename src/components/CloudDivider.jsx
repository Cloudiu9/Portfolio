export default function ShapeDivider({ opacity = "0.5" }) {
  return (
    <div className="max-w-full">
      <style>{`
        @keyframes cloudDrift1 {
          from { transform: translateX(2%); }
          to   { transform: translateX(-5%); }
        }
        @keyframes cloudDrift2 {
          from { transform: translateX(1%); }
          to   { transform: translateX(6%); }
        }
        @keyframes cloudDrift3 {
          from { transform: translateX(-1%); }
          to   { transform: translateX(-6%); }
        }
        .cloud-l1 { animation: cloudDrift1 12s ease-in-out infinite alternate; }
        .cloud-l2 { animation: cloudDrift2 9s  ease-in-out infinite alternate; }
        .cloud-l3 { animation: cloudDrift3 8s ease-in-out infinite alternate; }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35.28 2.17"
        preserveAspectRatio="none"
        className="block w-full z-10
                   h-22.5
                   md:h-22.5
                   lg:h-31.25
                   2xl:h-[calc(2vw+125px)]"
      >
        <defs>
          <linearGradient
            id="tailwindPageGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#45556c" />
            <stop offset="100%" stopColor="#94a3c9" />
          </linearGradient>
        </defs>

        <path
          className="cloud-l1"
          d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z"
          fill="url(#tailwindPageGradient)"
        />
        <path
          className="cloud-l2"
          d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
          opacity={opacity}
          fill="url(#tailwindPageGradient)"
        />
        <path
          className="cloud-l3"
          d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z"
          opacity={opacity}
          fill="url(#tailwindPageGradient)"
        />
      </svg>
    </div>
  );
}
