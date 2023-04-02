import React from "react";

const Gifts = () => {
  const receiver = "Bob";
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
      <button>Notify Admin I gave my gift!</button>
    </>
  );
};

export default Gifts;
