import { Configuration, OpenAIApi } from "openai";

export const callChatGPT = async (userInput) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `give me a list of 3 gift ideas for a secret santa game. format your response as a json array of strings, where each string is a gift idea. here is a description of the gift receiver: ${userInput.receiverDescription}`,
      },
    ],
  });

  return completion.data.choices[0].message.content;
};
