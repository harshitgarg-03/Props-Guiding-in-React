import { useState } from "react";

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    role: string;
    status: string;
    stats?: {
      posts?: number;
      followers?: number;
      following?: number;
      Project?: number;
      Commits?: number;
      Reviews?: number;
    };
  };

  theme: {
    backgroundColor: string;
    textColor: string;
    avatarBg: string;
    badgeBg: string;
  };

  actions: {
    primary: {
      label: string;
      onClick: () => string;
      className: string;
    };
    secondary: {
      label: string;
      onClick: () => string;
      className: string;
    };
  };
}
function ProfileCard({ user, theme, actions }: ProfileCardProps) {
  return (
    <div
      className={`${theme.backgroundColor} ${theme.textColor} p-8 m-4 mt-8 rounded-2xl`}
    >
      <div className="flex items-center gap-6 mb-4">
        <div
          className={`${theme.avatarBg} text-3xl w-14 h-14 flex items-center justify-center rounded-full`}
        >
          {user.avatar}
        </div>

        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-sm mb-2 opacity-80">{user.email}</p>

          <div className="flex gap-2 mt-1">
            <span
              className={`${theme.badgeBg} px-3 py-1 rounded-full text-xs font-medium`}
            >
              {user.role}
            </span>

            <span
              className={`${theme.badgeBg} px-3 py-1 rounded-full text-xs font-medium`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      <hr className="my-4 opacity-30" />

      {user.stats && (
        <div className="grid grid-cols-3 text-center mb-5">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key}>
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm capitalize opacity-70">{key}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={actions.primary.onClick}
          className={`flex-1 py-2 rounded-xl cursor-pointer font-semibold ${actions.primary.className}`}
        >
          {actions.primary.label}
        </button>

        <button
          onClick={actions.secondary.onClick}
          className={`flex-1 py-2 rounded-xl  cursor-pointer font-semibold ${actions.secondary.className}`}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

function ComplexProps() {
  const [Message, setMessage] = useState<string>("User's Profile");
  const Users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💻",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },

      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-300 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-500",
        badgeBg: "bg-purple-400",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-purple-200 text-purple-800 hover:bg-purple-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👩‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          Project: 28,
          Commits: 1523,
          Reviews: 89,
        },
      },

      theme: {
        backgroundColor: "bg-gradient-to-br from-green-300 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-400",
        badgeBg: "bg-green-300",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Opening message to Bob"),
          className: "bg-green-200 text-green-800 hover:bg-green-300",
        },
      },
    },
  ];
  return (
    <div className={` bg-white p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-8`}>
        <h1 className={`text-4xl text-black mb-4 font-bold`}>
          Complex/Nested Props
        </h1>
        <p className={`text-gray-500  font-semibold text-xl`}>
          Complex props allows you to pass nested objects and functions,
          enabling sophisticated component configuration and interactions.
        </p>
      </div>

      <div
        className={`px-8 py-4 bg-sky-200 border-l-4 border-sky-500 rounded-2xl font-sans font-semibold  text-xl text-sky-700`}
      >
        <h2>{Message}</h2>
      </div>

      <div className={`grid gap-6 grid-cols-1 md:grid-cols-2`}>
        {Users.map((userData, idx) => (
          <ProfileCard key={idx} {...userData} />
        ))}
      </div>
    </div>
  );
}

export default ComplexProps;
