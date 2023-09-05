import { Box } from '@mantine/core';
import React from 'react';
import PodSidebar from '../sidebar';
import ItemsSlider from './ItemsSlider';

type Props = {
  item: any;
  children: React.ReactNode;
};

function ItemsLayout({ item, children }: Props) {
  return (
    <Box
      sx={{
        gap: 170,
        padding: '40px 70px',
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'space-between',
      }}
    >
      <Box
        sx={{
          top: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          position: 'sticky',
          maxWidth: '47.5%',
          padding: '0px',
          '&:before': {
            top: 0,
            left: 0,
            zIndex: -1,
            display: 'block',
            content: '""',
            width: '100%',
            height: '100%',
            borderRadius: 33.5,
            position: 'absolute',
            pointerEvents: 'none',
            backdropFilter: 'blur(52px)',
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            boxShadow:
              '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
          },
        }}
      >
        <PodSidebar
          sx={{
            left: 0,
            zIndex: 50,
            top: '50%',
            overflow: 'hidden',
            position: 'absolute',
            backdropFilter: 'none!important',
            '&:before': {
              top: 0,
              left: 0,
              zIndex: -1,
              display: 'block',
              content: '""',
              width: '100%',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              backdropFilter: 'blur(52px)',
            },
            transform: 'translateY(-50%) translateX(-50%)',
          }}
        />
        <ItemsSlider item={item} />
      </Box>
      <Box
        sx={{
          top: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          maxWidth: '47.5%',
          padding: '30px 70px 0px 0px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ItemsLayout;
