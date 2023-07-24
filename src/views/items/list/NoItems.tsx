import React from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Text } from '@mantine/core';
import AddButtons from '@/components/views/itemslist/AddButtons';

function NoItemsView() {
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        gap: 40,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Image
        fit="contain"
        src="/assets/img/no-item.svg"
        sx={{
          width: '100%',
          maxWidth: 700,
        }}
      />
      <Text
        maw={410}
        sx={(theme) => ({
          fontWeight: 300,
          lineHeight: 1.3,
          fontSize: '45px',
          textAlign: 'center',
          color: theme.colors.foundationgreen[7],
        })}
      >
        Etkin ve Modern Bir Öğe Yönetimi İçin
      </Text>
      <Box
        sx={{
          gap: 10,
          marginTop: 75,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AddButtons onItemAdd={() => null} onCategoryAdd={() => null} />
      </Box>
    </Box>
  );
}
export default NoItemsView;
