import React, { useState } from "react";

interface ButtonsProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
  Disabled?: Boolean;
}

function Buttons({ text, color, size, onClick, Disabled }: ButtonsProps) {
  return (
    <button
      className={`${color? color : "bg-sky-400" } ${size? `${size} flex items-center justify-center` : "py-2 px-6" }
       text-lg font-bold ${Disabled? "opacity-50 cursor-not-allowed" :"cursor-pointer" } flex gap-4 rounded-xl `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [Count, setCount] = useState<number>(0);
  console.log(Count);
  
  return (
    <div className={` bg-white p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-2`}>
        <h1 className={`text-4xl text-black mb-3 font-bold`}>Basic Props</h1>
        <p className={`text-gray-500 font-semibold text-xl`}>
          Props are arguments passed to React components. They allow you to pass
          data from the parent to child component
        </p>
      </div>

      <h3 className={`font-bold text-2xl mb-3 text-black`}>Different Colors</h3>
      <div className={`flex gap-4 mb-6`}>
        <Buttons text="Primary Button" onClick={() => setCount(Count+1)} />
        <Buttons text="Secondary Button" color="bg-gray-600" onClick={() => setCount(Count+1)} />
        <Buttons text="Danger Button" color="bg-red-600" onClick={() => setCount(Count+1)} />
        <Buttons text="Success Button" color="bg-green-600" onClick={() => setCount(Count+1)} />
      </div>

      <h3 className={`font-bold text-2xl mb-3 text-black`}>Different Size</h3>
      <div className={`flex gap-4 mb-6`}>
        <Buttons text="Small" size="w-25 h-12" onClick={() => setCount(Count+1)} />
        <Buttons text="Medium (Default)" size="w-50 h-16"  onClick={() => setCount(Count+1)} />
        <Buttons text="Large" size="w-60 h-20" onClick={() => setCount(Count+1)} />
      </div>

      <h3 className={`font-bold text-2xl mb-3 text-black`}>Disabled State</h3>
      <div className={`flex gap-4 mb-6`}>
        <Buttons text="Enabled Button" onClick={() => setCount(Count+1)} />
        <Buttons text="Disabled Button" Disabled={true} />
      </div>

      <div className={`px-8 py-4 bg-sky-200 rounded-2xl font-sans text-xl text-gray-700`}>
        <h2>Click Count : {Count}</h2>
      </div>
    </div>
  );
}

export default BasicProps;
