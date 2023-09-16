import React, { useState } from "react";
import Modal from "react-modal";

const InfoModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Info Modal"
    >
      <h2>Info Modal Content</h2>
      <p>This is the information about the ball.</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default InfoModal;
