import React from "react";
import "./Editor.css";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function Editor() {
  return (
      <div className="output">
      <label>
          <FontAwesomeIcon className="icon" icon={faPlay} />
          Output
        </label>
        <Iframe
          className="iframe"
          src={code}
          title="Online Code Editor"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="400px"
        />  
    </div>
  );
}

export default Editor;
