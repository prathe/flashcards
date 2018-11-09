import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"

const Flashcard = ({recto, verso, classes, ...otherProps}) => {
  console.log(otherProps)
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
            className={classes.button}
          >
            Skip
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            GOT IT
          </Button>
        </div>
      </StepContent>
    </Step>
  )  
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

export default withStyles(styles)(Flashcard);
