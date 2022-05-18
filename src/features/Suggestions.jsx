import styled from "styled-components";
import { Title } from "../components/Suggestions/Title";
import { Button } from "../components/Suggestions/Button";
const SuggestionContainer = styled.div``;

export const Suggestions = (props) => {
  const { submitUserMsg } = props;
  const suggestionList = [
    "Why is Shopify so good?",
    "How do I say Hello in Spanish?",
  ];
  return (
    <SuggestionContainer>
      <Title>Quick Queries</Title>
      {suggestionList.map((suggestion) => {
        return (
          <Button
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
