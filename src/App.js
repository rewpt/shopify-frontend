import { useState, useEffect } from 'react';
import './App.css';
import { UserForm } from './features/UserForm';
import { Interaction } from './features/Interaction';
import { ChangeBot } from './features/ChangeBot';

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
@media (max-width: 900px) {
  display: flex;
  flex-direction: column;  
  align-items: center;
  padding: 0;  
}
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
  @media (max-width: 900px) {  
  align-items: center;
  padding: 0;  
}
`
const RightContainer = styled.div`
  display: flex;
  align-items: center;
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
@media (max-width: 900px) {  
  background-size: contain;
}

`

function App() {
  const [userMsg, setUserMsg] = useState("")
  const [bot, setBot] = useState({name: "Curie", code: "text-curie-001" });
  const [interactions, setInteractions] = useState([])
  const submitUserMsg = (msg) => {
    setUserMsg(msg)
  }
  const handleBot = (bot) => {
    setBot(bot);
  }

  return (
    <>
    <GlobalStyle />
    <AppBg>
      <AppContainer className="app-container">
        <LeftContainer className="left-container">
          <MainTitle className="main-title"> Hi, I'm {bot.name} Bot </MainTitle>
          <SecondaryTitle className="secondary-title">How can I help you?</SecondaryTitle>
          <UserForm className="form" submitUserMsg={submitUserMsg}/>
          <ChangeBot handleBot={handleBot}></ChangeBot>
          <Suggestions submitUserMsg={submitUserMsg}></Suggestions>
        </LeftContainer>
        <RightContainer className="right-container">
          <Interaction bot={bot} userMsg={userMsg}/>
        </RightContainer>
      </AppContainer>
    </AppBg>
    </>
  );
}

export default App;
