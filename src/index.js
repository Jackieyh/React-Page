import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import PCIndex from './js/components/pc_index';
import MobileIndex from './js/components/mobile_index';
import { Router, Route, hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import './css/pc.css';
import './css/mobile.css';

import MediaQuery from 'react-responsive';

export default class Root extends Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PCIndex />
                </MediaQuery>

                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndex />
                </MediaQuery>
            </div>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
