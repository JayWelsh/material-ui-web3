import React from 'react';

import { HashRouter } from 'react-router-dom';

import { createTheme, StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '../styles/App.css';
import { PropsFromRedux } from '../containers/AppContainer';
import BlockNumberIndicator from './BlockNumberIndicator';

import PageContainer from './PageContainer';
declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const App = (props: PropsFromRedux) => {

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: props.darkMode ? 'dark' : 'light',
          ...(props.darkMode && {
            background: {
              default: "#131313",
              paper: "#2b2b2b"
            }
          })
        },
      }),
    [props.darkMode],
  );

  return (
    <HashRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <PageContainer/>
            <BlockNumberIndicator/>
          </ThemeProvider>
        </StyledEngineProvider>
    </HashRouter>
  );
}

export default App;
