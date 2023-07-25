import React from 'react';
import { ProdobitAppColors } from '@/theme';
import { Box, Button, Checkbox, MantineTheme, Sx, Text, TextInput } from '@mantine/core';

import {
  SearchIcon,
  DownloadCloudIcon,
  CustomChevronDown,
  CustomFilterBarsIcon,
} from '@/components/icons';

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

const ButtonSX: Sx = (t: MantineTheme) => ({
  gap: 4,
  height: 'auto',
  border: 'none',
  minHeight: 45,
  display: 'flex ',
  fontWeight: 400,
  borderRadius: 5,
  fontSize: '15px',
  lineHeight: '18px',
  textAlign: 'center',
  padding: '13px 12px',
  color: t.colors.gray[8],
  justifyContent: 'center',
  backgroundColor: 'white',
  transition: 'all .15s ease',
  ':hover': {
    color: t.colors.blue[7],
    backgroundColor: t.colors.blue[1],
  },
});

function Toolbar() {
  const [searchFocused, setSearchFocused] = React.useState(false);

  return (
    <Box
      sx={{
        left: 0,
        bottom: 0,
        padding: 20,
        width: '100%',
        display: 'flex',
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          gap: 8,
          zIndex: 2,
          padding: 0,
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            ...ToolbarInnerContainerSX,
            width: 'calc(70% - 4px)',
          }}
        >
          <TextInput
            maw={searchFocused ? 300 : 150}
            onBlur={() => setSearchFocused(false)}
            onFocus={() => setSearchFocused(true)}
            icon={<SearchIcon width={15} height={15} color={ProdobitAppColors.green[6]} />}
            placeholder="Her Şey Ara"
            styles={{
              wrapper: {
                padding: 0,
                height: '100%',
              },
              input: {
                padding: 0,
                border: 'none',
                height: '100%',
              },
            }}
            sx={{
              height: '100%',
              transition: 'all .15s ease',
            }}
          />
          <Button
            onClick={(e) => {
              const checkbox = e.currentTarget.querySelector(
                'input[type="checkbox"]',
              ) as HTMLInputElement;

              checkbox.checked = !checkbox.checked;
            }}
            variant="default"
            sx={(t) => ({
              // @ts-ignore
              ...ButtonSX(t),
              fontWeight: 700,
            })}
          >
            <Checkbox
              mr={15}
              width={15}
              height={15}
              styles={(t) => ({
                input: {
                  borderRadius: 4,
                  pointerEvents: 'none',
                  border: `1px solid ${t.colors.gray[5]}`,
                },
              })}
            />
            <Text p={0} m={0} mr={4}>
              Filtre
            </Text>
            <CustomFilterBarsIcon width={12} height={12} />
          </Button>
          <Button variant="default" sx={ButtonSX}>
            <Text p={0} m={0} mr={4}>
              Filtrelerim
            </Text>
            <CustomChevronDown width={12} height={12} />
          </Button>
          <Button variant="default" sx={ButtonSX}>
            <Text p={0} m={0} mr={4}>
              Sıralama
            </Text>
            <CustomChevronDown width={12} height={12} />
          </Button>
          <Button variant="default" sx={ButtonSX}>
            <Text p={0} m={0} mr={4}>
              İndir
            </Text>
            <DownloadCloudIcon width={12} height={12} />
          </Button>
        </Box>
        <Box
          sx={{
            ...ToolbarInnerContainerSX,
            width: 'calc(30% - 4px)',
          }}
        >
          todo-pagination
        </Box>
      </Box>
    </Box>
  );
}

export default Toolbar;
