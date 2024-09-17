import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <div className="flex justify-center items-center h-40">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Creative Web Design & Development
      </motion.h1>
    </div>
  );
}
