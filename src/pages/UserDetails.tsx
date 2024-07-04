import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import "../styles/pages/_userdetails.scss";
import Button from "../components/common/Button";
import { LuUser2 } from "react-icons/lu";
import { IoStarOutline } from "react-icons/io5";
import GeneralDetails from "../components/tabpanels/GeneralDetails";
import { useNavigate, useParams } from "react-router-dom";
import * as db from "../utils/db";
import useUsers from "../hooks/useUser";
import { User } from "../types/user";

type newStatus = "Active" | "Inactive" | "Pending" | "Blacklisted";

const UserDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const { updateUser } = useUsers();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const fetchedUser = await db.get(Number(id));
        if (fetchedUser) {
          setUser(fetchedUser);
        } else {
          setError("User not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  const toggleStatus = async (newStatus: newStatus) => {
    try {
      const updatedUser = { ...user, status: newStatus };
      await updateUser(updatedUser);
      setUser(updatedUser);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error updating user status"
      );
    }
  };

  return (
    <div>
      <div
        className="back-to-user"
        onClick={() => navigate("/dashboard/users")}
      >
        <IoIosArrowRoundBack size={30} />
        <p>Back to Users</p>
      </div>

      <div className="user-heading">
        <h1>User Details</h1>
        <div className="user-heading-btn">
          <Button variant="danger" onClick={() => toggleStatus("Blacklisted")}>
            Blacklist User
          </Button>
          <Button variant="success" onClick={() => toggleStatus("Active")}>
            Activate User
          </Button>
        </div>
      </div>

      <div className="user-navigation">
        <div className="user-name">
          <div className="user-pic-background">
            <LuUser2 size={40} />
          </div>
          <div className="">
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>LSQFf587g90</p>
          </div>
        </div>
        <div className="user-tier">
          <p>User’s Tier</p>
          <span>
            <IoStarOutline color="#E9B200" size={14} />
            <IoStarOutline color="#E9B200" size={14} />
            <IoStarOutline color="#E9B200" size={14} />
          </span>
        </div>
        <div className="user-money">
          <p>₦{user.account_balance}</p>
          <p>
            {user.account_number}/{user.bank_name}
          </p>
        </div>
        <div className="tabs">
          <div className="tab-list-container">
            <div className="tab-list">
              <button
                className={`tab ${activeTab === 0 ? "active" : ""}`}
                onClick={() => setActiveTab(0)}
              >
                General Details
              </button>
              <button
                className={`tab ${activeTab === 1 ? "active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                Documents
              </button>
              <button
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                Bank Details
              </button>
              <button
                className={`tab ${activeTab === 3 ? "active" : ""}`}
                onClick={() => setActiveTab(3)}
              >
                Loans
              </button>
              <button
                className={`tab ${activeTab === 4 ? "active" : ""}`}
                onClick={() => setActiveTab(4)}
              >
                Savings
              </button>
              <button
                className={`tab ${activeTab === 5 ? "active" : ""}`}
                onClick={() => setActiveTab(5)}
              >
                App and System
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-panels">
        {activeTab === 0 && (
          <div className="tab-panel">
            <GeneralDetails user={user} />
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-panel">
            <h2>Documents</h2>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-panel">
            <h2>Bank Details</h2>
          </div>
        )}
        {activeTab === 3 && (
          <div className="tab-panel">
            <h2>Loans</h2>
          </div>
        )}
        {activeTab === 4 && (
          <div className="tab-panel">
            <h2>Savings</h2>
          </div>
        )}
        {activeTab === 5 && (
          <div className="tab-panel">
            <h2>App and System</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
