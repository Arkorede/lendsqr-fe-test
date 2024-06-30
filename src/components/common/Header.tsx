import React, { useState } from "react";
import "../../styles/components/_header.scss";
import { lendsqr, user } from "../../assets/images";
import { caret, search } from "../../assets/icons";
import { IoIosNotificationsOutline } from "react-icons/io";
import Input from "./Input";

const Header = () => {
  const [value, setValue] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setValue(searchValue);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={lendsqr} alt="lendsqr logo" className="lendsqr-logo" />
        <Input
          placeholder="Search for anything"
          name="search"
          value={value}
          onChange={handleSearch}
          type="text"
          icon={search}
          spanClass="search-icon"
          height="4rem"
          fontFamily="Work Sans"
          marginBottom="0"
        />
      </div>

      <div className="header-center"></div>

      <div className="header-right">
        <p>Docs</p>
        <IoIosNotificationsOutline color="#213f7d" size={26} />
        <div>
          <img src={user} alt="user" className="user-pic" />
        </div>
        <div className="user-select">
          <span className="user-name">Adedeji</span>
          <img src={caret} alt="caret" />
        </div>
      </div>
    </div>
  );
};

export default Header;
