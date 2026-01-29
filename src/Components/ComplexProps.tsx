import React, { useState } from "react";

function ComplexProps() {
  const [Message, setMessage] = useState<string>("User's Profile")
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
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
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
        backgroundColor: "bg-gradient-to-br from-green-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
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
        className={`px-8 py-4 bg-sky-200 border-l-4 border-sky-500 rounded-2xl font-sans font-semibold font-light text-xl text-sky-700`}
      >
        <h2>{Message}</h2>
      </div>
    </div>
  );
}

export default ComplexProps;
