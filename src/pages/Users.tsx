// import React from 'react'

import UserCard from "../components/user/UserCard";
import "../styles/pages/_users.scss";

const Users = () => {
  return (
    <div className="user-page">
      <h1>Users</h1>
      <div className="user-cards">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Users;
