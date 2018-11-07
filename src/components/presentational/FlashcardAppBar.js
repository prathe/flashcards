import React from 'react'

const FlashcardAppBar = (props) => {
  return (
    <div>{`${props.name} (${props.count})`}</div>
  )
}

export default FlashcardAppBar
