"use client";

import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export const CRadio = ({
  name,
  options,
  value,
  onChange,
  inline = false,
  className = "",
  label,
}) => {
  return (
    <div className={className}>
      {label && (
        <Label className="form-label fw-medium d-block" style={{ fontSize: "0.875rem" }}>
          {label}
        </Label>
      )}
      <div className={inline ? "d-flex gap-3 flex-wrap" : ""}>
        {options.map((opt) => (
          <FormGroup check key={opt.value} inline={inline}>
            <Input
              type="radio"
              name={name}
              id={`${name}-${opt.value}`}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange?.(opt.value)}
              disabled={opt.disabled}
            />
            <Label check htmlFor={`${name}-${opt.value}`} style={{ fontSize: "0.875rem" }}>
              {opt.label}
            </Label>
          </FormGroup>
        ))}
      </div>
    </div>
  );
};

export default CRadio;
