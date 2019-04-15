import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput";
import DisplayArticle from "./DisplayArticle/DisplayArticle";
import DisplayTree from "./DisplayTree/DisplayTree";

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
