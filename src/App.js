import React, { useRef, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import QRCode from "qrcode"
import "./App.css"

function Display({ match: { params: { code } } }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, code, (err) => {
      if (err) return console.error("Error generating QR code", err)

      console.log("QR gen success", code)
    })
  }, [code, canvasRef])

  return (
    <div className="qr-container">
      <canvas ref={canvasRef} title={code} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Route path="/:code" component={Display} />
    </Router>
  );
}

export default App;
