import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MAIN from "./Pages/Main.jsx";
import SLIDER from "./Pages/Slider.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MAIN />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
