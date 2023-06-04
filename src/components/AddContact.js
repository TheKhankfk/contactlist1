//addContact.js

import React from "react";
// The AddContact component represents the form for adding a new contact.
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
// The add method is called when the form is submitted to add a new contact.
  addingcontacts = (e) => {
    e.preventDefault();
    // Check if name or email field is empty
    if (this.state.name === "" || this.state.email === "") {
      alert("Validate the proper completion of all fields.");
      return;
    }
    this.props.ach(this.state);    
    // Call the parent component's addContactHandler function, passing the current state as the new contact.
    this.setState({ name: "", email: "" });
    // Reset the state to clear the form inputs.
  };
  render() {
    return (
      <div className="ui main">
        <h2>Register Contact</h2>
        <form className="ui form" onSubmit={this.addingcontacts}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} style={{ background: "linear-gradient(to right, #fffff0, #a0a0a0)", color: "grey" , opacity: 0.8, width: "30%", fontWeight:"bold" }}
            />
          </div>
          <div className="field">
            <label>Contact Number</label>
            <input type="number" name="email" placeholder="123456789" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} style={{ background: "linear-gradient(to right, #fffff0, #a0a0a0)", color: "grey",  opacity: 0.8, width: "30%", fontWeight:"bold" }}
            />
          </div>
          <button className="ui button blue" style={{ backgroundColor: "#a2a2a2", color: "#0a0f0a" , borderRadius:"10%" }} >Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

// The AddContact component is a class component that represents the form for adding a new contact.
// It manages its own state for the name and email fields.
// The add method is called when the form is submitted, and it performs validation to ensure that both name and email fields are filled.
// If validation fails (empty field), it displays an alert message and returns without adding the contact.
// If validation passes, it calls the addContactHandler function from the parent component, passing the current state as the new contact.
// The state is then reset to clear the form inputs.
// The component renders the form with two input fields for name and email, along with a submit button.
// The input fields are bound to the state properties, and their values are updated through onChange events, updating the corresponding state properties.
// The component is exported as the default export for use in other parts of the application.