import React, {useState} from 'react'
import Flashcard from './Flashcard'
import Stepper from "@material-ui/core/Stepper";

const FlashcardList = (props) => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Stepper
      orientation="vertical"
      nonLinear={true}
      activeStep={activeStep}
    >
      {props.flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          recto={flashcard[0]}
          verso={flashcard[1]}
        />
      ))}
    </Stepper>
  )
}

export default FlashcardList
