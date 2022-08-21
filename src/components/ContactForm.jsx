import React, { useState } from "react";
import { postContactForm } from "../utils/api";

export const ContactForm = ({ id }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      phone: phone,
      email: email,
      property_id: id,
      message: message,
      source: "testMike.com",
    };
    const response = await postContactForm(body);
    console.log(response);
  };
  return (
    <div>
      {/* Contact Form */}
      <div className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4 max-w-xl">
        <h2 className="text-xl font-semibold mb-6">Contactar vendedor</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="bg-white border-2 border-gray-200 appearance-none rounded-lg w-full py-2 px-3"
              type={"text"}
              id={"name"}
              placeholder={"Miguel Guijarro"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={"phone"}
            >
              Celular
            </label>
            <input
              className="bg-white border-2 border-gray-200 appearance-none rounded-lg w-full py-2 px-3"
              id={"phone"}
              placeholder={"444 444 0824"}
              type={"tel"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={"email"}
            >
              Email
            </label>
            <input
              className="bg-white border-2 border-gray-200 appearance-none rounded-lg w-full py-2 px-3"
              id={"email"}
              type={"email"}
              placeholder={"mikeguijarro@example.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={"description"}
            >
              Descripción
            </label>
            <textarea
              required
              value={message}
              className="bg-white border-2 border-gray-200 appearance-none rounded-lg w-full py-2 px-3"
              id={"description"}
              placeholder={"Me interesa esta propiedad..."}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
