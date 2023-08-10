/* eslint-disable import/prefer-default-export */
import {
  AnimationControls,
  ForwardRefComponent,
  HTMLMotionProps,
  TargetAndTransition,
  VariantLabels,
  motion,
} from 'framer-motion';

export const stepContainerMotionProps: {
  exit: TargetAndTransition | VariantLabels | undefined;
  animate: boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined;
  initial: boolean | VariantLabels | any | undefined;
  transition: any | undefined;
  component: ForwardRefComponent<HTMLElement, HTMLMotionProps<'section'>>;
} = {
  exit: {
    scale: 0.7,
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.7,
      ease: 'anticipate',
    },
  },
  animate: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0.7 },
  transition: { duration: 0.7, ease: 'anticipate', delay: 0.5 },
  component: motion.section,
};
