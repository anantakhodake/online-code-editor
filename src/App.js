import logo from "./logo.svg";
import "./App.css";
import HtmlEditor from "./components/HtmlEditor";
import CssEditor from "./components/CssEditor";
import JsEditor from "./components/JsEditor";
import Editor from "./components/Editor";
import { useState } from "react";


function App() {
  const [htmlCode,setHtmlCode]= useState('')
  const HandleChange=(newcode)=>{
    setHtmlCode(newcode);
  }
  return (
    <>
      <div className="left">
        <HtmlEditor code={htmlCode} onChange={HandleChange}/>
        <CssEditor/>
        <JsEditor/>
        </div>
      <div className="right">
        <Editor />
      </div>
    </>
  );
}

export default App;
