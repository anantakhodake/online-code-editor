import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Editor.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
function Editor( ) {
  const [code, setCode] = useState("");
  const textareaRef = useRef(null);
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editors-container">
      <div className="left">
        <label>
          <FontAwesomeIcon className="icon" icon={faHtml5} />
          HTML
        </label>
        <textarea
          id="html-code"
          ref={textareaRef}
          value={code}
          spellCheck="true"
          onChange={handleChange}
        ></textarea>


        <label>
          {" "}
          <FontAwesomeIcon className="icon" icon={faCss3} />
          Css
        </label>
        <textarea
          id="css-code"
          value={code}
          spellCheck="true"
          onChange={handleChange}
        ></textarea>

        <label>
          {" "}
          <FontAwesomeIcon className="icon" icon={faJs} />
          Javascript
        </label>
        <textarea
          id="js-code"
          value={code}
          spellCheck="true"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="right">
        <label>
          <FontAwesomeIcon className="icon" icon={faPlay} />
          Output
        </label>
        <Iframe id="output" width="100%" height="95%" />
      </div>
    </div>
  );
}

export default Editor;
