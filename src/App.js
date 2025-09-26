import React from "react";
import Slider from "./components/Slider";
import "./index.css";

function App() {
  const slides = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#5E5E5E] to-[#5C5C5C] p-4">
      <Slider slides={slides} />
    </div>
  );
}

export default App;
