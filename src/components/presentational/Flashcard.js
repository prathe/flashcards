import React from 'react'
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import TextField from "@material-ui/core/TextField";

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
      </StepContent>
    </Step>
  )  
}

export default Flashcard;
