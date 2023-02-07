import React from 'react';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom';
import LogIn from './forms/LogIn';
import Comments from './forms/Comments';
import ThankYou from './forms/ThankYou';
import './style.css';

export default function App() {
  return (
    <div>
        <Router>
          <Route exact path ="/" element = {LogIn}/>
          <Route exact path="/Comments/:studentEmail" element ={Comments}/>
          <Route exact path="/ThankYou/:studentEmail/:studentComment" element ={ThankYou}/>
        </Router>
    </div>
  );
}



