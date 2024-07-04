import React from "react";
import "../../styles/components/_pagination.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
  onRecordsPerPageChange: (recordsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalRecords,
  recordsPerPage,
  onPageChange,
  onRecordsPerPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) pageNumbers.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 2) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <div className="pagination__info">
        <span>Showing</span>
        <select
          value={recordsPerPage}
          onChange={(e) => onRecordsPerPageChange(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>out of {totalRecords}</span>
      </div>
      <div className="pagination__controls">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination__button"
        >
          <IoIosArrowBack size={14} color="#213F7D" />
        </button>
        {getPageNumbers().map((number, index) => (
          <span
            key={index}
            className={`pagination__number ${
              number === currentPage ? "active" : ""
            }`}
          >
            {number}
          </span>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination__button"
        >
          <IoIosArrowForward size={14} color="#213F7D" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
