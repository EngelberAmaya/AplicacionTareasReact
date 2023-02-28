import React from 'react';
import ReactDOM from 'react-dom/client';

//import HookApp from './HookApp';
//import CounterApp from './components/01-useState/CounterApp';
//import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
//import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
//import MultipleCustomHook from './components/03-examples/MultipleCustomHook';
//import FocusScreen from './components/04-useRef/FocusScreen';
//import RealExampleRef from './components/04-useRef/RealExampleRef';
//import Layout from './components/05-useLayoutEffect/Layout';
//import Memorize from './components/06-memos/Memorize';
import MemoHook from './components/06-memos/MemoHook';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CounterWithCustomHook /> */}
    <MemoHook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
