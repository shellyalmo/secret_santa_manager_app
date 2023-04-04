import "../../styles/secretSanta.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

const createGame = (theme) => {
  if (theme === "") {
    alert("Game must have a theme");
    return Promise.reject();
  }
  return Promise.resolve("/admin/game/85641614");
};

const GameSettings = () => {
  const nav = useNavigate();
  const [theme, setTheme] = useState("");

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
          //TODO: create game route
          try {
            const url = await createGame(theme);
            nav(url);
          } catch (error) {
            console.error("");
          }
        }}
      >
        Start Game
      </button>
    </>
  );
};

export default GameSettings;
