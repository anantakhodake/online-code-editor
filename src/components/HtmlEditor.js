import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "./HtmlEditor.css";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
function HtmlEditor() {
  return (
    <div>
      <Editor height="90vh" width={"100vw"} defaultLanguage="javascript" defaultValue="const result = new URL(google);" />
      {/* <div className="html-container">
        <label className="html-label">
          <FontAwesomeIcon className="html-icon" icon={faHtml5} />
          HTML
        </label>
        <textarea spellCheck="true" className="html-code"></textarea>
      </div> */}
    </div>
  );
}

export default HtmlEditor;
