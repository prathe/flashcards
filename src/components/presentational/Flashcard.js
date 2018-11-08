import React from 'react'
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"

const Flashcard = ({recto, verso, ...otherProps}) => {
  return (
    <Step {...otherProps}>
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
          >
            Next
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
          >
            GOT IT
          </Button>
        </div>
      </StepContent>
    </Step>
  )  
}

export default Flashcard;
