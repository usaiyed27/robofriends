//react is view library
import React from 'react';
// ReactDom is used for DOM, for websites
import ReactDOM from 'react-dom';
// ./ means the file is in the same folder.
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// use destructuring when have multiple exports
// e.g { robots, cats}
	

ReactDOM.render(
  <div>
  	<App />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
