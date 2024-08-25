import React, { useState } from "react";
import images from '../utils/importImages'

const MethodologiesSection = () => {
  const [activeCard, setActiveCard] = useState(1); // Start with card 1 as the big card

  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="w-auto flex justify-center p-4">
      <div className="max-w-[1600px] w-auto h-[450px] grid grid-cols-1 gap-4 xl:grid-cols-2">
        {/* Big Card (Always on the left side) */}
        <div
          className="col-span-1 bg-blue-300 flex items-center justify-center h-full cursor-pointer"
          onClick={() => setActiveCard(activeCard)}
        >
          {/* <p className="text-white font-bold text-xl">Card {activeCard}</p> */}
          {/* <img class="header-logo-image" src={images[Method_+{activeCard} + .svg]} alt="Logo" style={{height: "70px"}}/> */}
          <img class="header-logo-image" src={images[`Method_${activeCard}.png`]} alt="Logo" style={{}}/>
        </div>

        {/* Mini Cards Grid (Always on the right side) */}
        <div className="w-full my-auto h-auto">
          <div className="grid grid-cols-1 grid-rows-1 gap-1 w-full">
            <div className='h-auto max-w-[1000px]'>
                <img className='w-auto h-[70px]' src={images['METHODOLOGIES.svg']} alt="" />
                <p className='text-xl font-extrabold text-[#FBFCFF] mt-[-48px] ml-[5px] mb-[50px]'>Methodologies I've Utilized</p>
            </div>
            {cards
              .map((card) => (
                <div
                  key={card}
                  className="bg-green-300 flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCard(card)}
                >
                  <p>hehe</p>
                  {/* <img class="header-logo-image" src={images[`Method_${card}.svg`]} alt="Logo" style={{}}/> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologiesSection;