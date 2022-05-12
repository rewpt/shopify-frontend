import { useState, useEffect } from 'react';
import './App.css';
import { UserForm } from './features/UserForm';
import { Interaction } from './features/Interaction';
import {createGlobalStyle} from 'styled-components';
import styled from "styled-components";
import { MainTitle } from './components/MainTitle';

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const GlobalStyle = createGlobalStyle`
html{
  background: white;
  min-height: 100vh;
  margin: 0;
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
    <AppContainer>
      <MainTitle> Hi, I'm Bicentennial Bot </MainTitle>
        <UserForm submitUserMsg={submitUserMsg}/>
      <Interaction userMsg={userMsg}/> 
    </AppContainer>
    </>
  );
}

export default App;
