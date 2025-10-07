import React, { useState } from "react";
import Modal from "../components/Modal";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      console.error(
        "EmailJS n'est pas configuré. Veuillez vérifier votre fichier .env"
      );
      setResponseMessage(
        "Erreur de configuration. Contactez l'administrateur."
      );
      setResponseType("error");
      setShowModal(true);
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          // Aligne les variables avec les templates courants EmailJS
          reply_to: formData.email,
          email: formData.email,
          message: formData.message,
        },
        userID
      );
      setResponseMessage("Votre message a été envoyé avec succès !");
      setResponseType("success");
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      setResponseMessage("Oups, une erreur est survenue. Réessayez plus tard.");
      setResponseType("error");
    } finally {
      setIsSending(false);
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] flex items-center justify-center py-8">
      <div className="w-full max-w-lg p-8 bg-black bg-opacity-40 rounded-2xl shadow-2xl flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contactez-moi
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#232526] text-white"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#232526] text-white"
              placeholder="Votre message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold shadow-md hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-all border-2 border-gray-800 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
