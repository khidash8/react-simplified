import { useEffect, useState } from "react"

export const GetUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    //? prevent multiple rendering
    const controller = new AbortController()

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        else return res.json()
      })
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  if (error) return <div>Something went wrong , {error.message}</div>
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => <div key={user.id}>{user.name}</div>)
      )}
    </div>
  )
}
