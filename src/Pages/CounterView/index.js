import React, { Component } from 'react';
import MyButton from '../../components/MyButton/index';
import { BUTTON_VALUE} from '../../Utils/Enum';
import styles from './index.less';
import axios from 'axios';

class CounterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:"",
        };
    }



    getButtonArr = (value=[]) => {
        var ButtonArr=[];
        value.forEach((outval)=> {
            outval.forEach((inval)=> {
               ButtonArr.push({value:inval})
            })
        })
        return ButtonArr;
    }


       count=()=>{
            var input = this.state.inputValue
            try{

                var value = eval(input).toFixed(2);
                const _this=this;
                axios({
                    method: 'post',
                    headers:{'Content-type':'application/json'},
                    url: 'http://localhost:3000/counter/add',
                    data: {
                        counter: input+"="+value,
                    }
                }).then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                return value;
            }catch(err){
                alert("表达式错误")
            }
        }


    getValue=(e)=>{
        var newInputValue=this.state.inputValue;
        var id=e.target.innerText;
        if(id !== "clear" && id !== "back" && id !== "equal"&&id!=="sign") {
            newInputValue = this.state.inputValue+id;
        }
        if(id === "=") {
            var value = this.count();
            newInputValue=value;
        }
        if(id === "clear") {
            newInputValue="";
        }
        if(id === "back") {
            newInputValue = this.state.inputValue.substring(0, this.state.inputValue.length - 1);
        }
        if(id === "√"){
            var value = this.count();
            if(value){
                newInputValue = Math.sqrt(value);
            }else{
                newInputValue="";
            }

        }
        this.setState({
            inputValue:newInputValue,
        })
    }
    changeValue=(e)=>{
        var newInputValue =e.target.value;
        console.log(newInputValue)
        this.setState({
            inputValue:newInputValue,
        })
    }

    render() {
        var ButtonArr = this.getButtonArr(BUTTON_VALUE)
        return (
            <div className="box1" >
                <input className="input" type="text" value={this.state.inputValue} onChange={(e)=>this.changeValue(e)}/>
                <div   onClick={(e)=>this.getValue(e)}>
                    <MyButton data={ButtonArr}  width="50px" height="50px"/>{/*事件委托加载mybutton上无效*/}
                </div>

            </div>
        )
    }
}

export default CounterView;