import "../../styles/secretSanta.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { secretSantaApi } from "../../api/api";

const createGame = (theme) => {
  if (theme === "") {
    alert("Game must have a theme");
    return Promise.reject();
  }
  return secretSantaApi.post("/admin/gamesettings", { theme });
};

const GameSettings = () => {
  const nav = useNavigate();
  const [theme, setTheme] = useState("");

  // themes are part of frontend code, not DB
  const themes = [
    { name: "Christmas", className: "christmas", id: 1 },
    { name: "Purim", className: "purim", id: 2 },
    { name: "Eid Al Fitr", className: "eid", id: 3 },
  ];

  return (
    <>
      <div>
        <h1>Choose a Holiday Theme:</h1>
      </div>
      <div className="themes">
        {themes.map((theme) => {
          return (
            <button
              className={`${theme.className}-btn`}
              key={theme.name}
              onClick={() => {
                setTheme(theme.name);
              }}
            >
              {theme.name}
            </button>
          );
        })}
      </div>

      <button
        onClick={async () => {
          try {
            const res = await createGame(theme);
            nav(res.data.url);
          } catch (error) {
            console.error("");
          }
        }}
      >
        Create a New Game
      </button>
    </>
  );
};

export default GameSettings;
