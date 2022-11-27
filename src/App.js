import React from "react";
import Article from "./pages/Article";
import DataConnect from "./pages/DataConnect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataConnect />} />
          <Route path="/Article/:articleId" element={<Article />} />
          <Route path="/Article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
