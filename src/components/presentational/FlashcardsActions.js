import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'

const FalshcardsActions = (props) => {
  const handleReset = () => {
    props.resetFlashcards()
    props.onClick()
  }

  const handleAdd = () => {
    props.addFlashcard()
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

      <Fab
        color="primary"
        aria-label="Add"
        className={props.classes.fab}
        onClick={handleAdd}
      >
        <AddIcon />
      </Fab>
    </div>
  )
}

FalshcardsActions.propTypes = {
  resetFlashcards: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  addFlashcard: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
})

export default withStyles(styles)(FalshcardsActions)
