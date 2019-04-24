import React, { Component } from 'react';
import MyButton from '../../components/MyButton/index';
import { BUTTON_VALUE} from '../../Utils/Enum';
//import styles from './index.module.css';

import styles from './my.module.less'

class Login extends Component {

    render() {
        console.log(styles.text)
        return (

            <div className="box1">
                <div className={styles.text}>Hello World</div>
            </div>
        )
    }
}

export default Login;