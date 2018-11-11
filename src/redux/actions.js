export const THROW_FLASHCARD = 'THROW_FLASHCARD'
export const SKIP_FLASHCARD = 'SKIP_FLASHCARD'
export const RESET_FLASHCARD = 'RESET_FLASHCARD'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'
export const JUMP_TO_FLASHCARD = 'JUMP_TO__FLASHCARD'
export const REVEAL_ANSWER = 'REVEAL_ANSWER'

const throwFlashcard = index => ({ type: THROW_FLASHCARD, index })
const skipFlashcard = index => ({ type: SKIP_FLASHCARD, index })
const resetFlashcards = index => ({ type: RESET_FLASHCARD })
const addFlashcard = index => ({ type: ADD_FLASHCARD })
const jumpToFlashcard = index => ({ type: JUMP_TO_FLASHCARD, index })
const revealAnswer = index => ({ type: REVEAL_ANSWER, index })

export { throwFlashcard, skipFlashcard, resetFlashcards, addFlashcard, jumpToFlashcard, revealAnswer }
