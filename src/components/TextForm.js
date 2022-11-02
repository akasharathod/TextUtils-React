import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!", "success");

    }
    const handleClearClick = ()=>{
      // console.log("Uppercase was clicked" + text)
      let newText = "";
      setText(newText)
      props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }



    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

    
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='#042743'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundcolour: props.mode==='#042743'? '#13466e': 'white', color:props.mode=== '#042743'?'grey': 'black'}} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>ClearText</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>


    </div>
    <div className="container" style={{color: props.mode==='#042743'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
