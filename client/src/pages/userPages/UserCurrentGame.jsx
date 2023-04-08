import React from "react";
import Gifts from "../../components/user/Gifts";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const UserCurrentGame = () => {
  const { id } = useParams();
  const { data: userGames, error } = useAxios("/user");
  const result = userGames?.find((game) => game.id === id);
  const gameStarted = result?.isStarted;

  return (
    <>
      {gameStarted ? <Gifts /> : <div>Wait for admin to start the game!</div>}
    </>
  );
};

export default UserCurrentGame;
