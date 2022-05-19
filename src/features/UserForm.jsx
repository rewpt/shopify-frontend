import React, { useState } from "react";
import { UserInput } from "../components/Main/UserInput";
import styled from "styled-components";
import { Button } from "../components/Main/Button";

const Form = styled.form`
  width: 100%;
  font-size: 1.2rem;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`;

export const UserForm = (props) => {
  const { submitUserMsg } = props;
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    submitUserMsg(userInput);
    setUserInput("");
  };

  const handleUserKeyPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      submitUserMsg(userInput);
      setUserInput("");
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <UserInput
          autoFocus
          type="text"
          className="userInput"
          placeholder="Ex. How far away is Jupiter from Pluto?"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
          onKeyDown={handleUserKeyPress}
        />
        <Button type="submit">Answer me Robot! </Button>
      </Form>
    </>
  );
};
