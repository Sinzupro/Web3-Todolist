import React from 'react';
//import ReactDOM from 'react-dom';
//import * as ReactDOMClient from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);



// const container = document.getElementById('root');
// //  create a root

// const root = ReactDOMClient.createRoot(container);

// root.render(
//   <App/>
// );
