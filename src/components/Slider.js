import React, { useState } from "react";

export default function Slider({ slides }) {
  const [active, setActive] = useState(Math.floor(slides.length / 2));

  const nextSlide = () => {
    setActive((p) => (p + 1 < slides.length ? p + 1 : p));
  };

  const prevSlide = () => {
    setActive((p) => (p - 1 >= 0 ? p - 1 : p));
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Slides wrapper */}
      <div className="relative flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: 1000, height: 543.3 }}>
        {slides.map((src, i) => {
          const offset = i - active;

          // responsive scaling
          const spacing = window.innerWidth < 640 ? 100 : window.innerWidth < 1024 ? 150 : 220;
          const scale = offset === 0 ? 1 : Math.max(0, 1 - 0.2 * Math.abs(offset));
          const opacity = Math.abs(offset) > 2 ? 0 : offset === 0 ? 1 : 0.9;
          const zIndex = 100 - Math.abs(offset);
          const rotateY = offset === 0 ? 0 : offset > 0 ? -10 : 10;
          const filter = offset === 0 ? "none" : "blur(2px)";

          return (
            <div
              key={i}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `perspective(1000px) translateX(${offset * spacing}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex,
                opacity,
                filter,
                display: opacity === 0 ? "none" : "block",
              }}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="rounded-xl shadow-lg object-cover"
                style={{
                  width: window.innerWidth < 640 ? "200px" : window.innerWidth < 1024 ? "280px" : "354.75px",
                  height: window.innerWidth < 640 ? "300px" : window.innerWidth < 1024 ? "430px" : "543.3px",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Circles / Controls */}
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={prevSlide}
          disabled={active === 0}
          className="focus:outline-none"
        >
          <div
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white"
            style={{ opacity: active > 0 ? 0.2 : 0 }}
          />
        </button>

        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white opacity-100" />

        <button
          onClick={nextSlide}
          disabled={active === slides.length - 1}
          className="focus:outline-none"
        >
          <div
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white"
            style={{ opacity: active < slides.length - 1 ? 0.2 : 0 }}
          />
        </button>
      </div>
    </div>
  );
}
