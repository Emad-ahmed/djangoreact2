
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Bmi from './components/Bmi'
import Cal from './components/Cal';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setDarkmode] = useState("light")
  const [myStyle, MysetStle] = useState({
    color : '#042743',
})


  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) =>
  {
    setAlert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () =>{
    if(mode === "light")
    {
      setDarkmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success")
      MysetStle({
        color : 'white',
    })
    document.title = "Textutils - Dark Mode"
    } else{
      setDarkmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode Disabled", "warning")
      MysetStle({
        color : 'black',
    })
    
    }
  }
  
  return (
    <>

    <Router>
      <Navbar title="Emad Textutils" mode = {mode} togglemode = {togglemode}   myStyle={myStyle}></Navbar>
      <Alert alert={alert}></Alert>
     
      
     
      <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter Text To Analyze"></TextForm>} />
        <Route exact path="/about" element={<About></About>} />
        <Route exact path="/bmi" element={<Bmi></Bmi>} />
        <Route exact path="/cal" element={<Cal></Cal>} />
      </Routes>


    </Router>
    </>
   
  );
}

export default App;
