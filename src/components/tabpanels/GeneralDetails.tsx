import React from "react";
import "../../styles/components/_generaldetails.scss";
import { User } from "../../types/user";

interface GeneralDetailsProps {
  user: User;
}

const GeneralDetails: React.FC<GeneralDetailsProps> = ({ user }) => {
  return (
    <div className="general-details">
      {/* Personal Information */}
      <h2>Personal Information</h2>
      <div className="general-info">
        <div className="">
          <h5>full name</h5>
          <p>
            {user.first_name} {user.last_name}
          </p>
        </div>
        <div className="">
          <h5>Phone Number</h5>
          <p>{user.phone}</p>
        </div>
        <div className="">
          <h5>Email Address</h5>
          <p>{user.email}</p>
        </div>
        <div className="">
          <h5>Bvn</h5>
          <p>{user.bvn}</p>
        </div>
        <div className="">
          <h5>Gender</h5>
          <p>{user.gender}</p>
        </div>
        <div className="">
          <h5>Marital status</h5>
          <p>{user.marital_status}</p>
        </div>
        <div className="">
          <h5>Children</h5>
          <p>{user.children === 0 ? "None" : user.children}</p>
        </div>
        <div className="">
          <h5>Type of residence</h5>
          <p>{user.residence_type}</p>
        </div>
      </div>

      {/* Education and Employment */}
      <h2>Education and Employment</h2>
      <div className="general-info">
        <div className="">
          <h5>level of education</h5>
          <p>{user.education_level}</p>
        </div>
        <div className="">
          <h5>Phone Number</h5>
          <p>{user.phone}</p>
        </div>
        <div className="">
          <h5>employment status</h5>
          <p>{user.employment_status}</p>
        </div>
        <div className="">
          <h5>sector of employment</h5>
          <p>{user.sector}</p>
        </div>
        <div className="">
          <h5>Duration of employment</h5>
          <p>{user.employment_duration} years</p>
        </div>
        <div className="">
          <h5>office email</h5>
          <p>{user.office_email}</p>
        </div>
        <div className="">
          <h5>Monthly income</h5>
          <p>{user.monthly_income}</p>
        </div>
        <div className="">
          <h5>loan repayment</h5>
          <p>{user.loan_amount}</p>
        </div>
      </div>

      {/* Socials */}
      <h2>Socials</h2>
      <div className="general-info">
        <div className="">
          <h5>Twitter</h5>
          <p>{user.twitter}</p>
        </div>
        <div className="">
          <h5>Facebook</h5>
          <p>{user.facebook}</p>
        </div>
        <div className="">
          <h5>Instagram</h5>
          <p>{user.instagram}</p>
        </div>
        <div></div>
        <div></div>
      </div>

      {/* Guarantor */}
      <h2>Guarantor</h2>
      <div className="general-info guarantor-info">
        <div className="">
          <h5>full Name</h5>
          <p>{user.guarantor_name}</p>
        </div>
        <div className="">
          <h5>Phone Number</h5>
          <p>{user.guarantor_phone}</p>
        </div>
        <div className="">
          <h5>Email Address</h5>
          <p>{user.guarantor_email}</p>
        </div>
        <div className="">
          <h5>Relationship</h5>
          <p>{user.relationship}</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default GeneralDetails;
