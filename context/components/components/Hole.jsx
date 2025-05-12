import React from "react";
import "./Hole.css"; // Optional for styling

const Hole = ({ hasMole, onClick }) => {
  return (
    <div className="hole">
      {hasMole && <div className="mole" onClick={onClick} />}
    </div>
  );
};

export default Hole;
