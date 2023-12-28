import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from './store';
import toast, { Toaster } from 'react-hot-toast';


import {positions, transitions, Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Alert message display and positioning
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

root.render(
  <Provider store={store}>
  {/* For Showing Alert   */}
  <AlertProvider template={AlertTemplate} {...options}>
  <Toaster/>
  <App />
  </AlertProvider>
  </Provider>
);
