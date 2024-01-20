import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App";
import './style.css'
import { Provider } from "react-redux";
import store from "./redux/store";



ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}  >
            <App />
        </Provider>

)