
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Preloader from './Preloader/Preloader';
import { Classic } from './classic';

// import GMX from './EmailProviders/GMX/gmx';


ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <Classic />
      {/* <p className='renew'>expired..pls renew</p> */}
    </Suspense>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();