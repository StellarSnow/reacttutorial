import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(null)
    const allLetters = [
      {"key": "a"},
      {"key": "b"},
      {"key": "c"},
      {"key": "d"},
      {"key": "e"},
      {"key": "f"},
      {"key": "g"},
      {"key": "h"},
      {"key": "i"},
      {"key": "j"},
      {"key": "k"},
      {"key": "l"},
      {"key": "m"},
      {"key": "n"},
      {"key": "o"},
      {"key": "p"},
      {"key": "q"},
      {"key": "r"},
      {"key": "s"},
      {"key": "t"},
      {"key": "u"},
      {"key": "v"},
      {"key": "w"},
      {"key": "x"},
      {"key": "y"},
      {"key": "z"}
    ]

    useEffect(() => {     
      setLetters(allLetters)       
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
