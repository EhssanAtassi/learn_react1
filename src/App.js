// import logo from "./logo.svg";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  //ANCHOR Use arrow founction to use that function every place and do not use the bind .
  handleChange = e =>{
    this.setState({searchFiled: e.target.value});
  };
  //ANCHOR test working
  render() {
    const { monsters, searchFiled } = this.state;
    //ANCHOR filter and reload by search filed
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className='App'>

        <SearchBox
          placeholder='Search Monsters'
          handlerChange={this.handleChange}
        />
        {/* <input
          type='text'
          placeholder='search filed'
          onChange={(e) => {
            this.setState({ searchFiled: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        /> */}
        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />
        {/* this is a childer of props */}
      </div>
    );
  }
}

export default App;
