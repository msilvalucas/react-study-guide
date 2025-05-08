import { useContext, useState } from 'react'

import { CountContext } from './pages/Context'

// import { PropDrilling } from './pages/PropDrilling'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Nivel1 />
    </CountContext.Provider>
  )
}

export default App

function Nivel1() {
  return (
    <>
      <h2>Eu sou o nível 1</h2>
      <Nivel2 />
    </>
  )
}

function Nivel2() {
  const { count } = useContext(CountContext)!
  return (
    <h2>Valor do count: {count}</h2>
  )
}