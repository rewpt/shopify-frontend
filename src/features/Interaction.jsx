import React from "react";
import useEngineRequest from "../hooks/useEngineRequest";
import { useSelector } from "react-redux";
import { CardsContainer } from "../components/Card/CardsContainer";
import { Card, CardBrowser } from "../components/Card/Card";
import { Prompt, Response } from "../components/Card/Text";
import xImg from "../images/X.png";
import { XIcon } from "../components/Card/XIcon";
import { useDispatch } from "react-redux";
import { removeInteraction } from "../redux/interactions";

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
  const dispatch = useDispatch();

  const interactions = useSelector((state) => {
    return state.interactions;
  });

  return (
    <CardsContainer className="cards-container">
      {interactions.map((i, index) => {
        return (
          <Card key={index} className="card">
            <XIcon
              onClick={() => {
                dispatch(removeInteraction(index));
              }}
              src={xImg}
            ></XIcon>
            <CardBrowser>
              <Prompt>{i.prompt}</Prompt>
              <Response>{i.response}</Response>
            </CardBrowser>
          </Card>
        );
      })}
    </CardsContainer>
  );
};
