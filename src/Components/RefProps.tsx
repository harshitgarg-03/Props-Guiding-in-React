import { forwardRef, useRef } from "react";

interface CustomInputProps {
  label: string;
  placeholder: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, placeholder }, ref) => {
    return (
      <div className="mb-2">
        <label className={`block text-gray-600 font-medium mb-4 mt-2`}>
          {label}{" "}
        </label>
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={`w-full px-4 text-lg py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </div>
    );
  },
);

CustomInput.displayName = "Custom Input";

function RefProps() {
  const inputRef = useRef<HTMLInputElement>(null);
  const SecondinputRef = useRef<HTMLInputElement>(null);

  const Focusinput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value is : ${inputRef.current.value}`);
    }
  };

  const clearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  const FocusSecondinput = () => {
    SecondinputRef.current?.focus();
  };

  const getSecondInputValue = () => {
    if (SecondinputRef.current) {
      alert(`Input value is : ${SecondinputRef.current.value}`);
    }
  };

  const clearSecondInputValue = () => {
    if (SecondinputRef.current) {
      SecondinputRef.current.value = "";
      SecondinputRef.current.focus();
    }
  };

  return (
    <div className={` bg-white p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-2`}>
        <h1 className={`text-4xl text-black mb-3 font-bold`}>Ref Props</h1>
        <p className={`text-gray-500 font-semibold text-xl`}>
          Refs provide a way to access DOM nodes or React elements directly. Use{" "}
          <span className="text-gray-500 font-italic bg-gray-200 px-1 p-1 rounded-xl">
            forwardRef
          </span>{" "}
          to pass refs to child components.
        </p>
      </div>

      <div
        className={`px-8 py-4 mb-4 mt-4 bg-sky-200 rounded-2xl font-sans text-xl text-gray-700`}
        
      >

        <h3 className={`font-bold text-2xl mb-4 text-gray-900`} >Try it out : </h3>
        <CustomInput label="First Input (with ref)" placeholder="Type Something ..." ref={inputRef} />

        {/* <h3 className={`font-bold text-2xl mb-4 text-gray-900`} >Try it out : </h3> */}
        <CustomInput label="Second Input (with ref)" placeholder="Type Something else  ..." ref={SecondinputRef} />

        <div className={`py-4 flex gap-4`} >
          <button className={`px-6 text-white py-2 bg-sky-500 rounded-2xl`} onClick={Focusinput} >Focus First Input</button>
          <button className={`px-6 text-white py-2 bg-purple-500 rounded-2xl`} onClick={FocusSecondinput} >Focus Second Input</button>
          <button className={`px-6 text-white py-2 bg-green-500 rounded-2xl`} onClick={getInputValue} >Get First Input</button>
          <button className={`px-6 text-white py-2 bg-red-500 rounded-2xl`}  onClick={clearInputValue}>Clear First Input</button>
        </div>
      </div>
      <div
        className={`px-8 py-8 bg-orange-100 border-l-6 border-yellow-500 rounded-2xl font-sans font-semibold  text-xl text-gray-900`}
      >
        <h2 className={`mb-4`} >When to UseRef props</h2>
        <li className={`ml-5 text-gray-600 text-md font-sans font-normal`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente!</li>
        <li className={`ml-5 text-gray-600 text-md font-sans font-normal`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente!</li>
        <li className={`ml-5 text-gray-600 text-md font-sans font-normal`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente!</li>
        <li className={`ml-5 text-gray-600 text-md font-sans font-normal`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente!</li>
        <li className={`ml-5 text-gray-600 text-md font-sans font-normal`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente!</li>

      </div>
    </div>
  );
}

export default RefProps;
