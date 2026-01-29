import React from "react";

function ComplexProps() {
  return (
    <div className={` bg-white p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-2`}>
        <h1 className={`text-4xl text-black mb-3 font-bold`}>
          Complex/Nested Props
        </h1>
        <p className={`text-gray-500 font-semibold text-xl`}>
          Complex props allows you to pass nested objects and functions,
          enabling sophisticated component configuration and interactions.
        </p>
      </div>
    </div>
  );
}

export default ComplexProps;
