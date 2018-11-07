const initialState = {
  decks: [
    {
      name: 'My first deck',
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
  //return { ...state }
  return state
}

export default reducer;
