import React from "react"
import { UserCard } from "./UserCard"
import jsonData from "../user.json"

const Main = () => {
  return (
    <div>
      <UserCard data={jsonData} />
    </div>
  )
}

export default Main
