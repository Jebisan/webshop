import React from 'react';
import ReactDOM from "react-dom";
import Router from './routers/Router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';


const store = configureStore()


const jsx = (
    <div>
        <Provider store={store}>
            <Router />
        </Provider>
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'));

