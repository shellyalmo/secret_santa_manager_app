import "../../styles/secretSanta.css";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/secretSanta.css";
import { secretSantaApi } from "../../api/api.js";

const joinGameRequest = (gameId) => {
  return secretSantaApi.put(`/user`, { gameId });
};

const UserHome = () => {
  const [gameId, setGameId] = useState("");

  const nav = useNavigate();

  const { data: userGames, error } = useAxios("/user");
  const { data: currentUser } = useAxios("/auth/current-user");
  let games = [];

  if (userGames) {
    games = userGames;
  }

  const joinClickHandler = async (e) => {
    try {
      e.preventDefault();
      if (gameId) {
        const result = await joinGameRequest(gameId);
        if (result.status === 201) {
          nav(`/user/game/${gameId}`);
        } else {
          alert("fail");
        }
      }
    } catch (error) {
      alert("fail");
    }
  };

  return (
    <div className="home-background">
      <div className="home-content">
        <div>
          <h1>Secret Santa Game App</h1>
          <h2>
            Hello {currentUser?.data.name}! Welcome to the easiest platform for
            participating and managing Secret Santa games!
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
          <section>
            <form>
              <label htmlFor="gameId">Enter game ID: </label>
              <input
                type="text"
                name="gameId"
                onChange={(e) => {
                  setGameId(e.target.value);
                }}
                value={gameId}
                required
              />
              <button type="submit" onClick={joinClickHandler}>
                Join Game
              </button>
            </form>
          </section>
          <h4>Continue Existing Games:</h4>

          {games.length > 0 ? (
            games.map((game) => (
              <Link
                key={game.id}
                to={
                  game.admin
                    ? "/admin/game/" + game.id
                    : "/user/game/" + game.id
                }
              >
                <button key={game.id} className={`${game.theme}-btn`}>
                  {game.name}
                </button>
              </Link>
            ))
          ) : (
            <p>no existing games were found.</p>
          )}
        </div>
        <Link to="/admin/gamesettings">
          <button className="start-game-btn">Start a New Game</button>
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
