import "./App.css";
import BasicProps from "./Components/BasicProps.tsx";
import ChildrenProps from "./Components/ChildrenProps";
import ComplexProps from "./Components/ComplexProps";
import RefProps from "./Components/RefProps";
import ThemeToggler from "./Components/ThemeToggler.tsx";
interface NavigationProp {
  id: string;
  title: string;
  icon: string;
}
function Navigation() {
  const Section: NavigationProp[] = [
    { id: "Basic", title: "BasicProps", icon: "😊 " },
    { id: "Children", title: "ChildrenProps", icon: "👧 " },
    { id: "Complex", title: "ComplexProps", icon: "⚡ " },
    { id: "Ref", title: "RefProps", icon: "🔗 " },
    { id: "ThemeToggler", title: "ThemeTogglerProps", icon: "🎡 " },
  ];
  return (
    <nav className={`flex justify-center gap-8 `}>
      {Section.map((item, index) => (
        <button
          key={index}
          className={`bg-[#e8007f] cursor-pointer hover:bg-[#ed0284bb] py-3 px-5 font-bold rounded-2xl mt-6`}
        >
          {item.icon}
          {item.title}
        </button>
      ))}
    </nav>
  );
}

function AppContent() {
  return (
    <>
      <Navigation />
      <div className={`mt-12 text-center`}>
        <h1 className={`font-bold text-4xl mb-2`}>
          React Prop <span className={`text-amber-300`}> Explained</span>{" "}
        </h1>
        <p className={`mt-3 text-lg mb-2`}>
          A Comprehensive guide to understanding props in react
        </p>
        <h4 className={` text-md font-bold`}>
          Built with Bun + Vite + React + Tailwind CSS
        </h4>
      </div>

      <div className={`space-y-8`}>
        <div>
          <BasicProps />
        </div>
        <div>
          <ChildrenProps />
        </div>
        <div>
          <ComplexProps />
        </div>
        <div>
          <RefProps />
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
