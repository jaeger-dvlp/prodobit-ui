import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { BsFillGearFill } from 'react-icons/bs';

type Props = {
  children: React.ReactNode;
};

function DevMode({ children }: Props) {
  return (
    <Box
      sx={{
        right: 20,
        bottom: 20,
        zIndex: 9999,
        padding: 0,
        position: 'fixed',
      }}
    >
      <Button
        p={10}
        h="auto"
        radius="md"
        tabIndex={0}
        color="gray"
        pos="relative"
        variant="filled"
        sx={(theme) => ({
          opacity: 0.5,
          overflow: 'visible',
          boxShadow: theme.shadows.lg,
          transition: 'all .15s ease',
          '.dev-mode-childs': {
            opacity: 0,
            visibility: 'hidden',
            transition: 'all .15s ease',
          },
          ':hover': {
            opacity: 1,
            '.dev-mode-childs': {
              opacity: 1,
              visibility: 'visible',
            },
          },
        })}
        styles={{
          root: {
            overflow: 'visible',
          },
          inner: {
            overflow: 'visible',
          },
        }}
      >
        <Box
          pb={15}
          className="dev-mode-childs"
          sx={{
            right: 0,
            bottom: '100%',
            position: 'absolute',
            backgroundColor: 'transparent',
          }}
        >
          <Box
            p={15}
            sx={(theme) => ({
              boxShadow: theme.shadows.lg,
              borderRadius: theme.radius.md,
              backgroundColor: theme.colors.gray[7],
            })}
          >
            {children}
          </Box>
        </Box>

        <Text
          span
          sx={{
            height: 'auto',
            lineHeight: 1.1,
          }}
        >
          <BsFillGearFill size={30} />
        </Text>
      </Button>
    </Box>
  );
}

export default DevMode;
