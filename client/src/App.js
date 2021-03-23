
import React from 'react';
import ContentList from './components/Content/ContentList';
import ContentForm from './components/Content/ContentForm';
import ContentUpdate from './components/Content/ContentUpdate';
import ContentDetails from './components/Content/ContentDetails';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Escolario from './components/About/Escolario';
import BestOfficerHistoryList from './components/About/BestOfficerHistoryList';
import Projects from './components/About/Projects';
import Best from './components/About/Best';
import Home from './components/Content/Home';

const App = () => {
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
          <Route path='/:category' exact component={ContentList} />
          <Route path='/post/:id' exact component={ContentDetails} />
        </Switch>
      </div>
    </Router>
  )
}
export default App



