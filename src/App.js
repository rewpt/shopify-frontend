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
`

const GlobalStyle = createGlobalStyle`
html{
  background: rgb(229,229,229) ;
  min-height: 100vh;
  margin: 100px 140px 0 140px;
}
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
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
