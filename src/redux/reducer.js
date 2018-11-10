import { THROW_FLASHCARD } from './actions'

const initialState = {
  name: 'My first deck',
  currentFlashcard: 0,
  completedFlashcards: [],
  flashcards: [
    [
      'This is recto',
    ],
    [
      'This is recto 2',
      'This is verso 2',
    ],
    [
      'This is recto 3',
      'This is verso 3',
    ],
    [
      'This is recto 4',
      'This is verso 4',
    ]
  ]
};

const reducer = (state = initialState, action) => {
  // Throwing a flashcard means you're done with it.
  // Show the next flashcard in the remaining deck.
  // currentFlashcard may be set to null if no one remains.
  if (action.type == THROW_FLASHCARD) {
    return {
      ...state,
      currentFlashcard: (state.currentFlashcard + 1) % state.flashcards.length,
      completedFlashcards: state.completedFlashcards.concat([action.index]),
    }
  } else {
    return state
  }
}

export default reducer;
