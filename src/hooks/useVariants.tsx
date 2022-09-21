import { Variants } from 'framer-motion';

export function useVariants() {
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const playerOne: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: [1.15, 1],
    },
    removed: {
      opacity: 0,
    },
  };

  const playerTwo: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: [1.15, 1],
    },
    removed: {
      opacity: 0,
    },
  };

  return { defaultVariants, playerOne, playerTwo };
}
