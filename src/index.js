import React from 'react';
import ReactDOM from 'react-dom/client';
//import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
import MultipleCustomHook from './components/03-examples/MultipleCustomHook';
//import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
//import HookApp from './HookApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CounterWithCustomHook /> */}
    <MultipleCustomHook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
