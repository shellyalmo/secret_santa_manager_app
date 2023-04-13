import "../../styles/secretSanta.css";
import { useParams } from "react-router-dom";
import { message, Table } from "antd";

import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { secretSantaApi } from "../../api/api";

const CurrentGame = () => {
  const [shuffleCount, setShuffleCount] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const { id } = useParams();
  const { data: userGames } = useAxios("/user");
  const result = userGames?.find((game) => game.id === id);
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
    <div
      className={`${
        result?.theme === "Eid Al Fitr"
          ? "eid-btn"
          : `${result?.theme.toLowerCase()}-btn `
      } user-instructions-background `}
      style={{ flexDirection: "column", gap: "2%" }}
    >
      {contextHolder}
      <h1>Current Game</h1>
      <section>
        <h3>Instructions to share with your participants:</h3>
        <ol style={{ textAlign: "left" }}>
          <li>
            Go to:{" "}
            <span>
              <a href="https://secret-santa-manager-react.onrender.com/">
                login link
              </a>
            </span>
          </li>
          <li>After login, type in the game id: {id}</li>
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
      <Table
        size="small"
        columns={[
          { title: "Full Name", dataIndex: "fullName", key: "fullName" },
          { title: "Email", dataIndex: "email", key: "email" },
          { title: "Receiver", dataIndex: "receiver", key: "receiver" },
          { title: "Done", dataIndex: "finished", key: "id" },
        ]}
        dataSource={participants}
        pagination={false}
      />
      <div className="admin-actions-btns">
        <button onClick={assignPairsHandler}>Shuffle Participants!</button>
        <button onClick={startGameHandler}>Start Game!</button>
      </div>
    </div>
  );
};

export default CurrentGame;
