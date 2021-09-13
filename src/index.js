import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from 'react-moralis';

const appId='Qt6NLq7iDGEWquUzDXgkCIzwzBPgvhyGLeOFlXRi';
const serverUrl='https://egbzndrtzayz.usemoralis.com:2053/server';
// const TOKEN_CONTRACT_ADDRESS="0xB2d6e1A60e3aADC3204388C794c626c1617846cA";


ReactDOM.render(
  <React.StrictMode>
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App />
  </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


