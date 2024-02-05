import { useEffect, useState } from "react"

export function AgeChange() {
  const [name, setName] = useState("Khidash")
  const [age, setAge] = useState(29)
  const [value, setValue] = useState("")

  useEffect(() => {
    console.log("age changed", age)
  }, [age])

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <br />
      <br />
      <button onClick={() => setAge((prev) => (prev > 1 ? prev - 1 : 1))}>
        -
      </button>
      <span>{age}</span>
      <button onClick={() => setAge((prev) => prev + 1)}>+</button>

      <br />
      <br />

      <p>
        My name is <strong>{!value ? name : value}</strong> and I am{" "}
        <strong>{age}</strong> years old
      </p>
    </div>
  )
}
