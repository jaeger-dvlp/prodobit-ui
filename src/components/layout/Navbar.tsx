import { motion } from 'framer-motion';
import { Box, Button, useMantineTheme } from '@mantine/core';
import { CalendarIcon, NotificationIcon, SearchIcon } from '@/components/icons';

const motionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function DefaultNavbar({
  children,
  middleChilds = null,
  withButtons = false,
}: {
  children: React.ReactNode | React.ReactNode[];
  middleChilds?: React.ReactNode | React.ReactNode[];
  withButtons?: boolean;
}) {
  const mantineTheme = useMantineTheme();

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
      color: mantineTheme.colors.indigo[9],
      backgroundColor: mantineTheme.colors.indigo[1],
    },
  };

  return (
    <Box
      component="nav"
      sx={{
        gap: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
      {!middleChilds && (
        <Box
          exit="exit"
          initial="initial"
          animate="animate"
          component={motion.span}
          variants={motionVariants}
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
          component={motion.span}
          variants={motionVariants}
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
            sx={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgb(205,200,199)',
            }}
          />
          {middleChilds}
          <Box
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
          component="ul"
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
            onClick={() => {
              alert('Search button clicked.');
            }}
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
            onClick={() => {
              alert('Calendar button clicked.');
            }}
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
            onClick={() => {
              alert('Notification button clicked.');
            }}
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
