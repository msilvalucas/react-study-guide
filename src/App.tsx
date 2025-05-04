import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Contador</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          + 1
        </button>

        <Nivel1 value={count} />

        <button onClick={() => setCount((count) => count - 1)}>
          - 1
        </button>
      </div>

    </>
  )
}

export default App

function Nivel1(props: { value: number}) {
  return (
    <>
      <Nivel2 value={props.value} />
    </>
  )
}

function Nivel2(props: { value: number}) {
  return (
    <>
      <Nivel3 value={props.value} />
    </>
  )
}

function Nivel3(props: { value: number}) {
  return (
    <>
      {props.value}
    </>
  )
}