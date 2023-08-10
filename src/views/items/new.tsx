import React from 'react';
import { Box } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import NewItemStep1 from '@/components/views/items/new/steps/Step1';
import NewItemStepBar from '@/components/views/items/new/NewItemStepBar';
import NewItemWrapper, { useNewItem } from '@/components/context/NewItem.context';

function NewItem() {
  const { currentStep } = useNewItem();
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        padding: 0,
        width: '100%',
        display: 'flex',
        minHeight: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <NewItemStepBar />
      <AnimatePresence>{currentStep === 0 && <NewItemStep1 />}</AnimatePresence>
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
