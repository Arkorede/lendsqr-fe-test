import React from "react";
import "../../styles/components/_generaldetails.scss";

const GeneralDetails: React.FC = () => {
  return (
    <div className="general-details">
      {/* Personal Information */}
      <h2>Personal Information</h2>
      <div className="general-info">
        <div className="">
          <h5>full Name</h5>
          <p>Grace Effiom</p>
        </div>
        <div className="">
          <h5>Phone Number</h5>
          <p>07060780922</p>
        </div>
        <div className="">
          <h5>Email Address</h5>
          <p>grace@gmail.com</p>
        </div>
        <div className="">
          <h5>Bvn</h5>
          <p>07060780922</p>
        </div>
        <div className="">
          <h5>Gender</h5>
          <p>Female</p>
        </div>
        <div className="">
          <h5>Marital status</h5>
          <p>Single</p>
        </div>
        <div className="">
          <h5>Children</h5>
          <p>None</p>
        </div>
        <div className="">
          <h5>Type of residence</h5>
          <p>Parent’s Apartment</p>
        </div>
      </div>

      {/* Education and Employment */}
      <h2>Education and Employment</h2>
      <div className="general-info">
        <div className="">
          <h5>level of education</h5>
          <p>B.Sc</p>
        </div>
        <div className="">
          <h5>Phone Number</h5>
          <p>07060780922</p>
        </div>
        <div className="">
          <h5>employment status</h5>
          <p>Employed</p>
        </div>
        <div className="">
          <h5>sector of employment</h5>
          <p>FinTech</p>
        </div>
        <div className="">
          <h5>Duration of employment</h5>
          <p>2 years</p>
        </div>
        <div className="">
          <h5>office email</h5>
          <p>grace@lendsqr.com</p>
        </div>
        <div className="">
          <h5>Monthly income</h5>
          <p>₦200,000.00- ₦400,000.00</p>
        </div>
        <div className="">
          <h5>loan repayment</h5>
          <p>40,000</p>
        </div>
      </div>

      {/* Socials */}
      <h2>Socials</h2>
      <div className="general-info">
        <div className="">
          <h5>Twitter</h5>
          <p>B.Sc</p>
        </div>
        <div className="">
          <h5>Phone Number</h5>
          <p>07060780922</p>
        </div>
        <div className="">
          <h5>employment status</h5>
          <p>Employed</p>
        </div>
        <div></div>
        <div></div>
      </div>

      {/* Guarantor */}
      <h2>Guarantor</h2>
      <div className="general-info guarantor-info">
        <div className="">
          <h5>full Name</h5>
          <p>Grace Effiom</p>
        </div>
        <div className="">
          <h5>Phone Number</h5>
          <p>07060780922</p>
        </div>
        <div className="">
          <h5>Email Address</h5>
          <p>grace@gmail.com</p>
        </div>
        <div className="">
          <h5>Relationship</h5>
          <p>Sister</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default GeneralDetails;
