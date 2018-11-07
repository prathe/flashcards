import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/reducer';

import CurrentFlashardAppBar from './components/containers/CurrentFlashardAppBar';
import CurrentFlashcardDeck from './components/containers/CurrentFlashcardDeck';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <>
            <CurrentFlashardAppBar />
            <CurrentFlashcardDeck />
          </>
        </Provider>
      </>
    );
  }
}

export default App;
