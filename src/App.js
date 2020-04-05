import React from "react";



import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchBox/search-box.component'
import './App.styles.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBox: '',
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users =>
          this.setState({ monsters: users, loading: false })
        );
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({ searchBox: e.target.value })
  }

  render() {
    const { monsters, searchBox, loading } = this.state;
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchBox.toLocaleLowerCase()))
    return (
      <div className="App">
        {loading === false ? (
          <div>
            <h1>Monster legend</h1>
            <SearchBox
              placeholder="Search monster"
              handleChange={this.handleChange} />
            <CardList monsters={filterdMonsters} />
          </div>
        ) : (
            <h1>Loding Monsters...</h1>
          )}
      </div>
    );
  }
}

export default App;


