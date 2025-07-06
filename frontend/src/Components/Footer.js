import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <h3>E-comm Dashboard</h3>
      <p>Copyright &#169; {year} E-comm Dashboard | All rights reserved.</p>
    </div>
  );
};

export default Footer;
