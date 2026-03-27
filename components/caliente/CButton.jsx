"use client";

import React from "react";
import { Button as BsButton } from "reactstrap";
import { FiSearch, FiTrash2, FiEdit, FiDownload, FiUpload, FiSave } from "react-icons/fi";

// ============================================================
// Action Icons using react-icons (Feather set)
// ============================================================

const ActionIcons = {
  search:   <FiSearch size={16} />,
  delete:   <FiTrash2 size={16} />,
  update:   <FiEdit size={16} />,
  download: <FiDownload size={16} />,
  upload:   <FiUpload size={16} />,
  save:     <FiSave size={16} />,
};

/** Map action names to default bootstrap-friendly color classes */
const actionColorMap = {
  search: "btn-action btn-action-search",
  delete: "btn-action btn-action-delete",
  update: "btn-action btn-action-update",
  download: "btn-action btn-action-download",
  upload: "btn-action btn-action-upload",
  save: "btn-action btn-action-save",
};

const actionLabels = {
  search: "Search",
  delete: "Delete",
  update: "Update",
  download: "Download",
  upload: "Upload",
  save: "Save",
};

export const CButton = ({
  variant = "caliente",
  size,
  loading = false,
  icon,
  action,
  iconOnly = false,
  children,
  className = "",
  disabled,
  ...rest
}) => {
  // Action button mode
  if (action) {
    const actionClass = actionColorMap[action];
    const iconNode = ActionIcons[action];
    const label = children || actionLabels[action];

    return (
      <button
        type="button"
        className={`btn ${actionClass} ${iconOnly ? "btn-icon-only" : ""} ${size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : ""} ${className}`.trim()}
        disabled={disabled || loading}
        aria-label={typeof label === "string" ? label : actionLabels[action]}
        {...rest}
      >
        {loading ? (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
        ) : (
          <span className="btn-action-icon">{iconNode}</span>
        )}
        {!iconOnly && <span className="btn-action-label">{label}</span>}
      </button>
    );
  }

  // Variant-based action buttons (e.g. variant="action-search")
  const isActionVariant = variant.startsWith("action-");
  if (isActionVariant) {
    const actionKey = variant.replace("action-", "");
    const actionClass = actionColorMap[actionKey];
    const iconNode = ActionIcons[actionKey];
    const label = children || actionLabels[actionKey];

    return (
      <button
        type="button"
        className={`btn ${actionClass} ${iconOnly ? "btn-icon-only" : ""} ${size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : ""} ${className}`.trim()}
        disabled={disabled || loading}
        aria-label={typeof label === "string" ? label : actionLabels[actionKey]}
        {...rest}
      >
        {loading ? (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
        ) : (
          <span className="btn-action-icon">{iconNode}</span>
        )}
        {!iconOnly && <span className="btn-action-label">{label}</span>}
      </button>
    );
  }

  // Standard button mode
  const isCustom = ["caliente", "caliente-dark", "outline-caliente"].includes(variant);
  const colorProp = isCustom ? undefined : variant;
  const customClass = isCustom ? `btn-${variant}` : "";

  return (
    <BsButton
      color={colorProp}
      size={size === "md" ? undefined : size}
      className={`${customClass} ${className}`.trim()}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
      )}
      {icon && !loading && <span className="me-2 d-inline-flex align-items-center">{icon}</span>}
      {children}
    </BsButton>
  );
};

export default CButton;
