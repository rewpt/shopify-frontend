import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: rgb(255, 255, 255, 0.9);
  border-radius: 15px;
  margin-bottom: 2rem;
  font-family: "Lato", sans-serif;
  font-size: 1.3rem;
  margin-right: 30px;
  max-width: 500px;
  min-height: 0;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    width: 100%;
    margin-right: 0;
  }
`;

export const CardBrowser = styled.div``;
