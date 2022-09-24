import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (!email || !name) {
      alert("all fields ar required");
      return;
    }

    props.addContactHandler({ name, email });
    setName("");
    setEmail("");

    navigate("/", { replace: true });
  };

  return (
    <div className="ui main" style={{ marginTop: 50 }}>
      <h2>Add contact</h2>
      <form className="ui form" onSubmit={add}>
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
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};
export default AddContact;
