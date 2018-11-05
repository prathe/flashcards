import React from 'react';
import FlashcardList from './FlashcardList';

const FlashcardDeck = (props) => {
  return (
    <>
    <p>{props.name}</p>
    <FlashcardList flashcards={props.flashcards} />
    </>
  );
};

export default FlashcardDeck
