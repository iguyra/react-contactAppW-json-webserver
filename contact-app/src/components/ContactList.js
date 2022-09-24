import React, { useRef } from "react";
import "./App.css";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList({
  contacts,
  removeContactHandler,
  searchHandler,
  searchTerm,
}) {
  const inputEl = useRef("");

  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };

  const renderConatactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        removeContactHandler={removeContactHandler}
      />
    );
  });

  return (
    <div className="main" style={{ marginTop: 50 }}>
      <h2>
        contact list
        <Link to="/add">
          <button className="ui button blue right">Add contact</button>
        </Link>
      </h2>

      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            value={searchTerm}
            placeholder="search"
            className="prompt"
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>

      <div className="ui celled list">
        {renderConatactList.length > 0
          ? renderConatactList
          : "No contacts available"}
      </div>
    </div>
  );
}

export default ContactList;
