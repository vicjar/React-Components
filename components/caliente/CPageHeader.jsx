"use client";

import React from "react";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

export const CPageHeader = ({
  title,
  breadcrumbs,
  action,
}) => {
  return (
    <div className="page-title-box">
      <Row className="align-items-center">
        <Col>
          <h4 className="mb-0">{title}</h4>
          {breadcrumbs && (
            <Breadcrumb className="mt-1">
              {breadcrumbs.map((item, idx) => (
                <BreadcrumbItem key={idx} active={item.active}>
                  {item.href && !item.active ? (
                    <a href={item.href} style={{ color: "#C8102E", textDecoration: "none" }}>
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          )}
        </Col>
        {action && <Col xs="auto">{action}</Col>}
      </Row>
    </div>
  );
};

export default CPageHeader;
