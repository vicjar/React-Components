"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Table, Input, InputGroup, InputGroupText } from "reactstrap";
import { FiSearch, FiX, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { TiArrowSortedUp, TiArrowSortedDown, TiArrowUnsorted } from "react-icons/ti";

// ============================================================
// Icons (react-icons)
// ============================================================

function SearchIcon() {
  return <FiSearch size={14} />;
}

function SortIcon({ direction }) {
  if (direction === "asc") return <TiArrowSortedUp size={14} style={{ marginLeft: 4 }} />;
  if (direction === "desc") return <TiArrowSortedDown size={14} style={{ marginLeft: 4 }} />;
  return <TiArrowUnsorted size={14} style={{ marginLeft: 4, opacity: 0.3 }} />;
}

// ============================================================
// Component
// ============================================================

export function CTable({
  columns,
  data,
  striped = false,
  hover = true,
  responsive = true,
  bordered = false,
  className = "",
  emptyMessage = "No records found.",
  sortable = false,
  searchable = false,
  searchPlaceholder = "Search...",
  paginated = false,
  pageSize: initialPageSize = 5,
  pageSizeOptions = [5, 10, 25, 50],
}) {
  // ------ State ------
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState({ key: "", direction: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  // ------ Search / Filter ------
  const filteredData = useMemo(() => {
    if (!searchable || !searchTerm.trim()) return data;
    const term = searchTerm.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        if (col.searchable === false) return false;
        const val = row[col.key];
        if (val == null) return false;
        return String(val).toLowerCase().includes(term);
      })
    );
  }, [data, searchTerm, searchable, columns]);

  // ------ Sorting ------
  const sortedData = useMemo(() => {
    if (!sortable || !sort.key || !sort.direction) return filteredData;
    const col = columns.find((c) => c.key === sort.key);
    if (!col) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (col.sortFn) {
        return sort.direction === "asc" ? col.sortFn(a, b) : -col.sortFn(a, b);
      }
      const aVal = a[sort.key];
      const bVal = b[sort.key];
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      const aNum = typeof aVal === "string" ? parseFloat(aVal.replace(/[^0-9.-]/g, "")) : Number(aVal);
      const bNum = typeof bVal === "string" ? parseFloat(bVal.replace(/[^0-9.-]/g, "")) : Number(bVal);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sort.direction === "asc" ? aNum - bNum : bNum - aNum;
      }

      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();
      const cmp = aStr.localeCompare(bStr);
      return sort.direction === "asc" ? cmp : -cmp;
    });
  }, [filteredData, sort, sortable, columns]);

  // ------ Pagination ------
  const totalItems = sortedData.length;
  const totalPages = paginated ? Math.max(1, Math.ceil(totalItems / pageSize)) : 1;
  const safePage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    if (!paginated) return sortedData;
    const start = (safePage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, paginated, safePage, pageSize]);

  const handleSearch = useCallback((val) => {
    setSearchTerm(val);
    setCurrentPage(1);
  }, []);

  const handleSort = useCallback((key) => {
    setSort((prev) => {
      if (prev.key !== key) return { key, direction: "asc" };
      if (prev.direction === "asc") return { key, direction: "desc" };
      if (prev.direction === "desc") return { key: "", direction: null };
      return { key, direction: "asc" };
    });
    setCurrentPage(1);
  }, []);

  const handlePageSizeChange = useCallback((size) => {
    setPageSize(size);
    setCurrentPage(1);
  }, []);

  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [];
    if (safePage <= 3) {
      pages.push(1, 2, 3, 4, "ellipsis", totalPages);
    } else if (safePage >= totalPages - 2) {
      pages.push(1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "ellipsis", safePage - 1, safePage, safePage + 1, "ellipsis", totalPages);
    }
    return pages;
  };

  const startItem = totalItems === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endItem = Math.min(safePage * pageSize, totalItems);

  // ============================================================
  // Render
  // ============================================================

  return (
    <div className="ctable-wrapper">
      {(searchable || paginated) && (
        <div className="ctable-toolbar">
          {searchable && (
            <div className="ctable-search">
              <InputGroup size="sm">
                <InputGroupText className="ctable-search-icon">
                  <SearchIcon />
                </InputGroupText>
                <Input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="ctable-search-input"
                />
                {searchTerm && (
                  <button
                    type="button"
                    className="ctable-search-clear"
                    onClick={() => handleSearch("")}
                    aria-label="Clear search"
                  >
                    <FiX size={12} />
                  </button>
                )}
              </InputGroup>
            </div>
          )}
          {paginated && (
            <div className="ctable-pagesize">
              <label className="ctable-pagesize-label">Show</label>
              <Input
                type="select"
                bsSize="sm"
                value={pageSize}
                onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                className="ctable-pagesize-select"
              >
                {pageSizeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </Input>
              <label className="ctable-pagesize-label">entries</label>
            </div>
          )}
        </div>
      )}

      {responsive ? (
        <div className="table-responsive">
          <TableInner />
        </div>
      ) : (
        <TableInner />
      )}

      {paginated && totalItems > 0 && (
        <div className="ctable-pagination">
          <div className="ctable-pagination-info">
            Showing <strong>{startItem}</strong> to <strong>{endItem}</strong> of <strong>{totalItems}</strong> entries
            {searchable && searchTerm && (
              <span className="ctable-pagination-filtered">
                {" "}(filtered from <strong>{data.length}</strong> total)
              </span>
            )}
          </div>
          <nav className="ctable-pagination-nav" aria-label="Table pagination">
            <ul className="ctable-pagination-list">
              <li className={`ctable-page-item ${safePage === 1 ? "disabled" : ""}`}>
                <button type="button" className="ctable-page-btn" onClick={() => setCurrentPage(1)} disabled={safePage === 1} aria-label="First page">
                  <FiChevronsLeft size={14} />
                </button>
              </li>
              <li className={`ctable-page-item ${safePage === 1 ? "disabled" : ""}`}>
                <button type="button" className="ctable-page-btn" onClick={() => setCurrentPage(safePage - 1)} disabled={safePage === 1} aria-label="Previous page">
                  <FiChevronLeft size={14} />
                </button>
              </li>
              {getPageNumbers().map((page, idx) =>
                page === "ellipsis" ? (
                  <li key={`ellipsis-${idx}`} className="ctable-page-item ctable-page-ellipsis">
                    <span className="ctable-page-btn">...</span>
                  </li>
                ) : (
                  <li key={page} className={`ctable-page-item ${safePage === page ? "active" : ""}`}>
                    <button type="button" className="ctable-page-btn" onClick={() => setCurrentPage(page)} aria-label={`Page ${page}`} aria-current={safePage === page ? "page" : undefined}>
                      {page}
                    </button>
                  </li>
                )
              )}
              <li className={`ctable-page-item ${safePage === totalPages ? "disabled" : ""}`}>
                <button type="button" className="ctable-page-btn" onClick={() => setCurrentPage(safePage + 1)} disabled={safePage === totalPages} aria-label="Next page">
                  <FiChevronRight size={14} />
                </button>
              </li>
              <li className={`ctable-page-item ${safePage === totalPages ? "disabled" : ""}`}>
                <button type="button" className="ctable-page-btn" onClick={() => setCurrentPage(totalPages)} disabled={safePage === totalPages} aria-label="Last page">
                  <FiChevronsRight size={14} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {paginated && totalItems === 0 && searchTerm && (
        <div className="ctable-no-results">
          <p>No matching records found for &ldquo;<strong>{searchTerm}</strong>&rdquo;</p>
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleSearch("")}>
            Clear Search
          </button>
        </div>
      )}
    </div>
  );

  function TableInner() {
    return (
      <Table
        striped={striped}
        hover={hover}
        bordered={bordered}
        className={`ctable-table mb-0 ${className}`.trim()}
      >
        <thead>
          <tr>
            {columns.map((col) => {
              const isSortable = sortable && col.sortable !== false;
              const isActive = sort.key === col.key;
              return (
                <th
                  key={col.key}
                  className={`${col.className || ""} ${isSortable ? "ctable-sortable" : ""}`.trim()}
                  onClick={isSortable ? () => handleSort(col.key) : undefined}
                  role={isSortable ? "button" : undefined}
                  tabIndex={isSortable ? 0 : undefined}
                  onKeyDown={isSortable ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleSort(col.key); } } : undefined}
                  aria-sort={isActive && sort.direction ? (sort.direction === "asc" ? "ascending" : "descending") : undefined}
                >
                  <span className="ctable-th-content">
                    {col.header}
                    {isSortable && (
                      <SortIcon direction={isActive ? sort.direction : null} />
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-muted">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            paginatedData.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.key} className={col.className}>
                    {col.render ? col.render(row, (safePage - 1) * pageSize + i) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default CTable;
