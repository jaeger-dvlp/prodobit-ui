import React from 'react';
import { Box } from '@mantine/core';
import ItemMainInfo from './ItemMainInfo';
import EditTextEditor from './TextEditor';
import ItemStatusBar from './ItemStatusBar';
import ItemFinancialInfo from './ItemFinancialInfo';

function EditItemInfo() {
  return (
    <>
      <Box
        component="section"
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <ItemMainInfo />
        <ItemStatusBar />
        <ItemFinancialInfo />
        <EditTextEditor />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          justifyContent: 'flex-start',
        }}
      />
    </>
  );
}

export default EditItemInfo;
