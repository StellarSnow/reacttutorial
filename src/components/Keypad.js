import React, { useEffect, useState } from 'react'

export default function Keypad() {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3001/letters')
        .then(response => response.json())
        .then(response => {
          setLetters(response)
        })
    }, [])

  return (
    <div className="keypad">
      {letters && letters.map((letter) => {
        return (
          <div key={letter.key}>{letter.key}</div>
        )
      })}
    </div>
  )
}
