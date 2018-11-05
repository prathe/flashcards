import React from 'react';
import FlashcardList from './FlashcardList';

const FlashcardDeck = (props) => {
  return (
    <FlashcardList flashcards={props.flashcards} />
  );
};

export default FlashcardDeck
