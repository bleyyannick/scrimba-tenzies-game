import { Die } from './Die'
import './App.css'
import { useState } from 'react'

function App() {
  const  allNewDices = () => Array(10).fill().map(()=> Math.ceil(Math.random() * 6));
  const [dices, setDices] = useState(allNewDices()); 
 
  return (
      <main>
        <div className="die-container">
          {dices.map(dice => <Die value={dice}/>)}
        </div>
      </main>
  )
}

export default App
