import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { useNewItem } from '@/components/context/NewItem.context';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';
import { Box, Button, Divider, NumberInput, NumberInputHandlers, Text } from '@mantine/core';

import {
  CustomCheckIcon,
  CustomChevronDown,
  CustomChevronUp,
  CustomXICon,
} from '@/components/icons';

function NewItemStep1() {
  const { setCurrentStep } = useNewItem();
  const numberInpHandlers = React.useRef<NumberInputHandlers>();
  const goToNextStep = () => setCurrentStep((c) => c + 1);
  return (
    <>
      <Box
        {...stepContainerMotionProps}
        sx={{
          padding: 60,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          [t.fn.smallerThan('md')]: {
            padding: 30,
          },
        }}
      >
        <Box
          sx={{
            gap: 55,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              gap: 0,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Text
              sx={{
                fontWeight: 300,
                fontSize: '37px',
                lineHeight: '44.4px',
                color: t.colors.green[9],
              }}
            >
              Ürün Ekle
            </Text>
            <Text
              sx={{
                fontWeight: 500,
                fontSize: '54px',
                lineHeight: '64.8px',
                color: t.colors.green[6],
              }}
            >
              Varyasyon Seçimi
            </Text>
          </Box>
          <Box
            sx={{
              gap: 32,
              width: '100%',
              maxWidth: 695,
              display: 'flex',
              borderRadius: 40,
              padding: '50px 45px',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.82)',
              boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            }}
          >
            <Text
              sx={{
                maxWidth: 400,
                fontWeight: 400,
                fontSize: '31px',
                textAlign: 'center',
                lineHeight: '37.2px',
                color: '#000',
              }}
            >
              Ürününüzde Varyasyon bulunuyor Mu?
            </Text>
            <Divider w="100%" color={t.colors.gray[3]} />
            <Box
              sx={{
                gap: 11,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text
                span
                sx={{
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '18px',
                  color: t.colors.gray[8],
                }}
              >
                Seçimimi
              </Text>
              <Box
                sx={{
                  gap: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="default"
                  onClick={() => numberInpHandlers?.current?.decrement()}
                  sx={{
                    padding: 3,
                    height: 'auto',
                    border: 'none',
                    color: t.colors.gray[8],
                    backgroundColor: 'transparent',
                    transition: 'all 0.15s ease-in-out',
                    ':hover': {
                      backgroundColor: t.colors.gray[3],
                    },
                  }}
                >
                  <CustomChevronDown width={12} height={12} />
                </Button>
                <NumberInput
                  min={0}
                  max={30}
                  hideControls
                  defaultValue={1}
                  handlersRef={numberInpHandlers}
                  styles={{
                    input: {
                      padding: 0,
                      maxWidth: 30,
                      width: 'auto',
                      border: 'none',
                      fontWeight: 500,
                      fontSize: '15px',
                      lineHeight: '18px',
                      textAlign: 'center',
                      color: t.colors.gray[8],
                    },
                  }}
                />
                <Button
                  variant="default"
                  onClick={() => numberInpHandlers?.current?.increment()}
                  sx={{
                    padding: 3,
                    height: 'auto',
                    border: 'none',
                    color: t.colors.gray[8],
                    backgroundColor: 'transparent',
                    transition: 'all 0.15s ease-in-out',
                    ':hover': {
                      backgroundColor: t.colors.gray[3],
                    },
                  }}
                >
                  <CustomChevronUp width={12} height={12} />
                </Button>
              </Box>
              <Text
                span
                sx={{
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '18px',
                  color: t.colors.gray[8],
                }}
              >
                Öğe boyunca hatırla
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <NewItemToolbar>
        <Button
          onClick={goToNextStep}
          variant="default"
          sx={{
            color: t.colors.red[5],
            backgroundColor: '#fff',
            border: `1px solid ${t.colors.red[2]}`,
            transition: 'all 0.15s ease-in-out',
            ':hover': {
              backgroundColor: t.colors.red[0],
            },
          }}
        >
          <CustomXICon />
          <Text>Hayır</Text>
        </Button>
        <Button
          onClick={goToNextStep}
          variant="default"
          sx={{
            color: '#fff',
            backgroundColor: t.colors.green[6],
            border: `1px solid ${t.colors.green[6]}`,
            transition: 'all 0.15s ease-in-out',
            ':hover': {
              backgroundColor: t.colors.green[5],
            },
          }}
        >
          <CustomCheckIcon />
          <Text>Evet</Text>
        </Button>
      </NewItemToolbar>
    </>
  );
}

export default NewItemStep1;
