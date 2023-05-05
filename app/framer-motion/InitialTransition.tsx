import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    transitionEnd: { display: "none" },
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.4,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 90,
    transition: {
      duration: 1.6,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const InitialTransition = () => {
  return (
      <motion.div
        className="absolute z-10 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-[#16925F]"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-[#FFFAE6] fill-current"
            />
          </pattern>
          <text
            className="text-5xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Le Temple
          </text>
        </motion.svg>
      </motion.div>
  );
};
