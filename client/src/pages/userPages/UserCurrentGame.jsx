import React from "react";
import Gifts from "../../components/user/Gifts";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import "../../styles/secretSanta.css";

const UserCurrentGame = () => {
  const { id } = useParams();
  const { data: userGames, error } = useAxios("/user");
  const result = userGames?.find((game) => game.id === id);
  const gameStarted = result?.isStarted;
  const { data: currentUser } = useAxios("/auth/current-user");

  const currentUserFinishedAssignments = result?.assignments?.some(
    (assignment) =>
      assignment.giver === currentUser.data.id && assignment.finished
  );

  return (
    <>
      {gameStarted && !currentUserFinishedAssignments ? (
        <Gifts />
      ) : gameStarted && currentUserFinishedAssignments ? (
        <div
          className={`${
            result?.theme === "Eid Al Fitr"
              ? "eid-btn"
              : `${result?.theme.toLowerCase()}-btn`
          } user-instructions-background`}
        >
          <h1>Thanks for playing, see you next time!</h1>
        </div>
      ) : (
        <div
          className={`${
            result?.theme === "Eid Al Fitr"
              ? "eid-btn"
              : `${result?.theme.toLowerCase()}-btn`
          } user-instructions-background`}
        >
          <h1>Wait for admin to start the game!</h1>
        </div>
      )}
    </>
  );
};

export default UserCurrentGame;
