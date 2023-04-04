import React from "react";
import { Link } from "react-router-dom";

const Invite = () => {
  return (
    <div>
      <h2>Organized by: Michelle Obama</h2>
      <ul>
        Game Details:
        <li>Game id:</li>
        <li>Game theme:</li>
      </ul>
      <Link to="/">
        <button>Join</button>
      </Link>
    </div>
  );
};

export default Invite;
