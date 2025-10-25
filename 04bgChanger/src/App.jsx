import { useState } from "react";
import Buttons from "./components/Buttons";
import backgrounds from "./data/bg";

function App() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const currentBg =
    currentIndex === -1
      ? {
          name: "Background Changer",
          text: "Press the buttons below to change the background",
          url: "https://images.unsplash.com/photo-1444084316824-dc26d6657664?auto=format&fit=crop&w=1470&q=80",
        }
      : backgrounds[currentIndex];

  return (
    <div
      key={currentIndex}
      className="relative w-screen h-screen overflow-hidden text-white transition-all flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${currentBg.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.8)",
      }}
    >

      {/* text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {currentBg.name}
        </h1>
        <p className="text-xl md:text-2xl">{currentBg.text}</p>
      </div>

      {/* tombol float */}
      <Buttons
        backgrounds={backgrounds}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default App;
