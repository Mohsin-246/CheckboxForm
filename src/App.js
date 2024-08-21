import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckboxForm from "./components/CheckboxForm";
import SelectedPages from "./components/SelectedPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CheckboxForm />} />
        <Route path="/selected-pages" element={<SelectedPages />} />
      </Routes>
    </Router>
  );
}

export default App;
