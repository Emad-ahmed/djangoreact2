import React, { useState } from 'react'
import "../App.css"



export default function TextForm(props) {
  const handleUpClick = () =>{
    let mytext = text.toUpperCase()
    setText(mytext)
  }
  const handleLowerClick = () =>{
    let mytext = text.toLowerCase()
    setText(mytext)
  }

  const copyText = () =>{
    let mytext = document.getElementById("mybox");
    mytext.select()
    document.execCommand('copy')
  }

  const handleChange = (event) =>{
    setText(event.target.value)
  }

  const [text, setText] = useState("");
 
  return (
    <>
    <div className="container mt-2">
<div className="mb-3">
<h1 className='mb-4 text-center fw-bold'>{props.heading}</h1>

  <textarea className="form-control form-control-sm" value={text} onChange={handleChange} id="mybox" rows="10" cols="2"></textarea>
  <button className="btn btn-primary btn-sm mx-2  mt-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-warning btn-sm mx-2  mt-2" onClick={handleLowerClick}>Convert To Lowercase</button>
  <button className="btn btn-warning btn-sm mx-2 mt-2" onClick={copyText}>Copy</button>
</div>
</div>
  <div className="container">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   
  </div>
</>

  )
}
