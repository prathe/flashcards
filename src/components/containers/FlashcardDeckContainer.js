import { connect } from 'react-redux'
import FlashcardDeck from '../presentational/FlashcardDeck'
import {
  THROW_FLASHCARD,
  SKIP_FLASHCARD,
  RESET_FLASHCARD,
  ADD_FLASHCARD,
  JUMP_TO_FLASHCARD,
  REVEAL_ANSWER } from '../../reducers/root'

const mapStateToProps = state => {
  return {
    name: state.name,
    currentFlashcard: state.currentFlashcard,
    completedFlashcards: state.completedFlashcards,
    flashcards: state.flashcards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    throwFlashcard: index => dispatch({ type: THROW_FLASHCARD, index }),
    skipFlashcard: index => dispatch({ type: SKIP_FLASHCARD, index }),
    resetFlashcards: () => dispatch({ type: RESET_FLASHCARD }),
    addFlashcard: () => dispatch({ type: ADD_FLASHCARD }),
    jumpToFlashcard: index => dispatch({ type: JUMP_TO_FLASHCARD, index }),
    revealAnswer: index => dispatch({ type: REVEAL_ANSWER, index })
  }
}

const FlashcardDeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashcardDeck)

export default FlashcardDeckContainer
