import { THROW_FLASHCARD, SKIP_FLASHCARD } from './actions'

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

const nextIndex = (current, max, except) => {
  if (except.length === max)
    return null;
  return (current + 1) % max
}

const reducer = (state = initialState, action) => {
  // Throwing a flashcard means you're done with it.
  // Show the next flashcard in the remaining deck.
  // currentFlashcard may be set to null if no one remains.
  if (action.type == THROW_FLASHCARD) {
    if (action.index === null)
      return state

    // Don't dupplicate array elements
    let completedFlashcards = state.completedFlashcards
    if (completedFlashcards.findIndex((i) => (i === action.index)) < 0)
      completedFlashcards = completedFlashcards.concat([action.index])

    const currentFlashcard = nextIndex(state.currentFlashcard, state.flashcards.length, completedFlashcards)

    return {
      ...state,
      currentFlashcard: currentFlashcard,
      completedFlashcards: completedFlashcards,
    }
  } else if (action.type == SKIP_FLASHCARD) {
    const currentFlashcard = nextIndex(state.currentFlashcard, state.flashcards.length, state.completedFlashcards)

    return {
      ...state,
      currentFlashcard: currentFlashcard
    }
  } else {
    return state
  }
}

export default reducer;
