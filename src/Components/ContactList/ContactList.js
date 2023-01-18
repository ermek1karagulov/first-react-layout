import React from "react";
import AddContact from "../AddContact/AddContact";

const ContactsList = (props) => {
  return (
    <div>
      <AddContact handleNewContact={props.handleNewContact} />

      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li className="lis">{item.name}</li>
          <li className="lis">{item.surname}</li>
          <li className="lis">{item.phone}</li>
          <li className="liss">
            <button
              className="btn-del"
              onClick={() => props.handleDeleteContact(item.id)}
            >
              Delete
            </button>
            <button
              className="btn-ed"
              onClick={() => props.handleEditIndex(index)}
            >
              Edit
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
