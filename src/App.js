import { useState } from "react";
import BasicExample from "./Components/bootsrap/BasicExample";
import AddContact from "./Components/AddContact/AddContact";
import ContactsList from "./Components/ContactList/ContactList";
import EditContacts from "./Components/EditContact/EditContact";
import MainRoutes from "./MainRoutes";
import AppBar from "./Components/AppBar";

function App() {
  let [contacts, setContacts] = useState([]);
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);

    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactsArray);
    setIsEdit(false);
  }

  return (
    <>
      <AppBar />
      <MainRoutes
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
        handleNewContact={handleNewContact}
      />

      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}
    </>
  );
}

export default App;
