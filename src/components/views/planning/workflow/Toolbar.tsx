import React from 'react';
import { BsXLg } from 'react-icons/bs';
import { ProdobitAppTheme as t } from '@/theme';
import { AnimatePresence, motion } from 'framer-motion';
import ToolbarContainer from '@/components/misc/Toolbar';
import { Box, Button, Checkbox, Select, Sx, Text, TextInput } from '@mantine/core';
import { CustomFilterBarsIcon, DownloadCloudIcon, SearchIcon } from '@/components/icons';

const ToolbarInnerContainerSX: Sx = {
  gap: 5,
  padding: 10,
  minHeight: 65,
  display: 'flex',
  borderRadius: 15,
  alignItems: 'center',
  pointerEvents: 'all',
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

function WorkflowToolbar() {
  const [searchFocused, setSearchFocused] = React.useState(false);
  return (
    <ToolbarContainer>
      <Box
        sx={{
          ...ToolbarInnerContainerSX,
          width: 'calc(70% - 4px)',
        }}
      >
        <TextInput
          maw={searchFocused ? 900 : 208}
          onFocus={() => setSearchFocused(true)}
          icon={<SearchIcon width={15} height={15} color={t.colors.green[6]} />}
          placeholder="Kişi veya Üretim Ara"
          styles={{
            wrapper: {
              padding: 0,
              width: '100%',
              height: '100%',
            },
            input: {
              padding: 0,
              width: '100%',
              border: 'none',
              height: '100%',
            },
          }}
          sx={{
            height: '100%',
            transition: 'all .3s ease-in-out',
          }}
        />
        <AnimatePresence mode="wait">
          {searchFocused && (
            <Button
              key="close-s-bar"
              variant="default"
              variants={{
                initial: {
                  opacity: 0,
                  scale: 0.8,
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.1,
                  },
                },
                exit: {
                  opacity: 0,
                  scale: 0.8,
                  transition: {
                    delay: 0,
                  },
                },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.15,
              }}
              sx={{
                padding: 5,
                height: 'auto',
                border: 'none',
                borderRadius: 5,
                color: t.colors.red[6],
                backgroundColor: 'transparent',
                transition: 'all .15s ease-in-out',
                ':hover': {
                  backgroundColor: t.colors.red[1],
                },
              }}
              component={motion.button}
              onClick={() => setSearchFocused(false)}
            >
              <BsXLg size={20} />
            </Button>
          )}
        </AnimatePresence>
        <Button
          onClick={(e) => {
            const checkbox = e.currentTarget.querySelector(
              'input[type="checkbox"]',
            ) as HTMLInputElement;

            checkbox.checked = !checkbox.checked;
          }}
          variant="default"
          sx={{
            ...ButtonSX,
            fontWeight: 700,
          }}
        >
          <Checkbox
            mr={15}
            width={15}
            height={15}
            styles={{
              input: {
                borderRadius: 4,
                pointerEvents: 'none',
                border: `1px solid ${t.colors.gray[5]}`,
              },
            }}
          />
          <Text p={0} m={0} mr={4}>
            Filtre
          </Text>
          <CustomFilterBarsIcon width={12} height={12} />
        </Button>
        <Select
          styles={{
            root: {
              margin: 0,
              padding: 0,
              width: 'auto',
              height: '100%',
              display: 'flex',
              maxWidth: '110px',
              position: 'relative',
              alignItems: 'stretch',
              '> div': {
                margin: 0,
                padding: 0,
                minHeight: '100%!important',
              },
            },
            wrapper: {
              height: '100%',
            },
            input: {
              width: '100%',
              height: '100%',
              border: 'none',
              fontWeight: 400,
              fontSize: '15px',
              borderRadius: 10,
              textAlign: 'left',
              lineHeight: '18px',
              padding: '13px 12px',
              transition: 'all .15s ease',
              ':hover': {
                color: t.colors.gray[9],
                backgroundColor: t.colors.gray[3],
              },
              '::placeholder': {
                color: '#000',
              },
            },
            dropdown: {
              borderRadius: 15,
            },
            item: {
              borderRadius: 10,
            },
          }}
          clearable
          onChange={(val) => {
            console.log(val);
          }}
          data={[
            {
              value: 'mock',
              label: 'Deneme',
            },
          ]}
          placeholder="Filtrelerim"
          variant="default"
        />
        <Button variant="default" sx={ButtonSX}>
          <Text p={0} m={0} mr={4}>
            Excel Olarak İndir
          </Text>
          <DownloadCloudIcon width={12} height={12} />
        </Button>
      </Box>
      <Box
        sx={{
          ...ToolbarInnerContainerSX,
          width: 'calc(30% - 4px)',
          gap: 15,
          padding: '10px 25px',
        }}
      >
        <Button
          variant="default"
          sx={{
            width: 19,
            height: 19,
            padding: 0,
            border: 'none',
            borderRadius: 100,
            backgroundColor: `${t.colors.purple[3]}!important`,
          }}
        />
        <Button
          variant="default"
          sx={{
            width: 19,
            height: 19,
            padding: 0,
            border: 'none',
            borderRadius: 100,
            backgroundColor: `${t.colors.red[3]}!important`,
          }}
        />
        <Button
          variant="default"
          sx={{
            width: 19,
            height: 19,
            padding: 0,
            border: 'none',
            borderRadius: 100,
            backgroundColor: `${t.colors.orange[3]}!important`,
          }}
        />
        <Button
          variant="default"
          sx={{
            width: 19,
            height: 19,
            padding: 0,
            border: 'none',
            borderRadius: 100,
            backgroundColor: `${t.colors.green[3]}!important`,
          }}
        />
      </Box>
    </ToolbarContainer>
  );
}

export default WorkflowToolbar;
