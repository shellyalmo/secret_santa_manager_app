import "../../styles/secretSanta.css";
import { useParams } from "react-router-dom";
import useSWR from "swr";

// fake fetcher
const fetcher = (url) =>
  Promise.resolve([
    {
      fullName: "Alfreds Futterkiste",
      email: "alfred@gmail.com",
      receiver: "Michelle Anderson",
      finished: true,
      id: 1,
    },
    {
      fullName: "Maria Anders",
      email: "maria@gmail.com",
      receiver: "Josh Yoahueburg",
      finished: false,
      id: 2,
    },
    {
      fullName: "Michelle Anderson",
      email: "michelle@gmail.com",
      receiver: "Alfreds Futterkiste",
      finished: false,
      id: 3,
    },
    {
      fullName: "Josh Yoahueburg",
      email: "josh@gmail.com",
      receiver: "Maria Anders",
      finished: true,
      id: 4,
    },
  ]);

const CurrentGame = () => {
  const { id } = useParams();

  const { data, error } = useSWR(`/admin/game/${id}`, fetcher);
  let participants = [];

  // secret santa api get games

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
