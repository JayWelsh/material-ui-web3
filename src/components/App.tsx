import React from 'react';

import { Router } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../styles/App.css';
import { configureHistory } from '../utils';
import { PropsFromRedux } from '../containers/AppContainer';

import PageContainer from './PageContainer';

const history = configureHistory();

const App = (props: PropsFromRedux) => {

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: props.darkMode ? 'dark' : 'light',
        },
      }),
    [props.darkMode],
  );

  return (
    <Router history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <PageContainer/>
        </ThemeProvider>
    </Router>
  );
}

export default App;
