import React from "react";
import "../Index.css";
import { Link, useMatch } from "react-router-dom";

const Genrebuttons = (props) => {
  const match = useMatch("/genre/*");
  return (
    <li className="link-active">
      <Link
        className="genreName"
        to={`${match.pathnameBase}/movies/${props.genre.name}`}
      >
        {props.genre.name}
      </Link>
    </li>
  );
};
export default Genrebuttons;
