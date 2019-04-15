import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput";
import DisplayArticle from "./DisplayArticle/DisplayArticle";
import DisplayTree from "./DisplayTree/DisplayTree";
import "./Assets/Tree.png"

import './App.css';

class App extends Component {

  state = {

  }

  handleInputChange = (event) => {

  }

  createTreeData = () => {

  }

  findThatArticle = () => {

  }




  render() {
    return (
      <div className="App">
        <img src={require('./Assets/Tree.png')}></img>
        <h1>I am groot!</h1>
        <UserInput />
        <UserInput />
        <UserInput />
        <DisplayArticle />
        <DisplayTree />

        
      </div>
    );
  }
}

export default App;
