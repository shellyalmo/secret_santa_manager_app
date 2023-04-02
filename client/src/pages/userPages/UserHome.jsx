import "../../styles/secretSanta.css";
const UserHome = () => (
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
        <button>Game1</button>
        <button>Game2</button>
        <button>Game3</button>
      </div>
    </div>
  </div>
);

export default UserHome;
