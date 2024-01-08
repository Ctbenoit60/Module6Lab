import { useState } from "react";

const Singlecat = ({ cat, onDelete }) => {
  return (
    <div className='cat-card'>
      <h2>{cat.name}</h2>
      <p>{cat.latinName}</p>
      <img
        src={cat.image}
        alt={cat.name}
        style={{ width: "100px", height: "100px" }}
      />
      <br />
      <button onClick={() => onDelete(cat.name)}>Delete</button>
    </div>
  );
};

export default Singlecat;