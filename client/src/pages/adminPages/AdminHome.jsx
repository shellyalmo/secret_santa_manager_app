import "../../styles/secretSanta.css";
import useSWR from "swr";

// fake fetcher
const fetcher = (url) =>
  Promise.resolve([
    { name: "bigso santa", id: 1 },
    { name: "eid now", id: 2 },
    { name: "purim schmurim", id: 3 },
  ]);

const AdminHome = () => {
  const { data, error } = useSWR("/user", fetcher);
  let games = [];
  console.log(data);
  if (data) {
    games = data;
  }
  return (
    <div className="home-background">
      <div className="home-content">
        <div>
          <h1>Secret Santa Manager App</h1>
          <h2>
            Hello Admin! Welcome to the easiest platform for managing Secret
            Santa games!
          </h2>
          <h4>
            Here you can assign participants to couples randomly and keep track
            of their progress in the game.
          </h4>
          <h4>
            Our App also supports themes for Purim's game ("Gamad-Anak") and for
            "Eid al-Fitr".
          </h4>
        </div>
        <div className="games-list">
          <button className="start-game-btn">Start a New Game</button>
          <h4>Continue Existing Games:</h4>
          {games.map((game) => (
            <button key={game.id}>{game.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
