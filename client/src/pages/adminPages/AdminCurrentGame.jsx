import "../../styles/secretSanta.css";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
useAxios;

const CurrentGame = () => {
  const { id } = useParams();

  const { data, error } = useAxios(`/admin/game/${id}`);
  let participants = [];

  if (data) {
    participants = data;
  }
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
          <button type="">Click to copy</button>
        </section>
        <h3>List of Participants:</h3>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => {
              return (
                <tr key={participant.id}>
                  <td>{participant.fullName}</td>
                  <td>{participant.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button>Assign to Couples</button>
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
                  <td>{participant.fullName}</td>
                  <td>{participant.email}</td>
                  <td>{participant.receiver}</td>
                  <td>{participant.finished.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CurrentGame;
