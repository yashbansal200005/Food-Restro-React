import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import UserContextProvider from './context/userContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </UserContextProvider>
  </Provider>
);
