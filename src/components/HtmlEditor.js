import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./HtmlEditor.css"

function HtmlEditor() {
  const [code, setCode] = useState("");
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <div>
    <div className="html-container">
      <label className="html-label">
        <FontAwesomeIcon className="html-icon" icon={faHtml5} />
        HTML
      </label>
      <textarea
        value={code}
        onChange={handleChange}
        className="html-code"
        spellCheck="true"
      ></textarea>
    </div>
    </div>
  );
}

export default HtmlEditor;
