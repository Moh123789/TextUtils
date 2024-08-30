import React, { useState } from 'react'


export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);   // This is used to go ahead in text. If you do not right this then new or updated text will not be added in this textarea.
    }

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted into Uppercase", "success");
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted into Lowecase", "success");
    }

    const handleClearClick = () => {
        let newtext = "";
        setText(newtext);
        props.showalert("Clear the Message", "success");
    }

    const [text, setText] = useState("Enter the here");  // enter text here is the value of text and to add and update new text in text value we have to use setText function.

    return (
        <>
            <div className='container my-5'>
                <div>
                    <h2>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleClearClick}> Clear </button>
            </div>

            {/* Next topic . Count the word and characters and time of read read words ,
             give preview which a person can easily read 
             
             split is used to give space and we count that if 1 space than 1 word if 2 space than 2 words
             
             to read 125 words 1 minute is neccesary(by google ) so to read 1 word 0.008 minute is needed*/}

            <div className='container my-3'>
                <h2> Your text Summary </h2>
                <p>Words : {text.split(' ').filter((element) => { return element.length !== 0 }).length} and Characters : {text.length}</p>
                <p>Time taken to read the whole text : {0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} minutes </p>
                <h3 className='my-2'> Preview </h3>
                <p> {text.length > 0 ? text : "Please Enter Something in text box to preview here !!! "} </p>
            </div>

        </>
    )
}
