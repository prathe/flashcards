import { connect } from 'react-redux'
import FlashcardAppBar from '../presentational/FlashcardAppBar'

const mapStateToProps = state => {
  const deck = state.decks[0]

  return {
    name: deck.name,
    count: deck.flashcards.length
  }
}

const CurrentFlashcardAppBar = connect(
  mapStateToProps
)(FlashcardAppBar)

export default CurrentFlashcardAppBar
