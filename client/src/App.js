
import React, {useEffect} from 'react';
import ContentForm from './components/Content/ContentForm';
import ContentUpdate from './components/Content/ContentUpdate';
import ContentDetails from './components/Content/ContentDetails';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Escolario from './components/About/Escolario';
import { useDispatch } from 'react-redux'
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


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllContent());
  }, [])

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/edit/:id' exact component={ContentUpdate} />
          <Route path='/new' exact component={ContentForm} />
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
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  )
}
export default App



