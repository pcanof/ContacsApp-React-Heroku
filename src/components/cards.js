import { Component } from "react";

class Cards extends Component{
        
    constructor(props){
        super(props);
        this.state = {
            contacts: props.contactsState
        };
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
                            onClick={this.props.onRemove(this.state.contacts)}>
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