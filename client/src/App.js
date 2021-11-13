import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateDiscussion from './pages/CreateDiscussion';
import ViewDiscussion from './pages/ViewDiscussion';
import Chatbot from "./components/Chatbot"
import './App.css';

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/creatediscussion' exact component={CreateDiscussion} />
        <Route path='/viewdiscussion' exact component={ViewDiscussion} />
       
      </Switch>

      <Chatbot />

    </Router>
  );
}

export default App;
