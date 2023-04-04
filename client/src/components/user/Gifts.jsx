import { useState } from "react";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";
import useSWR from "swr";

// fake fetcher
const fetcher = (url) =>
  Promise.resolve({
    receiver: "Bob Shmob",
    gifts: [
      { name: "Fluffy Pyjamas", id: 1 },
      { name: "Homemade Cookies", id: 2 },
      { name: "DIY soap kit", id: 3 },
    ],
  });

const getGiftIdeasFromChatGPT = (receiverDescription) => {
  return Promise.resolve({
    status: 200,
    data: "bob would enjoy a jar of pickles",
  });
};

const Gifts = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftIdeas, setGiftIdeas] = useState("");
  const [receiverDescription, setReceiverDescription] = useState("");
  const { id } = useParams(); // get the ID from the URL
  const { data, error } = useSWR(`/user/game/${id}`, fetcher); // use SWR with the ID
  let gifts = [];
  let receiver = "";
  if (data) {
    gifts = data.gifts;
    receiver = data.receiver;
  }

  const submitChatGPTRequest = async () => {
    try {
      const result = await getGiftIdeasFromChatGPT(receiverDescription);
      if (result.status === 200) {
        setGiftIdeas(result.data);
      } else {
        alert("fail");
      }
    } catch (error) {
      alert("fail");
    }
  };

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
          onChange={(e) => {
            setReceiverDescription(e.target.value);
          }}
          value={receiverDescription}
        ></textarea>
        <button type="button" onClick={submitChatGPTRequest}>
          Submit
        </button>
      </form>
      <div>
        <h3>Gift Ideas for {receiver}:</h3>
        <ul>
          {gifts.map((gift) => {
            return <li key={gift.name}>{gift.name}</li>;
          })}
          {giftIdeas}
        </ul>
      </div>
      <button onClick={handleClick}>Notify Admin I gave my gift!</button>
      {showConfetti && <Confetti />}
    </>
  );
};

export default Gifts;
