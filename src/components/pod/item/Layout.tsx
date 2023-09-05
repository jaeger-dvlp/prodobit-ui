import React from 'react';
import { Box } from '@mantine/core';
import { PodMockProdLine } from 'mockdata';
import PodSidebar from '@/components/pod/sidebar';
import PodItemsNavbar from '@/components/pod/navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import ItemsSlider from '@/components/pod/item/ItemsSlider';
import PaProductionItemFilesContent from '@/components/pod/item/files';
import PaProductionItemNotesContent from '@/components/pod/item/notes';
import PaProductionItemRecordsContent from '@/components/pod/item/records';
import PaProductionItemMeasurementsContent from '@/components/pod/item/measurements';

const ViewsByTabs = {
  measurements: PaProductionItemMeasurementsContent,
  records: PaProductionItemRecordsContent,
  notes: PaProductionItemNotesContent,
  files: PaProductionItemFilesContent,
};

const NavbarTabs = [
  {
    name: 'Ölçümler',
    tab: 'measurements',
  },
  {
    name: 'Üretim Kayıtları',
    tab: 'records',
  },
  {
    name: 'Notlar',
    tab: 'notes',
  },
  {
    name: 'Dosyalar',
    tab: 'files',
  },
];

function TabsLayout() {
  const { id, tab } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = React.useState<any>({});

  const CurrentTab = React.useMemo(() => {
    const foundTab = NavbarTabs.find((elm) => elm.tab === tab);

    if (tab === 'all') return null;

    if (!foundTab) {
      return () => navigate('/pod/production/list');
    }

    return ViewsByTabs[tab as string];
  }, [tab, navigate]);

  React.useEffect(() => {
    (() => {
      if (id) {
        const foundItem = PodMockProdLine.find((elm) => elm.id === id);
        if (foundItem) {
          return setItem(foundItem);
        }
      }

      return navigate('/app/items');
    })();
  }, [id, navigate, setItem]);

  return (
    <Box
      sx={{
        gap: 170,
        padding: '40px 70px',
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'space-between',
      }}
    >
      <Box
        sx={{
          top: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          position: 'sticky',
          maxWidth: '47.5%',
          padding: '0px',
          '&:before': {
            top: 0,
            left: 0,
            zIndex: -1,
            display: 'block',
            content: '""',
            width: '100%',
            height: '100%',
            borderRadius: 33.5,
            position: 'absolute',
            pointerEvents: 'none',
            backdropFilter: 'blur(52px)',
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            boxShadow:
              '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
          },
        }}
      >
        <PodSidebar
          sx={{
            left: 0,
            zIndex: 50,
            top: '50%',
            overflow: 'hidden',
            position: 'absolute',
            backdropFilter: 'none!important',
            '&:before': {
              top: 0,
              left: 0,
              zIndex: -1,
              display: 'block',
              content: '""',
              width: '100%',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              backdropFilter: 'blur(52px)',
            },
            transform: 'translateY(-50%) translateX(-50%)',
          }}
        />
        <ItemsSlider item={item} />
      </Box>
      <Box
        sx={{
          top: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          maxWidth: '47.5%',
          padding: '30px 70px 0px 0px',
        }}
      >
        <PodItemsNavbar items={NavbarTabs} />
        <AnimatePresence mode="popLayout">
          <Box
            key={`${id}-${tab}`}
            component={motion.div}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: 'anticipate',
                duration: 1,
                delay: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                ease: 'anticipate',
                duration: 0.7,
                delay: 0,
              },
            }}
          >
            {CurrentTab && <CurrentTab item={item} />}
          </Box>
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default TabsLayout;
