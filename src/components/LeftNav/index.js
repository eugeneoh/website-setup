import React from "react";
import "./styles.css";

const LeftNav = () => {
  return (
    <div className="LeftNav">
      <div className="AboutMe">
        <div className="header">
          NAME
        </div>
        <div className="subheader">
          Laura Zhang
        </div>
        <div className="spacer"/>
        <div className="header">
          ROLE
        </div>
        <div className="subheader">
          Digital Marketer
        </div>
        <div className="spacer"/>
        <div className="header">
          EMAIL
        </div>
        <div className="subheader">
          laurazee@gmail.com
        </div>
        <div className="spacer"/>
        <div className="header">
          PHONE
        </div>
        <div className="subheader">
          1-800-HIRE-ME
        </div>

      </div>
    </div>
  );
}

export default LeftNav;
