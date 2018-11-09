import { connect } from 'react-redux'
import FlashcardDeck from '../presentational/FlashcardDeck'

const mapStateToProps = state => {
  const deck = state.decks[0]

  return {
    name: deck.name,
    flashcards: deck.flashcards,
    completedSteps: deck.completedSteps,
  }
}

const CurrentFlashcardDeck = connect(
  mapStateToProps,
)(FlashcardDeck)

export default CurrentFlashcardDeck
