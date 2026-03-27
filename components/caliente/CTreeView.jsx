"use client";

import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const TreeItem = ({ node, level, onSelect }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li style={{ listStyle: "none" }}>
      <div
        className="d-flex align-items-center py-1 px-2 rounded"
        style={{
          paddingLeft: `${level * 1.25}rem`,
          cursor: "pointer",
          transition: "background-color 0.15s",
          fontSize: "0.875rem",
        }}
        onClick={() => {
          if (hasChildren) setExpanded(!expanded);
          onSelect?.(node);
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(200, 16, 46, 0.06)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        role="treeitem"
        aria-expanded={hasChildren ? expanded : undefined}
      >
        {hasChildren && (
          <span style={{ width: "20px", display: "inline-flex", alignItems: "center", justifyContent: "center", marginRight: "4px", color: "#6B6B6B", transition: "transform 0.2s", transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}>
            <FiChevronRight size={12} />
          </span>
        )}
        {!hasChildren && <span style={{ width: "24px", display: "inline-block" }} />}
        {node.icon && <span className="me-2 d-inline-flex align-items-center" style={{ color: "#C8102E" }}>{node.icon}</span>}
        <span>{node.label}</span>
      </div>
      {hasChildren && expanded && (
        <ul className="m-0 p-0" role="group">
          {node.children.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const CTreeView = ({
  data,
  onSelect,
  className = "",
}) => {
  return (
    <ul className={`m-0 p-0 ${className}`.trim()} role="tree">
      {data.map((node) => (
        <TreeItem key={node.id} node={node} level={0} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default CTreeView;
