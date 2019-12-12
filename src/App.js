import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput";
import DisplayArticle from "./DisplayArticle/DisplayArticle";
import DisplayTree from "./DisplayTree/DisplayTree";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import API from "./API/API.js"

import "./Assets/Tree.png"
import './App.css';


class App extends Component {

  state = {
    results: undefined, // Initial search results from doaj.org
    treeData: undefined,  // Array of single index arrays of strings created from search result abstracts.
    node: "",  // Node word of the word tree chart.
    requestTerms: "", // Search term for api to doaj.
    matchPhrase: "",  // The phrase to search your search results for.
    matchingArticle: { // The title and href of the article containing the phrase.

    }
  }

  doajAPI = () => { // The first step is to search doaj.org
    this.setState({ treeData: undefined }) // clear state to avoid mixing results
    API.searchAPI(this.state.requestTerms)
      .then( result => { // Use of ASYNC AWAIT is to deal with the time delay on setState, may be able to eliminate this by using MOBX
        console.log("RESULT: ", result);
       this.setState({ results: result.data.results })
        console.log("results: set")
        //this.createTreeData() // Here we call the method to create the treeData
      }).catch(e => console.log(e));;
  }

  createTreeData = () => {
    let bigArray = [] // To avoid mutating state.
    for (var i = 0; i < this.state.results.length; i++) { // For each result
      if (this.state.results[i].bibjson.abstract && this.state.results[i].bibjson.abstract !== ".") { // Many results have null or "." in their abstract key, don't include these.
        let singleArray = [this.state.results[i].bibjson.abstract]; // Package the string in an array before pushing it.
        // console.log(singleArray);
        bigArray.push(singleArray); // Ah, push it.
      }
    }
    console.log("bigArray" + bigArray);
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
    if (this.state.requestTerms) {
      this.doajAPI(this.state.requestTerms);
    };
  };

  handleNodeSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }




  findThatArticle = (event) => {
    event.preventDefault();
    const thisArticle = this.state.results.filter(article => article.bibjson.abstract && article.bibjson.abstract.includes(this.state.matchPhrase)); // If the article has an abstract and that abstract includes state.phrase
    if (thisArticle[0]) {
      this.setState({
        matchingArticle: {
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
            <div className="input-div-one">
              <UserInput 
                label={"A. First, enter the search word or phrase here, don't mind the glitchy seeming pause for now:"}
                name={"requestTerms"}
                onChange={this.handleInputChange}
                value={this.state.requestTerms}
                onClick={this.handleAPI}
              />
              <UserInput 
                label={"B. Second, this is the node, the seed word from which the word tree will grow (This is cAsE sensitive):"}
                name={"node"}
                onChange={this.handleInputChange}
                value={this.state.node}
              />
              
            </div>
            <p>C. To browse the tree, use a combination of clicking on words, and changing the node. Once you find language that interests you, scroll down and follow the next instruction.</p>
            { (this.state.results !== undefined) ? <button name="createTreeData" onClick={this.createTreeData}>Create Tree</button> : null}
            <DisplayTree
              treeData={this.state.treeData}
              node={this.state.node}
            />
          </div>
          <div>
            <UserInput 
              label={"D. Last, type a full sentence or unique phrase from the tree diagram to locate the article it originates from:"}
              name={"matchPhrase"}
              onChange={this.handleInputChange}
              value={this.state.matchPhrase}
              onClick={this.findThatArticle}
            />
            <DisplayArticle 
              article={this.state.matchingArticle}
            />
          </div>
          <Footer year={"2019"} contributors={"Jacob Artz"} />
        </div>
      </div >
    );
  }
}

export default App;
