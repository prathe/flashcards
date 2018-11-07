import React from 'react'
import Flashcard from './Flashcard'
import Stepper from "@material-ui/core/Stepper";

const FlashcardList = (props) => {
  return (
    <Stepper orientation="vertical" nonLinear={true}>
      {props.flashcards.map((flashcard, index) => (
        <Flashcard key={index} recto={flashcard[0]} verso={flashcard[1]} />
      ))}
    </Stepper>
  )
}

export default FlashcardList
