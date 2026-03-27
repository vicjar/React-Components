"use client";

import React from "react";

export const CTitle = ({
  children,
  level = 2,
  className = "",
  accent = false,
  subtitle,
}) => {
  const Tag = `h${level}`;
  const sizes = {
    1: "fs-1",
    2: "fs-2",
    3: "fs-3",
    4: "fs-4",
    5: "fs-5",
    6: "fs-6",
  };

  return (
    <div className={`mb-3 ${className}`.trim()}>
      <Tag
        className={`fw-semibold mb-1 ${sizes[level]}`.trim()}
        style={accent ? { borderLeft: "3px solid #C8102E", paddingLeft: "0.75rem" } : undefined}
      >
        {children}
      </Tag>
      {subtitle && <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>{subtitle}</p>}
    </div>
  );
};

export default CTitle;
