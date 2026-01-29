import React from "react";

type Layouttpes = "vertical" | "horizontal" | "grid";

interface Props {
  layout?: Layouttpes;
  children? : any;
  vertical? : string;
  horizontal? : string;
  grid? : string;

}

function Card ({children, }) {

}

function Container ({children, layout = 'vertical'} : Props){
  const LayoutClasses : Props = {
    vertical : "flex flex-col space-y-4",
    grid : "grid grid-cols-1 md:grid-cols-2 gap-4",
    horizontal : "flex flex-row flex-wrap gap-4"
  }

  return (
    <div className={LayoutClasses[layout]}>
      {children}
    </div>
  )
}
function ChildrenProps() {
  return (
    <div className={` bg-white p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-6`}>
        <h1 className={`text-4xl text-black mb-3 font-bold`}>Children Props</h1>
        <p className={`text-gray-500 font-semibold text-xl`}>
          The <span className="text-gray-500 font-italic bg-gray-200 px-1 p-1 rounded-xl">children</span> children prop allows you to pass TSX elements or components as
          childrens to other components, enabling component composition.
        </p>
      </div>

      <h3 className={`font-sans font-bold text-2xl mb-3 text-gray-600`}>Card Componets with Children:</h3>

    </div>
  );
}

export default ChildrenProps;
