import { useState } from 'react'
import './App.css'

function App () {
  const [paino, setPaino] = useState(0)
  const [pullot, setPullot] = useState(0)
  const [aika, setAika] = useState(0)
  const [sukupuoli, setSukupuoli] = useState('nainen')
  const [tulos, setTulos] = useState(0)

  function laske (e) {
    let litrat = pullot * 0.33
    let grammat = litrat * 8 * 4.5
    let palo = paino / 10
    let grammatvasen = grammat - palo * aika
    let vastaus = 0

    if (sukupuoli === 'nainen') {
      vastaus = grammatvasen / (paino * 0.6)
    } else {
      vastaus = grammatvasen / (paino * 0.7)
 
    }
    setTulos(vastaus)

    if (vastaus < 0) {
      setTulos(0)
    }
  }

  return (
    <form>
      <h1>Alkometri</h1>

      <div>
        <label>Paino</label>
        <input
          type='number'
          name='paino'
          step='1'
          value={paino}
          onChange={e => setPaino(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Pullot</label>
        <select
          name='pullot'
          id='pullot'
          onChange={e => setPullot(e.target.value)}
        >
          <option name='1'>1</option>
          <option name='2'>2</option>
          <option name='3'>3</option>
          <option name='4'>4</option>
          <option name='5'>5</option>
          <option name='6'>6</option>
          <option name='7'>7</option>
          <option name='8'>8</option>
          <option name='9'>9</option>
          <option name='10'>10</option>
        </select>
      </div>

      <div>
        <label>Aika</label>
        <select name='aika' id='aika' onChange={e => setAika(e.target.value)}>
          <option name='1'>1</option>
          <option name='2'>2</option>
          <option name='3'>3</option>
          <option name='4'>4</option>
          <option name='5'>5</option>
          <option name='6'>6</option>
          <option name='7'>7</option>
          <option name='8'>8</option>
          <option name='9'>9</option>
          <option name='10'>10</option>
        </select>
      </div>

      <div>
        <label>sukupuoli</label>

        <input
          type='radio'
          name='sukupuoli'
          value='nainen'
          defaultChecked
          onChange={e => setSukupuoli(e.target.value)}
        ></input>
        <label>Nainen</label>

        <input
          type='radio'
          name='sukupuoli'
          value='mies'
          onChange={e => setSukupuoli(e.target.value)}
        ></input>
        <label> Mies</label>
      </div>
      <div>
        <label>alkoholi veressä</label>
        <output>{tulos.toFixed(2)}</output>
      </div>
      <button type='button' onClick={laske}>
        Laske
      </button>
    </form>
  )
}

export default App
