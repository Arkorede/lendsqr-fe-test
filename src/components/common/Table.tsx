import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/_table.scss";
import { CiMenuKebab } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { getStatus } from "../../utils/getStatus";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { RiUserUnfollowLine } from "react-icons/ri";
import FilterForm from "./FilterForm";

interface TableData {
  id: number;
  [key: string]: any;
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdownId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilter = (column: string) => {
    setActiveFilter(activeFilter === column ? null : column);
  };

  const handleFilter = (column: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [column]: value }));
  };

  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.entries(filterValues).every(([column, value]) =>
        String(item[column]).toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [data, filterValues]);

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const columns = [
    "Organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  return (
    <>
      <div className="table-wrapper">
        <table className="">
          <thead className="">
            <tr className="">
              {columns.map((column, index) => (
                <th key={index} className="">
                  <div className="table-head-flex">
                    <p>{column}</p>
                    <IoFilterSharp
                      color="#545F7D"
                      className="table-head-icon"
                      onClick={() => toggleFilter(column)}
                    />
                  </div>
                  {activeFilter === column && (
                    <FilterForm
                      onFilter={handleFilter}
                      onClose={() => setActiveFilter(null)}
                      column={column}
                    />
                  )}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {filteredData.map((item: any) => (
              <tr key={item.id} className={``}>
                <td className="">
                  <p className="">{item.organization}</p>
                </td>
                <td className="">{item.username}</td>
                <td className="">{item.email}</td>
                <td className="">{item.phone}</td>
                <td className="">{item.dateJoined}</td>
                <td className="">{getStatus(item.status)}</td>
                <td>
                  <div className="table-dropdown">
                    <button
                      className="table-dropdown__button"
                      onClick={() => toggleDropdown(item.id)}
                    >
                      <CiMenuKebab color="#545F7D" />
                    </button>
                    {openDropdownId === item.id && (
                      <div
                        ref={dropdownRef}
                        className="table-dropdown__content"
                      >
                        <div className="table-dropdown__list">
                          <Link
                            to={`/dashboard/users/${item.id}`}
                            className="table-dropdown__item"
                          >
                            <IoEyeOutline size={16} />
                            <p>View Details</p>
                          </Link>
                          <Link to="#" className="table-dropdown__item">
                            <RiUserUnfollowLine size={16} />
                            <p>Blacklist User</p>
                          </Link>
                          <Link to="#" className="table-dropdown__item">
                            <GrUserExpert size={16} />
                            <p>Activate User</p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
