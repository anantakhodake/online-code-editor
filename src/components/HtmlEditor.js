import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./HtmlEditor.css";

function HtmlEditor() {
  return (
    <div>
      <div className="html-container">
        <label className="html-label">
          <FontAwesomeIcon className="html-icon" icon={faHtml5} />
          HTML
        </label>
        <textarea
          spellCheck="true"
          className="html-code"
        ></textarea>
      </div>
    </div>
  );
}

export default HtmlEditor;
