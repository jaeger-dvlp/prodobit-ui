import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { Box, Image, Text } from '@mantine/core';
import { Item } from '@/views/items/list/WithItems';
import AddButtons from '@/components/views/itemslist/AddButtons';
import ItemCountDisplay from '@/components/views/items/ItemCountDisplay';

function NoItemsView({
  items,
  paths,
}: {
  items: Item[];
  paths: { path?: string; name: string }[];
}) {
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        gap: 40,
        padding: 30,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Navbar
        sx={{ padding: 30 }}
        withButtons
        paths={paths}
        middleChilds={<ItemCountDisplay itemCount={items.length} />}
      />

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
          color: theme.colors.green[7],
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
