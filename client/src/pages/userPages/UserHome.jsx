import "../../styles/secretSanta.css";
import { secretSantaApi } from "../../api/api";
import useSWR from "swr";

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
    { name: "bigso santa", id: 1 },
    { name: "eid now", id: 2 },
    { name: "purim schmurim", id: 3 },
  ]);

const UserHome = () => {
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
            Hello! Welcome to the easiest platform for participating in Secret
            Santa games!
          </h2>
          <h4>
            Here you can see who is your gift receiver and get customized gift
            ideas.
          </h4>
          <h4>
            Our App also supports themes for Purim's game ("Gamad-Anak") and for
            "Eid al-Fitr".
          </h4>
        </div>
        <div className="games-list">
          <h4>Continue Existing Games:</h4>
          {games.map((game) => (
            <button key={game.id}>{game.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
