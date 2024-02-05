import React, { useEffect, useState } from "react"

export const GetUsersFromJson = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const controller = new AbortController()

    fetch("user.json", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        else return res.json()
      })
      .then((data) => setUserData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  if (error) return <div>Something went wrong , {error.message}</div>

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        userData.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))
      )}
    </div>
  )
}
