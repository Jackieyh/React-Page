import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Modal, Button, Checkbox } from 'antd';

import logo from '../../images/logo.png';  // 导入logo图片

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends Component {

    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0,
        }
    }

    handleClick(e) {
        if (e.key == "register") {
            this.setState({ current: 'register' });
            this.setModalVisible(true);
        } else {
            this.setState({ current: e.key });
        }
    }

    setModalVisible(value) {
        this.setState({
            modalVisible: value,
        });
    };

    handleSubmit(e) {
        // 页面开始向API进行提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_username=" + formData.r_username + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions).
            then(response => response.json()).then(json => {
                this.setState({ userNickName: json.NickUserName, userid: json.UserId });
            });
        message.success("请求成功!");
        this.setModalVisible(false);
    }



    render() {
        let { getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button">退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type="user" theme="outlined" />注册/登录
            </Menu.Item>;

        return (
            <header>
                <Row>
                    <Col span={2}></Col>

                    <Col span={3}>
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>

                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top"><Icon type="fire" theme="outlined" />头条</Menu.Item>
                            <Menu.Item key="society"><Icon type="shop" theme="outlined" />社会</Menu.Item>
                            <Menu.Item key="domestic"><Icon type="google" theme="outlined" />国内</Menu.Item>
                            <Menu.Item key="International"><Icon type="global" theme="outlined" />国际</Menu.Item>
                            <Menu.Item key="entertainment"><Icon type="weibo" theme="outlined" />娱乐</Menu.Item>
                            <Menu.Item key="sports"><Icon type="dribbble" theme="outlined" />体育</Menu.Item>
                            <Menu.Item key="technology"><Icon type="apple" theme="outlined" />科技</Menu.Item>
                            <Menu.Item key="fashion"><Icon type="shopping" theme="outlined" />时尚</Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)} okText="关闭" cancelText="取消">
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form mode="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="请输入您的账号" {...getFieldProps('r_username')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password"
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="请输入您的密码" {...getFieldProps('r_password')} />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type="password"
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="请再次输入密码" {...getFieldProps('r_confirmPassword')} />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header >
        );
    };
}

export default PCHeader = Form.create()(PCHeader);