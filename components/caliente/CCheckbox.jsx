"use client";

import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export const CCheckbox = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  className = "",
}) => {
  const checkId = id || `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <FormGroup check className={className}>
      <Input
        type="checkbox"
        id={checkId}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <Label check htmlFor={checkId} style={{ fontSize: "0.875rem" }}>
        {label}
      </Label>
    </FormGroup>
  );
};

export default CCheckbox;
