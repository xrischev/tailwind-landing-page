import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <p className="text-3xl font-bold underline bg-red-400">Hello world!</p>
  );
}

export default App;
