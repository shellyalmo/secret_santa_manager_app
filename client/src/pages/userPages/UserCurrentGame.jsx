import React from "react";
import Gifts from "../../components/user/Gifts";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const UserCurrentGame = () => {
  const { id } = useParams();
  const { data: userGames, error } = useAxios("/user");
  const result = userGames?.find((game) => game.id === id);
  const gameStarted = result?.isStarted;
  const { data: currentUser } = useAxios("/auth/current-user");

  const currentUserFinishedAssignments = userGames?.some((game) =>
    game.assignments.some(
      (assignment) =>
        assignment.giver === currentUser.data.id && assignment.finished
    )
  );
  console.log(currentUserFinishedAssignments);
  return (
    <>
      {gameStarted && !currentUserFinishedAssignments ? (
        <Gifts />
      ) : currentUserFinishedAssignments ? (
        <div>Thanks for playing, bye!</div>
      ) : (
        <div>Wait for admin to start the game!</div>
      )}
    </>
  );
};

export default UserCurrentGame;
