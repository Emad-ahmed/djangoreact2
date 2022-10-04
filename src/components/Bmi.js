import React, {useState} from 'react'


export default function Bmi() {
    const [heightext, setHeightText]= useState("");
    const [weightext, setWeightText]= useState("");
    const [bmi, bmiSettext] = useState("");
    const [bmisum, setBmiTotal] = useState("");



    const clickHandlerheight =(event) =>{
        setHeightText(event.target.value)
        
    }
    const clickHandlerweight =(event) =>{
        setWeightText(event.target.value)
        
    }


    

    

    const addCalcualte = () =>
    {
        let height = heightext;
        let weight = weightext;
        
        
        let bmitotal = weight * 703 / Math.pow(height, 2);
        setBmiTotal(bmitotal)
        
        if(height === 0 || weight === 0){
            bmiSettext("Enter A Valid Value");
        }

        else if(bmitotal < 18.5)
        {
            bmiSettext("UnderWeight ");

        }

        else if (bmitotal > 18.5 && bmitotal < 25)
        {
            bmiSettext("Normal Weight ");
        }
        else if (bmitotal > 25 && bmitotal < 30)
        {
            bmiSettext("Over Weight ");
        }
        else{
            bmiSettext("You Are Over");
        }
        
    }

    
 
    
    
    

    
    

  return (
    <div className='container bmicon' >
        <h2 className='text-center fw-bold mt-2 mb-2'>BMI Calculator</h2>
        <div className='bmiview'>
            <h6>Weight(pounds)</h6>
            <input type="number" value={weightext} onChange={clickHandlerweight}  placeholder='Enter Weight' className='form-control' />
            <h6>Height(inch)</h6>
            <input type="number" value={heightext} onChange={clickHandlerheight}   placeholder='Enter Height' className='form-control' />

            
            <div className='text-center mt-4'>
            <button onClick={addCalcualte} className='btn btn-info'>Calculate</button>
            </div>
        </div>

        <div>
        <h2 className='mt-4'>Bmi: <span className='text-info fw-bold'>{bmisum}</span></h2>
            <h3>Your Bmi Is : {bmi} </h3>
    
        </div>
        
    </div>
  )
}
