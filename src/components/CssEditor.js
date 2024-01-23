import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./CssEditor.css"


function CssEditor() {
  return (
    <div className="css-container">
      <label className="css-label">
        <FontAwesomeIcon className="css-icon" icon={faCss3} />
        Css
      </label>
      <textarea
        className="css-code"
      ></textarea>
    </div>
  );
}

export default CssEditor;
