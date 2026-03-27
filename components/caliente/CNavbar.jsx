"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

export const CNavbar = ({
  links = [],
  brandLogo,
  brandText,
  rightContent,
  variant = "dark",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <Navbar
      expand="lg"
      className={`px-3 ${className}`.trim()}
      style={{
        backgroundColor: isDark ? "#1A1A1A" : "#FFFFFF",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <NavbarBrand href="/" className="d-flex align-items-center gap-2">
        {brandLogo && (
          <Image src={brandLogo} alt="Brand Logo" width={120} height={40} style={{ objectFit: "contain" }} />
        )}
        {brandText && (
          <span className="fw-bold" style={{ color: isDark ? "#FFF" : "#1A1A1A", fontSize: "1.125rem" }}>
            {brandText}
          </span>
        )}
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} style={{ borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)" }}>
        <FiMenu size={24} color={isDark ? "#FFF" : "#1A1A1A"} />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          {links.map((link, i) =>
            link.children ? (
              <UncontrolledDropdown nav inNavbar key={i}>
                <DropdownToggle nav caret style={{ color: isDark ? "rgba(255,255,255,0.8)" : "#4A4A4A" }}>
                  {link.label}
                </DropdownToggle>
                <DropdownMenu>
                  {link.children.map((child, ci) =>
                    child.divider ? (
                      <DropdownItem divider key={ci} />
                    ) : (
                      <DropdownItem key={ci} href={child.href}>
                        {child.label}
                      </DropdownItem>
                    )
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <NavItem key={i}>
                <NavLink
                  href={link.href || "#"}
                  active={link.active}
                  style={{
                    color: link.active ? "#C8102E" : isDark ? "rgba(255,255,255,0.8)" : "#4A4A4A",
                    fontWeight: link.active ? 600 : 400,
                  }}
                >
                  {link.label}
                </NavLink>
              </NavItem>
            )
          )}
        </Nav>
        {rightContent && <div className="d-flex align-items-center gap-2">{rightContent}</div>}
      </Collapse>
    </Navbar>
  );
};

export default CNavbar;
