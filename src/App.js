import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Jobs from './Pages/Jobs'
import Default from './templates/Default'
import TemplatePage from './templates/Page'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>

      <Default>
        <Switch>
          <Route path='/jobs'>
            <TemplatePage Component={Jobs} />
          </Route>

          <Route path='/about'>
            <TemplatePage Component={About} />
          </Route>

          <Route path='/'>
            <TemplatePage Component={Home} />
          </Route>

        </Switch>

      </Default>
    </Router>
  );
}

export default App;
