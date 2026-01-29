import React from "react";

interface ButtonsProps {
  text : string;
  color : string;
  size : string;
  onClick : () =>  void;
  Disabled : string;
}

function Buttons({ text, color, size, onClick, Disabled } : ButtonsProps): void {}
function BasicProps() {
  return (
    <div className={`space-x-2 space-y-2`}>
      <div>
        <h1 className={`text-4xl text-black font-bold`}>Basic Props</h1>
        <p className={`text-gray-500`}>
          Props are arguments passed to React components. They allow you to pass
          data from the parent to child component
        </p>
      </div>

      <h3 className={`font-bold text-2xl text-black`} >Different Colors</h3>
      <div>

      </div>
    </div>
  );
}

export default BasicProps;
