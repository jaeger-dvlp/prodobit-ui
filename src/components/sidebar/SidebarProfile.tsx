/* eslint-disable no-alert */
import React from 'react';

import {
  Box,
  Button,
  Image,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';

import {
  EyeIcon,
  InfoIcon,
  LockIcon,
  PencilIcon,
  SwitchIcon,
} from '@/components/icons';

const Images = {
  tempAvatar: '/assets/img/temp-avatar.svg',
};

function SidebarProfile() {
  const mantineTheme = useMantineTheme();

  const ProfileButtonStyles = {
    margin: 0,
    padding: 6,
    border: 'none',
    color: '#AEADAF',
    borderRadius: 10,
    height: 'fit-content',
    backgroundColor: 'transparent',
    transition: 'all 0.1s ease-in-out',
    ':hover': {
      color: mantineTheme.colors.indigo[9],
      backgroundColor: mantineTheme.colors.indigo[1],
    },
  };

  return (
    <Box
      component="section"
      sx={{
        padding: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="section"
        sx={{
          gap: 20,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          component="section"
          sx={{
            gap: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="section"
            sx={{
              gap: 23,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'start',
            }}
          >
            <Image
              height={65}
              width={65}
              src={Images.tempAvatar}
              fit="contain"
            />
            <Box
              component="section"
              sx={{
                gap: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <Title order={2} fs="25px" c="#424385">
                Fatih G.
              </Title>
              <Text mt={-5} fs="15px" c="#878688">
                Senior Designer
              </Text>
            </Box>
          </Box>
          <Button
            onClick={() => {
              alert('Profile button clicked.');
            }}
            type="button"
            variant="default"
            sx={ProfileButtonStyles}
          >
            <EyeIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
        </Box>
        <Box
          component="ul"
          sx={{
            gap: 36,
            margin: 0,
            padding: 0,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => {
              alert('Pencil button clicked.');
            }}
            type="button"
            component="li"
            variant="default"
            sx={{ ...ProfileButtonStyles, color: 'black' }}
          >
            <PencilIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
          <Button
            onClick={() => {
              alert('Lock button clicked.');
            }}
            type="button"
            component="li"
            variant="default"
            sx={{ ...ProfileButtonStyles, color: 'black' }}
          >
            <LockIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
          <Button
            onClick={() => {
              alert('Switch button clicked.');
            }}
            type="button"
            component="li"
            variant="default"
            sx={{ ...ProfileButtonStyles, color: 'black' }}
          >
            <SwitchIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
          <Button
            onClick={() => {
              alert('Info button clicked.');
            }}
            type="button"
            component="li"
            variant="default"
            sx={{ ...ProfileButtonStyles, color: 'black' }}
          >
            <InfoIcon
              style={{
                width: 20,
                height: 20,
                color: 'currentcolor',
              }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SidebarProfile;
