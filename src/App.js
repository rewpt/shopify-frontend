import { useState, useEffect } from 'react';
import './App.css';
import { UserForm } from './features/UserForm';
import { Interaction } from './features/Interaction';
import {createGlobalStyle} from 'styled-components';
import styled from "styled-components";
import { MainTitle, SecondaryTitle } from './components/Main/Titles';

const AppContainer = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
margin: 100px 100px 0 100px;
padding: 0 50px 0 50px;
border-radius: 20px;
height: 90vh;
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 100%);
`

const GlobalStyle = createGlobalStyle`
html{
  background: rgb(151,133,247);
  background: linear-gradient(90deg, rgba(151,133,247,1) 0%, rgba(115,92,242,1) 38%);
  min-height: 100vh;
}
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 5;
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 6 / span 7;
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
    <AppContainer className="app-container">
      <LeftContainer className="left-container">
        <MainTitle className="main-title"> Hi, I'm Bicentennial Bot </MainTitle>
        <SecondaryTitle className="secondary-title">Talk to me</SecondaryTitle>
        <UserForm className="form" submitUserMsg={submitUserMsg}/>
      </LeftContainer>
      <RightContainer className="right-container">
        <Interaction userMsg={userMsg}/> 
      </RightContainer>
    </AppContainer>
    </>
  );
}

export default App;
