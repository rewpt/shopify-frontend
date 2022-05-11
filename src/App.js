import { useState } from 'react';
import './App.css';
import { UserInput } from './components/UserInput';
import { Interaction } from './features/Interaction';

function App() {
  const [userMsg, setUserMsg] = useState("")
  const submitUserMsg = (msg) => {
    setUserMsg(msg)
  }
  return (
    <div className="App">
      <UserInput onSubmit={submitUserMsg} userMsg={userMsg} /> 
      <Interaction userMsg={userMsg}/> 
    </div>
  );
}

export default App;
