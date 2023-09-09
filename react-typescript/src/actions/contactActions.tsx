import {
  CREATE_CONTACT_REQUEST,
  UPDATE_CONTACT_REQUEST,
  DELETE_CONTACT_REQUEST,
  GET_CONTACT_DETAILS,
} from "../constants/contactConstants";
import { ContactPayload } from "../components/types/contacts.type";

export const createContact = (payload: ContactPayload) => (dispatch: any) => {
  dispatch({
    type: CREATE_CONTACT_REQUEST,
    payload,
  });
};

export const updateContact = (payload: ContactPayload) => (dispatch: any) => {
  dispatch({
    type: UPDATE_CONTACT_REQUEST,
    payload,
  });
};

export const deleteContact = (id: number) => (dispatch: any) => {
  dispatch({
    type: DELETE_CONTACT_REQUEST,
    payload: id,
  });
};

export const getContactDetails = (id: number) => (dispatch: any) => {
  dispatch({
    type: GET_CONTACT_DETAILS,
    payload: id,
  });
};
