import React, { Component } from 'react';

import logo from '../../images/logo.png';  // 导入logo图片

export default class MobileHeader extends Component {
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src={logo} alt="logo"></img>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    };
}