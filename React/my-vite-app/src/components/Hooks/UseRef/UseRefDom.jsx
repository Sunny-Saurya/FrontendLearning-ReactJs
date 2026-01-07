import React, { useRef, useEffect } from 'react'
import UseRefDom2 from './UseRefDom2'


const UseRefDom = () => {
  const refPoint = useRef(null)

  useEffect(() => {
    if (refPoint.current) {
      refPoint.current.focus()
    }
  }, [])

  return (
    <div style={{ padding: 12 }}>
      <label htmlFor="ref-input" style={{ display: 'block', marginBottom: 8 }}>Focus input (useRef)</label>
      <UseRefDom2 />
    </div>
  )
}

export default UseRefDom