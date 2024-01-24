import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { Controlled as CodeMirror } from 'react-codemirror2';
import "./JsEditor.css"


function JsEditor() {
  return (
    <div className="js-container">
      <label className="js-label">
        <FontAwesomeIcon className="js-icon" icon={faHtml5} />
        Javascript
      </label>
      <textarea
        className="js-code"
      ></textarea>
    </div>
  );
}

export default JsEditor;
