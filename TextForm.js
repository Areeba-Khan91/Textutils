import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case!","success");
    }
    const handleLoClick=()=>{
      //console.log("Lowercase was clicked" + text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case!","success");
  }
  const handleClearClick=()=>{
    let newText= '';
    setText(newText)
    props.showAlert("Text cleared!","success");
}

    const handleOnChange=(event)=>{
       // console.log("On Change");
        setText(event.target.value)
    }
    const handleCopy = ()=>{
      var text = document.getElementById("MyBox");
      text.select();
      navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to clipboard!","success");
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success");

    }

    const handleItalicClick = () => {
      const italicMap = {
          'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
          'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
          'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡', 'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥',
          'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯',
          'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹',
          'y': '𝘺', 'z': '𝘻'
      };
  
      let newText = text.split('').map(char => italicMap[char] || char).join('');
      setText(newText);
      props.showAlert("Converted to italic!", "success");
  }  

  const handleBoldClick = () => {
    const boldMap = {
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
        'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
        'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭', 'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱',
        'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻',
        'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅',
        'y': '𝘆', 'z': '𝘇'
    };

    const start = document.getElementById("MyBox").selectionStart;
    const end = document.getElementById("MyBox").selectionEnd;

    if (start !== end) {
        const before = text.slice(0, start);
        const selected = text.slice(start, end);
        const after = text.slice(end);

        let newSelected = selected.split('').map(char => boldMap[char] || char).join('');
        setText(before + newSelected + after);
        props.showAlert("Converted selected text to bold!", "success");
    } else {
        props.showAlert("Please select some text to convert to bold.", "warning");
    }
}


    const[text,setText]=useState('');
    // to change state use set text.

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleItalicClick}>Convert to Italic</button>
<button className="btn btn-primary mx-2" onClick={handleBoldClick}>Convert to Bold</button>

    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary
      </h2>
      <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <p>{(text.match(/[.!?]/g) || []).length + (text.trim().length > 0 && text.match(/[.!?]$/) ? 1 : 0)} sentences</p>
      <h2> Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here!"}</p>
    </div>
    </>

  )
}