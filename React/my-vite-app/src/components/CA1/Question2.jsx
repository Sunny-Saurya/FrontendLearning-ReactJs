// 2. Build a toggle theme component (Light / Dark).

// Use useState to store the theme

// When theme changes, update background color of the page

// Store theme in an object like:

// const themes = {
//   light: { background: "white", color: "black" },
//   dark: { background: "black", color: "white" }
// };

// Use destructuring to extract values

// Use inline styling to apply styles dynamically

import { useState } from "react";

function Question2() {
  const themes = {
    light: { background: "white", color: "black" },
    dark: { background: "black", color: "white" }
  };

  const [theme, setTheme] = useState("light");

  // destructure the current theme values
  const { background, color } = themes[theme];

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        background,
        color,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s"
      }}
    >
      <h1>{theme.toUpperCase()} MODE</h1>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          background: color,
          color: background,
          border: "none",
          borderRadius: "5px",
          marginTop: "20px"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Question2;
