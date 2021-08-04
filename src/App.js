import React, {Component} from 'react';
import './App.css';
import MountainContainer from './components/MountainContainer';
import MountainItem  from './components/MountainItem';
const mountainsURL = "http://localhost:3000/mountains"

class App extends Component {
  
  state = {
    mountains:[],
  }


  componentDidMount(){
    this.getMountains()
  }
  
  getMountains = () => {
    fetch(mountainsURL)
      .then(response => response.json())
      .then(mountains => this.setState({mountains}))

  }

  render() {
    return (
      <div className="App">
        <h1>Mountains App (testing)</h1>
        <MountainContainer mountains={this.state.mountains} />
      </div>
    );
  }
}

export default App;
