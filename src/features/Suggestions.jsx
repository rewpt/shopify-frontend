import styled from "styled-components";
import { Title } from "../components/Suggestions/Title";
import { Button } from "../components/Suggestions/Button";
import { List } from "../components/Suggestions/UnorderedList";
import { Item } from "../components/Suggestions/ListItem";

const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
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
    <SuggestionContainer className="suggestionContainer">
      <Title>Quick Queries</Title>
      <List className="suggestionList">
        {suggestionList.map((suggestion, index) => {
          return (
            <Item className="suggestionItem">
              <Button
                key={index}
                onClick={() => {
                  submitUserMsg(suggestion);
                }}
              >
                {suggestion}
              </Button>
            </Item>
          );
        })}
      </List>
    </SuggestionContainer>
  );
};
