import "../../styles/secretSanta.css";

const CurrentGame = () => (
  <>
    <div>
      <h1>Current Game</h1>
      <h3>List of Participants:</h3>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>alfred@gmail.com</td>
          </tr>
          <tr>
            <td>Maria Anders</td>
            <td>maria@gmail.com</td>
          </tr>
          <tr>
            <td>Michelle Anderson</td>
            <td>michelle@gmail.com</td>
          </tr>
          <tr>
            <td>Josh Yoahueburg</td>
            <td>josh@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <button>Assign to Couples</button>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Receiver</th>
            <th>Finished</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>alfred@gmail.com</td>
            <td>Michelle Anderson</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Maria Anders</td>
            <td>maria@gmail.com</td>
            <td>Alfreds Futterkiste</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Michelle Anderson</td>
            <td>michelle@gmail.com</td>
            <td>Josh Yoahueburg</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Josh Yoahueburg</td>
            <td>josh@gmail.com</td>
            <td>Maria Anders</td>
            <td>❌</td>
          </tr>
        </tbody>
      </table>
      <button>Close Game</button>
    </div>
  </>
);

export default CurrentGame;
