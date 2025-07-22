import React, {useState} from 'react'

 
export default function TextForm(props) {
    const upperCase=()=>{
        // console.log("upper case Appear" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clearText=()=>{
        // console.log("upper case Appear" + text);
        let newText = '';
        setText(newText);
    }

    const handleOnChnage=(event)=>{
        // console.log("Text Format Change");
        setText(event.target.value);
    }

    const [text, setText] = useState(' ');
    // setText("Hello Suraj, Type here");
// ///////////// Convert proper case////////////////////////
    const properCase=()=>{
        console.log("proper case appear" + text);
        // let newText=("hello suraj");
        // let newText=text.toLowerCase();
        // console.log(newText);

let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
        setText(newText);
    }
    //////////////////Convert Lower case///////////////
    const lowerCase=()=>{
        // console.log("Lower Case Appear");
        let newText=text.toLowerCase();
        // console.log(newText);
        setText(newText);
    }
    const removeExtraSpace=()=>{
        // console.log("removeExtraSpace");
        let newText=text.split(/[ ]+/);
        // console.log(newText);
        setText(newText.join(" "));
    }
    const copyWordText=()=>{
        // console.log("copyWordText");
        // console.log(text);
        navigator.clipboard.writeText(text)
    }
// console.log("Mode is: ", props.mode);////it is used for check mode


  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChnage} id="textCopy" rows="5" style={{backgroundColor: props.mode==='light'?'white':'#5f5c5c',color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={upperCase}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={properCase}>Convert to Proper Case</button>
        <div className="button btn btn-primary mx-1" onClick={lowerCase}> Convert Lower Case</div>
        <div className="button btn btn-primary mx-1" onClick={clearText}> Clear Text</div>
        <div className="button btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</div>
        <div className="button btn btn-primary mx-1" onClick={copyWordText}>Copy Word Text</div>
    </div>
    <div className="container">
        <h2 className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>text Summary</h2>
                                                     {/* /\s/g ✅	Removes all whitespace (space, tab, newline) */}
        {/* <p style={{color: props.mode==='dark'?'white':'black'}}>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.replace(/\s/g, "").length} characters</p> */}
        <p style={{color: props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element)=>{
           return element.length!=0 }).length} words and {text.replace(/\s/g, "").length} characters</p>
        <p style={{color: props.mode==='dark'?'white':'black'}}>{0.008*text.split(" ").length} minutes</p>
        <h2 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h2>
        <p style={{color: props.mode==='dark'?'white':'black'}} >{text}</p>
    </div>
    </>
  )
}
