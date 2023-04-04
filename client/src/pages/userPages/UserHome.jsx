import "../../styles/secretSanta.css";
import { secretSantaApi } from "../../api/api";
import useSWR from "swr";
import { Link, useParams } from "react-router-dom";

// real fetcher
// const fetcher = (url) =>
//   secretSantaApi
//     .get(url, {
//       headers: { Authorization: "Bearer: " + localStorage.getItem("token") },
//     })
//     .then((res) => res.data);
// const { data, error } = useSWR("/auth/current-user", fetcher);

// fake fetcher
const fetcher = (url) =>
  Promise.resolve([
    { name: "bigso santa", id: 1, admin: false },
    { name: "eid now", id: 2, admin: true },
    { name: "purim schmurim", id: 3, admin: false },
  ]);

const UserHome = () => {
  const { id } = useParams(); // get the ID from the URL

  const { data, error } = useSWR("/user", fetcher);
  let games = [];
  console.log(data);
  // secret santa api get games

  if (data) {
    games = data;
  }
  return (
    <div className="home-background">
      <div className="home-content">
        <div>
          <h1>Secret Santa Game App</h1>
          <h2>
            Hello! Welcome to the easiest platform for participating and
            managing Secret Santa games!
          </h2>
          <h4>
            Here you can see who is your gift receiver and get customized gift
            ideas. If you are an admin, you can assign participants to couples
            randomly and keep track of their progress in the game.
          </h4>
          <h4>
            Our App also supports themes for Purim's game ("Gamad-Anak") and for
            "Eid al-Fitr".
          </h4>
        </div>
        <div className="games-list">
          <Link to="/admin/gamesettings">
            <button className="start-game-btn">Start a New Game</button>
          </Link>
          <h4>Continue Existing Games:</h4>
          {games.map((game) => (
            <Link to={game.admin ? "/admin/game/" + id : "/user/game/" + id}>
              <button key={game.id}>{game.name}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
