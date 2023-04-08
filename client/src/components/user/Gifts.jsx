import { useState } from "react";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";

import useAxios from "../../hooks/useAxios";
import { secretSantaApi } from "../../api/api.js";

const getGiftIdeasFromChatGPT = (receiverDescription, id) => {
  return secretSantaApi.post(`/user/game/${id}`);
};

const Gifts = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftIdeas, setGiftIdeas] = useState("");
  const [receiverDescription, setReceiverDescription] = useState("");
  const { id } = useParams(); // get the ID from the URL
  const { data, error } = useAxios(`/user/game/${id}`);

  let gifts = [];
  let receiver = "";
  if (data) {
    gifts = data.gifts;
    receiver = data.receiver;
  }

  const submitChatGPTRequest = async () => {
    try {
      const result = await getGiftIdeasFromChatGPT(receiverDescription, id);
      if (result.status === 200) {
        setGiftIdeas(result.data.data);
      } else {
        alert("fail");
      }
    } catch (error) {
      alert("fail");
    }
  };

  const handleFinishedClick = () => {
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
      <button onClick={handleFinishedClick}>
        Notify Admin I gave my gift!
      </button>
      {showConfetti && <Confetti />}
    </>
  );
};

export default Gifts;
