import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { throwFlashcard, skipFlashcard } from '../../redux/actions'
import FlashcardsActions from './FlashcardsActions'

const FlashcardDeck = (props) => {
  const [flippedCard, setflippedCard] = useState()

  const handleSkip = () => {
    props.dispatch(skipFlashcard(props.currentFlashcard))
    setflippedCard()
  }

  const handleGotIt = () => {
    props.dispatch(throwFlashcard(props.currentFlashcard))
    setflippedCard()
  }

  const handleFlip = () => {
    setflippedCard(flippedCard !== props.currentFlashcard ? props.currentFlashcard : null)
  }

  const isStepCompleted = index => (
    props.completedFlashcards.findIndex((i) => (i == index)) >= 0
  )

  const FlipButton = props => (
    <Button
      size="small"
      className={props.classes.button}
      onClick={handleFlip}
    >
      Flip
    </Button>
  )
  // https://material-ui.com/guides/composition/
  FlipButton.muiName = 'Button'

  const SkipButton = props => (
    <Button
      variant="contained"
      size="small"
      className={props.classes.button}
      onClick={handleSkip}
    >
      Skip
    </Button>
  )
  // https://material-ui.com/guides/composition/
  SkipButton.muiName = 'Button'

  const GotItButton = props => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={props.classes.button}
      onClick={handleGotIt}
    >
      GOT IT
    </Button>
  )
  // https://material-ui.com/guides/composition/
  SkipButton.muiName = 'Button'

  return (
    <>
    <Stepper
      orientation="vertical"
      nonLinear={true}
      activeStep={props.currentFlashcard}
    >
      {props.flashcards.map((flashcard, index) => {
        const recto= flashcard[0]
        const verso= flashcard[1]

        return (
          <Step
            key={index}
            completed={isStepCompleted(index)}
          >
            <StepLabel />
            <StepContent icon="">
              <div style={{display: flippedCard !== props.currentFlashcard ? 'block' : 'none'}}>
                <TextField
                  id="outlined-textarea"
                  label="Question"
                  placeholder="Question here..."
                  multiline
                  margin="normal"
                  variant="outlined"
                  value={recto}
                />
                <div>
                  <SkipButton {...props} />
                  <FlipButton  {...props} />
                </div>
              </div>
              <div style={{display: flippedCard === props.currentFlashcard ? 'block' : 'none'}}>
                <TextField
                  id="outlined-textarea"
                  label="Answer"
                  placeholder="Answer here..."
                  multiline
                  margin="normal"
                  variant="outlined"
                  value={verso}
                />
                <div>
                  <GotItButton {...props} />
                  <FlipButton  {...props} />
                </div>
              </div>
            </StepContent>
          </Step>
        )
      })}
    </Stepper>
    <FlashcardsActions {...props} />
    </>
  )
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

export default withStyles(styles)(FlashcardDeck)
