import React from "react";
import "../App.css";

const Menu = ({ canvasRef, setLineColor, setLineWidth, setLineOpacity }) => {

  return (
    <div className="Menu">
      <input
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <label>Brush Width </label>
      <input
        type="range"
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label>Brush Opacity</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
      <label>
      <input
        type="checkbox"
        onChange={(e) => {
          if (e.target.checked) {
            setLineColor("#ffffff"); // Set the brush color to white (the canvas background color) to simulate erasing
            setLineWidth(20); // Set the line width to a larger value for better visibility
          } else {
            setLineColor("black"); // Set the brush color back to black
            setLineWidth(5); // Set the line width back to the default value
          }
        }}
      />
        Clear
      </label>
    </div>
  );
};

export default Menu;
