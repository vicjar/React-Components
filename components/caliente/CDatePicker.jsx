"use client";

import React, { useState } from "react";
import { FormGroup, Label, Popover, PopoverBody } from "reactstrap";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const CDatePicker = ({
  label,
  value,
  onChange,
  placeholder = "Select a date...",
  required = false,
  id,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value || new Date());
  const pickerId = id || "date-picker-trigger";

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const selectDate = (day) => {
    const selected = new Date(year, month, day);
    onChange?.(selected);
    setIsOpen(false);
  };

  const isSelected = (day) => {
    if (!value) return false;
    return value.getDate() === day && value.getMonth() === month && value.getFullYear() === year;
  };

  const isToday = (day) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  };

  const formatDate = (d) => {
    if (!d) return "";
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <FormGroup className={className}>
      {label && (
        <Label className="form-label fw-medium" style={{ fontSize: "0.875rem" }}>
          {label}
          {required && <span className="text-danger ms-1">*</span>}
        </Label>
      )}
      <div className="position-relative">
        <input
          type="text"
          id={pickerId}
          className="form-control"
          value={formatDate(value)}
          placeholder={placeholder}
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        />
        <span className="position-absolute end-0 top-50 translate-middle-y pe-3 text-muted" style={{ pointerEvents: "none" }}>
          <FiCalendar size={16} />
        </span>
      </div>
      <Popover
        isOpen={isOpen}
        target={pickerId}
        toggle={() => setIsOpen(false)}
        placement="bottom-start"
        trigger="legacy"
      >
        <PopoverBody className="p-2" style={{ width: "280px" }}>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <button className="btn btn-sm btn-light" onClick={prevMonth} type="button" aria-label="Previous month">
              <FiChevronLeft size={14} />
            </button>
            <span className="fw-semibold" style={{ fontSize: "0.875rem" }}>
              {MONTHS[month]} {year}
            </span>
            <button className="btn btn-sm btn-light" onClick={nextMonth} type="button" aria-label="Next month">
              <FiChevronRight size={14} />
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", textAlign: "center" }}>
            {DAYS.map((d) => (
              <div key={d} style={{ fontSize: "0.75rem", fontWeight: 600, color: "#A0A0A0", padding: "4px 0" }}>
                {d}
              </div>
            ))}
            {cells.map((day, i) => (
              <button
                key={i}
                type="button"
                disabled={day === null}
                onClick={() => day && selectDate(day)}
                className="btn btn-sm p-0"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "none",
                  fontSize: "0.8125rem",
                  fontWeight: isSelected(day || 0) ? 600 : 400,
                  backgroundColor: isSelected(day || 0) ? "#C8102E" : "transparent",
                  color: isSelected(day || 0) ? "#fff" : isToday(day || 0) ? "#C8102E" : "#1A1A1A",
                  visibility: day === null ? "hidden" : "visible",
                  cursor: day ? "pointer" : "default",
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </PopoverBody>
      </Popover>
    </FormGroup>
  );
};

export default CDatePicker;
