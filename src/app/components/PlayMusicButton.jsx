"use client";
import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function PlayMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleMusic}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-500 transition-colors duration-200 shadow-lg"
      >
        {isPlaying ? (
          <FaVolumeUp className="text-white text-2xl" />
        ) : (
          <FaVolumeMute className="text-white text-2xl" />
        )}
      </button>
      <span className="text-white text-sm font-roboto-mono">"8 Bit Win" by HeatleyBros</span>
      <audio ref={audioRef} loop>
        <source src="/sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}