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
        <Header />        
        <div>
          <UserInput name={"DOAJ Search String:"} />
          <UserInput name={"Set the Node:"} />
          <DisplayTree />
        </div>
        <div>
          <UserInput name={"Exact Phrase to Locate:"} />
          <DisplayArticle />
        </div>
        <Footer />

        
      </div>
    );
  }
}

export default App;
