import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  if (open) {
    return (
        <button
          onClick={() => setOpen(!open)}
          className="w-20 h-20  text-white flex items-center justify-center rounded-full absolute top-3 left-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-800 m-4 w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
    );
  }
  return (
    <div className="flex">
      <div
        className={`sm:w-screen md: w-screen lg:w-60 flex flex-col h-screen p-3 bg-gray-800 shadow duration-300 `}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              <Link to="/">Dashboard</Link>
            </h2>
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/contacts"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <IoIosContact className="w-6 h-6 text-gray-100" />
                  <span className="text-gray-100">Contacts</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/charts"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BiMap className="w-6 h-6 text-gray-100" />
                  <span className="text-gray-100">Charts</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/maps"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BiMap className="w-6 h-6 text-gray-100" />
                  <span className="text-gray-100">Maps</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}