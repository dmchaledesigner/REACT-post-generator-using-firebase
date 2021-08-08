
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout';


import AllMeetUpsPage from './pages/AllMeetUps'
import NewMeetUpsPage from './pages/NewMeetUps';
import FavouritesPage from './pages/Favourites';





function App() {
  return (
    <Layout>

      <Switch>

        <Route path="/" component={AllMeetUpsPage} exact></Route>
        <Route path="/favourites" component={FavouritesPage}></Route>
        <Route path="/new-meetup" component={NewMeetUpsPage}></Route>

      </Switch>

    </Layout>
  );
}

export default App;
