import React from "react";
import user from "../images/wc.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ContactDetail() {
  const location = useLocation();

  console.log(location.state);
  const contact = location.state.contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="discription">{contact.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            back to contact list
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetail;
