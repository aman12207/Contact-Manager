import React from "react";
import { useSelector } from "react-redux";
import { stateType } from "../types/contacts.type";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const { contacts } = useSelector((state: stateType) => state);
  const { id } = useParams();

  return (
    <div className="flex items-center justify-center h-screen w-full m-auto">
      <div className="p-10 bg-white border rounded-lg p-4 shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Contact Details</h1>
        <hr></hr>
        {id &&
          contacts?.contacts.map((contact) =>
            contact.id === parseInt(id) ? (
              <div key={contact.id}>
                <p className="text-lg font-semibold mb-2 mt-4">
                  First Name: {contact.firstName}
                </p>
                <p className="text-lg font-semibold mb-2">
                  Last Name: {contact.lastName}
                </p>
                <p className="text-lg font-semibold mb-2">
                  isActive: {contact.isActive ? "True" : "False"}
                </p>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default ContactDetails;
