import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact, updateContact } from "../../actions/contactActions";
import { useParams, useNavigate } from "react-router-dom";
import { ContactPayload, stateType } from "../../types/contacts.type";
import { Dispatch } from "redux";

const CreateContact: React.FC = () => {   // it is dynamic component which handles both create and update functionality
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const { id } = useParams();
  const { contacts } = useSelector((state: stateType) => state.contacts);

  const dispatch: Dispatch<any> = useDispatch();
  const Navigate = useNavigate();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleIsActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.value === "true");
  };

  useEffect(() => {
    if (id) {
      const data = contacts.find((contact) => contact.id === parseInt(id));
      if (data) {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setIsActive(data.isActive);
      }
    }
  }, [id, contacts]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      const data: ContactPayload = {
        id: parseInt(id),
        firstName,
        lastName,
        isActive,
      };
      dispatch(updateContact(data));
      Navigate("/");
    } else {
      const data: ContactPayload = {
        id: new Date().getTime(),
        firstName,
        lastName,
        isActive,
      };
      dispatch(createContact(data));
      Navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full m-auto ">
      <div className="p-10 bg-white border rounded-lg p-4 shadow-md w-full max-w-md ">
        <h1 className="text-3xl font-bold mb-4">Create Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-500"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-500"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Is Active
            </label>
            <div className="flex items-center space-x-2">
              <label>
                <input
                  type="radio"
                  value="true"
                  checked={isActive === true}
                  onChange={handleIsActiveChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="false"
                  checked={isActive === false}
                  onChange={handleIsActiveChange}
                />{" "}
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {id ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
