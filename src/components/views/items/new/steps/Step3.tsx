import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { useNewItem } from '@/components/context/NewItem.context';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';
import { Box, Button, Divider, Text, Title, Tooltip } from '@mantine/core';
import {
  CustomEditPencilStIcon,
  CustomRightLongChevronIcon,
  CustomXICon,
} from '@/components/icons';
import { motion } from 'framer-motion';

function StepDescription() {
  return (
    <Box
      sx={{
        gap: 25,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          fontWeight: 300,
          fontSize: '37px',
          lineHeight: '44.4px',
          color: t.colors.gray[8],
        }}
      >
        Sadece İhtiyaç Duyduğunuz Özelliklerle Muhattap Olun
      </Text>
      <Text
        sx={{
          fontWeight: 300,
          fontSize: '18px',
          lineHeight: '21.6px',
          color: t.colors.gray[5],
        }}
      >
        Prodobit nöral bir mimari üstüne kurulmuştur. Ürün Detayları Özelleştirme özelliği ile
        ürünlerinize istediğiniz özellikleri ekleyin. Giysi için &apos;boyut&apos;,
        &apos;renk&apos;, teknoloji için &apos;hız&apos;, &apos;pil gücü&apos;... Her ürün, sizin
        kontrolünüzde!
      </Text>
    </Box>
  );
}
function ItemTemplateSelector() {
  const [mockSpecs, setMockSpecs] = React.useState([
    {
      id: 0,
      name: 'Fabrika Üretim',
      isSelected: false,
      subSpecs: [
        {
          id: 3,
          name: 'Hammadde',
        },
      ],
    },
    {
      id: 1,
      name: 'Perakende Satış',
      isSelected: true,
      subSpecs: [
        {
          id: 0,
          name: 'Kumaş',
        },
        {
          id: 1,
          name: 'Teknoloji',
        },
        {
          id: 2,
          name: 'Nike',
        },
        {
          id: 3,
          name: 'Hammadde',
        },
      ],
    },
    {
      id: 2,
      name: 'B2B',
      isSelected: false,
      subSpecs: [
        {
          id: 0,
          name: 'Kumaş',
        },
      ],
    },
  ]);

  const activeSpec = React.useMemo(() => mockSpecs.find((spec) => spec.isSelected), [mockSpecs]);

  const handleSpecClick = (specId: number) => {
    setMockSpecs((prev) =>
      prev.map((spec) => ({
        ...spec,
        isSelected: spec.id === specId,
      })),
    );
  };

  return (
    <Box
      sx={{
        gap: 15,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Title
        order={2}
        sx={{
          textAlign: 'left',
          fontWeight: 400,
          fontSize: '37px',
          lineHeight: '44.4px',
          color: t.colors.blue[5],
        }}
      >
        Şablon Seç
      </Title>
      <Box
        sx={{
          gap: 28,
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            gap: 5,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="ul"
            sx={{
              gap: 36,
              margin: 0,
              padding: 0,
              width: '100%',
              display: 'flex',
              listStyle: 'none',
              overflowX: 'auto',
              overflowY: 'hidden',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              '> li': {
                margin: 0,
                padding: 0,
                width: 'auto',
                '> button': {
                  opacity: 0.5,
                  border: 'none',
                  height: 'auto',
                  borderRadius: 0,
                  fontWeight: 500,
                  fontsize: '15px',
                  lineHeight: '18px',
                  padding: '9px 0px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.15s ease-in-out',
                  borderBottom: '1px solid transparent',
                  ':hover': {
                    opacity: 0.7,
                  },
                },
              },
            }}
          >
            {mockSpecs.map((spec, i) => (
              <Box key={`item-temp-spec-ct-${i}`} component="li">
                <Button
                  onClick={() => handleSpecClick(spec.id)}
                  variant="default"
                  sx={{
                    opacity: `${spec?.isSelected ? 1 : 0.5}!important`,
                    borderBottom: `1px solid ${
                      spec?.isSelected ? t.colors.blue[5] : 'transparent'
                    }!important`,
                    ':hover': {
                      opacity: `${spec.isSelected ? 1 : 0.7}!important`,
                    },
                  }}
                >
                  <Text> {spec.name}</Text>
                </Button>
              </Box>
            ))}
          </Box>
          <Tooltip label="Düzenle">
            <Button
              sx={{
                padding: 3,
                height: 'auto',
                border: 'none',
                borderRadius: 5,
                color: t.colors.gray[9],
                backgroundColor: 'transparent',
                transition: 'all 0.15s ease-in-out',
                ':hover': {
                  backgroundColor: t.colors.gray[3],
                },
              }}
            >
              <CustomEditPencilStIcon width={14} height={14} />
            </Button>
          </Tooltip>
        </Box>

        <Box
          component="ul"
          sx={{
            gap: 4,
            margin: 0,
            padding: 0,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          {activeSpec?.subSpecs.map((subSpec, i) => (
            <Box
              key={`item-temp-sub-spec-ct${activeSpec.id}-${i}`}
              component={motion.li}
              exit={{ opacity: 0, y: 5 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              sx={{
                gap: 8,
                fontWeight: 400,
                display: 'flex',
                fontSize: '15px',
                borderRadius: 100,
                lineHeight: '18px',
                padding: '10px 13px',
                alignItems: 'center',
                flexDirection: 'row',
                color: t.colors.blue[7],
                justifyContent: 'flex-start',
                backgroundColor: t.colors.blue[0],
                button: {
                  padding: 0,
                  border: 'none',
                  height: 'auto',
                  color: t.colors.blue[5],
                  backgroundColor: 'transparent!important',
                  'span > svg': {
                    width: 14,
                    height: 14,
                  },
                },
              }}
            >
              <Text>{subSpec.name}</Text>
              <Box
                sx={{
                  gap: 3,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="default">
                  <CustomEditPencilStIcon />
                </Button>
                <Button variant="default">
                  <CustomXICon />
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function NewItemStep3() {
  const { setCurrentStep } = useNewItem();
  const goToNextStep = () => setCurrentStep((c) => c + 1);
  const goToPrevStep = () => setCurrentStep((c) => c - 1);
  return (
    <>
      <Box
        {...stepContainerMotionProps}
        sx={{
          gap: 55,
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
        <Text
          sx={{
            fontWeight: 500,
            fontSize: '54px',
            lineHeight: '64.8px',
            color: t.colors.green[6],
          }}
        >
          Öğe Kimliği
        </Text>
        <Box
          sx={{
            gap: 32,
            padding: 30,
            width: '100%',
            maxWidth: 695,
            display: 'flex',
            borderRadius: 40,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.82)',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          }}
        >
          <Box
            sx={{
              gap: 40,
              width: '100%',
              display: 'flex',
              padding: '10px 30px',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <StepDescription />
            <ItemTemplateSelector />
            <Divider w="100%" color={t.colors.gray[3]} />
          </Box>
        </Box>
      </Box>
      <NewItemToolbar>
        <Button
          onClick={goToPrevStep}
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
          <Text>İptal</Text>
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
          <Text>Sonraki</Text>
          <CustomRightLongChevronIcon />
        </Button>
      </NewItemToolbar>
    </>
  );
}

export default NewItemStep3;
