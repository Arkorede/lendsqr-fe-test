import React from "react";
import { loan, money, users_active, users_colored } from "../assets/icons";
import Table from "../components/common/Table";
import UserCard from "../components/user/UserCard";
import "../styles/pages/_users.scss";
import useUsers from "../hooks/useUser";

// const usersData = [
//   {
//     id: 1,
//     organization: "Lendsqr",
//     username: "Adedeji",
//     email: "adedeji@lendsqr.com",
//     phone: "08078903721",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Inactive",
//   },
//   {
//     id: 2,
//     organization: "Irorun",
//     username: "Debby Ogana",
//     email: "debby2@irorun.com",
//     phone: "08160780928",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     id: 4,
//     organization: "Tosin Dokunmu",
//     username: "tosin@lendsqr.com",
//     email: "adedeji@lendsqr.com",
//     phone: "08078903721",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Active",
//   },
// ];

const Users: React.FC = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const activeUsers = users.filter((user) => user.status === "Active");

  return (
    <div className="user-page">
      <h1>Users</h1>
      <div className="user-cards">
        <UserCard
          icon={users_colored}
          backgroundColor="rgba(223, 24, 255, 0.1)"
          label="Users"
          quantity={users.length}
        />
        <UserCard
          icon={users_active}
          backgroundColor="rgba(87, 24, 255, 0.1)"
          label="Active Users"
          quantity={activeUsers.length}
        />
        <UserCard
          icon={loan}
          backgroundColor="rgba(245, 95, 68, 0.1)"
          label="Users with Loans"
          quantity={0}
        />
        <UserCard
          icon={money}
          backgroundColor="rgba(255, 51, 102, 0.1)"
          label="Users with Savings"
          quantity={0}
        />
      </div>

      <Table data={users} />
    </div>
  );
};

export default Users;
