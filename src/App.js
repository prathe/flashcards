import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/reducer';
import CurrentFlashcardDeck from './components/containers/CurrentFlashcardDeck';
import 'typeface-roboto';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
          <CurrentFlashcardDeck />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
