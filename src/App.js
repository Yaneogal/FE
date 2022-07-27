import React from "react";
import { Route, Routes } from "react-router-dom";
import Write from "./pages/Write";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/write" element={<Write />} />
        <Route path="/write/:id" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;