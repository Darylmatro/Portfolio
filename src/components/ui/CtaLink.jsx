import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const base =
  "group relative inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold tracking-tight transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-600 hover:to-blue-500",
  ghost: "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

function CtaLink({
  to,
  href,
  download,
  variant = "primary",
  children,
  className = "",
  ...rest
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (download) {
    return (
      <a href={href} download={download} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
      {content}
    </a>
  );
}

export default CtaLink;
