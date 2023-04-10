import "../../styles/secretSanta.css";
import { useParams } from "react-router-dom";
import { message } from "antd";

import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { secretSantaApi } from "../../api/api";

const CurrentGame = () => {
  const [shuffleCount, setShuffleCount] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const { id } = useParams();

  const { data } = useAxios(`/admin/game/${id}?assignedPairs=${shuffleCount}`);
  let participants = [];

  if (data) {
    participants = data.data;
  }

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Can't shuffle participants after the game started!",
    });
  };

  const assignPairsHandler = async () => {
    // update the participants table
    try {
      const result = await secretSantaApi.put(`/admin/game/${id}`);
    } catch (err) {
      error();

      console.error(err);
    }

    //refetch the data because the url is the dependency and it changed
    setShuffleCount((prev) => prev + 1);
  };

  const startGameHandler = async () => {
    // update the isStarted
    await secretSantaApi.put(`/admin/game/${id}/gamestarted`);
  };

  return (
    <>
      {contextHolder}
      <div>
        <h1>Current Game</h1>

        <section>
          <h3>Instructions to share with your participants:</h3>
          <ol>
            <li>
              Go to:{" "}
              <a href="https://secret-santa-manager-react.onrender.com/">
                login to game
              </a>
            </li>
            <li>After login, type in the game id:{id}</li>
          </ol>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `Go to: login to https://secret-santa-manager-react.onrender.com/. After login, type in the game id:${id}`
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
