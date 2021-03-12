
import React from 'react';
import ContentList from './components/Content/ContentList';
import ContentForm from './components/Content/ContentForm';
import ContentDetails from './components/Content/ContentDetails';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={ContentList} />
          <Route path='/edit/:id' exact component={ContentForm} />
          <Route path='/new' exact component={ContentForm} />
          <Route path='/:category' exact component={ContentList} />
          <Route path='/post/:id' exact component={ContentDetails} />
        </Switch>
      </div>
    </Router>

  )
}
export default App



