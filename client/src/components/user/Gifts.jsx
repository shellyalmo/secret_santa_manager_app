import { useState } from "react";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";
import { message, Space, Spin } from "antd";
import "../../styles/secretSanta.css";
import useAxios from "../../hooks/useAxios";
import { secretSantaApi } from "../../api/api.js";

const holidaysGreetings = [
  {
    "Eid Al Fitr": "Eid Mubarak!",
  },
  { Purim: "Happy Purim!" },
  { Christmas: "Merry Christmas!" },
];

const getGiftIdeasFromChatGPT = (receiverDescription, id) => {
  return secretSantaApi.post(`/user/game/${id}`, { receiverDescription });
};

const Gifts = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [receiverDescription, setReceiverDescription] = useState("");
  const [submit, setSubmit] = useState(false);

  const { id } = useParams(); // get the ID from the URL
  const { data: userGames } = useAxios("/user");
  const result = userGames?.find((game) => game.id === id);
  const { data, error } = useAxios(`/user/game/${id}`);
  const [messageApi, contextHolder] = message.useMessage();

  let receiver = "";
  if (data) {
    receiver = data.receiver;
  }

  const submitChatGPTRequest = async () => {
    setSubmit(true);
    try {
      const result = await getGiftIdeasFromChatGPT(receiverDescription, id);
      if (result.status === 200) {
        try {
          const arr = JSON.parse(result.data.data);
          setGiftIdeas(arr);
        } catch (error) {
          console.warn("couldn't parse", result.data.data);
          setGiftIdeas([result.data.data]);
        }
      } else {
        messageApi.open({
          type: "error",
          content: "Something went wrong",
        });
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Something went wrong",
      });
    }
  };

  const handleFinishedClick = async () => {
    await secretSantaApi.put(`/user/game/${id}`);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  const holidayGreeting = holidaysGreetings.find(
    (greeting) => Object.keys(greeting)[0] === result?.theme
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      className={`${
        result?.theme === "Eid Al Fitr"
          ? "eid-btn"
          : `${result?.theme.toLowerCase()}-btn`
      } user-instructions-background`}
    >
      {contextHolder}
      <h2>
        {holidayGreeting && Object.values(holidayGreeting)[0]} Your receiver is{" "}
        {receiver}!
      </h2>
      <form action="">
        <label htmlFor="">
          <h4>
            Describe what {receiver} is like and add any information that can
            help us find the perfect gift ideas:
          </h4>
        </label>
        <div className="gifts-form">
          <textarea
            name="textarea"
            rows="10"
            cols="30"
            maxLength="200"
            onChange={(e) => {
              setReceiverDescription(e.target.value);
            }}
            value={receiverDescription}
          ></textarea>
          <button type="button" onClick={submitChatGPTRequest}>
            Submit
          </button>
        </div>
      </form>
      <div>
        <h3>Gift Ideas for {receiver}:</h3>
        {submit && giftIdeas.length < 1 ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Space>
              <Spin size="large">
                <div className="content" />
              </Spin>
            </Space>
          </Space>
        ) : (
          <ul>
            {giftIdeas.map((gift) => {
              return (
                <li className="gift-idea-item" key={gift}>
                  {gift}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {giftIdeas && (
        <button onClick={handleFinishedClick}>
          Notify Admin I gave my gift!
        </button>
      )}
      {showConfetti && <Confetti />}
    </div>
  );
};

export default Gifts;
