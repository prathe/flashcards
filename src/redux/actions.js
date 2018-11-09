export const THROW_FLASHCARD = 'THROW_FLASHCARD'
export const SKIP_FLASHCARD = 'SKIP_FLASHCARD'

const throwFlashcard = index => ({ type: THROW_FLASHCARD, index })
const skipFlashcard = index => ({ type: SKIP_FLASHCARD, index })

export { throwFlashcard, skipFlashcard }
