import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditContact = (props) => {
      const location = useLocation();
     const contact = location.state.contact;
     const id = contact.id
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);


 
  const navigate = useNavigate();

 
  const update = (e) => {
    e.preventDefault();

    if (!email || !name) {
      alert("all fields ar required");
      return;
    }

    props.updateContactHandler({ name, email,id });
    setName("");
    setEmail("");

    navigate("/", { replace: true });
  };

  return (
    <div className="ui main" style={{ marginTop: 50 }}>
      <h2>update contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label htmlFor="">name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="">name</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">update</button>
      </form>
    </div>
  );
};
export default EditContact;
