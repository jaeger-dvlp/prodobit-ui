import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mantine/core';
import { Variant, motion } from 'framer-motion';
import DefaultNavbar from '@/components/layout/navbar/default';

type Props = {
  paths: {
    path?: string;
    name: string;
  }[];
  middleChilds?: React.ReactNode | React.ReactNode[];
  withButtons?: boolean;
};

const BreadcrumbAnimations: {
  [key: string]: Variant;
} = {
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
};

function WithBreadCrumbs({
  paths,
  middleChilds = null,
  withButtons = false,
}: Props) {
  return (
    <DefaultNavbar middleChilds={middleChilds} withButtons={withButtons}>
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
            variants={BreadcrumbAnimations}
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
              {path.name}
            </Button>
          </Box>
        ))}
      </Box>
    </DefaultNavbar>
  );
}

export default WithBreadCrumbs;
