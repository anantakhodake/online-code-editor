import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./CssEditor.css"


function CssEditor() {
  const [code, setCode] = useState("");
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <div className="css-container">
      <label className="css-label">
        <FontAwesomeIcon className="css-icon" icon={faCss3} />
        Css
      </label>
      <textarea
        value={code}
        onChange={handleChange}
        className="css-code"
        spellCheck="true"
      ></textarea>
    </div>
  );
}

export default CssEditor;
