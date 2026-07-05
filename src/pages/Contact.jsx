import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";
import Reveal from "../components/ui/Reveal";
import GlassPanel from "../components/ui/GlassPanel";

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
      setTimeout(() => setShowModal(false), 3000);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-20 sm:px-10">
      <Reveal className="w-full text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-300">
          Contact
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Parlons de votre projet</h1>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Une question, une opportunité d&rsquo;alternance ? Écrivez-moi, je réponds rapidement.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 w-full">
        <GlassPanel className="p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm text-white placeholder-white/40 transition-colors focus:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                placeholder="vous@exemple.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm text-white placeholder-white/40 transition-colors focus:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                placeholder="Votre message"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="mt-2 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-bold text-white shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.01] hover:from-purple-600 hover:to-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        </GlassPanel>
      </Reveal>

      <Modal message={showModal ? responseMessage : ""} type={responseType} />
    </div>
  );
}

export default Contact;
