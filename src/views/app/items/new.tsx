import React from 'react';
import { Box } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import NewItemStepBar from '@/components/views/items/new/NewItemStepBar';
import NewItemWrapper, { useNewItem } from '@/components/context/NewItem.context';

// ? - Steps
import NewItemStep1 from '@/components/views/items/new/steps/Step1';
import NewItemStep2 from '@/components/views/items/new/steps/Step2';
import NewItemStep3 from '@/components/views/items/new/steps/Step3';
import NewItemStep4 from '@/components/views/items/new/steps/Step4';
import NewItemStep5 from '@/components/views/items/new/steps/Step5';

function NewItem() {
  const { currentStep } = useNewItem();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const StepViews = [NewItemStep1, NewItemStep2, NewItemStep3, NewItemStep4, NewItemStep5];

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
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <NewItemStepBar />
      <AnimatePresence mode="wait">
        {StepViews.map(
          (StepView, index) => currentStep === index && <StepView key={`step-${index}`} />,
        )}
      </AnimatePresence>
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
