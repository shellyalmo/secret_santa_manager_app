import "../../styles/secretSanta.css";
import useSWR from "swr";
import { Link, useParams } from "react-router-dom";

// fake fetcher
const fetcher = (url) =>
  Promise.resolve([
    { name: "Christmas", className: "christmas", id: 1 },
    { name: "Purim", className: "purim", id: 2 },
    { name: "Eid Al Fitr", className: "eid", id: 3 },
  ]);

const GameSettings = () => {
  const { id } = useParams(); // get the ID from the URL

  const { data, error } = useSWR("/admin/gamesettings", fetcher);
  // use SWR with the ID
  let themes = [];
  if (data) {
    themes = data;
  }
  return (
    <>
      <div>
        <h1>Choose a Holiday Theme:</h1>
      </div>
      <div className="themes">
        {themes.map((theme) => {
          return (
            <button className={`${theme.className}-btn`} key={theme.name}>
              {theme.name}
            </button>
          );
        })}
      </div>
      <Link to={"/admin/game/" + id}>
        <button>Start Game</button>
      </Link>
      <div>
        <p>Share Game Link:</p>
        <Link to={"/invite/game/" + id}>
          <button>http://game/24dg&5456h8^*v</button>
        </Link>
      </div>
    </>
  );
};

export default GameSettings;
