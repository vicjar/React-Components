"use client";

import React from "react";
import { Input, FormGroup, Label, FormFeedback, FormText } from "reactstrap";

export const CInput = ({
  label,
  error,
  helpText,
  required = false,
  id,
  className = "",
  ...rest
}) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, "-") || "field"}`;

  return (
    <FormGroup>
      {label && (
        <Label htmlFor={inputId} className="form-label fw-medium" style={{ fontSize: "0.875rem" }}>
          {label}
          {required && <span className="text-danger ms-1">*</span>}
        </Label>
      )}
      <Input
        id={inputId}
        className={`${className}`}
        invalid={!!error}
        {...rest}
      />
      {error && <FormFeedback>{error}</FormFeedback>}
      {helpText && !error && <FormText>{helpText}</FormText>}
    </FormGroup>
  );
};

export default CInput;
