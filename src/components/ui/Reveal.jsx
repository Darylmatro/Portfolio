import { motion } from "framer-motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

function Reveal({ children, delay = 0, y = 28, className = "", as = "div", once = true }) {
  const reducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
