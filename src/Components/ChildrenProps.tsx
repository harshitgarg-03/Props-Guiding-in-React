type Layouttpes = "vertical" | "horizontal" | "grid";
type Colortypes = "blue" | "red" | "green" | "purple";
interface Props {
  layout?: Layouttpes;
  children?: any;
  vertical?: string;
  horizontal?: string;
  grid?: string;
  title?: string;
  color?: Colortypes | undefined;
}

function Card({ children, title, color = "blue" }: Props) {
  const colorclasses = {
    blue: "bg-blue-200 border-blue-500",
    green: "bg-green-200 border-green-500",
    red: "bg-red-200 border-red-500",
    purple: "bg-purple-200 border-purple-500",
  };

  return (
    <div className={`${colorclasses[color]} border-l-6 p-6 rounded-2xl`}>
      <h3 className={`font-sans font-semibold text-2xl mb-3 text-gray-900`}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function Container({ children, layout = "vertical" }: Props) {
  const LayoutClasses: Props = {
    vertical: "flex flex-col space-y-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    horizontal: "flex flex-row flex-wrap gap-4",
  };

  return <div className={`${LayoutClasses[layout]}`}>{children}</div>;
}
function ChildrenProps() {
  return (
    <div className={` bg-white p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-6`}>
        <h1 className={`text-4xl text-black mb-3 font-bold`}>Children Props</h1>
        <p className={`text-gray-500 font-semibold text-xl`}>
          The{" "}
          <span className="text-gray-500 font-italic bg-gray-200 px-1 p-1 rounded-xl">
            children
          </span>{" "}
          children prop allows you to pass TSX elements or components as
          childrens to other components, enabling component composition.
        </p>
      </div>

      <h3 className={`font-sans font-bold text-2xl mb-3 text-gray-600`}>
        Card Componets with Children:
      </h3>
      <Container layout={"grid"}>
        <Card title="User Profile" color="blue">
          <p className={`text-gray-700 text-lg`}>
            <span className="font-semibold">Name :</span> Harshit Garg
          </p>
          <p className={`text-gray-700 text-lg`}>
            <span className="font-semibold">Role :</span> Developer/Instructor
          </p>
          <p className={`text-gray-700 text-lg`}>
            <span className="font-semibold">Email :</span> Harsarg@some.com
          </p>
        </Card>
        <Card title="Statistics" color="green">
          <p className={`text-gray-700 text-lg`}>
            <span className="font-semibold">Total User :</span>{" "}
            <span className="font-bold">1256</span>
          </p>
          <p className={`text-gray-700 text-lg`}>
            <span className="font-semibold">Active Session :</span>{" "}
            <span className="font-bold">2564</span>
          </p>
          <p className={`text-gray-700 text-lg`}>
            <span className="font-semibold">Revenue :</span>{" "}
            <span className="font-bold">$124544100</span>
          </p>
        </Card>
        <Card title="Quick Actions" color="purple">
          <div className={`flex flex-col mb-4`}>
            <button
              className={`bg-violet-500 p-2 cursor-pointer p-y-2 rounded-xl mb-2`}
            >
              Create New
            </button>
            <button
              className={`bg-gray-500 p-2 cursor-pointer p-y-2 rounded-xl `}
            >
              View All
            </button>
          </div>
        </Card>
      
        <Card title="Warning" color="red">
          <div className={`flex flex-col text-gray-700 font-semibold`}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              necessitatibus ducimus, possimus dolore quaerat illum neque
              voluptas ratione cumque nam est, voluptate, ex aliquam iste.
              accusantium natus.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ChildrenProps;
