import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput";
import DisplayArticle from "./DisplayArticle/DisplayArticle";
import DisplayTree from "./DisplayTree/DisplayTree";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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
        <div className="app-container">
          <Header logo={require('./Assets/Tree.png')} />
          <div>
            <UserInput name={"DOAJ Search String:"} />
            <UserInput name={"Set the Node:"} />
            <DisplayTree />
          </div>
          <div>
            <UserInput name={"Exact Phrase to Locate:"} />
            <DisplayArticle />
          </div>
          <Footer year={"2019"} contributors={"Jacob Artz"} />
        </div>
      </div>
    );
  }
}

export default App;
