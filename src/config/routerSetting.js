import React ,{Component} from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import PageOne from '../views/pageOne';
import PageTwo from '../views/pageTwo';
class RouterSetting extends Component {
    componentDidMount() {
    }
    render(){
      return (
        <div className="root">
          <Router>
            <Switch>
              <Route path="/" exact render={() => <Redirect to='/pageOne'></Redirect>}></Route>
              <Route path="/pageOne" component={PageOne} />
              <Route path="/pageTwo" component={PageTwo} />
            </Switch>
          </Router >
        </div>
      )
    }
  }
  export default RouterSetting;