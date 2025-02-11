import React from "react";
import "./Memories.css";
import Full from "../assets/full.svg";

export default function Memories() {
  return (
    <div className="memories" id="memories">
      <div className="upper-triangle"></div>
      <div className="timeline">
        MEMORIES
      </div>
      <img src={Full} alt="Full" />
    </div>
  );
}
