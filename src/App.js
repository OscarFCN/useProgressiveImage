import React from 'react';
import {useCounter} from './useCounter';
import { render } from '@testing-library/react';

function App() {
  const {count, increment, decrement} = useCounter();
  
  render(
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
  
}

export default App;
