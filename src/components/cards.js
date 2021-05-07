import { Component } from "react";
import { contacts } from './contacts.json';

class Cards extends Component{
        
    constructor(){
        super();
        this.state = {
            contacts
        };
    }
        

    removeTodo(index) {
        this.setState({
          contacts: this.state.contacts.filter((e, i) => {
            return i !== index
          })
        });
      }

    render(){
        const contacts = this.state.contacts.map((contact, i) => {
            return (
                
                <div className="card mt-4" key={i}>
                    <div className="card-title text-center">
                        <h3>{contact.name} {contact.lastname}</h3>
                    </div>
                    <div className="card-body">
                        <p>Company: {contact.company}</p>
                        <p>PhoneNumber: {contact.phonenumber}</p>
                        <p>Email: {contact.email}</p>
                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-danger"
                            onClick={this.removeTodo.bind(this, i)}>
                            Delete
                        </button>
                        <button
                        className="btn btn-primary">
                        Edit
                        </button>
                    </div>
                </div>
                
            )
          });
    return(
            <div className="col-md-4">
                {contacts}
            </div>
        )
    }
    
}

export default Cards;