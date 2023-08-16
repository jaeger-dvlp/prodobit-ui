/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { motion } from 'framer-motion';
import { CSS } from '@dnd-kit/utilities';
import { ProdobitAppTheme as t } from '@/theme';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { useNewItem } from '@/components/context/NewItem.context';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';
import { Box, Button, Divider, Menu, Sx, Text, TextInput, Title, Tooltip } from '@mantine/core';

import {
  useSensor,
  useSensors,
  DndContext,
  DragEndEvent,
  PointerSensor,
  closestCenter,
  KeyboardSensor,
} from '@dnd-kit/core';

import {
  arrayMove,
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {
  TrashIcon,
  SearchIcon,
  CustomXICon,
  CustomPlusIcon,
  CustomSaveIcon,
  CustomCheckIcon,
  CustomBackSquareIcon,
  CustomEditPencilStIcon,
  CustomRightLongChevronIcon,
  CustomSmoothTooltipIllustration,
  CustomSortThreeLine,
} from '@/components/icons';

const PropFieldListElmSX: Sx = {
  gap: 8,
  display: 'flex',
  borderRadius: 100,
  padding: '10px 20px',
  alignItems: 'center',
  flexDirection: 'row',
  color: t.colors.gray[8],
  justifyContent: 'center',
  border: `1px solid ${t.colors.green[6]}`,
  '> button': {
    padding: 0,
    border: 'none',
    height: 'auto',
    color: t.colors.green[9],
    backgroundColor: 'transparent!important',
    '> div > span > svg': {
      width: 14,
      height: 14,
    },
  },
};

function TemplateMenu({
  state,
  setState,
}: {
  state: MockTemplateSpec[];
  setState: React.Dispatch<React.SetStateAction<MockTemplateSpec[]>>;
}) {
  function SortableItem({ id, children }: { id: number; children: React.ReactNode }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id,
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <Box component="li" ref={setNodeRef} style={style}>
        <CustomSortThreeLine {...attributes} {...listeners} />
        {children}
      </Box>
    );
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setState((old: any[]) => {
        const oldIndex = old.findIndex((item) => item.id === active.id);
        const newIndex = old.findIndex((item) => item.id === over?.id);

        return arrayMove(old, oldIndex, newIndex);
      });
    }
  };

  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginLeft: -30,
        width: 'auto',
        maxWidth: 417,
        border: 'none',
        display: 'flex',
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
          right: '0',
          top: '50%',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-50%) translateX(100%) rotate(180deg)',
        }}
      />
      <Box
        sx={{
          gap: 10,
          width: '90vw',
          maxWidth: 417,
          display: 'flex',
          borderRadius: 20,
          padding: '30px 36px',
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '> button': {
            width: '100%',
            border: 'none',
            height: 'auto',
            padding: '20px 16px',
            backgroundColor: 'transparent!important',
            '> div > span': {
              gap: 5,
              color: '#000',
              width: '100%',
              display: 'flex',
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '18px',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',

              '> svg': {
                width: 24,
                height: 24,
              },
            },
          },
        }}
      >
        <Box
          component="ul"
          sx={{
            gap: 10,
            margin: 0,
            padding: 10,
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            listStyle: 'none',
            '> li': {
              gap: 14,
              padding: 20,
              width: '100%',
              display: 'flex',
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: t.colors.gray[1],
              '> svg': {
                width: 24,
                height: 24,
                cursor: 'grab',
                color: t.colors.gray[4],
                outline: 'none',
                ':active': {
                  cursor: 'grabbing',
                },
              },
              '.mantine-TextInput-input': {
                padding: 0,
                width: '100%',
                border: 'none',
                backgroundColor: 'transparent',
              },
              '> button': {
                padding: 0,
                color: '#000',
                border: 'none',
                height: 'auto',
                backgroundColor: 'transparent!important',
                '> div > span > svg': {
                  width: 24,
                  height: 24,
                },
              },
            },
          }}
        >
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
          >
            <SortableContext
              items={state.map((item: any) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {state.map((item) => (
                <SortableItem id={item.id} key={`sr-st3-0-${item.id}`}>
                  <TextInput defaultValue={item.name} />
                  <Button variant="default">
                    <TrashIcon />
                  </Button>
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>
        </Box>
        <Button variant="default">
          <Text>Yeni Ana Kategori</Text>
          <CustomPlusIcon />
        </Button>
      </Box>
      <Button
        variant="default"
        sx={{
          marginTop: 5,
          color: '#fff',
          width: '100%',
          height: 'auto',
          border: 'none',
          borderRadius: 20,
          padding: '25px 30px',
          backgroundColor: t.colors.green[6],
          transition: 'all 0.15s ease-in-out',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '&:hover': {
            backgroundColor: t.colors.green[5],
          },
          '> div > span': {
            gap: 5,
            width: '100%',
            display: 'flex',
            fontWeight: 500,
            fontSize: '18px',
            alignItems: 'center',
            flexDirection: 'row',
            color: t.colors.gray[0],
            justifyContent: 'center',
          },
        }}
      >
        <Text>Kaydet</Text>
      </Button>
    </Menu.Dropdown>
  );
}

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

type MockTemplateSpec = {
  id: number;
  name: string;
  isSelected: boolean;
  subSpecs: {
    id: number;
    name: string;
  }[];
};

function ItemTemplateSelector({
  focusMain,
  blurMain,
}: {
  focusMain: () => void;
  blurMain: () => void;
}) {
  const [mockSpecs, setMockSpecs] = React.useState<MockTemplateSpec[]>([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
                  backgroundColor: 'transparent!important',
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
          <Menu onOpen={blurMain} onClose={focusMain} zIndex={999} position="left">
            <Menu.Target>
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
            </Menu.Target>
            <TemplateMenu state={mockSpecs} setState={setMockSpecs} />
          </Menu>
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

function ItemPropField() {
  const mockFields = [
    '2D Boyut',
    'Renk',
    'Beden',
    'Ürün Alanları',
    'Model',
    'Beden',
    'Renk',
    '2D Boyut',
  ];
  return (
    <Box
      sx={{
        gap: 50,
        width: '100%',
        display: 'flex',
        marginBottom: 40,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          gap: 35,
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            gap: 5,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text
            sx={{
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '18px',
              color: t.colors.gray[6],
            }}
          >
            Özellik Alanları Belirleyin
          </Text>
          <Button
            variant="default"
            sx={{
              padding: 0,
              height: 'auto',
              border: 'none',
              color: t.colors.gray[9],
              backgroundColor: 'transparent!important',
              'span > svg': {
                width: 18,
                height: 18,
              },
            }}
          >
            <CustomBackSquareIcon />
          </Button>
          <Button
            variant="default"
            sx={{
              padding: 0,
              height: 'auto',
              border: 'none',
              color: t.colors.gray[9],
              backgroundColor: 'transparent!important',
              '> div > span': {
                gap: 7,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                '> svg': {
                  width: 18,
                  height: 18,
                },
              },
            }}
          >
            <CustomSaveIcon />
            <Text>Şablon Olarak Kaydet</Text>
          </Button>
        </Box>
        <Box
          component="ul"
          sx={{
            gap: 6,
            margin: 0,
            padding: 0,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            '> li': {
              ...PropFieldListElmSX,
            },
          }}
        >
          {mockFields.map((field, i) => (
            <Box key={`item-prop-field-${i}`} component="li">
              <Text>{field}</Text>
              <Button variant="default">
                <CustomXICon />
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function ItemFieldSearchArea() {
  return (
    <Box
      sx={{
        gap: 25,
        width: '100%',
        display: 'flex',
        borderRadius: 20,
        padding: '20px 20px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        border: `1px solid ${t.colors.gray[3]}`,
      }}
    >
      <TextInput
        defaultValue="boy"
        styles={{
          root: {
            width: '100%',
            marginTop: -50,
          },
          input: {
            padding: 30,
            borderRadius: 100,
            backgroundColor: t.colors.gray[1],
            border: `1px solid ${t.colors.gray[2]}`,
            ':focus': {
              borderColor: t.colors.green[5],
            },
          },
          rightSection: {
            padding: 30,
            width: 'auto',
            pointerEvents: 'none',
            svg: {
              width: 18,
              height: 18,
              color: t.colors.gray[8],
              backgroundColor: t.colors.gray[1],
            },
          },
        }}
        rightSection={<SearchIcon />}
      />
      <Box
        sx={{
          gap: 30,
          padding: 10,
          width: '100%',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            gap: 20,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            sx={{
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '18px',
              color: t.colors.gray[6],
            }}
          >
            Bunu mu demek istediniz?
          </Text>
          <Box
            component="ul"
            sx={{
              gap: 5,
              margin: 0,
              padding: 0,
              width: '100%',
              display: 'flex',
              listStyle: 'none',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '> li': {
                gap: 18,
                display: 'flex',
                borderRadius: 10,
                padding: '12px 23px',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: `1px solid ${t.colors.green[1]}`,
                '> div:nth-of-type(1)': {
                  padding: 5,
                  '> svg': {
                    width: 30,
                    height: 30,
                    color: t.colors.green[6],
                  },
                },
                '> div:nth-of-type(2)': {
                  gap: 8,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  '> .mantine-Text-root': {
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '14.4px',
                    color: t.colors.blue[7],
                  },
                  '> ul': {
                    gap: 3,
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    '> li': {
                      fontSize: '12px',
                      fontWeight: 400,
                      borderRadius: 100,
                      padding: '5px 15px',
                      lineHeight: '14.4px',
                      color: t.colors.gray[8],
                      backgroundColor: t.colors.gray[2],
                    },
                  },
                },
                '> div:nth-of-type(3)': {
                  gap: 3,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  '> button': {
                    padding: 0,
                    width: 'auto',
                    height: 'auto',
                    border: 'none',
                    color: t.colors.blue[5],
                    '> div > span > svg': {
                      width: 14,
                      height: 14,
                    },
                  },
                },
              },
            }}
          >
            <Box component="li">
              <Box className="check">
                <CustomCheckIcon />
              </Box>
              <Box>
                <Text>3D Boyut</Text>
                <Box component="ul">
                  <Box component="li">En</Box>
                  <Box component="li">Boy</Box>
                  <Box component="li">Derinlik</Box>
                </Box>
              </Box>
              <Box>
                <Button variant="default">
                  <CustomEditPencilStIcon />
                </Button>
                <Button variant="default">
                  <CustomXICon />
                </Button>
              </Box>
            </Box>
            <Box component="li">
              <Box className="check">
                <CustomCheckIcon />
              </Box>
              <Box>
                <Text>Kumaş</Text>
                <Box component="ul">
                  <Box component="li">Kullanılan Kumaş</Box>
                  <Box component="li">Sentetik Oranı</Box>
                  <Box component="li">Pamuk Oranı</Box>
                </Box>
              </Box>
              <Box>
                <Button variant="default">
                  <CustomEditPencilStIcon />
                </Button>
                <Button variant="default">
                  <CustomXICon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function NewItemStep3() {
  const { setCurrentStep } = useNewItem();
  const [focusedMain, setFocusedMain] = React.useState(true);
  const focusMain = () => setFocusedMain(true);
  const blurMain = () => setFocusedMain(false);
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
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            backgroundColor: focusedMain ? '#fff' : 'rgba(255,255,255,0.5)',
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
            <ItemTemplateSelector focusMain={focusMain} blurMain={blurMain} />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemPropField />
            <ItemFieldSearchArea />
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
