import { useState } from "react"

export const ArrayExec = () => {
  const [array, setarray] = useState(["U", "C", "K"])
  const [refArr, setRefArr] = useState(array)
  const [value, setValue] = useState("")

  const handleRemoveFirst = () => {
    setRefArr((prev) => {
      return prev.slice(1)
    })
  }

  const handleRemoveSpecific = (letter) => {
    setRefArr(refArr.filter((element) => element !== letter))
  }

  const handleAddAtStart = (letter) => {
    setRefArr([letter, ...refArr])
  }

  const handleAddAtEnd = (letter) => {
    setRefArr([...refArr, letter])
  }

  const handleClear = () => {
    setRefArr([])
  }

  const handleToInitial = () => {
    setRefArr(array)
  }

  const handleUpdateAllH = (letter) => {
    setRefArr((prev) =>
      prev.map((item) => {
        if (item === letter) return "A"
        return item
      })
    )
  }

  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddToIndex = (letter, index) => {
    setRefArr((prev) => [...prev.slice(0, index), letter, ...prev.slice(index)])
  }

  return (
    <div>
      <h3>ArrayExec</h3>
      <p>actual array: {array}</p>
      <p>Ref Array: {refArr.join(",")}</p>
      <button onClick={handleRemoveFirst}>Remove first element</button>
      <br />
      <br />
      <button onClick={() => handleRemoveSpecific("H")}>
        Remove specific letter
      </button>
      <br />
      <br />
      <button onClick={() => handleAddAtStart("F")}>Add At Start</button>
      <br />
      <br />
      <button onClick={() => handleAddAtEnd("U")}>Add At End</button>
      <br />
      <br />
      <button onClick={handleClear}>Clear Array</button>
      <br />
      <br />
      <button onClick={handleToInitial}>Set to Initial</button>
      <br />
      <br />
      <button onClick={() => handleUpdateAllH("H")}>Set to A</button>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setRefArr((prev) => [value, ...prev])
          setValue("")
        }}
      >
        <input type="text" value={value} onChange={handleValueChange} />
        <button type="submit">Add</button>
      </form>
      <br />
      <br />
      <button onClick={() => handleAddToIndex("H", 2)}>
        Add To Specific Index
      </button>
    </div>
  )
}
