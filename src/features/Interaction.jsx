import React from "react";
import useEngineRequest from "../hooks/useEngineRequest";
import { useSelector } from "react-redux";

export const Interaction = (props) => {
  const { userMsg } = props;
  const url = "https://api.openai.com/v1/engines/text-curie-001/completions";
  const data = {
    prompt: `${userMsg}`,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };
  const response = useEngineRequest(data, url, userMsg);

  const interactions = useSelector((state) => {
    return state.interactions;
  });

  return (
    <div>
      {interactions.map((i, index) => {
        return <p key={index}>{i.id}</p>;
      })}
      {response.map((i, index) => {
        return <p key={index}>{i.text}</p>;
      })}
    </div>
  );
};
