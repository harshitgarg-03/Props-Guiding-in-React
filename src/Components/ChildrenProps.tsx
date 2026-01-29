import React from "react";

function ChildrenProps() {
  return (
    <div className={` bg-white p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-2`}>
        <h1 className={`text-4xl text-black mb-3 font-bold`}>Children Props</h1>
        <p className={`text-gray-500 font-semibold text-xl`}>
          The children prop allows you to pass TSX elements or components as
          childrens to other components, enabling component composition.
        </p>
      </div>
    </div>
  );
}

export default ChildrenProps;
