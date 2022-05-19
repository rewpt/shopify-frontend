import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 50px;
  @media (max-width: 900px) {
    align-items: center;
    padding-left: 80px;
    padding-right: 80px;
  }
`;
