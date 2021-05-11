
import React, { useEffect } from 'react';
import ContentForm from './components/Admin/Content/ContentForm';
import ContentUpdate from './components/Admin/Content/ContentUpdate';
import ContentDetails from './components/Content/ContentDetails';
import ViewDetails from './components/Admin/Content/ViewDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Escolario from './components/About/Escolario/Escolario';
import { useDispatch, useSelector } from 'react-redux'
import BestOfficerHistoryList from './components/About/Best History/BestOfficerHistoryList';
import Best from './components/About/Best/Best';
import Error from './components/Error';
import NewsList from './components/Content/List/NewsList';
import FeaturesList from './components/Content/List/FeaturesList';
import LiteraryList from './components/Content/List/LiteraryList';
import OpinionList from './components/Content/List/OpinionList';
import BeyondEspanaList from './components/Content/List/BeyondEspanaList';
import './App.css'
import Login from './components/Admin/User/Login';
import Register from './components/Admin/User/Register';
import ChangePassword from './components/Admin/User/ChangePassword';
import PrivateRoute from './components/Admin/PrivateRoute';
import ContentList from './components/Admin/Content/ContentList';
import Header from './components/Header';
import ResetPassword from './components/Admin/User/ResetPassword';
import ForgotPassword from './components/Admin/User/ForgotPassword';
import ErrorBoundary from './components/ErrorBoundary';
import Homepage from './components/Content/Homepage';
import ResponsesList from './components/Admin/Response/Responses';
import { getAllContent } from './actions/contentActions';
import { getAllResponses } from './actions/responseActions';
import Footer from './components/Footer';

const App = () => {

  const localUser = JSON.parse(localStorage.getItem("admin"))
  const user = useSelector(state => state.user.authData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllContent())
    dispatch(getAllResponses());
  }, [])


  return (
    <div>

      <Router>
        <Header />
        <ErrorBoundary>

          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/about' exact component={Escolario} />
            <Route path='/about-best' exact component={Best} />
            <Route path='/about-best-officers-history' exact component={BestOfficerHistoryList} />
            <Route path='/news' exact component={NewsList} />
            <Route path='/features' exact component={FeaturesList} />
            <Route path='/literary' exact component={LiteraryList} />
            <Route path='/opinion' exact component={OpinionList} />
            <Route path='/beyond-espana' exact component={BeyondEspanaList} />
            <Route path='/post/:id' exact component={ContentDetails} />

            <Route path='/login' exact component={Login} />
            <Route path='/reset-password/:resetToken' component={ResetPassword} />
            <Route path='/register' exact component={Register} />
            <Route path='/forgot-password' exact component={ForgotPassword} />

            <PrivateRoute path='/edit/:id' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ContentUpdate} />
            <PrivateRoute path='/admin/new' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ContentForm} />
            <PrivateRoute path='/admin' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ContentList} />
            <PrivateRoute path='/admin/post/:id' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ViewDetails} />
            <PrivateRoute path='/admin/response' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ResponsesList} />
            <PrivateRoute path='/change-password' user={user || localUser} isAdmin={user?.result?.isAdmin || localUser?.result?.isAdmin} exact component={ChangePassword} />

            <Route exact component={Error} />

          </Switch>


        </ErrorBoundary>
        <Footer />

      </Router>

    </div >

  )
}
export default App



