import "../../styles/secretSanta.css";
const AdminHome = () => (
  <div className="home-background">
    <div className="home-content">
      <div>
        <h1>Secret Santa Manager App</h1>
        <h2>
          Hello Admin! Welcome to the easiest platform for managing Secret Santa
          games!
        </h2>
        <h4>
          Here you can assign participants to couples randomly and keep track of
          their progress in the game.
        </h4>
        <h4>
          Our App also supports themes for Purim's game ("Gamad-Anak") and for
          "Eid al-Fitr".
        </h4>
      </div>
      <div className="games-list">
        <button className="start-game-btn">Start a New Game</button>
        <h4>Continue Existing Games:</h4>
        <button>Game1</button>
        <button>Game2</button>
        <button>Game3</button>
      </div>
    </div>
  </div>
);

export default AdminHome;
