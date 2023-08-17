import React from 'react';
import { Box, ColorPicker, Menu } from '@mantine/core';
import { CustomSmoothTooltipIllustration } from '@/components/icons';

type T = {
  id: string;
  name: string;
  color: string;
};

type Props<Y extends T> = {
  state: Y;
  setState: React.Dispatch<React.SetStateAction<Y[]>>;
};

function ColorPick<Y extends T>({ state, setState }: Props<Y>) {
  const onColorChange = (color: string) => {
    setState((prev) => prev.map((item) => (item.id === state.id ? { ...item, color } : item)));
  };

  return (
    <Menu.Dropdown
      sx={{
        padding: 0,
        width: 'auto',
        border: 'none',
        display: 'flex',
        marginLeft: 100,
        borderRadius: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          left: '0',
          top: '50%',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-50%) translateX(-100%)',
        }}
      />
      <Box
        sx={{
          gap: 15,
          width: '90vw',
          maxWidth: 270,
          minHeight: 300,
          display: 'flex',
          borderRadius: 20,
          padding: '20px',
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
        }}
      >
        <ColorPicker
          styles={{
            body: {
              width: '100%',
            },
            saturation: {
              height: '100%',
              aspectRatio: '1/1',
            },
          }}
          hueLabel="RENK"
          alphaLabel="OPAKLIK"
          saturationLabel="DOYGUNLUK"
          w="100%"
          format="rgba"
          withPicker
          defaultValue={state.color}
          onChangeEnd={onColorChange}
        />
      </Box>
    </Menu.Dropdown>
  );
}

export default ColorPick;
