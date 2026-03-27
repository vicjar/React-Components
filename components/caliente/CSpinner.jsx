"use client";

import React from "react";
import { Spinner } from "reactstrap";

// ============================================================
// Casino Chip image from static SVG in /public/images/casino-chip.svg
// ============================================================

const CasinoChipImg = ({ dimension }) => (
  <img
    src="/images/casino-chip.svg"
    alt=""
    aria-hidden="true"
    width={dimension}
    height={dimension}
    className="casino-chip-img"
    draggable={false}
  />
);

// ============================================================
// Blinking dots "Loading..." label
// ============================================================

const BlinkingLabel = ({ text = "Loading", fontSize = "0.8125rem" }) => (
  <span className="cspinner-blink-label" style={{ fontSize }} aria-live="polite">
    {text}
    <span className="cspinner-dot cspinner-dot-1">.</span>
    <span className="cspinner-dot cspinner-dot-2">.</span>
    <span className="cspinner-dot cspinner-dot-3">.</span>
  </span>
);

// ============================================================
// CSpinner Component
// ============================================================

const chipDimensions = { sm: 40, md: 64, lg: 96 };

export const CSpinner = ({
  size = "md",
  variant = "border",
  color = "caliente",
  label = "Loading...",
  className = "",
  fullPage = false,
}) => {
  // Casino chip spinner
  if (variant === "chip") {
    const dim = chipDimensions[size] ?? 64;
    const chip = (
      <div className={`cspinner-chip cspinner-chip-${size} d-flex flex-column align-items-center ${className}`.trim()}>
        {/* Outer wrapper: pulse (scale + glow) */}
        <div className="cspinner-chip-pulse">
          {/* Inner wrapper: spin (rotate) */}
          <div className="cspinner-chip-spin">
            <CasinoChipImg dimension={dim} />
          </div>
        </div>
        {label && (
          <BlinkingLabel
            text={label.replace(/\.+$/, "")}
            fontSize={size === "sm" ? "0.75rem" : "0.8125rem"}
          />
        )}
      </div>
    );

    if (fullPage) {
      return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
          {chip}
        </div>
      );
    }
    return chip;
  }

  // Standard Bootstrap spinners
  const colorStyle = color === "caliente" ? { color: "#C8102E" } : {};
  const bsColor = color === "caliente" ? undefined : color;
  const spinnerSize = size === "sm" ? "sm" : undefined;
  const sizeStyle = size === "lg" ? { width: "3rem", height: "3rem" } : {};

  const spinner = (
    <div className={`d-flex flex-column align-items-center ${className}`.trim()}>
      <Spinner
        type={variant}
        color={bsColor}
        size={spinnerSize}
        style={{ ...colorStyle, ...sizeStyle }}
      >
        <span className="visually-hidden">{label}</span>
      </Spinner>
      {label && <small className="text-muted mt-2">{label}</small>}
    </div>
  );

  if (fullPage) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "60vh" }}
      >
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default CSpinner;
