import React from 'react';
import { motion } from 'framer-motion';
import { BsPlusLg } from 'react-icons/bs';
import { EditIcon } from '@/components/icons';
import { MockItemsCategories } from 'mockdata';
import { useNavigate } from 'react-router-dom';
import { ProdobitAppTheme as t } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import ItemsToolbar from '@/components/views/itemslist/Toolbar';
import ItemsTable from '@/components/views/itemslist/ItemsTable';
import AddButtons from '@/components/views/itemslist/AddButtons';
import { Box, Button, Divider, Text, Title } from '@mantine/core';
import ItemCountDisplay from '@/components/views/items/ItemCountDisplay';
import TableWrapper, { useTable } from '@/components/context/Table.context';

export type ItemCategory = {
  id: number;
  name: string;
  slug: string;
};

export type Item = {
  id: number;
  image: string;
  name: string;
  code: string;
  category: string;
  status: string;
  count: number;
  created_at: string;
};

function CategoriesBar({ categories }: { categories: ItemCategory[] }) {
  const [selectedCs, setSelectedCs] = React.useState<ItemCategory[]>([]);

  const isFilterCategorySelected = (category: ItemCategory) => selectedCs.includes(category);

  return (
    <Box
      sx={{
        gap: 20,
        zIndex: 2,
        margin: 0,
        padding: 0,
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
        component="section"
        sx={{
          gap: 10,
          width: '100%',
          display: 'flex',
          maxWidth: '100%',
          overflowX: 'scroll',
          overflowY: 'hidden',
          flexDirection: 'row',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {categories.map((category, i) => (
          <Button
            type="button"
            variant="default"
            key={`items-c-button-${i}`}
            onClick={() => {
              if (isFilterCategorySelected(category)) {
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
              color: isFilterCategorySelected(category) ? theme.colors.green[9] : 'black',
              backgroundColor: isFilterCategorySelected(category) ? theme.colors.green[2] : 'white',
              ':hover': {
                backgroundColor: isFilterCategorySelected(category)
                  ? theme.colors.green[2]
                  : theme.colors.green[2],

                color: isFilterCategorySelected(category)
                  ? theme.colors.green[9]
                  : theme.colors.green[7],
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
          marginBottom: 2,
          fontWeight: 400,
          lineHeight: 1.2,
          fontSize: '15px',
          color: '#FFD973',
          minHeight: '53px',
          borderRadius: 100,
          padding: '15px 40px',
          border: 'none!important',
          transition: 'all .15s ease',
          backgroundColor: `${theme.colors.green[9]}!important`,
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

export type CustomFilter = {
  id: number;
  name: string;
  slug: string;
};

function CustomFiltersBar(): React.ReactNode {
  const { selectedCF, setSelectedCF, customFilters } = useTable();
  return (
    <Box
      sx={(theme) => ({
        gap: 35,
        width: '100%',
        marginTop: 70,
        display: 'flex',
        padding: '0px 60px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.fn.smallerThan('md')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      })}
    >
      <Title
        order={2}
        sx={{
          color: 'black',
          fontSize: '31px',
          fontWeight: 300,
          lineHeight: 1.2,
          minWidth: 'fit-content',
        }}
      >
        Öğe Listesi
      </Title>
      <Box
        component="ul"
        sx={{
          gap: 10,
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          listStyle: 'none',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Box component="li">
          <Button
            type="button"
            variant="default"
            onClick={() => setSelectedCF(null)}
            sx={(theme) => ({
              height: 'auto',
              fontSize: '18px',
              fontWeight: 500,
              padding: '12px 21px',
              position: 'relative',
              border: 'none!important',
              transition: 'all .15s ease',
              backgroundColor: 'transparent!important',
              color: !selectedCF ? theme.colors.green[6] : 'rgba(0,0,0,0.5)',
              ':hover': {
                color: theme.colors.green[6],
              },
              ':after': {
                content: '""',
                left: 0,
                bottom: -3,
                width: '100%',
                position: 'absolute',
                transition: 'all .15s ease',
                backgroundColor: !selectedCF ? theme.colors.green[6] : 'transparent',
                height: !selectedCF ? 3 : 0,
              },
            })}
          >
            Tümü
          </Button>
        </Box>
        {customFilters.map((customFilter) => (
          <Box key={`cf-${customFilter.id}`} component="li">
            <Button
              type="button"
              variant="default"
              onClick={() => setSelectedCF(customFilter)}
              sx={(theme) => ({
                height: 'auto',
                fontSize: '18px',
                fontWeight: 500,
                padding: '12px 21px',
                position: 'relative',
                border: 'none!important',
                transition: 'all .15s ease',
                backgroundColor: 'transparent!important',
                color:
                  selectedCF?.slug === customFilter?.slug
                    ? theme.colors.green[6]
                    : 'rgba(0,0,0,0.5)',
                ':hover': {
                  color: theme.colors.green[6],
                },
                ':after': {
                  content: '""',
                  left: 0,
                  bottom: -3,
                  width: '100%',
                  position: 'absolute',
                  transition: 'all .15s ease',
                  backgroundColor:
                    selectedCF?.slug === customFilter.slug ? theme.colors.green[6] : 'transparent',
                  height: selectedCF?.slug === customFilter.slug ? 3 : 0,
                },
              })}
            >
              {customFilter.name}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function TopBar() {
  const Navigate = useNavigate();

  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        padding: 0,
        width: '100%',
        display: 'grid',
        alignItems: 'start',
        position: 'relative',
        justifyContent: 'space-between',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr)',
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
          sx={(theme) => ({
            color: '#000',
            fontWeight: 300,
            marginRight: 20,
            fontSize: '64px',
            position: 'relative',
            [theme.fn.smallerThan('md')]: {
              fontSize: '32px',
            },
          })}
        >
          Öğeler
          <Button
            sx={{
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
                color: t.colors.gray[9],
                backgroundColor: t.colors.gray[3],
              },
            }}
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
            flexWrap: 'wrap',
            width: 'fit-content',
            alignItems: 'center',
            justifyContent: 'start',
          }}
        >
          <AddButtons onItemAdd={() => Navigate('/items/new')} onCategoryAdd={() => null} />
        </Box>
      </Box>
      <CategoriesBar categories={MockItemsCategories} />
    </Box>
  );
}

function NavbarGroup({
  items,
  paths,
}: {
  items: Item[];
  paths: { path?: string; name: string }[];
}) {
  return (
    <Box
      sx={{
        gap: 90,
        padding: 60,
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <Navbar
        withButtons
        paths={paths}
        middleChilds={<ItemCountDisplay itemCount={items.length} />}
      />
      <TopBar />
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
          backgroundImage: 'url(/assets/img/items-bg.webp)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 50%, black 100%)',
        }}
      />
    </Box>
  );
}

function WithItemsView({
  items,
  paths,
}: {
  items: Item[];
  paths: { path?: string; name: string }[];
}) {
  return (
    <TableWrapper>
      <NavbarGroup items={items} paths={paths} />
      <CustomFiltersBar />
      <ItemsTable />
      <ItemsToolbar />
    </TableWrapper>
  );
}

export default WithItemsView;
