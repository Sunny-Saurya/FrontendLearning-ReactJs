import React, { Component } from 'react'

export default class ControlledComponent extends Component {
    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            review: '',
            states: ''
        }
    }
    changeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    changeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    changeReview = (event) => {
        this.setState({
            review: event.target.value
        })
    }
    changeState = (event) => {
        this.setState({
            state: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        alert(`First Name: ${this.state.firstname} \n Last Name: ${this.state.lastname} \n Review: ${this.state.review} \n State: ${this.state.states.toUpperCase()}`);
    }

    // now instead of using many funtion for this we can use single function like below

    handelChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value // why same name for key and value because in input tag we have used name attribute same as state key names
        })



    }
  render() {
    return (
      <div>
        <form action="">
            <h1>Controlled Component</h1>
            <label htmlFor="">FirstName: </label>
            <input value={this.state.firstname} onChange={this.handelChange} type="text" name="firstname" />
            <br /><br />
            <label htmlFor="">LastName: </label>
            <input value={this.state.lastname} onChange={this.handelChange} type="text" name="lastname" />
            <br /><br />
            <label htmlFor="">Review</label>
            <textarea value={this.state.review} onChange={this.handelChange} name="review" id="" cols="30" rows="10"></textarea>
            <br /><br />
            <select  value={this.state.states} onChange={this.handelChange} name="states" id="">
                <option name="states" value="TamilNadu">TamilNadu</option>
                <option name="states" value="Kerala">Kerala</option>
                <option name="states" value="Karnataka">Karnataka</option>
                <option name="states" value="Punjab">Punjab</option>
                <option name="states" value="Telangana">Telangana</option>
            </select>
            <button onClick={this.submitForm} type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
