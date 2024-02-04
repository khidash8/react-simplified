import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({
    name: "khan",
    age: 26,
  })

  const handleClick = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  const handlePerson = () => {
    setPerson((previous) => ({ ...previous, name: "Loki", age: 30 }))
  }

  return (
    <div>
      <div>
        <h3>Count: {count}</h3>
        <button onClick={handleClick}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div>
        <h3>Person details</h3>
        <p>Name: {person.name}</p>
        <p>Name: {person.age}</p>
      </div>

      <button onClick={handlePerson}>change person</button>
    </div>
  )
}
