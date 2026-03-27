"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

export const CCard = ({
  title,
  subtitle,
  headerAction,
  footer,
  children,
  className = "",
  bodyClassName = "",
  noPadding = false,
}) => {
  return (
    <Card className={className}>
      {(title || headerAction) && (
        <CardHeader className="d-flex align-items-center justify-content-between">
          <div>
            {title && <h5 className="card-title mb-0">{title}</h5>}
            {subtitle && <p className="text-muted mb-0 mt-1" style={{ fontSize: "0.8125rem" }}>{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </CardHeader>
      )}
      <CardBody className={`${noPadding ? "p-0" : ""} ${bodyClassName}`.trim()}>
        {children}
      </CardBody>
      {footer && (
        <CardFooter className="bg-transparent">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default CCard;
