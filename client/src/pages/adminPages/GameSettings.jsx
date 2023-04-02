import "../../styles/secretSanta.css";
const GameSettings = () => (
  <>
    <div>
      <h1>Choose a Holiday Theme:</h1>
    </div>
    <div className="themes">
      <button className="christmas-btn">Christmas</button>
      <button className="purim-btn">Purim</button>
      <button className="eid-btn">Eid</button>
    </div>
    <button>Start Game</button>
    <div>
      <p>Share Game Link:</p>
      <p>http://gamelink.app</p>
    </div>
  </>
);

export default GameSettings;
