import React from "react"
import PropTypes from "prop-types"
import {Redirect, Link} from "react-router-dom"


class NewApartment extends React.Component {
constructor(props){
  super(props)
  this.state = {
    apartmentAttributes: {
      address: '',
      city: '',
      zipcode: '',
      state: '',
      country: ''
    }
  }
}


  handleSubmit = (event)=>{
    event.preventDefault()
    console.log("I submitted this")
    fetch('/apartments.json', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({apartment:this.state.apartmentAttributes})
    })
    .then((response)=>{
      this.setState({responseOk: true})
    })
  }

  handleChange = (event)=>{
    const { apartmentAttributes } = this.state
    apartmentAttributes[event.target.name] = event.target.value
    this.setState({ apartmentAttributes: apartmentAttributes})
}


  render () {
    const { apartmentAttributes, responseOk } = this.state
    return (
      <div>
      {responseOk &&
        <Redirect to="/all-apartments" />
      }
      {!responseOk &&
        <div>

      <h1>Add a new Apartment</h1>
        <form
        onSubmit={this.handleSubmit}
        >
        <label htmlFor="address">Address</label>
        <input
          type='text'
          name='address'
          value={apartmentAttributes.address}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type='text'
          name='city'
          value={apartmentAttributes.city}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="zipcode">Zip Code</label>
        <input
          type='number'
          name='zipcode'
          value={apartmentAttributes.zipcode}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="state">State</label>
        <input
          type='text'
          name='state'
          value={apartmentAttributes.state}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="country">Country</label>
        <input
          type='text'
          name='country'
          value={apartmentAttributes.country}
          onChange={this.handleChange}
        />
        <br />

        <button type="submit">Add</button>

        </form>
        </div>
      }
      <Link to="all-apartments">Back</Link>
    </div>
    );
  }
}

export default NewApartment
