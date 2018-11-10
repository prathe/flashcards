import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './redux/reducer';

import FlashardAppBarContainer from './components/containers/FlashardAppBarContainer';
import FlashcardDeckContainer from './components/containers/FlashcardDeckContainer';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Provider store={store}>
          <>
            <FlashardAppBarContainer />
            <FlashcardDeckContainer />
          </>
        </Provider>
      </>
    );
  }
}

export default App;
