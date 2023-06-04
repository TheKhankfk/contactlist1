//header.js

import React from "react";

// The Header component represents the header of the application.
const Header = () => {
  // The component is a functional component and doesn't manage any state.

  // It renders the following JSX structure for the header:
  return (
    <div className="ui fixed menu"style={{ background: "linear-gradient(to right, #fffff0, #a0a0a0)", color: "grey" }}>
      <div className="ui container center">
        <h2>Contact Hub</h2>
      </div>
    </div>
  );
};

export default Header;

// The Header component is a simple functional component that renders the header of the application. It doesn't have any state or props. The header is displayed as a fixed menu at the top of the page, with the text "Contact Hub" centered within the container div. The component is exported as the default export, allowing it to be imported and used in other parts of the application.
