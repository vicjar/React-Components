"use client";

import React from "react";
import { Input, FormGroup, Label, FormFeedback } from "reactstrap";

export const CSelect = ({
  label,
  options,
  placeholder = "Select an option...",
  value,
  onChange,
  error,
  required = false,
  size,
  className = "",
  id,
  disabled = false,
}) => {
  const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, "-") || "field"}`;

  return (
    <FormGroup>
      {label && (
        <Label htmlFor={selectId} className="form-label fw-medium" style={{ fontSize: "0.875rem" }}>
          {label}
          {required && <span className="text-danger ms-1">*</span>}
        </Label>
      )}
      <Input
        type="select"
        id={selectId}
        value={value}
        onChange={onChange}
        invalid={!!error}
        bsSize={size}
        className={className}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </Input>
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

export default CSelect;
