import "../../styles/secretSanta.css";
import useSWR from "swr";

// fake fetcher
const fetcher = (url) =>
  Promise.resolve([
    { name: "Christmas", className: "christmas", id: 1 },
    { name: "Purim", className: "purim", id: 2 },
    { name: "Eid Al Fitr", className: "eid", id: 3 },
  ]);

const GameSettings = () => {
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
      <button>Start Game</button>
      <div>
        <p>Share Game Link:</p>
        <p>http://gamelink.app</p>
      </div>
    </>
  );
};

export default GameSettings;
