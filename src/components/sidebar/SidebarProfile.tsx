/* eslint-disable no-alert */
import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Image, Sx, Text, Title } from '@mantine/core';
import { EyeIcon, InfoIcon, LockIcon, PencilIcon, SwitchIcon } from '@/components/icons';

const Images = {
  tempAvatar: '/assets/img/temp-avatar.svg',
};

function SidebarProfile() {
  const ProfileButtonStyles: Sx = {
    margin: 0,
    padding: 10,
    border: 'none',
    color: '#AEADAF',
    borderRadius: 6,
    width: '100%',
    height: 'fit-content',
    backgroundColor: t.colors.gray[2],
    transition: 'all 0.1s ease-in-out',
    ':hover': {
      color: t.colors.gray[9],
      backgroundColor: t.colors.gray[3],
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
          padding: 15,
          width: '100%',
          display: 'flex',
          borderRadius: 40,
          maxWidth: '330px',
          backgroundColor: '#fff',
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
              src={Images.tempAvatar}
              fit="contain"
              styles={(theme) => ({
                root: {
                  maxWidth: '60px',
                  [theme.fn.smallerThan('md')]: {
                    maxWidth: '40px',
                  },
                },
              })}
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
              <Title
                order={2}
                c="#424385"
                sx={(theme) => ({
                  fontSize: '25px',
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '17px',
                  },
                })}
              >
                Fatih G.
              </Title>
              <Text
                mt={-5}
                c="#878688"
                sx={(theme) => ({
                  fontSize: '15px',
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '12px',
                  },
                })}
              >
                Senior Designer
              </Text>
            </Box>
          </Box>
          <Button
            type="button"
            variant="default"
            sx={{
              ...ProfileButtonStyles,
              width: 'auto',
              backgroundColor: 'transparent',
            }}
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
          sx={(theme) => ({
            gap: 5,
            margin: 0,
            padding: 0,
            width: '100%',
            paddingTop: 15,
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'stretch',
            borderTop: `1px solid ${t.colors.gray[2]}`,
            [theme.fn.smallerThan('md')]: {
              gap: 1,
            },
          })}
        >
          <Button
            type="button"
            component="li"
            variant="default"
            sx={{
              ...ProfileButtonStyles,
              color: 'black',
              borderBottomLeftRadius: 25,
            }}
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
            type="button"
            component="li"
            variant="default"
            sx={{
              ...ProfileButtonStyles,
              color: 'black',
              borderBottomRightRadius: 25,
            }}
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
