import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

import ContactList from "./ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const LOCAL_STORAGE_KEY = "contacts";

  //reteive contacts
  const reteiveContacts = async () => {
    const response = await api.get("/contacts");
    return response;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const { data } = await reteiveContacts();
      console.log(data, "alll");
      if (contacts) setContacts(data);
    };

    getAllContacts();

    // const localContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(localContacts);
    // if (localContacts) {
    //   setContacts(localContacts);
    // }
  }, []);

  useEffect(() => {
    // if (contacts.length >= 1) {
    //    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }
  }, [contacts]);

  const addContactHandler = async (contact) => {
    const requestObject = {
      id: Math.random(),
      ...contact,
    };

    const { data } = await api.post("/contacts", requestObject);

    setContacts((oldContact) => [...oldContact, data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);

    const newContaactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log(newContaactList, "nwe");
    setContacts(newContaactList);
  };

  const updateContactHandler = async (contact) => {
    const { data } = await api.put(`contacts/${contact.id}`, contact);

    setContacts(
      contacts.map((contact) => {
        return contact.id === data.id ? { ...data } : contact;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    console.log(searchTerm, "STTT");

    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm);
      });

      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />

          <Route
            path="/edit/:id"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />

          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                removeContactHandler={removeContactHandler}
                searchTerm={searchTerm}
                searchHandler={searchHandler}
              />
            }
          />

          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList
          contacts={contacts}
          removeContactHandler={removeContactHandler}
        /> */}
      </Router>
    </div>
  );
}

export default App;
