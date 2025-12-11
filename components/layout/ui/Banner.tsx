import React from "react";

function Banner() {
  return (
    <div
      className="overflow-hidden border-b border-(--deg-gray-light) bg-(--deg-lime) py-1"
      aria-hidden="true"
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="mx-8 text-xs font-bold uppercase tracking-wider text-(--deg-black)"
          >
            DEV EN GALÈRE • CODE • BLOG • VIDÉOS • BONS PLANS •
          </span>
        ))}
      </div>
    </div>
  );
}

export default Banner;
