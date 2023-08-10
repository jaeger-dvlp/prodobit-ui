import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import NewItemWrapper from '@/components/context/NewItem.context';

function NewItemStepBar() {
  return (
    <Box
      component="ul"
      sx={{
        gap: 0,
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        listStyle: 'none',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        backdropFilter: 'blur(32px)',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        borderBottom: `1px solid ${t.colors.gray[5]}`,
        [t.fn.smallerThan('md')]: {
          flexWrap: 'wrap',
        },
        '> li': {
          gap: 5,
          width: '100%',
          display: 'flex',
          padding: '40px 30px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          ':not(:last-child)': {
            borderRight: `1px solid ${t.colors.gray[5]}`,
            [t.fn.smallerThan('md')]: {
              borderRight: 'none',
              borderBottom: `1px solid ${t.colors.gray[5]}`,
            },
          },
        },
      }}
    >
      <Box component="li">-_-</Box>
      <Box component="li">-_-</Box>
      <Box component="li">-_-</Box>
      <Box component="li">-_-</Box>
    </Box>
  );
}

function NewItem() {
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        padding: 0,
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <NewItemStepBar />
    </Box>
  );
}

function CreateNewItem() {
  return (
    <NewItemWrapper>
      <NewItem />
    </NewItemWrapper>
  );
}

export default CreateNewItem;
