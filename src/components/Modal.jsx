import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ message, type }) => {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full border px-6 py-3 text-center text-sm font-medium text-white shadow-2xl backdrop-blur-xl ${
            isSuccess
              ? "border-emerald-400/40 bg-emerald-500/20"
              : "border-rose-400/40 bg-rose-500/20"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
