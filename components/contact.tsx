import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";

interface ContactProps {
  data: string[];
}

const ContactPage: React.FC<ContactProps> = ({ data }) => {
  const loc = data[0];
  const phone1 = data[1];
  const phone2 = data[2];

  return (
    <div className="min-h-[80vh] bg-zinc-100 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Adjust left side to be smaller */}
          <div className="md:flex-1 md:basis-1/3 p-8 text-center md:text-left space-y-5">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p className="tracking-wide">
              <FontAwesomeIcon
                icon={faLocationArrow}
                className="text-purple-200"
              />
              {loc}
            </p>
            <p className="tracking-wide">
              <FontAwesomeIcon icon={faPhone} className="text-purple-200" />{" "}
              {phone1}
            </p>
            <p className="tracking-wide">
              <FontAwesomeIcon icon={faPhone} className="text-purple-200" />{" "}
              {phone2}
            </p>
          </div>
          {/* Right side (form) taking more space */}
          <div className="bg-white text-gray-800 p-8 md:flex-2 md:basis-2/3">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="h-32 mt-1 block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
