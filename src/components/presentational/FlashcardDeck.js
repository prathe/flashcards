import React, {useState} from 'react'
import Stepper from "@material-ui/core/Stepper"
import { withStyles } from '@material-ui/core/styles'
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const FlashcardDeck = (props) => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Stepper
      orientation="vertical"
      nonLinear={true}
      activeStep={activeStep}
    >
      {props.flashcards.map((flashcard, index) => {
        const recto= flashcard[0]
        const verso= flashcard[1]

        return (
          <Step key={index}>
            <StepLabel />
            <StepContent icon="">
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
                <Button
                  variant="contained"
                  size="small"
                  className={props.classes.button}
                >
                  Skip
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={props.classes.button}
                >
                  GOT IT
                </Button>
              </div>
            </StepContent>
          </Step>
        )
      })}
    </Stepper>
  )
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

export default withStyles(styles)(FlashcardDeck)
