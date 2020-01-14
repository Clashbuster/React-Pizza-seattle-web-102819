import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'



class App extends Component {

constructor(){
  super()
  this.state = {
    pizzas : [],
    editing: {}
  }
  this.fetchPizzas()
}


componentDidUpdate(){
  console.log(this.state)
}

fetchPizzas = () => {
  fetch('http://localhost:3000/pizzas')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
        pizzas : myJson
      })
  });
}


editPizza = (pizza) => {
  console.log(pizza)
  this.setState({editing: pizza})
}



  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editingPizza={this.state.editing}/>
        <PizzaList allPizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
