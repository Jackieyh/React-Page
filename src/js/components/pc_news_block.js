import React, { Component } from 'react';
import { Card } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';


export default class PCNewsBlock extends Component {


    constructor() {
        super();
        this.state = {
            news: '',
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET',
            // mode: 'no-cors',
        };
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type +
        //     "&count=" + this.props.count, myFetchOptions)
        //     .then(response => response.json())
        //     .then(json => this.setState({ news: json }));

        fetch("https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-2.html", myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({ news: json }));
    };

    render() {

        const { news } = this.state;
        console.log({ news });
        const newsList = news.length ? news.map((newsItem, index) => (
            <li key={index}>
                <link to={`details/${newsItem.uniquekey}`} target="_blank">
                    {newsItem.title}
                </link>
            </li>
        ))
            :
            '没有加载到任何新闻';

        return (
            <div className="topNewsList">
                <Card>
                    <ul>{newsList}</ul>
                </Card>
            </div>
        );
    }
}