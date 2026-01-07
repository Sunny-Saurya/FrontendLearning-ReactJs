import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import DataFile from "./DataFile";

const ParentRouting = () => {
  const aboutData = {
    name: "Sunny",
    regno: "123010",
  }


  const NavigateButtons = () => {
    const navigate = useNavigate();
    return (
      <div>
        <button onClick={() => navigate(-1)}>Prev</button>
        <button onClick={() => navigate(1)}>Next</button>
      </div>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about" state={aboutData}>About</Link>
        </div>

        <div>
          <Link to="/contact" state={{ id: 1 }}>Contact</Link>
        </div>

        <div>
          <Link to="/data?name=sunny&regno=123010">Data</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/data" element={<DataFile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ParentRouting;
