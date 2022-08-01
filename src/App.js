import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState('');
  const [color, setColor] = useState(22);

  const type = (event) => {
    setNumber(event.keyCode)
    setColor(Math.floor(Math.random() * 1200))
    console.log(color)
  }

  useEffect(() => {
    document.addEventListener('keypress', type)
    return () => document.removeEventListener('keypress', type)
  }, [])

  return (
    <>
      {
        number ? (
          <>
            <h2
            style={{
              background: 'hsl('+color+'deg 56% 47%)'
            }}
            >{number}</h2>
            <p>Your pressed key code is above.</p>
          </>
        ) : (
          <p>Please press any key to see key code!</p>
        )
      }
    </>
  )
}

export default App;
