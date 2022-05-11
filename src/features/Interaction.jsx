import React, { useEffect, useState } from "react";
import useEngineRequest from "../hooks/useEngineRequest";

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

  return (
    <div>
      {response.map((i, index) => {
        return <p key={index}>{i.text}</p>;
      })}
    </div>
  );
};
