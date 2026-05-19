import React,{useState}  from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked"+ text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success")


    }
    const handleLoClick = ()=>{
        console.log("Lowercase was Clicked"+ text);
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success")


    }
    const handleClearClick = ()=>{
        let newText ="";
        setText(newText);
        props.showAlert("text claered", "success")


    }
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control my-1" placeholder="Enter your text here" value={text} onChange={handleOnChange} style={{
  backgroundColor: props.mode === 'dark' ? 'black' : 'white',
  color: props.mode === 'dark' ? 'white' : 'black'
}} id="myBox" rows="8"></textarea>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
</div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summery </h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
   </>
  )

}
