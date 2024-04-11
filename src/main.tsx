import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './redux/store';
import App from './App';
import './index.css';
import './satoshi.css';
const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement) ;
root.render(
  <React.StrictMode>
    {/* Wrap your App component with Provider and pass the store */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
