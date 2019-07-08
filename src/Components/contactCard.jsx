import React from "react";
import Modifycontact from "./modifyContactModal";

export default function ContactCard({ contact, deleteContact, id ,handleInputs,handleModify}) {



 
  return (
    <div className="card-container">
      <div className="top-section">
        <p className="card-words-container">
          <span className="card-titles">Name : </span>
          <span className="card-response">{contact.name} </span>
        </p>
        <p className="card-words-container">
          <span className="card-titles">Last name : </span>
          <span className="card-response"> {contact.lastname} </span>
        </p>
        <p className="card-words-container">
          <span className="card-titles">Email : </span>
          <span className="card-response">{contact.email} </span>
        </p>
      </div>
      <div className="bottom-section">
        <Modifycontact buttonLabel="Modify" contact={contact} handleInputs={handleInputs} id={id} handleModify={handleModify} />

        <input
          className="card-buttons"
          type="button"
          value="Delete"
          onClick={() => deleteContact(id)}
        />
      </div>
    </div>
  );
}
