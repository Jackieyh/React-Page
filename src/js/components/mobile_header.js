import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Modal, Button, Checkbox } from 'antd';
import logo from '../../images/logo.png';  // 导入logo图片

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends Component {

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

    login() {

    }

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
        const userShow = this.state.hasLogined ?
            <link>
                <Icon type="qq" theme="outlined" />
            </link>
            :
            <Icon type="user" theme="outlined" onClick={this.login.bind(this)} />;

        return (
            <div id="mobileheader">
                <header>
                    <img src={logo} alt="logo"></img>
                    <span>ReactNews</span>
                    {userShow}
                </header>

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

            </div>
        );
    };
}

export default MobileHeader = Form.create()(MobileHeader);