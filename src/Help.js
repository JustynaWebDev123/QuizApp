import React,{useState} from "react"



function Help({answer}) {

    const [show,setShow]= useState(false);

    return (
        <div className="show-answers">
        <button onClick={()=>setShow(!show)} >Help</button>
        {show ? <h1 className="answer">{answer}</h1>:null}
        </div>

        
  
      
    )
}
export default Help;