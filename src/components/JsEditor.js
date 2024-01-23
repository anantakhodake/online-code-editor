import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./JsEditor.css"


function JsEditor() {
  const [code, setCode] = useState("");
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <div className="js-container">
      <label className="js-label">
        <FontAwesomeIcon className="js-icon" icon={faHtml5} />
        Javascript
      </label>
      <textarea
        onChange={handleChange}
        value={code}
        className="js-code"
        spellCheck="true"
      ></textarea>
    </div>
  );
}

export default JsEditor;
