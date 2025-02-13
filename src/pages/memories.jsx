import React from "react";
import "./memories.css";
import Full from "../assets/full.svg";

export default function Memories() {
  return (
    <div className="memories" id="memories">
      <h1>~ MEMORIES ~</h1>  {/* Move outside timeline */}
      <div className="upper-triangle"></div>
      <div className="timeline">
        {/* Timeline Content */}
      </div>
      <img src={Full} alt="Full" className="memories-img" />
    </div>
  );
}

