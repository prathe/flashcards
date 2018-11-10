export const THROW_FLASHCARD = 'THROW_FLASHCARD'
export const SKIP_FLASHCARD = 'SKIP_FLASHCARD'
export const RESET_FLASHCARD = 'RESET_FLASHCARD'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'

const throwFlashcard = index => ({ type: THROW_FLASHCARD, index })
const skipFlashcard = index => ({ type: SKIP_FLASHCARD, index })
const resetFlashcards = index => ({ type: RESET_FLASHCARD })
const addFlashcard = index => ({ type: ADD_FLASHCARD })

export { throwFlashcard, skipFlashcard, resetFlashcards, addFlashcard }
