import React from "react";
import styled from "styled-components";

export const UserInput = styled.textarea`
  text-align: end;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 8px;
  width: 100%;
  max-width: 100%;
  height: 90px;
  box-sizing: border-box;
  z-index: 1;
  text-align: start;
  :focus::placeholder {
    color: transparent;
  }
`;
