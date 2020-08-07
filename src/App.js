import React, {Component} from 'react';
import {ToastProvider} from 'react-toast-notifications'
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

export default class App extends Component {
    render() {
        return (
            <ToastProvider>
                <Router>
                    <Routes/>
                </Router>
            </ToastProvider>
        );
    }
}
