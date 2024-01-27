import logo from "./logo.svg";
import "./App.css";
import HtmlEditor from "./components/HtmlEditor";
import CssEditor from "./components/CssEditor";
import JsEditor from "./components/JsEditor";
import Editor from "./components/Editor";
import { useState } from "react";

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCSSCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  return (
    <>
      <div className="left">
        <HtmlEditor
          code={htmlCode}
          onChange={(e) => setHtmlCode(e)}
        />
        <CssEditor
          code={cssCode}
          onChange={(e) => setCSSCode(e)}
        />
        <JsEditor code={jsCode} onChange={(e) => setJsCode(e)} />
      </div>
      <div className="right">
        <Editor codeToRender={`<style>${cssCode}</style> <body>${htmlCode}</body> <script>${jsCode}</script>`} />
      </div>
    </>
  );
}

export default App;
