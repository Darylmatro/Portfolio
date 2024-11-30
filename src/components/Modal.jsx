import React from "react";

const Modal = ({ message, type }) => {
  // Choisir une couleur en fonction du type
  const backgroundColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg text-white text-center ${backgroundColor}`}
    >
      {message}
    </div>
  );
};

export default Modal;
