import {
  CREATE_CONTACT_REQUEST,
  UPDATE_CONTACT_REQUEST,
  DELETE_CONTACT_REQUEST,
  GET_CONTACT_DETAILS,
} from "../constants/contactConstants";
import { ContactPayload } from "../components/types/contacts.type";

export const contactReducer = (state = { contacts: [] }, action: any) => {
  switch (action.type) {
    case CREATE_CONTACT_REQUEST:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case UPDATE_CONTACT_REQUEST:
      const updatedContact: ContactPayload = action.payload;
      const updatedContacts = state.contacts.map((contact: ContactPayload) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      return {
        ...state,
        contacts: updatedContacts,
      };

    case DELETE_CONTACT_REQUEST:
      const contactIdToDelete = action.payload;
      const ContactsAfterDeletion = state.contacts.filter(
        (contact: ContactPayload) => contact.id !== contactIdToDelete
      );
      return {
        ...state,
        contacts: ContactsAfterDeletion,
      };

    case GET_CONTACT_DETAILS:
      const contactId = action.payload;
      const ContactDetails = state.contacts.filter(
        (contact: ContactPayload) => contact.id === contactId
      );
      return {
        ...state,
        contacts: ContactDetails,
      };

    default:
      return state;
  }
};
