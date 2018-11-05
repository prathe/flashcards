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
