import { motion } from 'framer-motion';
import { EditIcon } from '@/components/icons';
import { Box, Button, Divider, Text, Title } from '@mantine/core';
import AddButtons from '@/components/views/itemslist/AddButtons';
import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

export type Category = {
  name: string;
  slug: string;
};

const MockCategories = [
  {
    name: 'Üst Giyim',
    slug: 'ust-giyim',
  },
  {
    name: 'Alt Giyim',
    slug: 'alt-giyim',
  },
  {
    name: 'Ayakkabı',
    slug: 'ayakkabi',
  },
  {
    name: 'Aksesuar',
    slug: 'aksesuar',
  },
  {
    name: 'Çanta',
    slug: 'canta',
  },
  {
    name: 'Diğer',
    slug: 'diger',
  },
  {
    name: 'Üst Giyim',
    slug: 'ust-giyim',
  },
  {
    name: 'Alt Giyim',
    slug: 'alt-giyim',
  },
  {
    name: 'Ayakkabı',
    slug: 'ayakkabi',
  },
  {
    name: 'Aksesuar',
    slug: 'aksesuar',
  },
  {
    name: 'Çanta',
    slug: 'canta',
  },
  {
    name: 'Diğer',
    slug: 'diger',
  },
  {
    name: 'Üst Giyim',
    slug: 'ust-giyim',
  },
  {
    name: 'Alt Giyim',
    slug: 'alt-giyim',
  },
  {
    name: 'Ayakkabı',
    slug: 'ayakkabi',
  },
  {
    name: 'Aksesuar',
    slug: 'aksesuar',
  },
  {
    name: 'Çanta',
    slug: 'canta',
  },
  {
    name: 'Diğer',
    slug: 'diger',
  },
];

function CategoriesBar({ categories }: { categories: Category[] }) {
  const [selectedCs, setSelectedCs] = React.useState<Category[]>([]);

  return (
    <Box
      sx={{
        gap: 20,
        zIndex: 2,
        top: '100%',
        display: 'flex',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        alignItems: 'center',
        transform: 'translateY(50%)',
      }}
    >
      <Box
        sx={{
          gap: 10,
          display: 'flex',
          maxWidth: '100%',
          overflowX: 'auto',
          flexDirection: 'row',
          position: 'relative',
        }}
      >
        {categories.map((category, i) => (
          <Button
            type="button"
            variant="default"
            key={`items-c-button-${i}`}
            onClick={() => {
              if (selectedCs.includes(category)) {
                setSelectedCs(selectedCs.filter((c) => c !== category));
              } else {
                setSelectedCs((cs) => [...cs, category]);
              }
            }}
            sx={(theme) => ({
              height: 'auto',
              marginTop: 2,
              marginBottom: 2,
              fontWeight: 400,
              lineHeight: 1.2,
              fontSize: '15px',
              borderRadius: 100,
              padding: '15px 40px',
              border: 'none!important',
              transition: 'all .15s ease',
              color: selectedCs.includes(category) ? theme.colors.foundationgreen[9] : 'black',
              backgroundColor: selectedCs.includes(category)
                ? theme.colors.foundationgreen[2]
                : 'white',
              ':hover': {
                backgroundColor: selectedCs.includes(category)
                  ? theme.colors.foundationgreen[2]
                  : theme.colors.foundationgreen[2],

                color: selectedCs.includes(category)
                  ? theme.colors.foundationgreen[9]
                  : theme.colors.foundationgreen[7],
              },
            })}
          >
            <Text>{category.name}</Text>
          </Button>
        ))}
      </Box>
      <Button
        type="button"
        variant="default"
        sx={(theme) => ({
          marginTop: 2,
          height: 'auto',
          minHeight: '53px',
          marginBottom: 2,
          fontWeight: 400,
          lineHeight: 1.2,
          fontSize: '15px',
          borderRadius: 100,
          padding: '15px 40px',
          border: 'none!important',
          transition: 'all .15s ease',
          color: '#FFD973',
          backgroundColor: `${theme.colors.foundationgreen[9]}!important`,
          ':hover': {
            filter: 'brightness(1.2)',
          },
        })}
      >
        <BsPlusLg size={24} />
      </Button>
    </Box>
  );
}

function TopBar() {
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        padding: 60,
        width: '100%',
        display: 'grid',
        alignItems: 'start',
        position: 'relative',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr)',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          gap: 25,
          zIndex: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: 'fit-content',
          position: 'relative',
        }}
      >
        <Title
          order={1}
          sx={{
            color: '#000',
            fontWeight: 300,
            marginRight: 20,
            fontSize: '64px',
            position: 'relative',
          }}
        >
          Öğeler
          <Button
            sx={(theme) => ({
              top: 0,
              right: -32,
              margin: 0,
              padding: 6,
              color: 'black',
              border: 'none',
              height: 'auto',
              borderRadius: 10,
              position: 'absolute',
              backgroundColor: 'transparent',
              transition: 'all 0.1s ease-in-out',
              ':hover': {
                color: theme.colors.indigo[9],
                backgroundColor: theme.colors.indigo[1],
              },
            })}
            variant="default"
          >
            <EditIcon width={16} height={16} />
          </Button>
        </Title>
        <Divider orientation="vertical" color="foundationgrey.9" opacity={0.2} />
        <Box
          sx={{
            gap: 10,
            display: 'flex',
            width: 'fit-content',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AddButtons onItemAdd={() => null} onCategoryAdd={() => null} />
        </Box>
      </Box>
      <CategoriesBar categories={MockCategories} />
      <Box
        sx={{
          top: 0,
          right: 0,
          zIndex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'right top',
          WebkitMaskImage: 'linear-gradient(to right, transparent 50%, black 100%)',
          backgroundImage: 'url(/assets/img/items-bg.webp)',
        }}
      />
    </Box>
  );
}

function WithItemsView() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TopBar />
    </Box>
  );
}

export default WithItemsView;
