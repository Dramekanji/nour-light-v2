export const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1.5 },
  },
};

export const slideInFromRight = {
  initial: { x: "100vw", opacity: 0 }, // Start off-screen to the right
  animate: {
    x: 0, // End at its natural position
    opacity: 1, // Fade in to full opacity
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
      when: "beforeChildren", // If there are children, animate this element first
      staggerChildren: 0.3, // If there are children, stagger their animation
    },
  },
};

export const slideInFromLeft = {
  initial: { x: "-100vw", opacity: 0 }, // Start off-screen to the left
  animate: {
    x: 0, // End at its natural position
    opacity: 1, // Fade in to full opacity
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
      when: "beforeChildren", // If there are children, animate this element first
      staggerChildren: 0.3, // If there are children, stagger their animation
    },
  },
};
export const growIn = {
  initial: { scale: 0.5, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3, // Add a delay here if you want it to start later
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const slideUp = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeOut",
    },
  },
};
