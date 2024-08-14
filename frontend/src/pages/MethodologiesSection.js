import React, { useState } from "react";
import images from '../utils/importImages'

const MethodologiesSection = () => {
  const [activeCard, setActiveCard] = useState(1); // Start with card 1 as the big card

  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="w-full flex justify-center p-4">
      <div className="max-w-[1600px] w-full h-[450px] grid grid-cols-1 gap-4 xl:grid-cols-2">
        {/* Big Card (Always on the left side) */}
        <div
          className="col-span-1 bg-blue-300 flex items-center justify-center h-full cursor-pointer"
          onClick={() => setActiveCard(activeCard)}
        >
          {/* <p className="text-white font-bold text-xl">Card {activeCard}</p> */}
          {/* <img class="header-logo-image" src={images[Method_+{activeCard} + .svg]} alt="Logo" style={{height: "70px"}}/> */}
          <img class="header-logo-image" src={images[`Method_${activeCard}.svg`]} alt="Logo" style={{}}/>
        </div>

        {/* Mini Cards Grid (Always on the right side) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          {cards
            .filter((card) => card !== activeCard)
            .map((card) => (
              <div
                key={card}
                className="bg-green-300 flex items-center justify-center cursor-pointer"
                onClick={() => setActiveCard(card)}
              >
                <img class="header-logo-image" src={images[`Method_${card}.svg`]} alt="Logo" style={{}}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologiesSection;