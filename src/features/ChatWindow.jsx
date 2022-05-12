import React from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  width: 60vw;
  height: 10vw;
  border: 2px solid;
  display: flex;
  align-items: end;
`;

const ChatWindow = (props) => {
  return <ChatContainer>{props.children}</ChatContainer>;
};

export default ChatWindow;
