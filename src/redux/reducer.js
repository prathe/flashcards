import { THROW_FLASHCARD } from './actions'

const initialState = {
  decks: [
    {
      name: 'My first deck',
      current: 0,
      completedSteps: [],
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
    }
  ]
};

const reducer = (state = initialState, action) => {
  const [deck, ...restDeck] = state.decks

  if (action.type == THROW_FLASHCARD) {
    return {
      decks: [ 
        ...restDeck,
        {
          ...deck,
          current: (deck.current + 1) % deck.flashcards.length,
          completedSteps: deck.completedSteps.concat([action.index]),
        }
      ]
    }
  } else {
    return state
  }
}

export default reducer;
