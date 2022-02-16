import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout';
import Home from './components/Boder/Home'
import AddMase from './components/Boder/AddMase';
import StartMill from './components/Boder/StartMill';
import GustMill from './components/Boder/GustMill';
import LostMill from './components/Boder/LostMill';
import TotalMill from './components/Boder/TotalMill';
import BazarList from './components/Boder/BazarList';
import BazarInput from './components/Boder/BazarInput';
import TkJomaHistory from './components/Boder/TkJomaHistory';

import Main from './components/Maneger/Main';
import BoderRequest from './components/Maneger/BoderRequest';
import LostMillConfirm from './components/Maneger/LostMillConfirm';
// no need
// import TodayTotalMill from './components/Maneger/TodayTotalMill';
import TkJoma from './components/Maneger/TkJoma';
import TotalTk from './components/Maneger/TotalTk';
import DayDetails from './components/Maneger/DayDetails';
import BazarTk from './components/Maneger/BazarTk';
import BazarTkHistory from './components/Maneger/BazarTkHistory';
import BazarTkEdit from './components/Maneger/BazarTkEdit';
import GuestMillStart from './components/Maneger/GuestMillStart';
import GustMillList from './components/Maneger/GustMillList';
import GustMillEdit from './components/Maneger/GustMillEdit';
import BoderLostMill from './components/Maneger/BoderLostMill';
// import MillAmountInput from './components/Maneger/MillAmountInput';
import MillCount from './components/Maneger/MillCount';
import CreateBazarList from './components/Maneger/Bazar/CreateBazarList';
import BazarkariList from './components/Maneger/Bazar/BazarkariList';
import AddBazarkari from './components/Maneger/Bazar/AddBazarkari';
import BazarTkTake from './components/Maneger/Bazar/BazarTkTake';
import BazarConfirm from './components/Maneger/Bazar/BazarConfirm';
import Basic from './components/Maneger/Extra/Basic';
import MakeManeger from './components/Maneger/Extra/MakeManeger';
import CostList from './components/Maneger/Extra/CostList';
import AddCost from './components/Maneger/Extra/AddCost';
import EditCost from './components/Maneger/Extra/EditCost';


import AuthenticatedRoute from './Route/AuthenticRoute';
import CheckRoute from './Route/CheckRoute';
import Registration from './components/Auth/Registration';





// if(localStorage.getItem('token')){
//   browserHistory.push("home")
// }

class App extends React.Component {
  render() {
    return (
        <Router >


          <Switch>
            <Route exact path='/' component={Login} />
            <Route  path='/log-out' component={Logout} />
            <Route  path='/registration' component={ Registration } />
            {/* <Route path='/check-route' component={ CheckRoute } /> */}
            <AuthenticatedRoute path='/home' component={Home} />
            <AuthenticatedRoute exact path='/total-mill' component={TotalMill} />
            <AuthenticatedRoute exact path='/add-mase' component={AddMase} />
            <AuthenticatedRoute exact path='/update-mill' component={StartMill} />
            <AuthenticatedRoute exact path='/gust-mill' component={GustMill} />
            <AuthenticatedRoute exact path='/lost-mill' component={LostMill} />
            <AuthenticatedRoute exact path='/bazar-list' component={BazarList} />
            <AuthenticatedRoute exact path='/bazar-input' component={ BazarInput } />
            <AuthenticatedRoute exact path='/tk-joma-history' component={ TkJomaHistory } />


            <AuthenticatedRoute exact path='/maneger' component={Main} />
            <AuthenticatedRoute exact path='/boder-request' component={BoderRequest} />
            <AuthenticatedRoute exact path='/lost-mill-confirm' component={LostMillConfirm} />
            {/* <AuthenticatedRoute exact path='/today-total-mill' component={ TodayTotalMill } /> */}
            <AuthenticatedRoute exact path='/tk-joma' component={TkJoma} />
            <AuthenticatedRoute exact path='/total-tk' component={TotalTk} />
            <AuthenticatedRoute exact path='/day-details/:id' component={DayDetails} />
            <AuthenticatedRoute exact path='/bazarkari' component={ BazarkariList } />
            <AuthenticatedRoute exact path='/bazar-tk' component={BazarTk} />
            <AuthenticatedRoute exact path='/bazar-tk-history' component={BazarTkHistory} />
            <AuthenticatedRoute exact path='/edit-bazar-tk/:date' component={BazarTkEdit} />
            <AuthenticatedRoute exact path='/boder-gust-mill-start' component={GuestMillStart} />
            <AuthenticatedRoute exact path='/guest-mill-list' component={GustMillList} />
            <AuthenticatedRoute exact path='/guest-mill-edit/:id' component={GustMillEdit} />
            <AuthenticatedRoute exact path='/boder-lost-mill' component={BoderLostMill} />

 
            {/* <AuthenticatedRoute exact path='/mill-amount-input' component={ MillAmountInput } /> */}
            <AuthenticatedRoute exact path='/mill-count' component={MillCount} />
            <AuthenticatedRoute exact path='/add-bazarkari' component={ AddBazarkari } />
            <AuthenticatedRoute exact path='/make-bazar-list' component={ CreateBazarList } />
            <AuthenticatedRoute exact path='/took-bazar' component={ BazarTkTake } />
            <AuthenticatedRoute exact path='/confirm-bazar/:date' component={ BazarConfirm } />
            
            <AuthenticatedRoute exact path='/extra' component={ Basic } />
            <AuthenticatedRoute exact path='/make-maneger' component={ MakeManeger } />
            <AuthenticatedRoute exact path='/all-cost' component={ CostList } />
            <AuthenticatedRoute exact path='/add-cost' component={ AddCost } />
            <AuthenticatedRoute exact path='/edit-cost/:id' component={ EditCost } />





          </Switch>
        </Router>
    );
  }
}

export default App;
