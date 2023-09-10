import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateType } from "../../types/contacts.type";
import ContactCard from "./ContactCard";
import { RxCrossCircled } from "react-icons/rx";

const Contacts = () => {
  const { contacts } = useSelector((state: stateType) => state);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-20 mt-0"
        to="/contact/new"
      >
        Add Contact
      </Link>

      {contacts && contacts.contacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {contacts?.contacts.map((contact, index) => (
            <ContactCard
              key={index}
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              isActive={contact.isActive}
            />
          ))}
        </div>
      ) : (
        <div className=" flex bg-whiteborder rounded-lg shadow-md flex-row items-center border rounded p-4 text-center font-bold text-3xl">
          <RxCrossCircled size={90} className=" mr-5" />
          <div>
            <span>No Contact found</span>
            <br />
            <span>Please add contact from </span>
            <br />
            <span>Create contact button </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
