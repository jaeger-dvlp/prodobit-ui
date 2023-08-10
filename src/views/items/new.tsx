import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import NewItemWrapper from '@/components/context/NewItem.context';
import NewItemStepBar from '@/components/views/items/new/NewItemStepBar';

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
