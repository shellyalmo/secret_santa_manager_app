import React from "react";
import Gifts from "../../components/user/Gifts";
const UserCurrentGame = () => {
  const gameStarted = true;
  return (
    <>
      {gameStarted ? <Gifts /> : <div>Wait for admin to start the game!</div>}
    </>
  );
};

export default UserCurrentGame;
