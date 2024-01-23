import logo from "./logo.svg";
import "./App.css";
import HtmlEditor from "./components/HtmlEditor";

import CssEditor from "./components/CssEditor";
import JsEditor from "./components/JsEditor";
import Editor from "./components/Editor";


function App() {
  return (
    <>
      <div className="left">
        <div className="left-v">
        <HtmlEditor />
        <CssEditor/>
        <JsEditor/>
        </div>
      </div>
      <div className="right">
      </div>
    </>
  );
}

export default App;
