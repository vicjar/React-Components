"use client";

import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const CModal = ({
  isOpen,
  toggle,
  title,
  children,
  footer,
  size,
  centered = true,
  scrollable = false,
  className = "",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size={size}
      centered={centered}
      scrollable={scrollable}
      className={className}
    >
      {title && (
        <ModalHeader toggle={toggle} className="border-bottom">
          {title}
        </ModalHeader>
      )}
      <ModalBody>{children}</ModalBody>
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </Modal>
  );
};

export default CModal;
