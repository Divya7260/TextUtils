import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to uppercase!", "success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted to lowercase!", "success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showalert("Text has been cleared!", "success");
    }
    const handleSpeakClick=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showalert("Speak has been clicked!", "success");
    }
    const handleCopy=()=>{
       // var text= document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text);
       // document.getSelection().removeAllRanges();
        props.showalert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces=()=>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showalert("Extra spaces removed!", "success");
    }



    const handleOnChange=(event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <h2 className='mb-3'>{props.heading} </h2>
     <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
     </div>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpeakClick}>Speak</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Removing extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
} 
