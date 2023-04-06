import React from "react";
import Gifts from "../../components/user/Gifts";
const UserCurrentGame = () => {
  const gameStarted = true; //todo- connect to db and not hardcode here
  return (
    <>
      {gameStarted ? <Gifts /> : <div>Wait for admin to start the game!</div>}
    </>
  );
};

export default UserCurrentGame;
