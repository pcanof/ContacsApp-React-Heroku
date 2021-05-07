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
      contactsList: contacts
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }


  handleAddTodo(contact) {
    console.log(contact);
    this.setState({
      contactsList: [...this.state.contactsList, contact]
    })
    console.log(this.state.contactsList);
  }

  render() {
    
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Contacts
            <span className="badge badge-pill badge-light ml-2">
              {this.state.contactsList.length}
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
                <Cards></Cards>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
