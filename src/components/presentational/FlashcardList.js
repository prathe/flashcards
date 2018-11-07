import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = (props) => {
  return (
    props.flashcards.map((flashcard, index) => (
      <Flashcard key={index} recto={flashcard[0]} verso={flashcard[1]} />
    ))
  )
}

export default FlashcardList
