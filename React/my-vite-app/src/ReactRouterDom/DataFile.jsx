import React from 'react'

const DataFile = () => {
  const qparam = new URLSearchParams(window.location.search)
  const name = qparam.get("name")
  const regno = qparam.get("regno")
  console.log("Name:", name)
  console.log("Reg No:", regno)
  return (
    <div>
      <br />
      DataFile Page
      <br />
      Name: {name}
      <br />
      Reg No: {regno}
    </div>
  )
}

export default DataFile