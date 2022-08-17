import React, { useState, useEffect, useRef } from 'react'

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight () {
    const frontheight = frontEl.current.getBoundingClientRect().height
    const backheight = frontEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontheight, backheight, 100))
  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
  useEffect(()=> {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div 
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
      >
      <div className='front' ref={frontEl}>
        {flashcard.question}
        <div className='flashcard-options'>
          {flashcard.options.map(option => {
            return <div className='flascard-option' key={option}>{option}</div>
          })}
        </div>
      </div>
      <div className='back' ref={backEl}>{flashcard.answer}</div>
    </div>
  )
}

export default Flashcard