import React, { useState, useEffect, useRef, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
import "../../styles/components/_table.scss";
import { CiMenuKebab } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { getStatus } from "../../helpers/getStatus";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { RiUserUnfollowLine } from "react-icons/ri";
import FilterForm from "./FilterForm";
import Pagination from "./Pagination";

interface TableData {
  id: number;
  [key: string]: any;
}

interface ColumnMapType {
  [key: string]: string | string[];
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const columnMap: ColumnMapType = {
    organization: "organization",
    username: ["first_name", "last_name"],
    email: "email",
    "phone number": "phone",
    "date joined": "date_joined",
    status: "status",
  };

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.entries(filterValues).every(([column, value]) => {
        const dataKey = columnMap[column];
        if (Array.isArray(dataKey)) {
          return dataKey.some((key) =>
            String(item[key]).toLowerCase().includes(value.toLowerCase())
          );
        } else {
          return String(item[dataKey])
            .toLowerCase()
            .includes(value.toLowerCase());
        }
      })
    );
  }, [data, filterValues]);

  console.log(filterValues);
  console.log(filteredData);

  const columns = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(Math.max(1, totalPages));
    }
  }, [filteredData, recordsPerPage, currentPage, totalPages]);

  const indexOfLastItem = currentPage * recordsPerPage;
  const indexOfFirstItem = indexOfLastItem - recordsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleRecordsPerPageChange = (newRecordsPerPage: number) => {
    setRecordsPerPage(newRecordsPerPage);
    setCurrentPage(1);
  };

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
    setCurrentPage(1);
  };

  // const navigate = useNavigate();

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

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
            {currentItems.map((item: any) => (
              <tr key={item.id} className={``}>
                <td className="">
                  <p className="">{item.organization}</p>
                </td>
                <td className="">
                  {item.first_name} {item.last_name}
                </td>
                <td className="">{item.email}</td>
                <td className="">{item.phone}</td>
                <td className="">{item.date_joined}</td>
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={data.length}
          recordsPerPage={recordsPerPage}
          onPageChange={handlePageChange}
          onRecordsPerPageChange={handleRecordsPerPageChange}
        />
      </div>
    </>
  );
};

export default Table;
