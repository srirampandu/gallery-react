import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Upload from "./Upload";
import Sample from "./Sample";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:imgname" element={<Search />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
      {/* <Sample /> */}
    </div>
  );
};

export default App;
