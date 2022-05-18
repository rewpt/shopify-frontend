import { useState, useEffect } from 'react';
import './App.css';
import { UserForm } from './features/UserForm';
import { Interaction } from './features/Interaction';
import {createGlobalStyle} from 'styled-components';
import styled from "styled-components";
import leaves from "./images/leavesCut.png"
import { MainTitle, SecondaryTitle } from './components/Main/Titles';
import { Suggestions } from './features/Suggestions';

const AppContainer = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
padding: 0 0 0 50px;
border-radius: 15px;
overflow: hidden;
width: 80vw;
height: 90vh;
background: white;
`

const GlobalStyle = createGlobalStyle`
html{
  font-family: "Lato", sans-serif;
}
`

const AppBg = styled.div`
  background: linear-gradient(90deg, rgba(151,133,247,1) 0%, rgba(115,92,242,1) 38%);
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 5;
  justify-self: center;
`
const RightContainer = styled.div`
  display: flex;
  background-image: url(${leaves});
  z-index: 5;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: right bottom;
  flex-direction: column;
  grid-column: 6 / span 7;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
`

function App() {
  const [userMsg, setUserMsg] = useState("")
  const [interactions, setInteractions] = useState([])
  const submitUserMsg = (msg) => {
    setUserMsg(msg)
  }

  return (
    <>
    <GlobalStyle />
    <AppBg>
      <AppContainer className="app-container">
        <LeftContainer className="left-container">
          <MainTitle className="main-title"> Hi, I'm Bicentennial Bot </MainTitle>
          <SecondaryTitle className="secondary-title">How can I help you?</SecondaryTitle>
          <UserForm className="form" submitUserMsg={submitUserMsg}/>
          <Suggestions></Suggestions>
        </LeftContainer>
        <RightContainer className="right-container">
          <Interaction userMsg={userMsg}/>
        </RightContainer>
      </AppContainer>
    </AppBg>
    </>
  );
}

export default App;
