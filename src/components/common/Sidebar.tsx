import React, { useState } from "react";
import {
  badge_percent,
  briefcase,
  building,
  chart_bar,
  clipboard_list,
  coins,
  galaxy,
  guarantors,
  handshake,
  home,
  piggy_bank,
  request,
  sack,
  scroll,
  sign_out,
  sliders,
  system,
  transaction,
  user_check,
  user_cog,
  user_times,
  users,
} from "../../assets/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/components/_sidebar.scss";
import Input from "./Input";
import { useAuth } from "../../context/AuthContext";
import { isRouteActive } from "../../helpers/isRouteActive";

const Sidebar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);
  const { logout } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectValue = e.target.value;
    setValue(selectValue);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const sidebarNavList = [
    {
      items: [
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: home,
        },
      ],
    },
    {
      heading: "CUSTOMERS",
      items: [
        {
          name: "Users",
          link: "/dashboard/users",
          icon: users,
        },
        {
          name: "Guarantors",
          link: "/dashboard/guarantors",
          icon: guarantors,
        },
        {
          name: "Loans",
          link: "/dashboard/loans",
          icon: sack,
        },
        {
          name: "Decision Models",
          link: "/dashboard/decision-models",
          icon: handshake,
        },
        {
          name: "Savings",
          link: "/dashboard/savings",
          icon: piggy_bank,
        },
        {
          name: "Loan Requests",
          link: "/dashboard/loan-requests",
          icon: request,
        },
        {
          name: "Whitelist",
          link: "/dashboard/whitelist",
          icon: user_check,
        },
        {
          name: "Karma",
          link: "/dashboard/karma",
          icon: user_times,
        },
      ],
    },
    {
      heading: "BUSINESSES",
      items: [
        {
          name: "Organization",
          link: "/dashboard/organization",
          icon: briefcase,
        },
        {
          name: "Loan Products",
          link: "/dashboard/loan-products",
          icon: request,
        },
        {
          name: "Savings Products",
          link: "/dashboard/savings-products",
          icon: building,
        },
        {
          name: "Fees and Charges",
          link: "/dashboard/fees-and-charges",
          icon: coins,
        },
        {
          name: "Transactions",
          link: "/dashboard/transactions",
          icon: transaction,
        },
        {
          name: "Services",
          link: "/dashboard/services",
          icon: galaxy,
        },
        {
          name: "Service Account",
          link: "/dashboard/service-account",
          icon: user_cog,
        },
        {
          name: "Settlements",
          link: "/dashboard/settlements",
          icon: scroll,
        },
        {
          name: "Reports",
          link: "/dashboard/reports",
          icon: chart_bar,
        },
      ],
    },
    {
      heading: "SETTINGS",
      items: [
        {
          name: "Preferences",
          link: "/dashboard/preferences",
          icon: sliders,
        },
        {
          name: "Fees and Pricing",
          link: "/dashboard/fees-and-pricing",
          icon: badge_percent,
        },
        {
          name: "Audit Logs",
          link: "/dashboard/audit-logs",
          icon: clipboard_list,
        },
        {
          name: "Systems Messages",
          link: "/dashboard/systems-messages",
          icon: system,
        },
      ],
    },
  ];

  const organisations = [
    { value: "", label: "Switch Organization" },
    { value: "lendsqr", label: "Lendsqr" },
    { value: "microsoft", label: "Microsoft" },
  ];

  // const backgroundColor = {
  //   backgroundColor: "red",
  // };

  return (
    <div className="sidebar-container">
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`sidebar-nav ${isMobileMenuActive ? "active" : ""}`}>
        <li className="select-wrapper">
          <img src={briefcase} alt="briefcase" />
          <Input
            type="select"
            value={value}
            onChange={handleSelect}
            options={organisations}
            height="3.2rem"
            marginBottom="0"
            fontSize="1.6rem"
            color="#213F7D"
          />
        </li>
        {sidebarNavList.map((group, groupIndex) => (
          <li key={groupIndex} className="sidebar-group">
            {group.heading && (
              <h3 className="sidebar-heading">{group.heading}</h3>
            )}
            <ul
              className={`sidebar-items ${!group.heading ? "no-heading" : ""}`}
            >
              {group.items.map((item) => (
                <li key={item.name} className="sidebar-item-wrapper">
                  <Link
                    to={item.link}
                    className={`sidebar-item ${
                      isRouteActive(item.link, currentPath) ? "active" : ""
                    }`}
                  >
                    <img src={item.icon} alt="" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="logout" onClick={handleLogout}>
        <img src={sign_out} alt="icon" />
        <p>Logout</p>
      </div>
      <small>v1.2.0</small>
    </div>
  );
};

export default Sidebar;
