import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UsersPage from "./Components/UsersPage";
import { Layout } from "./Components/Layout";
import ContactsList from "./Components/ContactList/ContactList";
import CustomImageList from "./Components/AboutImages";

const MainRoutes = ({
  contacts,
  handleDeleteContact,
  handleEditIndex,
  handleNewContact,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<CustomImageList />} />
          <Route path="users" element={<UsersPage />} />
          <Route
            path="contact"
            element={
              <ContactsList
                contacts={contacts}
                handleDeleteContact={handleDeleteContact}
                handleEditIndex={handleEditIndex}
                handleNewContact={handleNewContact}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
