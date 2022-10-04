import React, {useState} from 'react'




export default function Cal(props) {
  const [result, setResult] = useState("")

  const clickHandler =(event) =>{
    setResult(result.concat(event.target.value))
  }

  const clearDisplay = ()=>{
    setResult("")
  }

  const resultDisplay = ()=>{
    setResult(eval(result).toString())
  }
 
  return (

    

    <div className="container mt-5">
    <div className="mb-3">

      <h1 className='text-center fw-bold'>Emad Calcutor</h1>

      <div className="calc">
          <input type="text" placeholder='0' id='answer' value={result} />
          <input type="button" value="9" className="button" onClick={clickHandler}/>
          <input type="button" value="8" className="button" onClick={clickHandler}/>
          <input type="button" value="7" className="button" onClick={clickHandler}/>
          <input type="button" value="6" className="button" onClick={clickHandler}/>
          <input type="button" value="5" className="button" onClick={clickHandler}/>
          <input type="button" value="4" className="button" onClick={clickHandler}/>
          <input type="button" value="3" className="button" onClick={clickHandler}/>
          <input type="button" value="2" className="button" onClick={clickHandler}/>
          <input type="button" value="1" className="button" onClick={clickHandler}/>

          <input type="button" value="0" className="button" onClick={clickHandler}/>
          <input type="button" value="." className="button" onClick={clickHandler}/>
          <input type="button" value="+" className="button" onClick={clickHandler}/>
          <input type="button" value="-" className="button" onClick={clickHandler}/>
          <input type="button" value="/" className="button" onClick={clickHandler}/>
          <input type="button" value="%" className="button" onClick={clickHandler}/>
          <input type="button" value="*" className="button" onClick={clickHandler}/>
          <input type="button" value="Clear" className="button button1" onClick={clearDisplay}/>
          <input type="button" value="=" className="button button1"  onClick={resultDisplay}/>
      </div>
        
    </div>
    </div>
  )
}