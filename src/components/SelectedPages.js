import React from "react";
import { useLocation } from "react-router-dom";


const SelectedPages = () => {
  const location = useLocation();
  const { selectedPages } = location.state || { selectedPages: [] };

  return (
    <div className="main_lsayout" style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1 >Selected Pages:</h1>
      {selectedPages.length > 0 ? (
        selectedPages.map((page, index) => (
          <h2  key={index}>{page} </h2>
        ))
      ) : (
        <h2>No pages selected</h2>
      )}
    </div>
  );
};

export default SelectedPages;
