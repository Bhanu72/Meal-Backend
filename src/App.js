import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './components/Login/Login';
import Menu from './components/SideMenu/Menu';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import MealPlan from './components/pages/MealPlan';
import ManageUser from './components/pages/ManageUser';
import LoginActivities from './components/pages/LoginActivities';
import AccountDetails from './components/pages/AccountDetails';


function App() {
  return (
    <div className="App">
   
      {/* <Login/> */}
      <Router>
      <Menu/>
      <Switch>
        <div className="container">
<Route path='/' exact component={MealPlan}/>
<Route path='/manageuser' component={ManageUser}/>
<Route path='/loginactivities' component={LoginActivities}/>
        </div>

      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
