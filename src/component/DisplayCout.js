import React, { useEffect, useState } from "react";
import "../../src/index.css";
function DisplayCout() {
  const [text, setText] = useState("");
  const [textLetter, setLetter] = useState(0);

  useEffect(() => {
    const textSplit = text.split(" ");
    setLetter(textSplit.length);
    console.log(textLetter);
  });
  return (
    <div className="">
      <div className="wpCout">
        <div className="cout-item">
          <p>Word:{text.length}</p>
        </div>
        <div className="cout-item">
          <p>letter:{textLetter}</p>
          <p></p>
        </div>
        <div className="cout-item">
          <p>Paragraph</p>
          <p></p>
        </div>
      </div>
      <textarea
        value={text}
        className=""
        rows="9"
        cols="70"
        placeholder="Enter/Paste Your Text Here"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>
        <button className="" onClick={() => setText(text.toUpperCase())}>
          Click to Uppercase
        </button>
        <button className="" onClick={() => setText(text.toLowerCase())}>
          Click to Lowercase
        </button>
      </div>
    </div>
  );
}

export default DisplayCout;
