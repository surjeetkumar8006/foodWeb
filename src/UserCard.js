import React, { useState } from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-64 bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">ID: {user.id}</p>
      <p className="text-gray-500">Email: {user.email}</p>
    </div>
  );
};

const UserCard = () => {
  const [user, setUser] = useState({ id: "", name: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">User Card Page</h1>
      <div className="flex gap-2">
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          value={user.id}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
      </div>
      <UserCard user={user} />
    </div>
  );
};

export default UserCard;