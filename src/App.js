import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Create from './Create';
import MarketPlace from './MarketPlace';
import MyItems from './MyItems';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
    <>
      
    </>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/create" component={Create} />
      <Route path="/marketplace" component={MarketPlace}/>
      <Route path="/myitems" component={MyItems}/>
      <Route path="/profile" component={Profile} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
