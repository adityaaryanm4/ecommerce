import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux"
import darkMode, { persistor } from "./darkMode/darkMode"
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={darkMode}>
      <PersistGate loading={null} persistor={persistor}><App /></PersistGate>
    </Provider>
);
