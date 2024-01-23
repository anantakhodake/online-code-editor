import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Editor.css";
import Prism from "prismjs";
import Iframe from "react-iframe";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function Editor() {
  return (
    <div className="code-editors-container">
      <div className="output">
      <label>
          <FontAwesomeIcon className="icon" icon={faPlay} />
          Output
        </label>
        <Iframe
          className="iframe"
          srcDoc={code}
          title="Online Code Editor"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="400px"
        />  
      </div>
    </div>
  );
}

export default Editor;
