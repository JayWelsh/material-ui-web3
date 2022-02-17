import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ChainId, DAppProvider } from '@usedapp/core'

import './styles/index.css';
import AppContainer from './containers/AppContainer';
import reportWebVitals from './reportWebVitals';
import store from './state';

const mainnetReadOnlyUrl = () => {
  if(process.env.REACT_APP_INFURA_KEY) {
    return `wss://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
  } else if(process.env.REACT_APP_ALCHEMY_KEY) {
    return `wss://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_INFURA_KEY}`;
  }
  return '';
}

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: mainnetReadOnlyUrl(),
  },
  autoConnect: false,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DAppProvider config={config}>
        <AppContainer />
      </DAppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();