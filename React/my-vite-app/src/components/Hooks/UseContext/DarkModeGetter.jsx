import React, { useContext } from "react";
import { modeContext } from "./DarkModeProvider";

const DarkModeGetter = () => {
  const { mode, setmode } = useContext(modeContext);
  return (
    <div>
      <div
        style={{
          backgroundColor: mode === "light" ? "white" : "#111",
          color: mode === "light" ? "black" : "white",
          height: "100vh",
          displa: "flex",
        }}
      ></div>

      <div className={`mode==='light'? bg-[#121212]: [#FFFFFF]`}></div>
      <h3>Mode is : {mode}</h3>
      <button
        className="border border-amber-700 m-1.5"
        onClick={() => setmode(mode === "light" ? "dark" : "light")}
      >
        Click
      </button>
    </div>
  );
};

export default DarkModeGetter;
