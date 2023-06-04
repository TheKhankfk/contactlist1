//contactcard.js
import React from "react";
import user from "../images/user.png";
// The ContactCard component represents an individual contact card.

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  
  // Render the contact card with the following structure:
  return (
    <div className="item" style={{ background: "linear-gradient(to right, #f0f0f0, #a0a0a0)", padding: "10px", marginBottom: "10px",  borderRadius: "5px" , opacity: 0.55, width: "30%" }} >
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header" style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }} >{name}</div>
        <div style={{ color: "#ff01f7" }} >{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.ch(id)}
      ></i>
    </div>
  );
};

export default ContactCard;


// The ContactCard component receives contact data as a prop and renders an individual contact card. It extracts the id, name, and email from the contact prop using destructuring. The card includes an avatar image, the contact's name, and email. It also includes a trash icon, which triggers the clickHandler function from the parent component when clicked, passing the contact's id as an argument. The component is exported as the default export for use in other parts of the application.
