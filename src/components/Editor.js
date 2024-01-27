import React from "react";
import "./Editor.css";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function Editor({codeToRender}) {
  return (
      <div className="output">
      <label>
          <FontAwesomeIcon className="icon" icon={faPlay} />
          Output
        </label>
        <iframe srcDoc={codeToRender} height={"400px"} width={"100%"}></iframe>
        
    </div>
  );
}

export default Editor;
