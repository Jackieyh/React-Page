import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

export default class PCIndex extends Component {
    render() {
        return (
            <div>
                <MobileHeader />
                <MobileFooter />
            </div>
        );
    };
}