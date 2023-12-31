import React, { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";


function App() {
  const [newYearMessage, setNewYearMessage] = useState(["2023 ended on"]);

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="text-white text-4xl font-bold z-50">
        <Typewriter
  words={newYearMessage}
  loop={false}
  cursorStyle={"✨"}
  cursor
  speed={100} // Adjust the speed value as needed
/>

        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage(["Selamat", "Tahun", "Baru", "HNY 2024"])
            }
          />
        </div>

      </div>
    </>
  );
}

export default App;
