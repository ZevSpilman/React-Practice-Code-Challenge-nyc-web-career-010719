import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoney from './components/AddMoney'

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor(){
    super()
    this.state = {
      sushi: [],
      cashLeft: 250,
      eaten: []
    }
  }

  componentDidMount(){
    this.fetchStuff()
  }

  fetchStuff = () => {
    fetch(API)
    .then(r => r.json())
    .then(r => this.setState({sushi: r}))
  }

  // addPlates = () => {
  //   this.setState((prevSate.eaten) => ({eaten: prevSate++}))
  // }

  addPlates = () => {
    let newArr = this.state.eaten
    newArr.push("plate")
    this.setState({eaten: newArr})
  }

  chargeMoney = (arg) => {
    this.setState({cashLeft: this.state.cashLeft - arg})
  }

  addMoney = (arg) => {
    this.setState({cashLeft: this.state.cashLeft + arg})
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} addPlates={this.addPlates} chargeMoney={this.chargeMoney}/>
        <Table cashLeft={this.state.cashLeft} eaten={this.state.eaten}/>
        <AddMoney addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;
