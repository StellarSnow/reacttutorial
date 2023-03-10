import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
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
        const color = usedKeys[letter.key]
        return (
          <div key={letter.key} className={color}>{letter.key}</div>
        )
      })}
    </div>
  )
}
