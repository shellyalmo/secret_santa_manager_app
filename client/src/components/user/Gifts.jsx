import { useState } from "react";
import Confetti from "react-confetti";

const Gifts = () => {
  const receiver = "Bob";
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  return (
    <>
      <h2>Your receiver is {receiver}!</h2>
      <form action="">
        <label htmlFor="">
          Describe what {receiver} is like, and what {receiver} likes to do and
          eat. Please add any information that can help us find the perfect gift
          ideas:
        </label>
        <textarea
          name="textarea"
          rows="10"
          cols="50"
          maxLength="500"
        ></textarea>
        <button>Submit</button>
      </form>
      <div>
        <h3>Gift Ideas for {receiver}:</h3>
        <ul>
          <li>Fluffy Pyjamas</li>
          <li>Homemade Cookies</li>
          <li>Cat Ears</li>
        </ul>
      </div>
      <button onClick={handleClick}>Notify Admin I gave my gift!</button>
      {showConfetti && <Confetti />}
    </>
  );
};

export default Gifts;
