import React, { useState } from "react";
import "./PopupMessage.css"; // Assuming you placed the CSS in this file

const PopupMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission and show the popup message
    setShowMessage(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // 3 seconds
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Submit</button>
      </form>

      {/* Popup Message */}
      <div className={`popup-message ${showMessage ? "show" : ""}`}>
        Thankyou for the response!
      </div>
    </div>
  );
};

export default PopupMessage;
