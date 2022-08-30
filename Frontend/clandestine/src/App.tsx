import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation} from "./Components";
import {Login, Products} from "./Pages";
import {Routes, Route} from 'react-router-dom';
function App() {
  const items =[{text: "Home", route: "/"}];
  return (
    <div className="App">
        <Navigation
            style={{background: "hsl(0, 50%, 50%)"}}
            drawerAnchor={"right"}
            menuItems={items}
            drawerItems={items}/>
        <div className={"Content"}>
            <Products/>

        </div>
    </div>

  );
}

export default App;
