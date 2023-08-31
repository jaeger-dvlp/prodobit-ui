import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import PodSidebar from '@/components/pod/sidebar';
import { Box, Button, Title, createStyles } from '@mantine/core';

const Tabs = [
  {
    label: 'İşlemdekiler',
    value: 'in-progress',
  },
  {
    label: 'Beklemede',
    value: 'pending',
  },
  {
    label: 'Kontrolde',
    value: 'in-check',
  },
  {
    label: 'Tamamlanan',
    value: 'completed',
  },
  {
    label: 'Durdurulan',
    value: 'stopped',
  },
  {
    label: 'İptal Edilen',
    value: 'canceled',
  },
];

const Styles = createStyles({
  controlBar: {
    gap: 35,
    display: 'flex',
    alignItems: 'end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '> .mantine-Title-root': {
      fontWeight: 300,
      fontSize: '31px',
      color: t.colors.gray[9],
    },
    '> .tabs-container': {
      gap: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'stretch',
      '> .tab': {
        opacity: 0.5,
        border: 'none',
        height: 'auto',
        fontWeight: 500,
        fontSize: '18px',
        borderRadius: 0,
        padding: '12px 2px',
        position: 'relative',
        color: t.colors.gray[9],
        backgroundColor: 'transparent!important',
        transition: 'all 0.2s ease-in-out',
        '&::after': {
          left: 0,
          bottom: 0,
          content: '""',
          width: '100%',
          height: '0px',
          position: 'absolute',
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease-in-out',
        },
        "&[data-tab-active='true']": {
          opacity: 1,
          color: t.colors.purple[6],
          '&::after': {
            height: '3px',
            backgroundColor: t.colors.purple[6],
          },
        },
      },
    },
  },
});

function PaProductionList() {
  const { classes } = Styles();
  const [activeTab, setActiveTab] = React.useState(Tabs[0]);
  return (
    <>
      <PodSidebar />
      <Box
        sx={{
          padding: 80,
          width: '100%',
          height: '100%',
          display: 'flex',
          paddingLeft: 174,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            gap: 75,
            width: '100%',
            display: 'flex',
            maxWidth: '1196px',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Box className={classes.controlBar}>
            <Title order={1}>Üretim Listesi</Title>
            <Box className="tabs-container">
              {Tabs.map((tab) => (
                <Button
                  key={tab.value}
                  className="tab"
                  variant="default"
                  onClick={() => setActiveTab(tab)}
                  data-tab-active={activeTab.value === tab.value}
                >
                  {tab.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PaProductionList;
