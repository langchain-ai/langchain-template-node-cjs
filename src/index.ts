import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";

export const run = async () => {
  const chat = new ChatOpenAI();

  const response = await chat.call([
    new HumanChatMessage(
      "What is a good name for a company that makes colorful socks?"
    ),
  ]);
  console.log(response);
};

run();
