
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

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
      <Navbar title="Emad Textutils" mode = {mode} togglemode = {togglemode}  myStyle={myStyle}></Navbar>
      <Alert alert={alert}></Alert>
      <TextForm showAlert = {showAlert} heading="Enter Text To Analyze"></TextForm>
  
    </>
   
  );
}

export default App;
