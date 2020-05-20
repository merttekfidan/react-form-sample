import React from "react";

function List({ props }) {
  return (
    <div>
      {props.map((prop, i) => (
        <div key={i} className="row">
          <div className="column" style={{ backgroundColor: "#aaa" }}>
            <h2>{prop.title}</h2>
            <p>{prop.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
