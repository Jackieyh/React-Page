import React, { Component } from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
        }

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer" >
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={require('../../images/carousel_1.jpg')} alt="logo"></img></div>
                                    <div><img src={require('../../images/carousel_2.jpg')} alt="logo"></img></div>
                                    <div><img src={require('../../images/carousel_3.jpg')} alt="logo"></img></div>
                                    <div><img src={require('../../images/carousel_4.jpg')} alt="logo"></img></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="100%" cartTitle="国际头条" imageWidth="112px" />
                            <PCNewsImageBlock count={6} type="guoji" width="100%" cartTitle="娱乐头条" imageWidth="112px" />
                        </div>

                        <Tabs className="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际新闻" key="2">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>

                        <div className="card">
                            <PCNewsImageBlock count={6} type="guoji" width="100%" cartTitle="科技新闻" imageWidth="112px" />
                            <PCNewsImageBlock count={6} type="guoji" width="100%" cartTitle="时尚新闻" imageWidth="112px" />
                        </div>


                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}