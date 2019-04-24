import React, { Component } from 'react';
class MyButton extends Component {
    render() {
        return (
            <div >
                {this.props.data.map(data=><button value={data.value} key={data.value} style={{width:this.props.width,height:this.props.height}}>{data.value}</button>)}
            </div>
        );
    }
}

export default MyButton;