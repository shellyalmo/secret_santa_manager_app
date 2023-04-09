import "../../styles/secretSanta.css";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { secretSantaApi } from "../../api/api";

const CurrentGame = () => {
  const [shuffleCount, setShuffleCount] = useState(0);
  const { id } = useParams();

  const { data, error } = useAxios(
    `/admin/game/${id}?assignedPairs=${shuffleCount}`
  );
  let participants = [];

  if (data) {
    participants = data.data;
  }
  const assignPairsHandler = async () => {
    // update the participants table
    await secretSantaApi.put(`/admin/game/${id}`);
    // todo: if shuffle returns 400- make shuffle btn red

    //refetch the data because the url is the dependency and it changed
    setShuffleCount((prev) => prev + 1);
  };

  const startGameHandler = async () => {
    // update the isStarted
    await secretSantaApi.put(`/admin/game/${id}/gamestarted`);
    // todo: if start game returns 400- make startgame btn red
  };
  return (
    <>
      <div>
        <h1>Current Game</h1>

        <section>
          <h3>Instructions to share with your participants:</h3>
          <ol>
            <li>
              Go to: <a href="#">login to game</a>
            </li>
            <li>After login, type in the game id:{id}</li>
          </ol>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `Go to: login to game link. After login, type in the game id:${id}`
              );
            }}
          >
            Click to copy
          </button>
        </section>
        <h3>List of Participants:</h3>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Receiver</th>
              <th>Finished</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => {
              return (
                <tr key={participant.id}>
                  <td>{participant?.fullName}</td>
                  <td>{participant?.email}</td>
                  <td>{participant?.receiver}</td>
                  <td>{participant?.finished?.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={assignPairsHandler}>Shuffle Participants!</button>

        <button onClick={startGameHandler}>Start Game!</button>
      </div>
    </>
  );
};

export default CurrentGame;
