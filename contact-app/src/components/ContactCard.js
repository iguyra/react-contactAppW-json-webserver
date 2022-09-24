import React from "react";
import user from "../images/wc.jpg";
import { Link } from "react-router-dom";

function ContactCard({ contact, removeContactHandler }) {
  return (
    <div className="item">
      <img src={user} alt="" className="ui avatar image" />
      <div className="content">
        <Link to={`/contact/${contact.id}`} state={{ contact }}>
          <div className="header">{contact.name}</div>
          <div className="">{contact.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px",marginLeft:"10px" }}
        onClick={() => removeContactHandler(contact.id)}
      ></i>
        <Link to={`/edit/${contact.id}`} state={{ contact }}>

       <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }}
       ></i>
         </Link>
    </div>
  );
}

export default ContactCard;
