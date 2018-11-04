import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </React.Fragment>
    );
  }
}

export default App;
