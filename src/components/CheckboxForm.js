import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/CheckboxForm.css';  

const CheckboxForm = () => {
  const [pages, setPages] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (name === "allPages") {
      setPages({
        allPages: checked,
        page1: checked,
        page2: checked,
        page3: checked,
        page4: checked,
      });
    } else {
      setPages((prev) => ({
        ...prev,
        [name]: checked,
        allPages: prev.page1 && prev.page2 && prev.page3 && prev.page4 && checked,
      }));
    }
  };

  const handleSubmit = () => {
    const selectedPages = [];
    if (pages.page1) selectedPages.push("Page 1");
    if (pages.page2) selectedPages.push("Page 2");
    if (pages.page3) selectedPages.push("Page 3");
    if (pages.page4) selectedPages.push("Page 4");

    navigate("/selected-pages", { state: { selectedPages } });
  };

  return (
    <div className="form-container">
      <form>
        <label className="checkbox-label">
          <span>All pages</span>
          <input
            type="checkbox"
            name="allPages"
            checked={pages.allPages}
            onChange={handleChange}
          />
          <span className="custom-checkbox"></span>
        </label>
        <hr />
        <label className="checkbox-label">
          <span>Page 1</span>
          <input
            type="checkbox"
            name="page1"
            checked={pages.page1}
            onChange={handleChange}
          />
          <span className="custom-checkbox"></span>
        </label>
        <label className="checkbox-label">
          <span>Page 2</span>
          <input
            type="checkbox"
            name="page2"
            checked={pages.page2}
            onChange={handleChange}
          />
          <span className="custom-checkbox"></span>
        </label>
        <label className="checkbox-label">
          <span>Page 3</span>
          <input
            type="checkbox"
            name="page3"
            checked={pages.page3}
            onChange={handleChange}
          />
          <span className="custom-checkbox"></span>
        </label>
        <label className="checkbox-label">
          <span>Page 4</span>
          <input
            type="checkbox"
            name="page4"
            checked={pages.page4}
            onChange={handleChange}
          />
          <span className="custom-checkbox"></span>
        </label>
        <hr />

        
        <button type="button" onClick={handleSubmit}>
          Done
        </button>
      </form>
    </div>
  );
};

export default CheckboxForm;
