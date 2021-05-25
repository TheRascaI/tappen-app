import React,{Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch

} from 'react-router-dom';
import logo from "./assets/svg/tappen-app-icon.svg";
import './App.css';
// import Auth from './user/pages/Auth';
import Home from './user/pages/Home';
import Game from './cards/pages/Game';
// import UserCards from './cards/pages/UserCards';
import MainNavigation from './shared/components/Navigation/MainNavigation';
// import NewCard from './cards/pages/NewCard';
// import UpdateCard from './cards/pages/UpdateCard';
// import AllCards from './cards/pages/AllCards';
 import Button from './shared/components/FormElements/Button';
import { AuthContext } from './shared/context/auth-context';
import {useAuth} from './shared/hooks/auth-hook';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

const UserCards = React.lazy(()=> import('./cards/pages/UserCards'));
const NewCard = React.lazy(()=> import('./cards/pages/NewCard'));
const UpdateCard = React.lazy(()=> import('./cards/pages/UpdateCard'));
const AllCards = React.lazy(()=> import('./cards/pages/AllCards'));
const Auth = React.lazy(()=> import('./user/pages/Auth'));

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
        <AllCards />
        </Route>
        <Route path="/api/:userId/cards" exact>
        <UserCards />
        </Route>
        <Route path="/api/cards/" exact>
          <AllCards />
        </Route>
        <Route path="/api/cards/new" exact>
          <NewCard />
        </Route>
        <Route path="/cards/:cardId">
          <UpdateCard />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/game" exact>
          <Game />
        </Route>
        <Route path="/api/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
    value={{ isLoggedIn: !!token,  token: token, userId: userId, login: login, logout: logout }}  >
    <div className="App">
  <Router>
{token && <MainNavigation />}
 {!token && <Button to="/" ><img className="logo" width="50" src={logo} alt="tappen-logo" /></Button>
}

  <main><Suspense fallback={<div className="center"><LoadingSpinner /></div>}>{routes}</Suspense></main>
  </Router>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
