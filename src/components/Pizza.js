import React from "react"

const Pizza = (props) => {

  console.log(props.pizzaDetails)
  console.log(props.pizzaDetails.vegeterian)

  //expected 
  //=> {pizza object with correct boolena}
  //=> true or false

  //actual
  // => {pizza object with correct boolean}
  // => undefined


  let handleClick = (e) => {
    props.editPizza(props.pizzaDetails)
  }
  
  return(
    <tr>
      <td>{props.pizzaDetails.topping}</td>
      <td>{props.pizzaDetails.size}</td>
      <td>{props.pizzaDetails.vegeterian}</td>
      <td><button type="button" className="btn btn-primary" onClick={e => handleClick(e)} >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
