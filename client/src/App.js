import './App.css'
import { Switch, Route } from 'react-router-dom'
import CardPage from './pages/CardPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import SellerPage from './pages/SellerPage'

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <HomePage {...props} />} />
        <Route
          path="/sellers"
          component={(props) => <SellerPage {...props} />}
        />
        <Route
          path="/card/:id"
          component={(props) => <CardPage {...props} />}
        />
        <Route
          path="/user/:id"
          component={(props) => <UserPage {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
