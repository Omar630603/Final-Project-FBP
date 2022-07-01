import React from "react";

const List = (props) => {
  return (
    <div className="list-container">
      <div className="list-info">
        <h3>{props.list.name}</h3>
      </div>
      <div className="list-movies"></div>
    </div>
  );
};
export default List;
