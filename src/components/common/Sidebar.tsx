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
  sliders,
  transaction,
  user_check,
  user_cog,
  user_times,
  users,
} from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";
import "../../styles/components/_sidebar.scss";
import Input from "./Input";

const Sidebar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectValue = e.target.value;
    setValue(selectValue);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const { pathname } = useLocation();
  console.log(pathname);
  const currentPath = location.pathname;

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
      ],
    },
  ];

  const organisations = [
    { value: "", label: "Switch Organization" },
    { value: "lendsqr", label: "lendsqr" },
    { value: "microsoft", label: "microsoft" },
  ];

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
            fontSize="1.3rem"
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
                      currentPath === item.link ? "active" : ""
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
    </div>
  );
};

export default Sidebar;
