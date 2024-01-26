import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, } from "@fortawesome/free-brands-svg-icons";
import "./CssEditor.css"
import { Editor } from "@monaco-editor/react";
function CssEditor() {
  return (
    <div className="css-container">
      <label className="css-label">
        <FontAwesomeIcon className="css-icon" icon={faCss3} />
        Css
      </label>
      <Editor
          height="400px"
          width="100%"
          defaultLanguage="css"
          defaultValue="type your code here"
          theme="vs-dark"
        />
    </div>
  );
}

export default CssEditor;
