import styled from "styled-components";
import { Title } from "../components/Suggestions/Title";
import { Button } from "../components/Suggestions/Button";
const SuggestionContainer = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Suggestions = (props) => {
  const { submitUserMsg } = props;
  const suggestionList = [
    "How is Shopify so good?",
    "How do I say Hello in Spanish?",
    "Where is the best place to get pizza in Toronto?",
  ];
  return (
    <SuggestionContainer>
      <Title>Quick Queries</Title>
      {suggestionList.map((suggestion, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              submitUserMsg(suggestion);
            }}
          >
            {suggestion}
          </Button>
        );
      })}
    </SuggestionContainer>
  );
};
