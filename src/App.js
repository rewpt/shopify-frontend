import { useState, useEffect } from 'react';
import './App.css';
import { UserForm } from './features/UserForm';
import { Interaction } from './features/Interaction';

function App() {
  const [userMsg, setUserMsg] = useState("")
  const submitUserMsg = (msg) => {
    setUserMsg(msg)
  }
  
  return (
    <div className="App">
      <UserForm submitUserMsg={submitUserMsg}/>
      <Interaction userMsg={userMsg}/> 
    </div>
  );
}

export default App;
