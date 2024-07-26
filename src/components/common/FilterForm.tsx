import React, { useRef, useEffect, useState } from "react";
import "../../styles/components/_filterform.scss";
import Input from "./Input";
import { FilterFormProps } from "../../types/components";

const FilterForm: React.FC<FilterFormProps> = ({
  onClose,
  column,
  onFilter,
}) => {
  const [filterValue, setFilterValue] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(column, filterValue);
    onClose();
  };

  const handleReset = () => {
    setFilterValue("");
    onFilter(column, "");
  };

  return (
    <form ref={formRef} className="filter-form" onSubmit={handleSubmit}>
      <Input
        label={column}
        name={column}
        type="text"
        height="4rem"
        value={filterValue}
        onChange={handleInputChange}
      />
      <div className="form-buttons">
        <button type="button" className="reset" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="filter">
          Filter
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
