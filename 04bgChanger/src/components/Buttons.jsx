export default function Buttons({ backgrounds, currentIndex, setCurrentIndex }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/30 backdrop-blur-sm p-3 rounded-xl shadow-lg z-50">
      {backgrounds.map((bg, i) => (
        <button
          key={bg.name}
          onClick={() => setCurrentIndex(i)}
          className={`px-4 py-2 rounded-md font-semibold text-sm md:text-base transition-all duration-200 ${
            bg.color
          } ${
            currentIndex === i
              ? "scale-110 ring-2 ring-white/70"
              : "opacity-90 hover:opacity-100"
          }`}
        >
          {bg.name}
        </button>
      ))}
    </div>
  );
}
