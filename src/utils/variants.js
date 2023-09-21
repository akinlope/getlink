export const fadeIn = (para) => ({
  initial: {
    opacity: 0,
    y: para === "down" ? -60 : para === "up" ? 60 : 0,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
});

export const timer = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const slideIn = (para, easeType) => ({
  initial: {
    x: para === "right" ? 30 : para === "left" ? -30 : 0,
    y: para === "top" ? -30 : para === "bottom" ? 30 : 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      type: easeType === "spring" ? "spring" : "",
      ease: "easeInOut",
      stiffness: 300,
    },
  },
});

export const globeRotate = {
  animate: {
    rotate: [0, 30, 0],
    transition: {
      delay: 2,
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const blink = {
  animate: (custom) => ({
    scale: [0.5, 0.8, 0.5],
    transition: {
      duration: custom * 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }),
};
