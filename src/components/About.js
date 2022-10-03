import React, {useState} from 'react'
import "../App.css"

export default function About() {
    const [myStyle, MysetStle] = useState({
        color : 'black',
        backgroundColor:'white',
        height:'100vh',
    })

    const [btnText, setBtntext] = useState("Enable Dark Mode")

    const toggleStyle = () =>
    {
        if(myStyle.color === 'white')
        {
            MysetStle({
                color : 'black',
                backgroundColor:'white',
                height:'100vh',
            })
            setBtntext("Enable dark Mode")
        } else{
            MysetStle({
                color : 'white',
                backgroundColor:'black',
                height:'100vh',
            })
            setBtntext("Enable Light Mode")
        }
    }
  return (
    <div>
      <div className="about-section" style={myStyle}>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>

        <button onClick={toggleStyle}   className='btn btn-info my-3'>{btnText}</button>
    </div>
    </div>
  )
}
