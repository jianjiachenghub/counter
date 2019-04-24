import React, { Component } from 'react';
import CounterView from './Pages/CounterView/index';
import CounterHistory from './Pages/CounterHistory/index';
import Login from './Pages/Login/index';
import { HashRouter,Router,Route,Switch,Link,BrowserRouter} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <Switch>
                  <Route path="/" component={Login} exact/>
                  <Route path="/counter" component={CounterView} />
                  <Route path="/counterHistory" component={CounterHistory} />
              </Switch>
              <ul id="menu">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/counter'>Counter</Link></li>
                  <li><Link to='/counterHistory'>History</Link></li>
              </ul>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
