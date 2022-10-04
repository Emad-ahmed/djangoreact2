import React, { useState } from 'react'
import "../App.css"



export default function TextForm(props) {
  const handleUpClick = () =>{
    if(text === "")
    {
      props.showAlert("No text Here", "danger")
    }
    else{
      let mytext = text.toUpperCase()
      setText(mytext)
      props.showAlert("Coverted To Uppercase", "success")
    }
    
  }
  const handleLowerClick = () =>{
    if (text === ""){
      props.showAlert("No text Here", "danger")
    } else{
      let mytext = text.toLowerCase()
      setText(mytext)
      props.showAlert("Coverted To Lowercase", "success")
    }
   
  }

  

  const clearText = () =>{
    if(text==="")
    {
      props.showAlert("No Text Here", "danger")
    } else{
      setText("")
      props.showAlert("Clear Text", "success")
    }
    
  }

  const copyText = () =>{
    if (text === "")
    {
      props.showAlert("No Text Here", "danger")
    } else
    {
      let mytext = document.getElementById("mybox");
      mytext.select()
      document.execCommand('copy')
      props.showAlert("Copied To Clipboard", "success")
    }
    
  }

  const handleExtraSpaces = () =>{
    let mytext = text.replace(/^\s+|\s+$/gm,'');
    setText(mytext);
    props.showAlert("Removed Extra Spaces", "success")
  }

  const handleChange = (event) =>{
    setText(event.target.value)
  }

  

  const [text, setText] = useState("");

  function wordCount(content){
    if(content===""){
      return 0;
    }
    let arr = content.split(" ");
    let len = arr.length;
    let count=0;
    
    for(let i=0;i<len;i++){
      if(arr[i]==='' || arr[i]===' '){
         count++;
      }
    }
    return len-count;
  }
 
  return (
    <>
    <div className="container mt-2">
<div className="mb-3">
<h1 className='mb-4 text-center fw-bold'>{props.heading}</h1>

  <textarea className="form-control form-control-sm"  value={text} onChange={handleChange} id="mybox" style={{backgroundColor:props.mode === 'dark'?'black' : 'white'}} rows="10" cols="2"></textarea>
  <button className="btn btn-primary btn-sm mx-2  mt-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-warning btn-sm mx-2  mt-2" onClick={handleLowerClick}>Convert To Lowercase</button>
  <button className="btn btn-success btn-sm mx-2  mt-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button className="btn btn-warning btn-sm mx-2 mt-2" onClick={copyText}>Copy</button>
  <button className="btn btn-danger btn-sm mx-2 mt-2" onClick={clearText}>Clear</button>
</div>
</div>
  <div className="container">
    <h1>Your Text Summary</h1>
    <p>{wordCount(text)} Words {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something"}</p>
   
  </div>
</>

  )
}
