import './App.css';
import React from 'react'
import Counter from "./Counter"
import { useSelector } from 'react-redux'

function App() {

  // imported through redux so that we can share this state.
  const count = useSelector(state => state.counter.count)

  return (
    <div style={{ backgroundColor: 'lightGreen' }} className="App">
      <h1>Hello There!</h1>
      <h2>The Count: {count}</h2>
      <Counter />
    </div>
  );
}

export default App;
