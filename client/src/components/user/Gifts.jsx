import { useState } from "react";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";
import useSWR from "swr";

// fake fetcher
const fetcher = (url) =>
  Promise.resolve([
    { name: "Fluffy Pyjamas", id: 1 },
    { name: "Homemade Cookies", id: 2 },
    { name: "DIY soap kit", id: 3 },
  ]);

const Gifts = () => {
  const receiver = "Bob";
  const [showConfetti, setShowConfetti] = useState(false);

  const { id } = useParams(); // get the ID from the URL
  const { data, error } = useSWR(`/user/game/${id}`, fetcher); // use SWR with the ID
  let gifts = [];
  if (data) {
    gifts = data;
  }

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
          {gifts.map((gift) => {
            return <li key={gift.name}>{gift.name}</li>;
          })}
        </ul>
      </div>
      <button onClick={handleClick}>Notify Admin I gave my gift!</button>
      {showConfetti && <Confetti />}
    </>
  );
};

export default Gifts;
