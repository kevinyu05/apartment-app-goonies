import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
class Apartments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    fetch("/apartments.json")
    .then((response) => response.json())
    .then((apartments) =>{
      this.setState({ apartments: apartments})
    })
  }

  render () {
    return (
      <div>
      <h1>My Apartments</h1>
      <table>
        <tbody>
          <tr>
            <th>Address</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>State</th>
            <th>Country</th>
          </tr>

          {this.state.apartment.map((apartment, index) => {
            return(
          <tr key={index}>
            <td>{apartment.address}</td>
            <td>{apartment.city}</td>
            <td>{apartment.zipcode}</td>
            <td>{apartment.state}</td>
            <td>{apartment.country}</td>
          </tr>
        )
      })}
        </tbody>
      </table>
      <Link to="new-apartment">Add New</Link>
    </div>


    );
  }
}

export default Apartments
