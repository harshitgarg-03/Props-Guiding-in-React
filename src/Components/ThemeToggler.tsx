import "../index.css";
import useTheme from "../hook/useTheme";
import Switch from "./Button";

function ThemeToggler() {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        p-8 rounded-2xl mt-8 m-4 transition-colors duration-300
        ${isDark ? "bg-blue-950 text-gray-200" : "bg-white text-black"}
      `}
    >
      {/* Header */}
      <div className="mb-2">
        <div className="flex justify-between">
          <h1
            className={`text-4xl mb-3 font-bold ${
              isDark ? "text-gray-200" : "text-black"
            }`}
          >
            Theme Toggler
          </h1>

          {/* <ThemeToggleButton /> */}
          <Switch/>
        </div>

        <p
          className={`font-semibold text-xl ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          This section demonstrates theme toggling using Context API and props.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 mt-4 grid-cols-1">
        {/* User Card */}
        <div
          className={`py-4 px-8 rounded-xl shadow transition-colors
          ${isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}`}
        >
          <h3 className="font-semibold text-2xl mb-3">User Information</h3>

          <p>
            <span className="font-semibold">Name :</span> Harshit Garg
          </p>
          <p>
            <span className="font-semibold">Role :</span> Developer
          </p>
          <p>
            <span className="font-semibold">Email :</span> Harsarg@some.com
          </p>

          <div className="flex gap-2 mt-4">
            <button
              className={`py-2 px-6 rounded-xl text-white
              ${isDark ? "bg-blue-600" : "bg-amber-600"}`}
            >
              Edit Profile
            </button>

            <button
              className={`py-2 px-6 rounded-xl
              ${isDark ? "bg-white text-black" : "bg-gray-600 text-white"}`}
            >
              Setting
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div
          className={`py-4 px-8 rounded-xl shadow transition-colors
          ${isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}`}
        >
          <h3 className="font-semibold text-2xl mb-3">Statistics</h3>

          <p className="flex justify-between">
            <span>Total User :</span>
            <span className="font-bold text-blue-500">0</span>
          </p>

          <p className="flex justify-between">
            <span>Active Session :</span>
            <span className="font-bold">2564</span>
          </p>

          <p className="flex justify-between">
            <span>Status :</span>
            <span className="font-bold text-green-500">Active</span>
          </p>
        </div>
      </div>

      {/* Interactive */}
      <div
        className={`py-4 px-8 shadow mt-6 rounded-xl transition-colors
        ${isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}`}
      >
        <h3 className="font-semibold text-2xl mb-3">Interactive Demo</h3>

        <p className="mb-3">Try clicking buttons to see theme change.</p>

        <div className="flex gap-2 mt-4">
          <button className="bg-amber-600 py-2 px-6 rounded-xl text-white">
            Primary
          </button>

          <button className="bg-gray-600 text-white py-2 px-6 rounded-xl">
            Reset
          </button>

          <button className="bg-amber-600 py-2 px-6 rounded-xl text-white">
            Secondary
          </button>
        </div>
      </div>

      {/* Info Box */}
      <div
        className={`px-8 py-4 mt-4 rounded-2xl font-semibold text-xl transition-colors
        ${
          isDark
            ? "bg-sky-900 border-l-4 border-sky-500 text-sky-200"
            : "bg-sky-200 border-l-4 border-sky-500 text-sky-800"
        }`}
      >
        <h2 className="mb-4">Why Context + Props?</h2>

        <ul className="ml-5 font-normal text-md list-disc">
          <li>Avoids prop drilling</li>
          <li>Makes theme global</li>
          <li>Easy configuration</li>
          <li>Scalable design</li>
        </ul>
      </div>
    </div>
  );
}

export default ThemeToggler;
