import React from "react";

const List = (props) => {
  return (
    <div className="list-container">
      <div className="list-info">
        <h3>{props.list.name}</h3>
        <p>{props.list.createdAt}</p>
      </div>
      <div className="list-movies"></div>
    </div>
  );
};
export default List;
