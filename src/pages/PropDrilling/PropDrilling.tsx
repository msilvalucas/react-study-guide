import { useState } from "react"

export function PropDrilling() {
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

function Nivel1(props: { value: number }) {
  return (
    <>
      {/* O componente Nível1 recebe o valor do count, porém não está utilizando. Isso é um clássico problema de prop drilling */}
      <Nivel2 value={props.value} />
    </>
  )
}

function Nivel2(props: { value: number }) {
  return (
    <>
      {/* Aqui ocorre o mesmo problema do componente Nível1 */}
      <Nivel3 value={props.value} />
    </>
  )
}

function Nivel3(props: { value: number }) {
  return (
    <>
      <p className="count">{props.value}</p>
    </>
  )
}