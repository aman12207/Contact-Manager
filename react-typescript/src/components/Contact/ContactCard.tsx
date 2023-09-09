import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../actions/contactActions";
import { Dispatch } from "redux";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import the icons
import { BsBoxArrowUpRight } from "react-icons/bs";

const ContactCard: React.FC<{
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}> = ({ id, firstName, lastName, isActive }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the parent Link from being triggered
    dispatch(deleteContact(id));
  };

  return (
    <div className="bg-white border rounded-lg p-8 shadow-md mb-4 ml-4 h-51 w-100 relative">
      <div className="flex flex-row space-x-4">
        <p className="text-xl font-bold capitalize">
          {firstName} {lastName}
        </p>
        <Link to={`/contact/details/${id}`} className="">
          <BsBoxArrowUpRight size={24} color="#007bff" />
        </Link>
      </div>
      <p className={`text-sm ${isActive ? "text-green-600" : "text-red-600"}`}>
        {isActive ? "Active" : "Inactive"}
      </p>
      <div className="mt-4 flex flex-col justify-center items-center">
        <Link
          className="flex flex-row justify-center items-center space-x-0.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 w-full"
          to={`/contact/${id}`}
        >
          <FaEdit className="mr-2" />
          Update
        </Link>
        <button
          className="flex flex-row justify-center space-x-4 items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
