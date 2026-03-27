"use client";

import React, { useState } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import { FiSearch } from "react-icons/fi";

export const CSearchBar = ({
  placeholder = "Search...",
  onSearch,
  className = "",
  size,
  value: controlledValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState("");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e) => {
    const val = e.target.value;
    if (onChange) onChange(val);
    else setInternalValue(val);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <InputGroup className={className} size={size}>
      <span className="input-group-text bg-white border-end-0">
        <FiSearch size={16} style={{ color: "#A0A0A0" }} />
      </span>
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="border-start-0"
        aria-label="Search"
      />
      <Button className="btn-caliente" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>
  );
};

export default CSearchBar;
