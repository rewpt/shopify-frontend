import React, { useState } from "react";
import { UserInput } from "../components/UserInput";
import styled from "styled-components";
import { Button } from "../components/Button";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const UserForm = (props) => {
  const { submitUserMsg } = props;
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submitUserMsg(userInput);
        }}
      >
        <UserInput
          type="text"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        />
        <Button type="submit">Answer me Robot! </Button>
      </Form>
    </>
  );
};
