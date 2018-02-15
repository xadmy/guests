import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import WebPage from './components/WebPage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider>
  <WebPage />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
