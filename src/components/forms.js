import React, { Component } from 'react';

class CreateForm extends Component {
  constructor () {
    super();
    this.state = {
      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddTodo(this.state);
    this.setState({
      
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastname"
              className="form-control"
              value={this.state.lastname}
              onChange={this.handleInputChange}
              placeholder="Lastname"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              className="form-control"
              value={this.state.company}
              onChange={this.handleInputChange}
              placeholder="Company"
              />
          </div>
          <div className="form-group">
            <input
                type = "text"
                name="phonenumber"
                className="form-control"
                value={this.state.phonenumber}
                onChange={this.handleInputChange}
                placeholder = "Phone Number"
              />
          </div>
          <div className="form-group">
            <input
                type = "email"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder = "Email"
              />
          </div>
          <button type="submit" className="btn btn-primary"
          onClick={this.handleSubmit}>
            Create
          </button>
        </form>
      </div>
    )
  }

}

export default CreateForm;