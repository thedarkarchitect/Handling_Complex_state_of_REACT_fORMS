import React, { useState } from "react";

function App() {
  //This is the state of the application input fields
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    //Destructe to tap into the names and values of the input field
    const { value, name } = event.target;

    //The method from the state with a call back to set value without crashing the already entered value
    setContact((preValue) => {
      //callback keeps the prevalue the way it is as you enter a value into any field of your choice
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {/* this is shown at he top after the field is entered */}
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>

      <form>
        <input
          //The name is used to keep track of which field is being typed into
          name="fName"
          onChange={handleContact}
          placeholder="First Name"
          // This is the value of the field that is tapped into thru the destructure at the top
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={handleContact}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={handleContact}
          placeholder="Email"
          value={contact.email}
        />
        {/* At the moment button is not working cause we been working on field acceptance */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
