import { connect } from 'react-redux'
import FlashcardDeck from '../presentational/FlashcardDeck'

const mapStateToProps = state => {
  const deckIndex = 0
  const deck = state.decks[deckIndex]

  return {
    index: deckIndex,
    name: deck.name,
    current: deck.current,
    flashcards: deck.flashcards,
    completedSteps: deck.completedSteps,
  }
}

const CurrentFlashcardDeck = connect(
  mapStateToProps,
)(FlashcardDeck)

export default CurrentFlashcardDeck
