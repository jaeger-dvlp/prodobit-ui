import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Sx, Text } from '@mantine/core';
import ToolbarContainer from '@/components/misc/Toolbar';
import { Cube3dIcon, EditIconItem, TrashIcon } from '@/components/icons';

const ToolbarInnerContainerSX: Sx = {
  gap: 5,
  padding: 10,
  minHeight: 65,
  display: 'flex',
  borderRadius: 15,
  alignItems: 'center',
  maxWidth: 'fit-content',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.82)',
  boxShadow: '0px 24px 54px -13px rgba(177, 109, 92, 0.30)',
};

const ButtonSX: Sx = {
  gap: 10,
  height: 'auto',
  border: 'none',
  minHeight: 45,
  display: 'flex ',
  fontWeight: 400,
  borderRadius: 10,
  fontSize: '15px',
  lineHeight: '18px',
  textAlign: 'center',
  padding: '13px 12px',
  color: t.colors.gray[8],
  justifyContent: 'center',
  backgroundColor: 'white',
  transition: 'all .15s ease',
  ':hover': {
    color: t.colors.gray[9],
    backgroundColor: t.colors.gray[3],
  },
};

function ItemsEditToolbar() {
  return (
    <ToolbarContainer>
      <Box
        sx={{
          ...ToolbarInnerContainerSX,
        }}
      >
        <Button variant="default" sx={ButtonSX}>
          <Text p={0} m={0} mr={10}>
            Öğeyi Düzenle
          </Text>
          <EditIconItem width={18} height={18} />
        </Button>
        <Button variant="default" sx={ButtonSX}>
          <Text p={0} m={0} mr={10}>
            Öğeyi Sil
          </Text>
          <TrashIcon width={18} height={18} />
        </Button>
        <Button variant="default" sx={ButtonSX}>
          <Text p={0} m={0} mr={10}>
            Öğe Varyasyonları
          </Text>
          <Cube3dIcon width={18} height={18} />
        </Button>
      </Box>
    </ToolbarContainer>
  );
}

export default ItemsEditToolbar;
