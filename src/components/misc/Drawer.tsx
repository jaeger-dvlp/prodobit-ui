import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ProdobitAppTheme as t } from '@/theme';
import { useTable } from '@/components/context/Table.context';
import { Box, Button, Drawer as MantineDrawer } from '@mantine/core';
import { CustomCurvedBackIcon, EditIconItem, TrashIcon } from '@/components/icons';

function Drawer() {
  const { drawer } = useTable();
  const [opened, { open, close }] = useDisclosure(false);

  React.useEffect(() => {
    (() => {
      if (drawer.item) {
        return open();
      }

      return close();
    })();
  }, [close, drawer, open]);

  return (
    <MantineDrawer
      size={684}
      bg="transparent"
      position="right"
      withCloseButton={false}
      closeOnClickOutside={false}
      transitionProps={{
        duration: 1000,
        transition: 'slide-left',
      }}
      styles={{
        content: {
          boxShadow: 'none',
          overflow: 'visible!important',
          backgroundColor: 'transparent',
        },
        header: {
          backgroundColor: 'transparent',
        },
      }}
      opened={opened}
      onClose={close}
    >
      <MantineDrawer.Content
        sx={{
          padding: 17,
          marginRight: 17,
          overflow: 'visible',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 30,
            position: 'relative',
            backgroundColor: '#fff',
            '> .control-bar': {
              top: 80,
              left: 0,
              gap: 11,
              display: 'flex',
              position: 'absolute',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transform: 'translateX(-50%)',
              // buttons mus have a border that is transparent and masks the parents #fff bg, so border will looks like only overlay.
              '> button': {
                padding: 20,
                border: 'none',
                height: 'auto',
                borderRadius: 200,
                boxShadow: t.shadows.xl,
                backgroundColor: '#fff',
                '& svg': {
                  width: 24,
                  height: 24,
                },
                '&:nth-of-type(2)': {
                  color: t.colors.blue[5],
                },
                '&:nth-of-type(3)': {
                  color: t.colors.red[5],
                },
              },
              '> button.back-btn': {
                padding: 40,
                marginBottom: 46,
                '& svg': {
                  width: 27,
                  height: 27,
                },
              },
            },
          }}
        >
          <Box className="control-bar">
            <Button className="back-btn" variant="default" onClick={close}>
              <CustomCurvedBackIcon />
            </Button>
            <Button variant="default">
              <EditIconItem />
            </Button>
            <Button variant="default">
              <TrashIcon />
            </Button>
          </Box>
        </Box>
      </MantineDrawer.Content>
    </MantineDrawer>
  );
}

export default Drawer;
