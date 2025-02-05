import React, {useState} from 'react'
export default function Textform(props) {
  const [text,setText]=useState('');
  const [history, setHistory] = useState([]);
  const change=()=>{
    setHistory([...history, text]);
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const change2=()=>{
    setHistory([...history, text]);
    let newtext=text.toLowerCase();
    setText(newtext)
  }
  const change3=()=>{
    setHistory([...history, text]);
    let newtext=("");
    setText(newtext)
  }
  const change4=()=>{
    if (history.length > 0) {
      const previousText = history[history.length - 1];
      setHistory(history.slice(0, -1)); // Remove the last state from history
      setText(previousText);
    }

  }
  
  const change5=()=>{
    setHistory([...history, text]);
    let newtext=(text.trim().replace(/\s+/g, " "));
    setText(newtext)
  }
  const change6=()=>{
    setHistory([...history, text]);
    let newtext= text.replace(/[^a-zA-Z0-9 ]/g, "");
    setText(newtext)
  }

  const changed=(event)=>{
    setHistory([...history, text]);
    setText(event.target.value)
  }


  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={changed} id="mybox" rows="5"></textarea>
      </div>
      <div className="buttons">
      <button className="btn1 btn-primary" onClick={change}>UpperCase</button>
      <button className="btn1 btn-primary" onClick={change2}>LowerCase</button>
      <button className="btn1 btn-primary" onClick={change3}>Clear Text</button>
      <button className="btn1 btn-primary" onClick={change4}>Undo</button>
      <button className="btn1 btn-primary" onClick={change5}>Removes extra spaces</button>
      <button className="btn1 btn-primary" onClick={change6}>Removes Characters</button>
      </div>
      <h2 className='summary my-3'>Your Text Summary</h2>
      <p>{text.trim().split(/\s+/).filter((word) => word !== "").length} words {text.length} characters</p>
      
    </div>
  )
}
