import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './index.less';

class CounterHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
    }

    componentDidMount() {
        this.getdata();
    }

    getdata=()=>{
        const _this=this;
        axios.get('http://120.79.176.26:3000/counter')
            .then(function (response) {
                console.log(response)
                _this.setState({
                    data:response.data,
                });
            })
            .catch(function (error) {
                console.log(error);

            })
    }

    del=(e)=>{
        const _this=this;
        const id=e.target.id;
        axios({
            method: 'post',
            headers:{'Content-type':'application/json'},
            url: 'http://120.79.176.26:3000/counter/del',
            data: {
                id: id,
            }
        }).then(function (response) {
            _this.getdata();
        }).catch(function (error) {
            console.log(error);
        });
    }



    changeValue=(e)=>{

    }

    render() {
        var data=this.state.data;
        console.log(data)
        return (
            <div className="box1">
                <div className="box">
                    <div><span className="index">index</span>
                        <span className="eval">历史计算</span>
                        <span className="time">计算时间</span>
                        <span>操作</span>
                    </div>
                    {data.map((data,index)=>
                        <div key={data.time}>
                            <span className="index">{index+1}</span>
                            <span className="eval">{data.counter}</span>
                            <span className="time">{moment(data.time).format('YYYY-MM-DD HH:mm:ss')}</span>
                            <button id={data.id} onClick={event => this.del(event)}>删除</button>
                        </div>)}
                </div>
            </div>

        )
    }
}

export default CounterHistory;