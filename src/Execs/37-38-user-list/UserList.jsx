import { useEffect, useState } from "react"
import Loading from "./Loading"
import { SingleUser } from "./SingleUser"

export const UserList = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    setError(null)
    fetchUsers(controller)

    return () => controller.abort()
  }, [])

  const fetchUsers = async (controller) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { signal: controller.signal }
      )

      if (!response.ok) {
        throw new Error("Failed to fetch")
      } else {
        setLoading(false)
        const data = await response.json()
        setUser(data)
        console.log(data)
      }
    } catch (error) {
      if (error?.name === "AbortError") return

      console.log("Error", error)
      setError(error)
    }
  }

  if (error) return <div>Something went wrong , {error.message}</div>

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {user.map((user) => (
            <SingleUser user={user} key={user.id} />
          ))}
        </ul>
      )}
    </div>
  )
}
