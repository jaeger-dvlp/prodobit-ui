/* eslint-disable react/no-unstable-nested-components */
import 'dayjs/locale/tr';
import React from 'react';
import dayjs from 'dayjs';
import { Dropzone } from '@mantine/dropzone';
import { ProdobitAppTheme as t } from '@/theme';
import { AnimatePresence, motion } from 'framer-motion';
import allUserIcons from '@/components/icons/user.icons';
import DayjsRelativeTime from 'dayjs/plugin/relativeTime';
import ItemMainInfo from '@/components/views/items/edit/ItemMainInfo';
import EditTextEditor from '@/components/views/items/edit/TextEditor';
import ItemStatusBar from '@/components/views/items/edit/ItemStatusBar';
import ItemFinancialInfo from '@/components/views/items/edit/ItemFinancialInfo';
import {
  Sx,
  Box,
  Menu,
  Text,
  Image,
  Table,
  Button,
  Checkbox,
  Textarea,
  TextInput,
} from '@mantine/core';

import {
  DocIcon,
  InfoIcon,
  CopyIcon,
  EditIcon,
  NotesIcon,
  TrashIcon,
  RefreshIcon,
  RoutingIcon,
  BarcodeIcon,
  Canlde2Icon,
  CustomXICon,
  ArrowLineIcon,
  Category2Icon,
  CustomPlusIcon,
  ExternalUrlIcon,
  CustomCheckIcon,
  CustomChevronDown,
  DownloadCloudIcon,
  RightIndicatorArrow,
  CustomSmoothTooltipIllustration,
  ImageLightIcon,
  CustomChevronRight,
} from '@/components/icons';

import {
  TNote,
  MockStatuses,
  MockNotesData,
  TProgressData,
  FileTypeImages,
  MockProgressData,
  MockSupplierData,
} from 'mockdata';

dayjs.extend(DayjsRelativeTime);
dayjs.locale('tr');

const motionProps = {
  component: motion.section,
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 20 },
  exit: { opacity: 0, y: 20 },
  transition: {
    damping: 30,
    type: 'spring',
    stiffness: 200,
  },
};

export const getRenderedDate = (date: string) => {
  const text = dayjs(date).fromNow();
  return `${text[0].toUpperCase()}${text.slice(1)}`;
};

function DeleteMenu({ onCancel, onConfirm }: { onCancel?: () => void; onConfirm?: () => void }) {
  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginTop: 40,
        width: 'auto',
        maxWidth: 417,
        border: 'none',
        display: 'flex',
        borderRadius: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        '& .c-tooltip': {
          top: '0%',
          width: 30,
          left: '50%',
          height: 100,
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-62.5%) translateX(-50%) rotate(90deg)',
        },
        '& .menu-content': {
          gap: 5,
          display: 'flex',
          borderRadius: 100,
          padding: '13px 15px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.82)',
          boxShadow: ' 0px 24px 54px -13px rgba(177, 109, 92, 0.30)',
          '& .mantine-Button-root': {
            height: 'auto',
            display: 'flex',
            fontSize: '22px',
            fontWeight: 300,
            borderRadius: 100,
            padding: '15px 30px',
            lineHeight: '26.4px',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease-in-out',
            '> div > span': {
              gap: 15,
              padding: 0,
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              '> svg': {
                width: 24,
                height: 24,
              },
            },
            '&.cancel-button': {
              backgroundColor: '#fff!important',
              color: `${t.colors.red[5]}!important`,
              border: `1px solid ${t.colors.red[2]}!important`,
              transition: 'all 0.15s ease-in-out',
              ':hover': {
                backgroundColor: `${t.colors.red[0]}!important`,
              },
            },
            '&.confirm-button': {
              color: '#fff',
              backgroundColor: t.colors.green[6],
              border: `1px solid ${t.colors.green[6]}`,
              transition: 'all 0.15s ease-in-out',
              ':hover': {
                backgroundColor: t.colors.green[5],
              },
            },
          },
        },
      }}
    >
      <CustomSmoothTooltipIllustration className="c-tooltip" />
      <Box className="menu-content">
        <Menu.Item closeMenuOnClick>
          <Button className="cancel-button" onClick={onCancel} variant="default">
            <CustomXICon />
            <Text>İptal</Text>
          </Button>
        </Menu.Item>
        <Menu.Item closeMenuOnClick>
          <Button className="confirm-button" onClick={onConfirm} variant="default">
            <CustomCheckIcon />
            <Text>Silin</Text>
          </Button>
        </Menu.Item>
      </Box>
    </Menu.Dropdown>
  );
}

function NewSpecMenu() {
  return (
    <Menu.Dropdown
      sx={{
        margin: 0,
        padding: 0,
        marginTop: -50,
        border: 'none',
        minWidth: 417,
        maxWidth: 417,
        height: 'auto',
        display: 'flex',
        paddingRight: 30,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        '& .menu-content': {
          gap: 5,
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          '& .menu-inner': {
            gap: 30,
            padding: 30,
            minHeight: 200,
            display: 'flex',
            borderRadius: 20,
            alignItems: 'stretch',
            flexDirection: 'column',
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            '& .section-title': {
              opacity: 0.4,
              fontWeight: 500,
              fontSize: '15px',
              color: t.colors.gray[6],
            },
            '& .top-section': {
              gap: 25,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .name-input input': {
                margin: 0,
                height: 'auto',
                border: 'none',
                fontWeight: 500,
                borderRadius: 0,
                fontSize: '31px',
                color: t.colors.gray[9],
                padding: '0px 0px 18px 0px',
                borderBottom: `1px solid ${t.colors.gray[3]}`,
                '&::placeholder': { color: t.colors.gray[9] },
              },
            },
            '& .bottom-section': {
              gap: 20,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .description-input': {
                height: 'auto',
                '& textarea': {
                  padding: 20,
                  minHeight: 90,
                  border: 'none',
                  fontWeight: 400,
                  fontSize: '12px',
                  borderRadius: 10,
                  height: 'fit-content',
                  color: t.colors.gray[9],
                  backgroundColor: t.colors.gray[1],
                },
              },
            },
          },
          '& .menu-save-btn': {
            border: 'none',
            width: '100%',
            height: 'auto',
            fontSize: '22px',
            fontWeight: 400,
            borderRadius: 20,
            padding: '25px 10px',
            color: t.colors.gray[0],
            backgroundColor: t.colors.green[6],
            textAlign: 'center',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          },
          '& .c-tooltip': {
            zIndex: 2,
            width: 80,
            height: 80,
            top: '22.5px',
            right: -22.5,
            color: '#fff',
            position: 'absolute',
            transform: 'rotate(180deg)',
            filter: 'drop-shadow(0px 7px 44px rgba(104, 48, 48, 0.1))',
          },
        },
      }}
    >
      <Box className="menu-content">
        <CustomSmoothTooltipIllustration className="c-tooltip" />
        <Box className="menu-inner">
          <Box className="top-section">
            <Text className="section-title">Özellik Başlığı</Text>
            <TextInput className="name-input" placeholder="Ürün Tam Adı" />
          </Box>
          <Box className="bottom-section">
            <Text className="section-title">Özellik Açıklaması</Text>
            <Textarea
              className="description-input"
              placeholder="Özelliği kısa ve öz şekilde buraya yazın."
            />
          </Box>
        </Box>
        <Menu.Item closeMenuOnClick>
          <Box className="menu-save-btn">
            <Text>Kaydet</Text>
          </Box>
        </Menu.Item>
      </Box>
    </Menu.Dropdown>
  );
}

function EditMenu() {
  return (
    <Menu.Dropdown
      sx={{
        margin: 0,
        padding: 0,
        marginTop: -50,
        border: 'none',
        minWidth: 417,
        maxWidth: 417,
        height: 'auto',
        display: 'flex',
        paddingRight: 30,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        '& .menu-content': {
          gap: 5,
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          '& .menu-inner': {
            gap: 30,
            padding: 30,
            minHeight: 200,
            display: 'flex',
            borderRadius: 20,
            alignItems: 'stretch',
            flexDirection: 'column',
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            '& .section-title': {
              opacity: 0.4,
              fontWeight: 500,
              fontSize: '15px',
              color: t.colors.gray[6],
            },
            '& .top-section': {
              gap: 25,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .name-input input': {
                margin: 0,
                height: 'auto',
                border: 'none',
                fontWeight: 500,
                borderRadius: 0,
                fontSize: '31px',
                color: t.colors.gray[9],
                padding: '0px 0px 18px 0px',
                borderBottom: `1px solid ${t.colors.gray[3]}`,
                '&::placeholder': { color: t.colors.gray[9] },
              },
            },
            '& .bottom-section': {
              gap: 20,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .description-input': {
                height: 'auto',
                '& textarea': {
                  padding: 20,
                  minHeight: 90,
                  border: 'none',
                  fontWeight: 400,
                  fontSize: '12px',
                  borderRadius: 10,
                  height: 'fit-content',
                  color: t.colors.gray[9],
                  backgroundColor: t.colors.gray[1],
                },
              },
            },
          },
          '& .menu-save-btn': {
            border: 'none',
            width: '100%',
            height: 'auto',
            fontSize: '22px',
            fontWeight: 400,
            borderRadius: 20,
            padding: '25px 10px',
            color: t.colors.gray[0],
            backgroundColor: t.colors.green[6],
            textAlign: 'center',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          },
          '& .c-tooltip': {
            zIndex: 2,
            width: 80,
            height: 80,
            top: '22.5px',
            right: -22.5,
            color: '#fff',
            position: 'absolute',
            transform: 'rotate(180deg)',
            filter: 'drop-shadow(0px 7px 44px rgba(104, 48, 48, 0.1))',
          },
        },
      }}
    >
      <Box className="menu-content">
        <CustomSmoothTooltipIllustration className="c-tooltip" />
        <Box className="menu-inner">
          <Box className="top-section">
            <Text className="section-title">Özellik Başlığı</Text>
            <TextInput className="name-input" placeholder="Ürün Tam Adı" />
          </Box>
          <Box className="bottom-section">
            <Text className="section-title">Özellik Açıklaması</Text>
            <Textarea className="description-input" placeholder="Özellik açıklamasını.." />
          </Box>
        </Box>
        <Menu.Item closeMenuOnClick>
          <Box className="menu-save-btn">
            <Text>Bilgileri Güncelle</Text>
          </Box>
        </Menu.Item>
      </Box>
    </Menu.Dropdown>
  );
}
function AddNewInfoCtgMenu() {
  const Icons = allUserIcons.map((Icon, index) => ({
    name: `Icon-${index}`,
    icon: Icon,
  }));

  const [scIcon, setScIcon] = React.useState(0);

  return (
    <Menu.Dropdown
      sx={{
        margin: 0,
        padding: 0,
        marginTop: -20,
        border: 'none',
        minWidth: 417,
        maxWidth: 417,
        height: 'auto',
        display: 'flex',
        paddingRight: 30,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        transform: 'translateX(-100%)!important',
        '& .menu-content': {
          gap: 5,
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          '& .menu-inner': {
            gap: 40,
            padding: 30,
            display: 'flex',
            borderRadius: 20,
            alignItems: 'stretch',
            flexDirection: 'column',
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            '& .menu-title': {
              opacity: 0.5,
              lineHeight: 1,
              fontWeight: 500,
              fontSize: '15px',
              color: t.colors.gray[6],
            },
            '& .menu-header': {
              gap: 15,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .ctg-name input': {
                padding: 20,
                lineHeight: 1,
                height: 'auto',
                border: 'none',
                fontWeight: 400,
                fontSize: '15px',
                borderRadius: 10,
                color: t.colors.gray[9],
                backgroundColor: t.colors.gray[1],
                '&::placeholder': {
                  opacity: 0.5,
                  color: t.colors.gray[9],
                },
              },
            },
            '& .icon-area': {
              gap: 25,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .icon-name': {
                margin: 0,
                height: 'auto',
                border: 'none',
                fontWeight: 500,
                borderRadius: 0,
                fontSize: '31px',
                color: t.colors.gray[9],
                padding: '0px 0px 18px 0px',
                borderBottom: `1px solid ${t.colors.gray[3]}`,
              },
              '& .icons': {
                gap: 25,
                marginTop: 20,
                maxHeight: 294,
                display: 'flex',
                borderRadius: 10,
                flexWrap: 'wrap',
                overflowY: 'auto',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                '& .icon-btn': {
                  padding: 10,
                  height: 'auto',
                  border: 'none',
                  borderRadius: 10,
                  backgroundColor: 'transparent',
                  transition: 'all 0.2s ease-in-out',
                  "&[data-selected-icon='true']": {
                    backgroundColor: t.colors.gray[3],
                  },
                  "&[data-selected-icon='false']:hover": {
                    backgroundColor: t.colors.gray[2],
                  },
                  '& svg': {
                    width: 24,
                    height: 24,
                    color: t.colors.gray[9],
                  },
                },
              },
            },
          },
          '& .menu-save-btn': {
            border: 'none',
            width: '100%',
            height: 'auto',
            fontSize: '22px',
            fontWeight: 400,
            borderRadius: 20,
            padding: '25px 10px',
            color: t.colors.gray[0],
            backgroundColor: t.colors.green[6],
            textAlign: 'center',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          },
          '& .c-tooltip': {
            zIndex: 2,
            width: 80,
            height: 80,
            top: '25px',
            right: -22.5,
            color: '#fff',
            position: 'absolute',
            transform: 'rotate(180deg)',
            filter: 'drop-shadow(0px 7px 44px rgba(104, 48, 48, 0.1))',
          },
        },
      }}
    >
      <Box className="menu-content">
        <CustomSmoothTooltipIllustration className="c-tooltip" />
        <Box className="menu-inner">
          <Box className="menu-header">
            <Text className="menu-title">İsim Belirleyin</Text>
            <TextInput className="ctg-name" placeholder="Kategori İsmi (Maks 2 Kelime)" />
          </Box>
          <Box className="icon-area">
            <Text className="menu-title">İcon Belirleyin</Text>
            <Text className="icon-name">{Icons[scIcon] && Icons[scIcon].name}</Text>
            <Box className="icons">
              {Icons.map(({ icon: Icon }, index) => (
                <Button
                  className="icon-btn"
                  key={`icon-selector-${index}`}
                  onClick={() => setScIcon(index)}
                  data-selected-icon={scIcon === index}
                >
                  <Icon />
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
        <Menu.Item closeMenuOnClick>
          <Button variant="default" className="menu-save-btn">
            <Text>Kaydet</Text>
          </Button>
        </Menu.Item>
      </Box>
    </Menu.Dropdown>
  );
}

function AddNewSupplierMenu() {
  const [suppliedItemsMenu, setSuppliedItemsMenu] = React.useState<boolean>(false);
  return (
    <Menu.Dropdown
      sx={{
        margin: 0,
        padding: 0,
        marginTop: -55,
        border: 'none',
        minWidth: 417,
        maxWidth: 417,
        height: 'auto',
        display: 'flex',
        paddingRight: 30,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        '& .menu-content': {
          gap: 5,
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          '& .menu-inner': {
            gap: 20,
            padding: 30,
            display: 'flex',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'stretch',
            flexDirection: 'column',
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            '& .supplied-items-menu': {
              gap: 30,
              top: 0,
              left: 0,
              zIndex: 2,
              padding: 30,
              width: '100%',
              height: '100%',
              display: 'flex',
              borderRadius: 20,
              position: 'absolute',
              alignItems: 'stretch',
              flexDirection: 'column',
              backgroundColor: '#fff',
              justifyContent: 'flex-start',
              '& .menu-header': {
                gap: 15,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                '& .back-button': {
                  padding: 5,
                  border: 'none',
                  height: 'auto',
                  borderRadius: 100,
                  color: t.colors.gray[9],
                  backgroundColor: `${t.colors.gray[2]}!important`,
                  '& svg': {
                    width: 24,
                    height: 24,
                    transform: 'rotate(180deg)',
                  },
                },
                '& .section-title': {
                  fontWeight: 500,
                  fontSize: '15px',
                  color: t.colors.gray[6],
                },
              },
              '& .selected-products': {
                gap: 10,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                '& .s-product-item': {
                  gap: 8,
                  display: 'flex',
                  fontWeight: 400,
                  fontSize: '15px',
                  borderRadius: 100,
                  padding: '10px 13px',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  color: t.colors.blue[7],
                  backgroundColor: t.colors.blue[0],
                  '& .mantine-Button-root': {
                    padding: 0,
                    height: 'auto',
                    border: 'none',
                    color: t.colors.blue[5],
                    backgroundColor: 'transparent!important',
                    '& svg': {
                      width: 14,
                      height: 14,
                    },
                  },
                },
              },
              '& .checkboxes-area': {
                gap: 10,
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '& .search-input input': {
                  padding: 20,
                  border: 'none',
                  height: 'auto',
                  lineHeight: 1,
                  fontSize: '15px',
                  fontWeight: 500,
                  borderRadius: 10,
                  color: 'rgba(0,0,0,0.5)',
                  backgroundColor: t.colors.gray[1],
                },
                '& .checkboxes-container': {
                  gap: 10,
                  display: 'flex',
                  maxHeight: 500,
                  overflowY: 'auto',
                  borderRadius: 10,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  '& .checkbox-item': {
                    width: '100%',
                    lineHeight: 1,
                    fontWeight: 400,
                    fontSize: '15px',
                    backgroundColor: 'transparent',
                    "& input[type='checkbox']:checked": {
                      borderColor: '#000',
                      backgroundColor: '#000',
                    },
                    '& .mantine-Checkbox-inner': {
                      padding: 10,
                      paddingLeft: 0,
                      '& svg': {
                        marginTop: 15.5,
                      },
                    },
                    '& .mantine-Checkbox-labelWrapper': {
                      width: '100%',
                      '& .mantine-Checkbox-label': {
                        padding: 10,
                      },
                    },
                  },
                },
              },
            },
            '& .section-title': {
              opacity: 0.5,
              lineHeight: 1,
              fontWeight: 500,
              fontSize: '15px',
              color: t.colors.gray[6],
            },
            '& .logo-dropzone': {
              padding: 20,
              minHeight: 120,
              border: 'none',
              display: 'flex',
              borderRadius: 20,
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: t.colors.gray[1],
              '& .mantine-Dropzone-inner': {
                gap: 10,
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                '& svg': {
                  width: 60,
                  height: 60,
                },
                '& .drop-text': {
                  lineHeight: 1.2,
                  fontWeight: 400,
                  fontSize: '22px',
                  textAlign: 'left',
                  whiteSpace: 'pre-wrap',
                },
              },
            },
            '& .menu-header': {
              gap: 25,
              display: 'flex',
              paddingTop: 10,
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .supplier-name input': {
                padding: 0,
                height: 'auto',
                border: 'none',
                lineHeight: 1,
                fontWeight: 400,
                fontSize: '22px',
                paddingBottom: 18,
                borderBottom: `1px solid ${t.colors.gray[3]}`,
              },
            },
            '& .input-section': {
              gap: 15,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .section-header': {
                gap: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '& .section-button': {
                  padding: 0,
                  opacity: 0.5,
                  height: 'auto',
                  border: 'none',
                  borderRadius: 0,
                  color: t.colors.gray[9],
                  textDecoration: 'underline',
                  backgroundColor: 'transparent!important',
                },
              },
              '& .section-input input': {
                padding: 20,
                border: 'none',
                height: 'auto',
                lineHeight: 1,
                fontSize: '15px',
                fontWeight: 500,
                borderRadius: 10,
                color: 'rgba(0,0,0,0.5)',
                backgroundColor: t.colors.gray[1],
              },
              '& .view-change-btn': {
                padding: 20,
                border: 'none',
                height: 'auto',
                color: '#000',
                borderRadius: 10,
                backgroundColor: t.colors.gray[1],
                transition: 'all 0.2s ease-in-out',
                '> div > span': {
                  gap: 5,
                  width: '100%',
                  lineHeight: 1,
                  display: 'flex',
                  fontWeight: 500,
                  fontSize: '15px',
                  alignItems: 'center',
                  color: 'rgba(0,0,0,0.5)',
                  justifyContent: 'space-between',
                  '& svg': {
                    width: 24,
                    height: 24,
                  },
                },
                '&:hover': {
                  backgroundColor: t.colors.gray[3],
                },
              },
            },
          },
          '& .menu-save-btn': {
            border: 'none',
            width: '100%',
            height: 'auto',
            fontSize: '22px',
            fontWeight: 400,
            borderRadius: 20,
            padding: '25px 10px',
            color: t.colors.gray[0],
            backgroundColor: t.colors.green[6],
            textAlign: 'center',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          },
          '& .c-tooltip': {
            zIndex: 2,
            width: 80,
            height: 80,
            top: '25px',
            right: -22.5,
            color: '#fff',
            position: 'absolute',
            transform: 'rotate(180deg)',
            filter: 'drop-shadow(0px 7px 44px rgba(104, 48, 48, 0.1))',
          },
        },
      }}
    >
      <Box className="menu-content">
        <CustomSmoothTooltipIllustration className="c-tooltip" />
        <Box className="menu-inner">
          <Dropzone className="logo-dropzone" onDrop={() => null}>
            <ImageLightIcon />
            <Text className="drop-text">{'Logo\nEkle'}</Text>
          </Dropzone>
          <Box className="menu-header">
            <Text className="section-title">Tedarikçi Adı</Text>
            <TextInput className="supplier-name" placeholder="Tedarikçi Adı" />
          </Box>
          <Box className="input-section">
            <Box className="section-header">
              <Text className="section-title">Tedarikçi Yetkilisi</Text>
            </Box>
            <TextInput className="section-input" defaultValue="Ömer Reis El-Murtaza" />
          </Box>
          <Box className="input-section">
            <Box className="section-header">
              <Text className="section-title">Tedarikçi Telefon</Text>
            </Box>
            <TextInput className="section-input" defaultValue="0850 123 45 67" />
          </Box>
          <Box className="input-section">
            <Box className="section-header">
              <Text className="section-title">Tedarikçi Web Sitesi</Text>
            </Box>
            <TextInput className="section-input" defaultValue="www.omereiselmurtaza.com" />
          </Box>
          <Box className="input-section">
            <Box className="section-header">
              <Text className="section-title">Google Maps Url</Text>
              <Button variant="default" className="section-button">
                Url Al
              </Button>
            </Box>
            <TextInput
              className="section-input"
              defaultValue="https://www.google.com/maps/place/Ayasofya+Camii..."
            />
          </Box>
          <Box className="input-section">
            <Box className="section-header">
              <Text className="section-title">Tedarik Edilen Ürünleri Belirle</Text>
            </Box>
            <Button onClick={() => setSuppliedItemsMenu(true)} className="view-change-btn">
              <Text>Tedarik Edilen Ürünler</Text>
              <CustomChevronRight />
            </Button>
          </Box>
          <AnimatePresence mode="popLayout">
            {suppliedItemsMenu && (
              <Box
                component={motion.div}
                exit={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                className="supplied-items-menu"
                initial={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.7, ease: 'anticipate' }}
              >
                <Box className="menu-header">
                  <Button
                    variant="default"
                    className="back-button"
                    onClick={() => setSuppliedItemsMenu(false)}
                  >
                    <CustomChevronRight />
                  </Button>
                  <Text className="menu-title">Tedarik Edilen Ürünleri Belirle</Text>
                </Box>
                <Box className="selected-products">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Box key={`selected-product-${index}`} className="s-product-item">
                      <Text>Metal</Text>
                      <Button variant="default">
                        <CustomXICon />
                      </Button>
                    </Box>
                  ))}
                </Box>
                <Box className="checkboxes-area">
                  <TextInput className="search-input" placeholder="Ara..." />
                  <Box className="checkboxes-container">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <Checkbox
                        labelPosition="left"
                        className="checkbox-item"
                        key={`checkbox-${index}`}
                        label="Deneme"
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </AnimatePresence>
        </Box>
        <Menu.Item closeMenuOnClick={!suppliedItemsMenu}>
          <Button
            variant="default"
            onClick={suppliedItemsMenu ? () => setSuppliedItemsMenu(false) : () => null}
            className="menu-save-btn"
          >
            <Text>{suppliedItemsMenu ? 'Tedarik Öğelerini Kaydet' : 'Kaydet'}</Text>
          </Button>
        </Menu.Item>
      </Box>
    </Menu.Dropdown>
  );
}

export function ProductInfoTable({ border = true }: { border?: boolean }) {
  const MockValues = [
    {
      definition: 'Ürün Tam Adı',
      value: 'Adidas AX2S Terrex Erkek Outdoor Ayakkabı',
    },
    {
      definition: 'Seri Numarası',
      value: 'C02',
    },
  ];

  const RowButtonsSx: Sx = {
    border: 'none',
    height: 'auto',
    borderRadius: 7,
    padding: '5px',
    backgroundColor: `transparent`,
    transition: 'all 150ms ease-in-out',
    ':hover': {
      backgroundColor: t.colors.gray[3],
    },
  };

  const Rows = MockValues.map((item, index) => (
    <tr key={index}>
      <td>{item.definition}</td>
      <td>{item.value}</td>
      <td>
        <Menu position="left-start">
          <Menu.Target>
            <Button sx={RowButtonsSx} variant="default">
              <EditIcon width={15} height={15} />
            </Button>
          </Menu.Target>
          <EditMenu />
        </Menu>
        <Button sx={RowButtonsSx} variant="default">
          <CopyIcon width={15} height={15} />
        </Button>
        <Menu position="bottom">
          <Menu.Target>
            <Button sx={RowButtonsSx} variant="default">
              <TrashIcon width={15} height={15} />
            </Button>
          </Menu.Target>
          <DeleteMenu />
        </Menu>
      </td>
    </tr>
  ));

  return (
    <Box
      {...motionProps}
      sx={{
        width: '100%',
        borderRadius: 30,
        padding: border ? 30 : 0,
        border: border ? '1px solid #DFDEE1' : 'none',
      }}
    >
      <Table
        sx={{
          width: '100%!important',
          margin: 0,
          padding: 0,
          '> th': {
            fontWeight: 700,
            fontsize: '12px',
            lineHeight: '14.4px',
            color: t.colors.gray[9],
            padding: '0px!important',
            paddingBottom: '10px!important',
          },
          '> tbody > tr': {
            position: 'relative',
            transition: 'all 150ms ease-in-out',
            '> td': {
              position: 'relative',
              width: 'fit-content',
              maxWidth: '200px',
              fontsize: '12px',
              lineHeight: '14.4px',
              color: t.colors.gray[5],
              padding: '10px 0px!important',
              transition: 'all 150ms ease-in-out',
              ':nth-of-type(1)': {
                width: 'fit-content',
                maxWidth: 200,
              },
              ':nth-of-type(2)': {
                maxWidth: 150,
                color: t.colors.gray[9],
              },
              ':nth-of-type(3)': {
                gap: 3,
                width: '100%',
                display: 'flex',
                justifyContent: 'end',
              },
              '> button': {
                color: t.colors.gray[5],
              },
            },
            ':hover': {
              '> td': {
                color: t.colors.gray[9],
                button: {
                  color: t.colors.gray[9],
                },
              },
            },
          },
        }}
      >
        <thead>
          <tr>
            <th>Özellik Tanımı</th>
            <th>Özelliği</th>
            <th
              style={{
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <Menu position="left-start">
                <Menu.Target>
                  <Button
                    variant="default"
                    sx={{
                      border: 'none',
                      height: 'auto',
                      borderRadius: 100,
                      padding: '5px 10px',
                      color: t.colors.gray[0],
                      backgroundColor: `${t.colors.gray[8]}!important`,
                    }}
                  >
                    <CustomPlusIcon width={15} height={15} />
                  </Button>
                </Menu.Target>
                <NewSpecMenu />
              </Menu>
            </th>
          </tr>
        </thead>
        <tbody>{Rows}</tbody>
      </Table>
    </Box>
  );
}

function ProductPlaceholderBox({ text }: { text: string }) {
  return (
    <Box
      {...motionProps}
      sx={{
        padding: 30,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          borderRadius: 30,
          fontSize: '12px',
          padding: '10px 20px',
          color: t.colors.gray[8],
          backgroundColor: t.colors.gray[3],
        }}
      >
        {text}
      </Text>
    </Box>
  );
}

function InfoSpecButton({
  Icon,
  text,
  spec,
  onClick,
}: {
  Icon: React.FC<any>;
  text: string;
  spec: { text: string };
  onClick?: () => void;
}) {
  return (
    <Button
      variant="default"
      component="button"
      onClick={onClick}
      sx={{
        padding: 0,
        height: '100%',
        fontWeight: 400,
        fontSize: '12px',
        cursor: 'pointer',
        borderRadius: 100,
        lineHeight: '14.4px',
        border: `1px solid ${t.colors.blue[0]}`,
        transition: 'all 150ms ease-in-out',
        color: spec.text === text ? t.colors.blue[7] : t.colors.blue[3],
        backgroundColor: `${spec.text === text ? t.colors.blue[0] : 'transparent'}!important`,
        '> div > span': {
          gap: 11,
          padding: 10,
          maxWidth: 78,
          display: 'flex',
          paddingBottom: 20,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          '& svg': {
            width: 24,
            height: 24,
            transition: 'all 150ms ease-in-out',
            color: spec.text === text ? t.colors.blue[7] : t.colors.blue[3],
          },
        },
      }}
    >
      <Box
        sx={{
          width: 62,
          height: 62,
          maxWidth: 62,
          maxHeight: 62,
          display: 'flex',
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 150ms ease-in-out',
          backgroundColor: spec.text === text ? t.colors.blue[1] : 'transparent',
        }}
      >
        <Icon />
      </Box>
      <Text sx={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>{text}</Text>
    </Button>
  );
}

export function InfoSpecBox({ noTableBorder = false }: { noTableBorder?: boolean }) {
  const localSpecs = [
    {
      icon: BarcodeIcon,
      text: 'Öğe\nKimliği',
      component: () => <ProductInfoTable border={!noTableBorder} />,
    },
    {
      icon: Category2Icon,
      text: 'Öğe\nÖzellikleri',
      component: () => <ProductPlaceholderBox text="Özellikler henüz eklenmedi" />,
    },
    {
      icon: Canlde2Icon,
      text: 'Öğe\nSeçeneği',
      component: () => <ProductPlaceholderBox text="Seçenekler henüz eklenmedi" />,
    },
  ];
  const [spec, setSpec] = React.useState(localSpecs[0]);

  const LocalSpecComp = spec.component;

  return (
    <Box
      {...motionProps}
      sx={{
        gap: 10,
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          gap: 10,
          width: '100%',
          display: 'flex',
          maxWidth: '100%',
          minWidth: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component="ul"
          sx={{
            gap: 10,
            margin: 0,
            padding: 0,
            width: 'auto',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            alignItems: 'start',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          {localSpecs.map(({ icon: Icon, text }, index) => (
            <InfoSpecButton
              Icon={Icon}
              text={text}
              spec={spec}
              key={`local-spec-${index}`}
              onClick={() => setSpec(localSpecs[index])}
            />
          ))}
        </Box>
        <Box
          sx={{
            height: '100%',
            position: 'relative',
          }}
        >
          <Menu position="left">
            <Menu.Target>
              <InfoSpecButton Icon={CustomPlusIcon} text={'Yeni\nEkle'} spec={spec} />
            </Menu.Target>
            <AddNewInfoCtgMenu />
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <LocalSpecComp />
      </Box>
    </Box>
  );
}

function SupplierSpecBox() {
  const [view, setView] = React.useState<'suppliers' | 'manufacturers'>('suppliers');
  const [suppliers, setSuppliers] = React.useState(
    MockSupplierData.map((item) => ({
      ...item,
      persons: item.persons.map((person, i) => ({
        ...person,
        isActive: i === 0,
      })),
      isActive: false,
    })),
  );

  const HandleSupplierCollapse = (isActive: boolean, index: number) => {
    const newSuppliers = suppliers;
    newSuppliers[index].isActive = !isActive;
    setSuppliers([...newSuppliers]);
  };

  const HandleSupplierPersonSelect = (supplierIndex: number, personIndex: number) => {
    const supplier = suppliers[supplierIndex];
    const newPersons = supplier.persons.map((person, i) => ({
      ...person,
      isActive: i === personIndex,
    }));

    const newSuppliers = suppliers.map((item, i) => ({
      ...item,
      persons: i === supplierIndex ? newPersons : item.persons,
    }));

    setSuppliers([...newSuppliers]);
  };

  const getSupplierUrlWithoutProtocol = (url: string) => {
    const urlWithoutProtocol = url.replace(/(^\w+:|^)\/\//, '');
    return urlWithoutProtocol;
  };

  return (
    <Box
      {...motionProps}
      sx={{
        gap: 0,
        padding: 10,
        display: 'flex',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: `1px solid ${t.colors.gray[3]}`,
      }}
    >
      <Box
        sx={{
          gap: 5,
          padding: 30,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            gap: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Button
            variant="default"
            onClick={() => setView('suppliers')}
            sx={{
              margin: 0,
              padding: 0,
              border: 'none',
              height: 'auto',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '21.6px',
              transition: 'all 150ms ease-in-out',
              opacity: view === 'suppliers' ? 1 : 0.5,
              backgroundColor: 'transparent!important',
              color: view === 'suppliers' ? t.colors.blue[6] : '#000',
            }}
          >
            <Text>Tedarikçi Detayları</Text>
          </Button>
          <Button
            variant="default"
            onClick={() => setView('manufacturers')}
            sx={{
              margin: 0,
              padding: 0,
              border: 'none',
              height: 'auto',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '21.6px',
              transition: 'all 150ms ease-in-out',
              opacity: view === 'manufacturers' ? 1 : 0.5,
              backgroundColor: 'transparent!important',
              color: view === 'manufacturers' ? t.colors.blue[6] : '#000',
            }}
          >
            <Text>Üretici Detayları</Text>
          </Button>
        </Box>
        <Menu position="left-start">
          <Menu.Target>
            <Button
              variant="default"
              sx={{
                color: '#fff',
                border: 'none',
                height: 'auto',
                borderRadius: 100,
                padding: '4px 10px',
                backgroundColor: '#000!important',
                '> div > span > svg': {
                  width: 15,
                  height: 15,
                },
              }}
            >
              <CustomPlusIcon />
            </Button>
          </Menu.Target>
          <AddNewSupplierMenu />
        </Menu>
      </Box>
      <Box
        {...motionProps}
        component={motion.ul}
        key={`suppliers-${view}`}
        sx={{
          gap: 0,
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'start',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {suppliers.map((supplier, i) => (
          <Box
            key={`supplier-${i}`}
            component="li"
            sx={{
              margin: 0,
              padding: 20,
              width: '100%',
              display: 'flex',
              borderRadius: 25,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 150ms ease-in-out',
              backgroundColor: supplier.isActive ? t.colors.gray[0] : 'transparent',
            }}
          >
            <Box
              sx={{
                gap: 5,
                margin: 0,
                padding: 0,
                width: '100%',
                border: 'none',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'transparent!important',
              }}
            >
              <Box
                sx={{
                  gap: 15,
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Image width={48} height={48} fit="cover" radius={70} src={supplier.avatar} />
                <Box
                  sx={{
                    gap: 8,
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      gap: 8,
                      display: 'flex',
                      width: 'fit-content',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: '15px',
                        fontWeight: 500,
                        lineHeight: '18px',
                      }}
                    >
                      {supplier.companyName}
                    </Text>
                    <Box
                      sx={{
                        gap: 8,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="default"
                        sx={{
                          margin: 0,
                          padding: 0,
                          color: '#000',
                          border: 'none',
                          height: 'auto',
                          backgroundColor: 'transparent!important',
                        }}
                      >
                        <InfoIcon width={19} height={19} />
                      </Button>
                      <Button
                        variant="default"
                        sx={{
                          margin: 0,
                          padding: 0,
                          color: '#000',
                          border: 'none',
                          height: 'auto',
                          backgroundColor: 'transparent!important',
                        }}
                      >
                        <EditIcon width={16} height={16} />
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      gap: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyItems: 'center',
                    }}
                  >
                    <Text
                      component="a"
                      href={supplier.webSite}
                      sx={{
                        gap: 4,
                        display: 'flex',
                        borderRadius: 5,
                        fontWeight: 500,
                        fontSize: '15px',
                        flexWrap: 'nowrap',
                        padding: '2px 7px',
                        lineHeight: '18px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: t.colors.yellow[6],
                        backgroundColor: t.colors.yellow[1],
                        ':hover': {
                          backgroundColor: t.colors.yellow[2],
                        },
                      }}
                    >
                      <span>{getSupplierUrlWithoutProtocol(supplier.webSite)}</span>
                      <ExternalUrlIcon width={15} height={15} />
                    </Text>
                    <Text
                      component="a"
                      href={supplier.gMaps}
                      sx={{
                        gap: 4,
                        display: 'flex',
                        borderRadius: 5,
                        fontWeight: 500,
                        fontSize: '15px',
                        flexWrap: 'nowrap',
                        padding: '2px 7px',
                        lineHeight: '18px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: t.colors.green[5],
                        backgroundColor: t.colors.green[1],
                        ':hover': {
                          backgroundColor: t.colors.green[2],
                        },
                      }}
                    >
                      <span>Haritada Aç</span>
                      <ExternalUrlIcon width={15} height={15} />
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Button
                variant="default"
                sx={{
                  margin: 0,
                  padding: 0,
                  border: 'none',
                  height: 'auto',
                  width: 'fit-content',
                  backgroundColor: 'transparent!important',
                  rotate: supplier.isActive ? '180deg' : '0deg',
                  transition: 'all 150ms ease-in-out',
                }}
                onClick={() => HandleSupplierCollapse(supplier.isActive, i)}
              >
                <CustomChevronDown width={25} height={25} color="#000" />
              </Button>
            </Box>
            <AnimatePresence>
              {supplier.isActive && (
                <Box
                  sx={{
                    width: '100%',
                    margin: '20px 0px 20px 0px',
                    borderTop: `1px solid ${t.colors.gray[3]}`,
                  }}
                  component={motion.div}
                  exit={{ opacity: 0, height: 0, margin: 0 }}
                  initial={{ opacity: 0, height: 0, margin: 0 }}
                  animate={{ opacity: 1, height: 'auto', margin: '20px 0px 20px 0px' }}
                >
                  <Box
                    mt={20}
                    sx={{
                      gap: 40,
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="ul"
                      sx={{
                        gap: 6,
                        margin: 0,
                        padding: 0,
                        width: '40%',
                        display: 'flex',
                        alignItems: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                    >
                      {supplier.persons.map((person, y) => (
                        <Box
                          component="li"
                          key={`supplier-${i}-person-${y}`}
                          sx={{
                            display: 'flex',
                            padding: '13px 15px',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            transition: 'all 150ms ease-in-out',
                            backgroundColor: person.isActive ? t.colors.blue[0] : 'transparent',
                          }}
                        >
                          <Box
                            sx={{
                              gap: 5,
                              margin: 0,
                              padding: 0,
                              display: 'flex',
                              alignItems: 'flex-start',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            <Text
                              sx={{
                                fontWeight: 600,
                                fontSize: '12px',
                                lineHeight: '14.4px',
                                color: t.colors.gray[9],
                              }}
                            >
                              {person.role}
                            </Text>
                            <Text
                              sx={{
                                opacity: 0.5,
                                fontWeight: 400,
                                fontSize: '12px',
                                lineHeight: '14.4px',
                                color: t.colors.gray[9],
                              }}
                            >
                              {person.fullName}
                            </Text>
                          </Box>
                          <Button
                            variant="default"
                            sx={{
                              margin: 0,
                              padding: 3,
                              borderRadius: 5,
                              border: 'none',
                              width: 'auto',
                              height: 'auto',
                              backgroundColor: 'transparent',
                              transition: 'all 150ms ease-in-out',
                              ':hover': {
                                backgroundColor: t.colors.gray[3],
                              },
                            }}
                            onClick={() => HandleSupplierPersonSelect(i, y)}
                          >
                            <EditIcon width={22} height={22} />
                          </Button>
                        </Box>
                      ))}
                      <Button
                        variant="default"
                        sx={{
                          opacity: 0.5,
                          width: '100%',
                          color: '#000',
                          height: 'auto',
                          border: 'none',
                          display: 'flex',
                          fontWeight: 400,
                          fontSize: '15px',
                          lineHeight: '18px',
                          flexDirection: 'row',
                          padding: '13px 15px',
                          transition: 'all 150ms ease-in-out',
                          backgroundColor: 'transparent!important',
                          borderTop: `1px solid ${t.colors.gray[3]}`,
                          ':hover': {
                            opacity: 1,
                          },
                        }}
                      >
                        <CustomPlusIcon width={37} height={37} />
                        <Text
                          ml={6}
                          sx={{
                            whiteSpace: 'pre-wrap',
                          }}
                        >
                          {'Yeni Kişi\nKaydı Ekle'}
                        </Text>
                      </Button>
                    </Box>

                    {(() => {
                      const person = supplier.persons.find((p) => p.isActive);
                      if (!person) return null;

                      return (
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          sx={{
                            gap: 15,
                            width: '60%',
                            display: 'flex',
                            alignItems: 'stretch',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <Box
                            sx={{
                              gap: 5,
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Text
                              sx={{
                                color: '#000',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '21.6px',
                              }}
                            >
                              E-Mail
                            </Text>
                            <Button
                              variant="default"
                              sx={{
                                color: '#000',
                                border: 'none',
                                height: 'auto',
                                borderRadius: 100,
                                padding: '5px 15px',
                                backgroundColor: '#fff!important',
                              }}
                            >
                              <CustomPlusIcon width={18} height={18} />
                            </Button>
                          </Box>
                          <Box
                            component="ul"
                            sx={{
                              gap: 7,
                              margin: 0,
                              padding: 0,
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            {person.emailAddresses.map((email, z) => (
                              <Box
                                component="li"
                                key={`supplier-${i}-person-${person.id}-email-${z}`}
                                sx={{
                                  margin: 0,
                                  display: 'flex',
                                  fontWeight: 400,
                                  borderRadius: 45,
                                  fontSize: '15px',
                                  lineHeight: '18px',
                                  padding: '5px 16px',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  border: `1px solid ${t.colors.gray[3]}`,
                                }}
                              >
                                <TextInput
                                  value={email}
                                  id={`supplier-${i}-person-${person.id}-email-${z}`}
                                  styles={{
                                    input: {
                                      margin: 0,
                                      padding: 0,
                                      border: 'none',
                                      backgroundColor: 'transparent',
                                    },
                                  }}
                                />
                                <Box
                                  sx={{
                                    gap: 9,
                                    display: 'flex',
                                    width: 'fit-content',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const Input = document.querySelector(
                                        `#supplier-${i}-person-${person.id}-email-${z}`,
                                      ) as HTMLInputElement;

                                      if (Input) {
                                        Input.focus();
                                      }
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <EditIcon width={15} height={15} />
                                  </Button>
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const value = email;
                                      navigator.clipboard.writeText(value);
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <CopyIcon width={15} height={15} />
                                  </Button>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                          <Box
                            sx={{
                              gap: 5,
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Text
                              sx={{
                                color: '#000',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '21.6px',
                              }}
                            >
                              Telefon
                            </Text>
                            <Button
                              variant="default"
                              sx={{
                                color: '#000',
                                border: 'none',
                                height: 'auto',
                                padding: '5px 15px',
                                borderRadius: 100,
                                backgroundColor: '#fff!important',
                              }}
                            >
                              <CustomPlusIcon width={18} height={18} />
                            </Button>
                          </Box>
                          <Box
                            component="ul"
                            sx={{
                              gap: 7,
                              margin: 0,
                              padding: 0,
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            {person.phoneNumbers.map((phoneNumber, z) => (
                              <Box
                                component="li"
                                key={`supplier-${i}-person-${person.id}-email-${z}`}
                                sx={{
                                  margin: 0,
                                  display: 'flex',
                                  fontWeight: 400,
                                  borderRadius: 45,
                                  fontSize: '15px',
                                  lineHeight: '18px',
                                  padding: '5px 16px',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  border: `1px solid ${t.colors.gray[3]}`,
                                }}
                              >
                                <TextInput
                                  value={phoneNumber}
                                  id={`supplier-${i}-person-${person.id}-phone-${z}`}
                                  styles={{
                                    input: {
                                      margin: 0,
                                      padding: 0,
                                      border: 'none',
                                      backgroundColor: 'transparent',
                                    },
                                  }}
                                />
                                <Box
                                  sx={{
                                    gap: 9,
                                    display: 'flex',
                                    width: 'fit-content',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const Input = document.querySelector(
                                        `#supplier-${i}-person-${person.id}-phone-${z}`,
                                      ) as HTMLInputElement;

                                      if (Input) {
                                        Input.focus();
                                      }
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <EditIcon width={15} height={15} />
                                  </Button>
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const value = phoneNumber;
                                      navigator.clipboard.writeText(value);
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <CopyIcon width={15} height={15} />
                                  </Button>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      );
                    })()}
                  </Box>
                </Box>
              )}
            </AnimatePresence>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function ProgressSpecBox({
  borderNpadding = true,
  data = MockProgressData.slice().reverse(),
}: {
  borderNpadding?: boolean;
  data?: TProgressData[];
}) {
  const [progressDatas] = React.useState<TProgressData[]>(data);

  function ProgressCompByType({ progressData }: { progressData: TProgressData }) {
    const { type, date } = progressData;

    if (type === 'create-item') {
      return (
        <Box
          component="li"
          sx={{
            gap: 5,
            margin: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            padding: borderNpadding ? '30px 30px 30px 50px' : '30px 0px 30px 0px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              gap: 10,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              src={progressData.user.avatar}
              width={48}
              height={48}
              radius={48}
              fit="contain"
            />
            <Box
              sx={{
                gap: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Text
                sx={{
                  color: '#000',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '18px',
                }}
              >
                <strong>{progressData.user.name}</strong> Öğeyi ekledi.
              </Text>
              <Text
                sx={{
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '14.4px',
                  color: t.colors.gray[5],
                }}
              >
                {getRenderedDate(date)}
              </Text>
            </Box>
          </Box>
          <CustomCheckIcon
            style={{
              color: '#000',
            }}
            width={23}
            height={23}
          />
        </Box>
      );
    }

    if (type === 'add-document') {
      return (
        <Box
          component="li"
          sx={{
            gap: 10,
            margin: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: borderNpadding ? '30px 30px 30px 50px' : '30px 0px 30px 0px',
          }}
        >
          <Box
            sx={{
              gap: 5,
              margin: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                gap: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Image
                src={progressData.user.avatar}
                width={48}
                height={48}
                radius={48}
                fit="contain"
              />
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <Text
                  sx={{
                    color: '#000',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '18px',
                  }}
                >
                  <strong>{progressData.user.name}</strong> Dökümanlara{' '}
                  <strong>{progressData.files.length} Yeni</strong> Dosya ekledi.
                </Text>
                <Text
                  sx={{
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '14.4px',
                    color: t.colors.gray[5],
                  }}
                >
                  {getRenderedDate(date)}
                </Text>
              </Box>
            </Box>
            <CustomCheckIcon
              style={{
                color: '#000',
              }}
              width={23}
              height={23}
            />
          </Box>
          <Box
            component="ul"
            sx={{
              gap: 10,
              margin: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px 10px 0px 60px',
              justifyContent: 'flex-start',
            }}
          >
            {progressData.files.map((file, y) => (
              <Box
                component="li"
                key={`progress-${progressData.id}-file-${y}`}
                sx={{
                  gap: 10,
                  margin: 0,
                  width: '100%',
                  display: 'flex',
                  borderRadius: 10,
                  padding: '15px',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: t.colors.gray[2],
                }}
              >
                <Box
                  sx={{
                    gap: 10,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Image
                    src={FileTypeImages[file.type]}
                    width={50}
                    height={50}
                    mb={-8}
                    fit="contain"
                  />
                  <Box
                    sx={{
                      gap: 5,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      sx={{
                        color: '#000',
                        fontWeight: 600,
                        fontSize: '15px',
                        lineHeight: '18px',
                      }}
                    >
                      {file.name.length > 20 ? `${file.name.substring(0, 20)}...` : file.name}
                    </Text>
                    <Box
                      sx={{
                        gap: 10,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Text
                        sx={{
                          fontWeight: 600,
                          fontSize: '12px',
                          lineHeight: '14.4px',
                          color: t.colors.gray[5],
                        }}
                      >
                        {file.size / 1000000} MB
                      </Text>
                      <Box w={5} h={5} bg={t.colors.gray[3]} sx={{ borderRadius: 5 }} />
                      <Text
                        sx={{
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '14.4px',
                          color: t.colors.gray[5],
                        }}
                      >
                        {getRenderedDate(file.date)}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Button
                  variant="default"
                  sx={{
                    gap: 10,
                    margin: 0,
                    borderRadius: 100,
                    padding: '9px 18px',
                    color: t.colors.gray[8],
                    border: `1px solid ${t.colors.gray[5]}`,
                    backgroundColor: 'transparent!important',
                  }}
                >
                  <DownloadCloudIcon width={16} height={16} />
                  <Text ml={10}>İndir</Text>
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      );
    }

    if (type === 'change-item-status') {
      return (
        <Box
          component="li"
          sx={{
            gap: 10,
            margin: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: borderNpadding ? '30px 30px 30px 50px' : '30px 0px 30px 0px',
          }}
        >
          <Box
            sx={{
              gap: 5,
              margin: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                gap: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Image
                src={progressData.user.avatar}
                width={48}
                height={48}
                radius={48}
                fit="contain"
              />
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <Text
                  sx={{
                    color: '#000',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '18px',
                  }}
                >
                  <strong>{progressData.user.name}</strong> Öğe Statüsü{' '}
                  <Text
                    span
                    sx={{
                      color: t.colors.green[6],
                      fontWeight: 600,
                    }}
                  >
                    {MockStatuses.find(({ slug }) => slug === progressData.event.to)?.name}
                  </Text>{' '}
                  Yaptı
                </Text>
                <Text
                  sx={{
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '14.4px',
                    color: t.colors.gray[5],
                  }}
                >
                  {getRenderedDate(date)}
                </Text>
              </Box>
            </Box>
            <CustomCheckIcon
              style={{
                color: '#000',
              }}
              width={23}
              height={23}
            />
          </Box>
          <Box
            component="ul"
            sx={{
              gap: 10,
              margin: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px 10px 0px 60px',
              justifyContent: 'flex-start',
            }}
          >
            <Box
              component="li"
              sx={{
                gap: 10,
                margin: 0,
                padding: 15,
                width: '100%',
                display: 'flex',
                borderRadius: 10,
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backgroundColor: t.colors.gray[2],
              }}
            >
              <Text
                sx={{
                  color: '#000',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '18px',
                }}
              >
                Öğe Statüsü{' '}
                <strong>
                  {MockStatuses.find(({ slug }) => slug === progressData.event.from)?.name}&apos;dan{' '}
                  {MockStatuses.find(({ slug }) => slug === progressData.event.to)?.name}&apos;ye{' '}
                </strong>
                Çevirdi.
              </Text>
              <Box
                sx={{
                  gap: 20,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    gap: 10,
                    display: 'flex',
                    fontWeight: 500,
                    fontSize: '15px',
                    borderRadius: 10,
                    padding: '10px 20px',
                    alignItems: 'center',
                    color: t.colors.red[5],
                    justifyContent: 'center',
                    backgroundColor: t.colors.red[1],
                  }}
                >
                  <span>
                    {MockStatuses.find(({ slug }) => slug === progressData.event.from)?.name}
                  </span>
                  <CustomChevronDown width={14} height={14} />
                </Box>
                <ArrowLineIcon width={70} style={{ color: t.colors.gray[4] }} />
                <Box
                  sx={{
                    gap: 10,
                    display: 'flex',
                    fontWeight: 500,
                    fontSize: '15px',
                    borderRadius: 10,
                    padding: '10px 20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: t.colors.green[5],
                    backgroundColor: t.colors.green[1],
                  }}
                >
                  <span>
                    {MockStatuses.find(({ slug }) => slug === progressData.event.to)?.name}
                  </span>
                  <CustomChevronDown width={14} height={14} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      );
    }
  }

  return (
    <Box
      {...motionProps}
      component={motion.ul}
      sx={{
        margin: 0,
        padding: 0,
        display: 'flex',
        borderRadius: 30,
        alignItems: 'start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: borderNpadding ? `1px solid ${t.colors.gray[3]}` : 'none',
        '> li:not(:last-child)': {
          borderBottom: `1px solid ${t.colors.gray[3]}`,
        },
      }}
    >
      {progressDatas.map((progress, i) => (
        <ProgressCompByType progressData={progress} key={`progress-${i}`} />
      ))}
    </Box>
  );
}

function NotesSpecBox() {
  const [notesData] = React.useState<TNote[]>(MockNotesData);

  return (
    <Box
      {...motionProps}
      sx={{
        gap: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <EditTextEditor
        sx={{
          width: '100%',
          maxWidth: '100%',
        }}
      />
      <Box
        component="ul"
        sx={{
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          borderRadius: 30,
          listStyle: 'none',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          border: `1px solid ${t.colors.gray[3]}`,
          '> li:not(:last-child)': {
            borderBottom: `1px solid ${t.colors.gray[3]}`,
          },
        }}
      >
        {notesData.map((note, i) => (
          <Box
            component="li"
            key={`note-${i}`}
            sx={{
              gap: 10,
              margin: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: '30px 30px 30px 50px',
            }}
          >
            <Box
              sx={{
                gap: 10,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  gap: 10,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
              >
                <Image src={note.user.avatar} width={48} height={48} radius={48} fit="contain" />
                <Box
                  sx={{
                    gap: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    sx={{
                      color: '#000',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '18px',
                    }}
                  >
                    <strong>
                      {note.user.name} {note.user.surname.slice(0, 1)}.
                    </strong>
                  </Text>
                  <Text
                    sx={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '14.4px',
                      color: t.colors.gray[5],
                    }}
                  >
                    {getRenderedDate(note.date)}
                  </Text>
                </Box>
              </Box>
              <Button
                variant="default"
                sx={{
                  margin: 0,
                  padding: 5,
                  height: 'auto',
                  border: 'none',
                  borderRadius: 7,
                  color: t.colors.gray[5],
                  backgroundColor: 'transparent',
                  transition: 'all 0.15s ease',
                  ':hover': {
                    background: t.colors.gray[3],
                  },
                }}
              >
                <EditIcon width={17} height={17} />
              </Button>
            </Box>
            <Text
              sx={{
                padding: 15,
                color: '#000',
                marginLeft: 60,
                fontWeight: 400,
                fontSize: '15px',
                borderRadius: 10,
                lineHeight: '18px',
                backgroundColor: t.colors.gray[2],
              }}
            >
              {note.content}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const SpecButtons = [
  {
    icon: DocIcon,
    text: 'Bilgiler',
    component: InfoSpecBox,
  },
  {
    icon: RefreshIcon,
    text: 'Tedarikçiler',
    component: SupplierSpecBox,
  },
  {
    icon: RoutingIcon,
    text: 'İlerleyiş',
    component: ProgressSpecBox,
  },
  {
    icon: NotesIcon,
    text: 'Notlar',
    component: NotesSpecBox,
  },
];

function EditItemInfo() {
  const [spec, setSpec] = React.useState(SpecButtons[0]);

  const SpecComp = spec.component;

  return (
    <>
      <Box
        component="section"
        sx={{
          gap: 40,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <ItemMainInfo />
        <ItemStatusBar />
        <ItemFinancialInfo />
        <EditTextEditor
          sx={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
        <Box
          component="ul"
          sx={{
            margin: 0,
            padding: 0,
            marginTop: 40,
            width: '100%',
            height: 'auto',
            display: 'flex',
            listStyle: 'none',
            alignItems: 'start',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            '> li': {
              margin: 0,
              zIndex: 1,
              padding: 10,
              minWidth: 125,
              display: 'flex',
              fontWeight: 500,
              fontSize: '12px',
              overflow: 'visible',
              textAlign: 'center',
              width: 'fit-content',
              position: 'relative',
              lineHeight: '14.4px',
              alignItems: 'center',
              justifyContent: 'center',
              '> svg': {
                right: 0,
                top: '50%',
                color: '#fff',
                height: '100%',
                position: 'absolute',
                transform: 'translateY(-50%) translateX(50%)',
              },
              ':nth-of-type(1)': {
                zIndex: 4,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
              },
              ':nth-of-type(2)': {
                zIndex: 3,
              },
              ':nth-of-type(3)': {
                zIndex: 2,
              },
              ':nth-of-type(4)': {
                zIndex: 1,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
              },
            },
          }}
        >
          <Box
            component="li"
            sx={{
              color: t.colors.green[6],
              backgroundColor: t.colors.green[1],
            }}
          >
            <Text>Toplantı</Text>
            <RightIndicatorArrow />
          </Box>
          <Box
            component="li"
            sx={{
              color: t.colors.yellow[7],
              backgroundColor: t.colors.yellow[1],
            }}
          >
            <Text>Üretim Planı</Text>
            <RightIndicatorArrow />
          </Box>
          <Box
            component="li"
            sx={{
              color: t.colors.red[6],
              backgroundColor: t.colors.red[1],
            }}
          >
            <Text>Üretim</Text>
            <RightIndicatorArrow />
          </Box>
          <Box
            component="li"
            sx={{
              color: t.colors.gray[6],
              backgroundColor: t.colors.gray[2],
            }}
          >
            <Text>Satış</Text>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          gap: 30,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component="ul"
          sx={{
            gap: 0,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {SpecButtons.map(({ icon: Icon, text }, index) => (
            <Button
              component="li"
              variant="default"
              onClick={() => setSpec(SpecButtons[index])}
              key={`spec-button-${index}`}
              sx={{
                gap: 10,
                height: 'auto',
                border: 'none',
                display: 'flex',
                fontWeight: 500,
                fontSize: '15px',
                borderRadius: 100,
                lineHeight: '18px',
                padding: '9px 18px',
                width: 'fit-content',
                flexDirection: 'row',
                transition: 'all 150ms ease-in-out',
                backgroundColor: `${
                  spec.text === text ? t.colors.blue[0] : 'transparent'
                }!important`,
                color: spec.text === text ? t.colors.blue[5] : t.colors.gray[8],
                svg: {
                  width: '16px',
                  height: '16px',
                  marginRight: '10px',
                  color: t.colors.blue[5],
                },
              }}
            >
              <Icon width={16} height={16} />
              <Text>{text}</Text>
            </Button>
          ))}
        </Box>
        <SpecComp />
      </Box>
    </>
  );
}

export default EditItemInfo;
