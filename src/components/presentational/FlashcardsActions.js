import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { resetFlashcards, addFlashcard } from '../../redux/actions'

const FalshcardsActions = (props) => {
  const handleReset = () => (
    props.dispatch(resetFlashcards())
  )

  const handleAdd = () => {
    props.dispatch(addFlashcard())
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={props.classes.button}
        onClick={handleReset}
      >
        Start Over
      </Button> 

      <Button
        variant="fab"
        color="primary"
        aria-label="Add"
        className={props.classes.fab}
        onClick={handleAdd}
      >
        <AddIcon />
      </Button>
    </div>
  )
}

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
})

export default withStyles(styles)(FalshcardsActions)