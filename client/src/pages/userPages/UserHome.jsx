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
            playing Secret Santa games!
          </h2>
          <h4>
            Here you can see who is your gift receiver and get customized gift
            ideas.
          </h4>
          <h4>
            If you are an admin, you can randomly assign a gift receiver for
            each participant, and keep track of their progress in the game.
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
              <button
                type="submit"
                onClick={joinClickHandler}
                className="success-btn"
              >
                Join Game
              </button>
            </form>
          </section>
          <h4>Continue Existing Games:</h4>

          {games.length > 0 ? (
            games.map((game) => {
              const isAdmin = game?.admin === currentUser?.data?.id;
              return (
                <span key={game.id}>
                  <Link to={"/user/game/" + game.id}>
                    <button
                      key={game.id + "btn"}
                      className={
                        game.theme === "Eid Al Fitr"
                          ? "eid-btn"
                          : `${game.theme.toLowerCase()}-btn`
                      }
                    >
                      {game.theme}, created at:{" "}
                      {new Date(game.createdAt).toLocaleDateString()}
                    </button>
                  </Link>
                  {isAdmin && (
                    <Link key={game.id + "admin"} to={"/admin/game/" + game.id}>
                      <button key={game.id + "adminBtn"}>
                        Go to Admin page
                      </button>
                    </Link>
                  )}
                </span>
              );
            })
          ) : (
            <p>no existing games were found.</p>
          )}
        </div>
        <h4>Or:</h4>
        <Link to="/admin/gamesettings" key="new-game-button">
          <button className="success-btn">Start a New Game</button>
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
