import React, { useRef, useState } from 'react'
import SignatureCanvas from "react-signature-canvas";

const Signature = () => {
    const sigCanvas = useRef({});
    const [savedImage, setSavedImage] = useState(null);

  const clear = () =>{
  sigCanvas.current.clear();
  setSavedImage(null);
  } 

  const save = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    console.log(dataURL);
     setSavedImage(dataURL);
    alert("Signature saved in console as Base64 image");
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <h2>Signature Pad</h2>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 400,
          height: 200,
          className: "sigCanvas",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={clear}>Clear</button>
        <button onClick={save}>Save</button>
      </div>
    </div>

    {savedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <img
            src={savedImage}
            alt="Signature Preview"
            style={{ border: "1px solid #000", width: "400px" }}
          />
        </div>
      )}
    </div>
  )
}

export default Signature
