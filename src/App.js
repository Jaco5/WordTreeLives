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
    results: [], // Initial search results from doaj.org
    treeData: [],  // Array of single index arrays of strings created from search result abstracts.
    node: "",  // Node word of the word tree chart.
    requestTerms: "", // Search term for api to doaj.
    matchPhrase: "",  // The phrase to search your search results for.
    matchingArticle: { // The title and href of the article containing the phrase.

    }
  }

  APIsearch = () => { // The first step is to search doaj.org
    // this.setState({ treeData: [] })
    // API.searchAPI(this.state.phrase)
    //   .then(async result => { // Use of ASYNC AWAIT is to deal with the time delay on setState, may be able to eliminate this by using MOBX
    //     console.log("RESULT: ", result);
    //     await this.setState({ results: result.data.results })
    //     console.log("results: set")
    //     this.createTreeData() // Here we call the method to create the treeData
    //   }).catch(e => console.log(e));;
  }

  createTreeData = () => {
    let bigArray = [] // To avoid mutating state.
    for (var i = 0; i < this.state.results.length; i++) { // For each result
      if (this.state.results[i].bibjson.abstract && this.state.results[i].bibjson.abstract != ".") { // Many results have null or "." in their abstract key, don't include these.
        let singleArray = [this.state.results[i].bibjson.abstract]; // Package the string in an array before pushing it.
        // console.log(singleArray);
        bigArray.push(singleArray); // Ah, push it.
      }
    }
    console.log("big" + bigArray);
    console.log(this.state.results)
    this.state.results.map(result => { // ???? This was to work around a bug but now im not sure why the map is needed 
      this.setState({ treeData: bigArray });
    });

    setTimeout(() => { //this is just a console log on a timer, I think its just a debugging tool possibly not needed now
      console.log(this.state)
    }, 5000);


  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleAPI = event => {
    event.preventDefault();
    if (this.state.phrase) {
      this.APIsearch(this.state.phrase);
    };
  };





  findThatArticle = (event) => {
    event.preventDefault();
    const thisArticle = this.state.results.filter(article => article.bibjson.abstract && article.bibjson.abstract.includes(this.state.relevant)); // If the article has an abstract and that abstract includes state.phrase
    if (thisArticle[0]) {
      this.setState({
        relevantResult: {
          title: thisArticle[0].bibjson.title ? thisArticle[0].bibjson.title : "Title not found.",
          link: thisArticle[0].bibjson.link[0].url ? thisArticle[0].bibjson.link[0].url : "Link not found.",
          year: thisArticle[0].bibjson.year ? thisArticle[0].bibjson.year : "Year not found.",
          journal: thisArticle[0].bibjson.journal.title ? thisArticle[0].bibjson.journal.title : "Journal not found.",
          publisher: thisArticle[0].bibjson.journal.publisher ? thisArticle[0].bibjson.journal.publisher : "Publisher not found.",
          subject: thisArticle[0].bibjson.subject[0].term ? thisArticle[0].bibjson.subject[0].term : "Subject not found.",
          abstract: thisArticle[0].bibjson.abstract
          // add: the other deets, display below?
        }
      })
    }
  }




  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Header logo={require('./Assets/Tree.png')} />
          <div>
            <UserInput 
            name={"requestTerms"}
            onChange={this.handleInputChange}
            value={this.state.requestTerms}
            />
            <UserInput 
            name={"node"}
            onchange={this.handleInputChange}
            value={this.state.node} 
            />
            <DisplayTree />
          </div>
          <div>
            <UserInput 
            name={"matchPhrase"}
            onChange={this.handleInputChange}
            value={this.state.matchPhrase}             />
            <DisplayArticle />
          </div>
          <Footer year={"2019"} contributors={"Jacob Artz"} />
        </div>
      </div>
    );
  }
}

export default App;
