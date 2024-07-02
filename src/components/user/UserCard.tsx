// import React from 'react'
import "../../styles/components/_usercard.scss";
import { UserCardProps } from "../../types/components";

const UserCard = ({
  icon,
  backgroundColor,
  label,
  quantity,
}: UserCardProps) => {
  return (
    <div className="user-card">
      <div
        className="icon-background"
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={icon} alt="icon" />
      </div>
      <p className="label">{label}</p>
      <p className="quantity">{quantity}</p>
    </div>
  );
};

export default UserCard;
