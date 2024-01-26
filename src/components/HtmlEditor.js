import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "./HtmlEditor.css";
import { Editor } from "@monaco-editor/react";
function HtmlEditor() {
  return (
    <div>
      <div className="html-container">
        <label className="html-label">
          <FontAwesomeIcon className="html-icon" icon={faHtml5} />
          HTML
        </label>
        <Editor
          height="400px"
          width="100%"
          defaultLanguage="html"
          defaultValue="type your code here"
          theme="vs-dark"
        />
      </div>
    </div>
  );
}

export default HtmlEditor;
