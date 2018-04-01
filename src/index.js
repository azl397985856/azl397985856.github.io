import React from 'react';
import ReactDOM from 'react-dom';
import './libs/fontawesome/fontawesome-all.min';
import './styles/base.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
