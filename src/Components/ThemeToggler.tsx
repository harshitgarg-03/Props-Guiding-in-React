import "../index.css"
import useTheme from "../hook/useTheme";
import Switch from "./Button";
function ThemeToggler() {

  const {isDark, ToogleTheme} = useTheme();
  console.log(isDark);
  
 
  return (
    <div className={` ${!isDark ? "bg-white" : "bg-blue-950" } p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-2`}>
        <div className={`flex justify-between`}>
        <h1 className={`text-4xl ${!isDark? "text-black" : "text-gray-200" }  mb-3 font-bold`}>Theme Toggler</h1>
        <div onClick={ToogleTheme}><Switch isDark={isDark}/></div>
        </div>
        <p className={`text-gray-500 font-semibold text-xl`}>
          This section demonstrates theme toggling using Context API and props.
          The theme state is shared acroos all child componennts without prop
          drilling.
        </p>
      </div>

      <div>
        <div className={`grid md:grid-cols-2 gap-8 mt-4 grid-cols-1 `}>
          <div className={`py-4 px-8 rounded-xl shadow `}
>
            <h3
              className={`font-sans font-semibold text-2xl mb-3 text-gray-900`}
            >
              User Information
            </h3>
            <p className={`text-gray-700 text-lg`}>
              <span className="font-semibold">Name :</span> Harshit Garg
            </p>
            <p className={`text-gray-700 text-lg`}>
              <span className="font-semibold">Role :</span> Developer/Instructor
            </p>
            <p className={`text-gray-700 text-lg`}>
              <span className="font-semibold">Email :</span> Harsarg@some.com
            </p>

            <div className= {`flex gap-2 mt-4`}>
              <button className= {`bg-amber-600 py-2 px-6 rounded-xl ${!isDark? "bg-amber-600" : "bg-blue-600" } `}>Edit Profile</button>
              <button className= {`bg-gray-600 text-white py-2 px-6 rounded-xl ${!isDark? "bg-gray-600" : "bg-white" } `}>Setting</button>
            </div>
          </div>
          <div className={`py-4 px-8 rounded-xl shadow `}>
            <h3
              className={`font-sans font-semibold text-2xl mb-3 text-gray-900`}
            >
              Statistics
            </h3>
            <p className={`text-gray-700 text-lg flex justify-between`}>
              <span className="font-semibold">Total User :</span>{" "}
              <span className="font-bold text-blue-700">0</span>
            </p>
            <p className={`text-gray-700 text-lg flex justify-between`}>
              <span className="font-semibold">Active Session :</span>{" "}
              <span className="font-bold">2564</span>
            </p>
            <p className={`text-gray-700 text-lg flex justify-between`}>
              <span className="font-semibold">Status</span>{" "}
              <span className="font-bold text-green-500">Active</span>
            </p>
          </div>
        </div>

        <div className={`py-4 px-8 shadow mt-6 rounded-xl `}
>
            <h3
              className={`font-sans font-semibold text-2xl mb-3 text-gray-900`}
            >
              Interactive Demo
            </h3>
            <p className={`text-gray-700 text-lg`}>
              <span className="font-semibold">Try clicking the buttons below to see how they adapt to current themes:</span> Harshit Garg
            </p>
            

            <div className= {`flex gap-2 mt-4`}>
              <button className= {`bg-amber-600 py-2 px-6 rounded-xl `}>Primary Actions</button>
              <button className= {`bg-gray-600 text-white py-2 px-6 rounded-xl `}>Reset Counter</button>
              <button className= {`bg-amber-600 py-2 px-6 rounded-xl `}>Secondary Actions</button>
            </div>
          </div>
      </div>

      <div
        className={`px-8 py-4 bg-sky-200 mt-4 border-l-4 border-sky-500 rounded-2xl font-sans font-semibold  text-xl text-sky-800`}
      >
        <h2 className={`mb-4`} >Why Context + Props?</h2>
        <li className={`ml-5 text-md font-sans font-normal`}> Avoids "prop drilling" through multiple component layers</li>
        <li className={`ml-5 text-md font-sans font-normal`}> Makes theme accessible to any component in the tree</li>
        <li className={`ml-5 text-md font-sans font-normal`}> Components can still receive other props normally</li>
        <li className={`ml-5 text-md font-sans font-normal`}> Combines global state (context) with local configuration (props)</li>

      </div>
    </div>
  );
}

export default ThemeToggler;
