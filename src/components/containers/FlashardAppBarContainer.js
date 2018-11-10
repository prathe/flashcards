import { connect } from 'react-redux'
import FlashcardAppBar from '../presentational/FlashcardAppBar'

const mapStateToProps = state => {
  return {
    name: state.name,
    count: state.flashcards.length
  }
}

const FlashardAppBarContainer = connect(
  mapStateToProps
)(FlashcardAppBar)

export default FlashardAppBarContainer
