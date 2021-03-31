
import React, { useEffect } from 'react';
import ContentForm from './components/Admin/Content/ContentForm';
import ContentUpdate from './components/Admin/Content/ContentUpdate';
import ContentDetails from './components/Content/ContentDetails';
import ViewDetails from './components/Admin/Content/ViewDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Escolario from './components/About/Escolario';
import { useDispatch, useSelector} from 'react-redux'
import BestOfficerHistoryList from './components/About/BestOfficerHistoryList';
import Projects from './components/About/Projects';
import Best from './components/About/Best';
import Home from './components/Content/Home';
import Error from './components/Error';
import NewsList from './components/Content/List/NewsList';
import FeaturesList from './components/Content/List/FeaturesList';
import LiteraryList from './components/Content/List/LiteraryList';
import OpinionList from './components/Content/List/OpinionList';
import BeyondEspanaList from './components/Content/List/BeyondEspanaList';
import { getAllContent } from './actions/contentActions';

import Login from './components/Admin/User/Login';
import Register from './components/Admin/User/Register';

import RecoverPassword from './components/Admin/User/RecoverPassword';
import ChangePassword from './components/Admin/User/ChangePassword';
import PrivateRoute from './components/Admin/PrivateRoute';
import ContentList from './components/Admin/Content/ContentList';
import ResponseList from './components/Admin/Response/ResponseList';

const App = () => {

  const dispatch = useDispatch()
  const localUser = JSON.parse(localStorage.getItem("admin"))
  const user = useSelector(state => state.user.authData)

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={Escolario} />
          <Route path='/about-best' exact component={Best} />
          <Route path='/about-best-officers-history' exact component={BestOfficerHistoryList} />
          <Route path='/about-projects' exact component={Projects} />
          <Route path='/news' exact component={NewsList} />
          <Route path='/features' exact component={FeaturesList} />
          <Route path='/literary' exact component={LiteraryList} />
          <Route path='/opinion' exact component={OpinionList} />
          <Route path='/beyond-espana' exact component={BeyondEspanaList} />
          <Route path='/post/:id' exact component={ContentDetails} />

          <PrivateRoute path='/edit/:id' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ContentUpdate} />
          <PrivateRoute path='/admin/new' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ContentForm} />
          <PrivateRoute path='/admin' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin}  exact component={ContentList} />
          <PrivateRoute path='/admin/post/:id' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ViewDetails} />
          <PrivateRoute path='/admin/response' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ResponseList} />
          
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/recover-password' exact component={RecoverPassword} />
          <Route path='/change-password' exact component={ChangePassword} />


          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  )
}
export default App



