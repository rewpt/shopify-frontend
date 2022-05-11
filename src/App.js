import { useState } from 'react';
import './App.css';
import { UserInput } from './components/UserInput';
import { Interaction } from './features/Interaction';

function App() {
  const [userMsg, setUserMsg] = useState("")
  return (
    <div className="App">
      <UserInput /> 
      <Interaction /> 
    </div>
  );
}

export default App;
