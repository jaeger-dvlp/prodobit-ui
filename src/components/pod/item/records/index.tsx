import 'dayjs/locale/tr';
import React from 'react';
import dayjs from 'dayjs';
import { ProdobitAppTheme as t } from '@/theme';
import {
  Box,
  Button,
  Menu,
  NumberInput,
  NumberInputHandlers,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import {
  CustomAlertTriangleIcon,
  CustomArrowDownIcon,
  CustomArrowUpIcon,
  CustomPlusIcon,
  CustomSmoothTooltipIllustration,
  EditIconItem,
  TrashIcon,
} from '@/components/icons';

dayjs.locale('tr');

type Props = {
  item: any;
};

const styles = createStyles({
  root: {
    gap: 30,
    width: '100%',
    paddingTop: 50,
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  pageHeading: {
    fontWeight: 500,
    fontSize: '31px',
    color: t.colors.gray[9],
  },
  headingGroup: {
    gap: 5,
    display: 'flex',
    paddingBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: `1px solid rgba(0, 0, 0, 0.20)`,
    '> .heading-buttons': {
      gap: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '> .mantine-Button-root': {
        height: 'auto',
        borderRadius: 10,
        padding: '10px',
        color: t.colors.gray[9],
        backgroundColor: 'transparent',
        transition: 'all 0.2s ease-in-out',
        border: `1px solid ${t.colors.gray[4]}`,
        boxShadow: '0px 24px 54px -13px rgba(177, 109, 92, 0)',
        '&[data-menu-open="true"]': {
          borderColor: '#fff',
          backgroundColor: '#fff',
          boxShadow: '0px 24px 54px -13px rgba(177, 109, 92, 0.30)',
        },
        '> div > span > svg': {
          width: 24,
          height: 24,
        },
      },
    },
  },
  recordsContainer: {
    gap: 15,
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  recordElement: {
    gap: 10,
    padding: 20,
    display: 'grid',
    overflow: 'hidden',
    borderRadius: 100,
    position: 'relative',
    placeItems: 'center',
    placeContent: 'space-between',
    gridTemplateColumns: 'repeat(12, 1fr)',
    background: 'rgba(255, 255, 255, 0.10)',
    boxShadow:
      ' 0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
    '&:before': {
      top: 0,
      left: 0,
      zIndex: -1,
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      pointerEvents: 'none',
      backdropFilter: 'blur(19px)',
    },
    '> .left-col': {
      width: '100%',
      display: 'flex',
      fontWeight: 500,
      fontSize: '22px',
      borderRadius: 100,
      textAlign: 'center',
      padding: '15px 30px',
      alignItems: 'center',
      gridColumn: 'span 3',
      justifyContent: 'center',
      color: t.colors.purple[0],
      backgroundColor: t.colors.purple[5],
    },
    '> .center-col': {
      gap: 0,
      padding: '0 20px',
      width: '100%',
      display: 'grid',
      gridColumn: 'span 5',
      placeItems: 'center',
      placeContent: 'space-between',
      gridTemplateColumns: 'repeat(2, 1fr)',
      '> .value-box': {
        gap: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        '> .v-label': {
          opacity: 0.2,
          fontWeight: 700,
          fontSize: '12px',
          color: t.colors.gray[9],
        },
        '> .v-value': {
          fontWeight: 500,
          fontSize: '15px',
          color: t.colors.gray[9],
        },
      },
    },
    '> .right-col': {
      width: '100%',
      display: 'flex',
      fontWeight: 400,
      fontSize: '15px',
      borderRadius: 42,
      gridColumn: 'span 2',
      padding: '15px 30px',
      height: 'fit-content',
      alignItems: 'center',
      justifyContent: 'center',
      color: t.colors.purple[7],
      border: `1px solid ${t.colors.purple[1]}`,
      '> .mantine-Text-root': {
        lineHeight: 1,
      },
    },
    '> .controls': {
      gap: 20,
      width: '100%',
      display: 'flex',
      gridColumn: 'span 2',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '> .mantine-Button-root': {
        padding: 2,
        height: 'auto',
        border: 'none',
        color: t.colors.gray[9],
        backgroundColor: 'transparent!important',
        '> div > span > svg': {
          width: 24,
          height: 24,
        },
      },
    },
  },
});

const MenuStyles = createStyles({
  root: {
    margin: 0,
    padding: 0,
    border: 'none',
    minWidth: 417,
    height: 'auto',
    marginLeft: 30,
    display: 'flex',
    paddingTop: 30,
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
      '& .c-tooltip': {
        top: 0,
        zIndex: 2,
        right: 0,
        width: 80,
        height: 80,
        color: '#FDFEFF',
        position: 'absolute',
        transform: 'rotate(90deg) translateX(-28%) translateY(16%)',
      },
      '> .menu-inner': {
        gap: 20,
        padding: 30,
        display: 'flex',
        borderRadius: 20,
        position: 'relative',
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#FDFEFF',
        justifyContent: 'flex-start',
        boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
        '> .menu-inner-title': {
          fontWeight: 500,
          fontSize: '15px',
          color: t.colors.gray[6],
        },
        '> .count-inp-container': {
          gap: 5,
          padding: 20,
          display: 'flex',
          borderRadius: 10,
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          '> .count-inp': {
            width: '100%',
            '& input': {
              padding: 0,
              width: '100%',
              border: 'none',
              fontWeight: 500,
              fontSize: '15px',
            },
          },
          '> .count-inp-buttons': {
            gap: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            '> .mantine-Button-root': {
              padding: 0,
              height: 'auto',
              border: 'none',
              backgroundColor: 'transparent!important',
              '> div > span > svg': {
                width: 16,
                height: 16,
              },
            },
          },
        },
        '> .old-records': {
          gap: 10,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          '> .mantine-Button-root': {
            height: 'auto',
            fontWeight: 400,
            fontSize: '15px',
            borderRadius: 100,
            padding: '10px 25px',
            color: t.colors.gray[9],
            border: '1px solid rgba(0, 0, 0, 0.20)',
            backgroundColor: 'transparent!important',
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
        backgroundColor: t.colors.purple[6],
        textAlign: 'center',
        boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
      },
    },
  },
});

function AddRecordMenu() {
  const { classes } = MenuStyles();
  const [value, setValue] = React.useState<number | ''>(0);
  const handlers = React.useRef<NumberInputHandlers>();
  return (
    <Menu.Dropdown className={classes.root}>
      <Box className="menu-content">
        <CustomSmoothTooltipIllustration className="c-tooltip" />
        <Box className="menu-inner">
          <Text className="menu-inner-title">Üretim Kaydı Oluştur</Text>
          <Box className="count-inp-container">
            <NumberInput
              min={0}
              step={1}
              hideControls
              value={value}
              decimalSeparator=","
              thousandsSeparator="."
              className="count-inp"
              handlersRef={handlers}
              placeholder="Miktar Girin"
              onChange={(val) => setValue(val)}
              formatter={(val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            />
            <Box className="count-inp-buttons">
              <Button onClick={() => handlers?.current?.increment()} variant="default">
                <CustomArrowUpIcon />
              </Button>
              <Button onClick={() => handlers?.current?.decrement()} variant="default">
                <CustomArrowDownIcon />
              </Button>
            </Box>
          </Box>
          <Box className="old-records">
            <Button onClick={() => setValue(2412)} variant="default">
              <Text>2.412</Text>
            </Button>
            <Button onClick={() => setValue(300)} variant="default">
              <Text>300</Text>
            </Button>
            <Button onClick={() => setValue(21524)} variant="default">
              <Text>21.524</Text>
            </Button>
            <Button onClick={() => setValue(249)} variant="default">
              <Text>249</Text>
            </Button>
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

function RecordElement({ record }: { record: any }) {
  const { classes } = styles();
  const getDate = (date: string) => dayjs(date).format('DD/MM/YYYY');
  return (
    <Box className={classes.recordElement}>
      <Box className="left-col">
        <Text>{record.no}</Text>
      </Box>
      <Box className="center-col">
        <Box className="value-box">
          <Text className="v-label">MİKTAR</Text>
          <Text className="v-value">{record.count}</Text>
        </Box>
        <Box className="value-box">
          <Text className="v-label">OLUŞTURMA TARİHİ</Text>
          <Text className="v-value">{getDate(record.created_at)}</Text>
        </Box>
      </Box>
      <Box className="right-col">
        <Text>{record.status}</Text>
      </Box>
      <Box className="controls">
        <Button variant="default">
          <EditIconItem />
        </Button>
        <Button variant="default">
          <TrashIcon />
        </Button>
      </Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PaProductionItemRecordsContent({ item }: Props) {
  const { classes } = styles();

  const MockRecord = {
    no: 'IE-2340',
    count: 3460,
    created_at: '2023-04-21',
    status: 'İşleniyor',
  };

  const handleMenuChange = (status: boolean, button: string) => {
    const btn = document.querySelector(button) as HTMLButtonElement;

    if (btn) btn.dataset.menuOpen = status.toString();
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.headingGroup}>
        <Title className={classes.pageHeading} order={1}>
          Üretim Kayıtları
        </Title>
        <Box className="heading-buttons">
          <Menu
            position="bottom-end"
            onOpen={() => handleMenuChange(true, '.alert-record-button')}
            onClose={() => handleMenuChange(false, '.alert-record-button')}
          >
            <Menu.Target>
              <Button data-menu-open="false" className="alert-record-button" variant="default">
                <CustomAlertTriangleIcon />
              </Button>
            </Menu.Target>
            <AddRecordMenu />
          </Menu>
          <Menu
            position="bottom-end"
            onOpen={() => handleMenuChange(true, '.add-record-button')}
            onClose={() => handleMenuChange(false, '.add-record-button')}
          >
            <Menu.Target>
              <Button data-menu-open="false" className="add-record-button" variant="default">
                <CustomPlusIcon />
              </Button>
            </Menu.Target>
            <AddRecordMenu />
          </Menu>
        </Box>
      </Box>
      <Box className={classes.recordsContainer}>
        {Array.from({ length: 20 }).map((_, i) => (
          <RecordElement key={i} record={MockRecord} />
        ))}
      </Box>
    </Box>
  );
}

export default PaProductionItemRecordsContent;
