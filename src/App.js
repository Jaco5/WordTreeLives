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
        <div>
          <UserInput name={"DOAJ Search String:"} />
          <UserInput name={"Set the Node:"} />
          <DisplayTree />
        </div>
        <div>
          <UserInput name={"Exact Phrase to Locate:"} />
          <DisplayArticle />
        </div>

        
      </div>
    );
  }
}

export default App;
