import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import Podcast from './components/Podcast';
import NotFound from './components/NotFound';
import Faves from './components/Faves';
import Header from './components/Header';

import './css/index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Match exactly pattern="/" component={App} />
                <Match pattern="/podcast/:slug" component={Podcast} />
                <Match pattern="/githubId/faves" component={Faves} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
