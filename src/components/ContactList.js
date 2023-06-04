//contactList.js

import React from "react";
import ContactCard from "./ContactCard";

// The ContactList component represents a list of contacts.

const ContactList = (props) => {
  console.log(props);

  // The deleteConactHandler function is called when a contact is deleted.
  const dch = (id) => {
     // Call the parent component's getContactId function, passing the id of the contact to be deleted.
    props.gcid(id);
  };
  // Render the list of contacts by mapping over the contacts array received as a prop.
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} ch={dch} key={contact.id} />
    );
  });
   // Render the list of contacts within a div with the "ui celled list" CSS class.
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;

// The ContactList component receives contacts as a prop and renders a list of ContactCard components based on the contacts array. It also receives a getContactId prop, which is a function called when a contact is deleted. Each contact is rendered as a ContactCard component, passing the contact data, clickHandler function, and a unique key. The list is wrapped in a div with the "ui celled list" CSS class. The ContactList component is exported as the default export, allowing it to be used in other parts of the application.
