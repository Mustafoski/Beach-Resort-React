import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

/* components */
import NavBar from './components/NavBar';

/* pages */
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/' exact component={Rooms} />
        <Route path='/single-room/:slog' exact component={SingleRoom} />
      </Switch>
    </>
  );
}

export default App;
