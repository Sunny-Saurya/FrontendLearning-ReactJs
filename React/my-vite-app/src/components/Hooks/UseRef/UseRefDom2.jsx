import React from 'react'

const UseRefDom2 = () => {
  const [val, setVal] = React.useState('')
    const [prev, setPrev] = React.useState('')

  React.useEffect(() => {
    setPrev(val)
  }, [val])
  return (
    <div style={{ marginTop: 12 }}>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Type here to see value"
        aria-label="dom2-input"
        className="border border-r-amber-500 border-solid m-5 rounded-2xl"
      />
      <h2 style={{ margin: '8px 0 0' }}>Current Value : {val}</h2>
        <h2 style={{ margin: '8px 0 0' }}>Previous Value : {prev}</h2>
    </div>
  )
}

export default UseRefDom2