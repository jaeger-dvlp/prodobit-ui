import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProdobitAppTheme as t } from '@/theme';
import { Variant, motion } from 'framer-motion';
import { Box, Button, Sx, Text } from '@mantine/core';
import { CalendarIcon, NotificationIcon, SearchIcon } from '@/components/icons';

type VariantFor = 'initial' | 'animate' | 'exit';

const motionVariants: {
  [key: string]: {
    [key in VariantFor]: Variant;
  };
} = {
  middleChilds: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  buttons: {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 20,
    },
  },
  breadCrumbs: {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -20,
    },
  },
};

function Navbar({
  paths,
  sx,
  withButtons = true,
  middleChilds = null,
}: {
  sx?: Sx;
  paths?: {
    path?: string;
    name: string;
  }[];
  withButtons?: boolean;
  middleChilds?: React.ReactNode | React.ReactNode[];
}) {
  const NavbarButtonStyles = {
    margin: 0,
    padding: 6,
    border: 'none',
    color: '#AEADAF',
    borderRadius: 10,
    height: 'fit-content',
    backgroundColor: 'transparent',
    transition: 'all 0.1s ease-in-out',
    ':hover': {
      color: t.colors.gray[9],
      backgroundColor: t.colors.gray[3],
    },
  };

  return (
    <Box
      component="nav"
      sx={(theme) => ({
        gap: 20,
        zIndex: 10,
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'space-between',
        [theme.fn.smallerThan('md')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
        ...sx,
      })}
    >
      {paths && (
        <Box
          className="bb-list"
          component="ul"
          sx={{
            gap: 19,
            margin: 0,
            padding: 0,
            display: 'flex',
            listStyle: 'none',
            width: 'fit-content',
          }}
        >
          {paths.map((path, i) => (
            <Box
              exit="exit"
              initial="initial"
              animate="animate"
              className="bb-btn"
              key={`bb-btn-${i}`}
              component={motion.li}
              variants={motionVariants.breadCrumbs}
              transition={{ duration: 0.2, delay: i * 0.2 }}
              sx={{
                margin: 0,
                padding: 0,
                width: 'fit-content',
                height: 'auto',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                type="button"
                variant="default"
                component={path?.path ? NavLink : ('button' as any)}
                {...(path.path && {
                  to: path.path,
                })}
                sx={(theme) => ({
                  margin: 0,
                  padding: 0,
                  borer: 'none',
                  border: 'none',
                  fontWeight: 400,
                  color: '#878688',
                  fontSize: '22px',
                  backgroundColor: 'transparent',
                  transition: 'color 0.15s ease-in-out',
                  ':hover': {
                    color: '#000',
                    backgroundColor: 'transparent',
                  },
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '18px',
                  },
                })}
              >
                <Text p={0} m={0} span>
                  {path.name}
                </Text>
              </Button>
            </Box>
          ))}
        </Box>
      )}
      {!middleChilds && (
        <Box
          exit="exit"
          initial="initial"
          animate="animate"
          component={motion.span}
          variants={motionVariants.middleChilds}
          transition={{
            delay: 0.3,
            duration: 0.3,
          }}
          sx={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgb(205,200,199)',
          }}
        />
      )}
      {middleChilds && (
        <Box
          exit="exit"
          initial="initial"
          animate="animate"
          component={motion.section}
          variants={motionVariants.middleChilds}
          transition={{
            delay: 0.3,
            duration: 0.3,
          }}
          sx={{
            gap: 20,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="span"
            sx={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgb(205,200,199)',
            }}
          />
          {middleChilds}
          <Box
            component="span"
            sx={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgb(205,200,199)',
            }}
          />
        </Box>
      )}
      {withButtons && (
        <Box
          exit="exit"
          initial="initial"
          animate="animate"
          component={motion.ul}
          variants={motionVariants.buttons}
          sx={{
            gap: 5,
            margin: 0,
            padding: 0,
            display: 'flex',
            listStyle: 'none',
            width: 'fit-content',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="button"
            component="li"
            variant="default"
            sx={{ ...NavbarButtonStyles, color: 'black' }}
          >
            <SearchIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
          <Button
            type="button"
            component="li"
            variant="default"
            sx={{ ...NavbarButtonStyles, color: 'black' }}
          >
            <CalendarIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
          <Button
            type="button"
            component="li"
            variant="default"
            sx={{ ...NavbarButtonStyles, color: 'black' }}
          >
            <NotificationIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
