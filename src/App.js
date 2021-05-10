import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { contacts } from './components/contacts.json';
import Cards from './components/cards';
import CreateForm from './components/forms';
import 'firebase/firestore'

class App extends Component{

  constructor() {
    super();
    this.state = {
      contacts
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }


  handleAddTodo(contact) {
    console.log(contact);
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
    console.log(this.state.contacts);
  }

  removeContact(index) {
    this.setState({
      contacts: this.state.contacts.filter((e, i) => {
        return i !== index
      })
    });
  }

  render() {

    const contacts = this.state.contacts.map((contact, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
                <h3>{contact.name} {contact.lastname}</h3>
            </div>
            <div className="card-body">
              <p>Company: {contact.company}</p>
              <p>Phone Number: {contact.phonenumber}</p>
              <p>Email: {contact.email}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeContact.bind(this,i)}>
                  Delete
              </button>
              <button
                className="btn btn-primary">
                  Edit
              </button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Contacts
            <span className="badge badge-pill badge-light ml-2">
              {this.state.contacts.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

          <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <CreateForm onAddTodo={this.handleAddTodo}></CreateForm>
            </div>

            <div className="col-md-15">
              <div className="row">
                {contacts}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
