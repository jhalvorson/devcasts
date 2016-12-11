import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'


import State from './components/State'
import Podcast from './components/Podcast'
import NotFound from './components/NotFound'
import Faves from './components/Faves'
import Header from './components/Header'
import Footer from './components/Footer'

import './css/index.css';

import { Provider } from 'react-redux';
import store from './store';

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Match exactly pattern="/" component={State} />
                    <Match pattern="/podcast/:slug" component={Podcast} />
                    <Match pattern="/githubId/faves" component={Faves} />
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
