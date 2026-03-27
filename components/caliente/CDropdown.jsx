"use client";

import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const CDropdown = ({
  label,
  options,
  variant = "caliente",
  size,
  direction = "down",
  className = "",
}) => {
  const isCustom = ["caliente", "caliente-dark", "outline-caliente"].includes(variant);
  const bsColor = isCustom ? undefined : variant;
  const customClass = isCustom ? `btn-${variant}` : "";

  return (
    <UncontrolledDropdown direction={direction} className={className}>
      <DropdownToggle
        caret
        color={bsColor}
        size={size}
        className={customClass}
      >
        {label}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((opt, i) => {
          if (opt.divider) return <DropdownItem divider key={i} />;
          if (opt.header) return <DropdownItem header key={i}>{opt.label}</DropdownItem>;
          return (
            <DropdownItem
              key={i}
              onClick={opt.onClick}
              disabled={opt.disabled}
            >
              {opt.icon && <span className="me-2 d-inline-flex align-items-center">{opt.icon}</span>}
              {opt.label}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default CDropdown;
