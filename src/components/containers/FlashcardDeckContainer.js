import { connect } from 'react-redux'
import FlashcardDeck from '../presentational/FlashcardDeck'

const mapStateToProps = state => {
  return {
    name: state.name,
    current: state.current,
    completedSteps: state.completedSteps,
    flashcards: state.flashcards,
  }
}

const FlashcardDeckContainer = connect(
  mapStateToProps,
)(FlashcardDeck)

export default FlashcardDeckContainer
