//app.js

import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LSK = "contacts";
   // Initialize contacts state with data from local storage, or an empty array if no data is found.
  const [contacts, setcon] = useState(
    JSON.parse(localStorage.getItem(LSK)) ?? []
  );
 // Handler function for adding a new contact to the contacts state.
  const ach = (contact) => {
    console.log(contact);
    setcon([...contacts, { id: uuid(), ...contact }]);
  };

  const rch = (id) => {
    // Create a new contact object with a unique ID using the uuid package, and merge it with the provided contact data.
    const ncl = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setcon(ncl);
    // Update the contacts state by adding the new contact to the existing list of contacts.
  };

 // Save the contacts state to local storage whenever it changes.
  useEffect(() => {
    localStorage.setItem(LSK, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container"     
      style={{
      backgroundImage: `url("/path/to/background-image.jpg")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}
     >
      <Header />
      <AddContact ach={ach} />
      <ContactList contacts={contacts} gcid={rch} />
    </div>
  );
}

export default App;



// The App component is the main component of the application.
// It manages the state of the contacts and renders the Header, AddContact, and ContactList components.
// The LOCAL_STORAGE_KEY constant is used as the key to store and retrieve contacts data from local storage.
// The useState hook is used to initialize the contacts state with the data from local storage, or an empty array if no data is found.
// The addContactHandler function is passed to the AddContact component as a prop, allowing it to add new contacts to the contacts state.
// The removeContactHandler function is passed to the ContactList component as a prop, enabling it to remove contacts from the contacts state based on their ID.
// The useEffect hook is used to save the contacts state to local storage whenever it changes.
// The component renders the Header, AddContact, and ContactList components, passing the necessary props to them.
// The component is exported as the default export for use in other parts of the application.