import React from 'react';
import './App.css';
import Stepper1 from './components/Stepper';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {
  RecoilRoot
} from 'recoil';
import ShowDataExcel from './components/ShowDataExcel';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
      
      
      <BrowserRouter>
      <Route exact path='/' component={Stepper1}/>
      <Route path = '/show_data' component = {ShowDataExcel}/>
      </BrowserRouter>
        
      </RecoilRoot>
    </div>
  );
}

export default App;
