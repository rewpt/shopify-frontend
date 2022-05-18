import styled from "styled-components";
import { Title } from "../components/Suggestions/Title";
import { Button } from "../components/Suggestions/Button";
const SuggestionContainer = styled.div``;

export const Suggestions = () => {
  return (
    <SuggestionContainer>
      <Title>Quick Queries</Title>
      <Button>Why is Shopify so good?</Button>
    </SuggestionContainer>
  );
};
