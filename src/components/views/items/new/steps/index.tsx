/* eslint-disable import/prefer-default-export */
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Menu, Text } from '@mantine/core';
import { CustomCheckIcon, CustomSmoothTooltipIllustration, CustomXICon } from '@/components/icons';

import {
  motion,
  VariantLabels,
  HTMLMotionProps,
  AnimationControls,
  ForwardRefComponent,
  TargetAndTransition,
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

export function ItemSpecDeleteMenu({
  onCancel,
  onDelete,
}: {
  onCancel: () => void;
  onDelete: () => void;
}) {
  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginTop: 40,
        width: 'auto',
        maxWidth: 417,
        border: 'none',
        display: 'flex',
        borderRadius: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          left: '50%',
          top: '0%',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-62.5%) translateX(-50%) rotate(90deg)',
        }}
      />

      <Box
        sx={{
          gap: 5,
          display: 'flex',
          borderRadius: 100,
          padding: '13px 15px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.82)',
          boxShadow: ' 0px 24px 54px -13px rgba(177, 109, 92, 0.30)',
          '.mantine-Button-root': {
            height: 'auto',
            display: 'flex',
            fontSize: '22px',
            fontWeight: 300,
            borderRadius: 100,
            padding: '15px 30px',
            lineHeight: '26.4px',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease-in-out',
            '> div > span': {
              gap: 15,
              padding: 0,
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              '> svg': {
                width: 24,
                height: 24,
              },
            },
          },
        }}
      >
        <Button
          onClick={onCancel}
          variant="default"
          sx={{
            color: t.colors.red[5],
            backgroundColor: '#fff',
            border: `1px solid ${t.colors.red[2]}`,
            transition: 'all 0.15s ease-in-out',
            ':hover': {
              backgroundColor: t.colors.red[0],
            },
          }}
        >
          <CustomXICon />
          <Text>İptal</Text>
        </Button>
        <Button
          onClick={onDelete}
          variant="default"
          sx={{
            color: '#fff',
            backgroundColor: t.colors.green[6],
            border: `1px solid ${t.colors.green[6]}`,
            transition: 'all 0.15s ease-in-out',
            ':hover': {
              backgroundColor: t.colors.green[5],
            },
          }}
        >
          <CustomCheckIcon />
          <Text>Silin</Text>
        </Button>
      </Box>
    </Menu.Dropdown>
  );
}
