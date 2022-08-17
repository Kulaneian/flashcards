import React from 'react'
import Flashcard from './Flashcard';

function Flashcardlist({ flashcards }) {
  return (
    <div className='card-grid'>
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  );
}

export default Flashcardlist