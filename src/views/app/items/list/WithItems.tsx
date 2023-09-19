import React from 'react';
import { motion } from 'framer-motion';
import { BsPlusLg } from 'react-icons/bs';
import Drawer from '@/components/misc/Drawer';
import { MockItemsCategories } from 'mockdata';
import { useNavigate } from 'react-router-dom';
import { ProdobitAppTheme as t } from '@/theme';
import Navbar from '@/components/layout/app/Navbar';
import ItemsToolbar from '@/components/views/itemslist/Toolbar';
import ItemsTable from '@/components/views/itemslist/ItemsTable';
import AddButtons from '@/components/views/itemslist/AddButtons';
import ItemCountDisplay from '@/components/views/items/ItemCountDisplay';
import TableWrapper, { useTable } from '@/components/context/Table.context';
import { CustomSmoothTooltipIllustration, EditIcon } from '@/components/icons';
import { Box, Button, Checkbox, Divider, Menu, Text, TextInput, Title } from '@mantine/core';

export type Item = {
  id: number;
  brand: {
    id: string;
    name: string;
  };
  image: string;
  name: string;
  code: string;
  category: string;
  status: string;
  count: number;
  created_at: string;
};

export type ItemCategory = {
  id: number | string;
  name: string;
  slug: string;
  products?: Item[];
  subCategories?: ItemCategory[];
};

function AddCategoryMenu() {
  return (
    <Menu.Dropdown
      sx={{
        margin: 0,
        padding: 0,
        marginTop: -100,
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
            display: 'flex',
            borderRadius: 20,
            alignItems: 'stretch',
            flexDirection: 'column',
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            '& .menu-header': {
              gap: 15,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .menu-title': {
                lineHeight: 1,
                fontSize: '15px',
                fontWeight: 500,
                color: t.colors.gray[6],
                '& strong': {
                  fontWeight: 700,
                },
              },
              '& .search-bar input': {
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
            '& .categories': {
              gap: 0,
              maxHeight: 150,
              display: 'flex',
              overflowY: 'auto',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .category-checkbox': {
                width: '100%',
                lineHeight: 1,
                fontWeight: 400,
                fontSize: '15px',
                backgroundColor: 'transparent',
                '&:not(:last-child)': {
                  borderBottom: `1px solid rgba(0, 0, 0, 0.10)`,
                },
                "& input[type='checkbox']:checked": {
                  borderColor: '#000',
                  backgroundColor: '#000',
                },
                '& .mantine-Checkbox-inner': {
                  paddingTop: 20,
                  paddingBottom: 20,
                  '& svg': {
                    marginTop: 25.5,
                  },
                },
                '& .mantine-Checkbox-labelWrapper': {
                  width: '100%',
                  '& .mantine-Checkbox-label': {
                    paddingTop: 20,
                    paddingBottom: 20,
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
            top: '85px',
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
            <Text className="menu-title">
              <strong>10</strong> Tane Ekleme Hakkından <strong>8</strong> Tane Kaldı
            </Text>
            <TextInput className="search-bar" placeholder="Kategori Ara..." />
          </Box>
          <Box className="categories">
            {Array.from({ length: 10 }).map((_, i) => (
              <Checkbox
                className="category-checkbox"
                key={`menu-category-${i}`}
                label="Deneme"
                labelPosition="left"
              />
            ))}
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
        minWidth: '100%',
        maxWidth: '100%',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'stretch',
        transform: 'translateY(50%)',
      }}
    >
      <Box
        sx={{
          gap: 10,
          display: 'flex',
          overflowX: 'auto',
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
      <Menu position="left-start">
        <Menu.Target>
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
        </Menu.Target>
        <AddCategoryMenu />
      </Menu>
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
          <AddButtons
            primaryButtonText="Öğe Ekle"
            secondaryButtonText="Kategori Ekle"
            onPrimaryButtonClick={() => Navigate('/app/items/new')}
            onSecondaryButtonClick={() => Navigate('/app/items/categories/list')}
          />
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

type WithItemsViewProps<T extends Item> = {
  items: T[];
  paths: { path?: string; name: string }[];
  controls?: {
    fastEdit: boolean;
    drawer: boolean;
    delete: boolean;
    fastInspect: boolean;
  };
};

function WithItemsView({ items, paths, controls }: WithItemsViewProps<any>) {
  return (
    <TableWrapper>
      <NavbarGroup items={items} paths={paths} />
      <CustomFiltersBar />
      <ItemsTable controls={controls} items={items} />
      <ItemsToolbar />
      {controls?.drawer && <Drawer />}
    </TableWrapper>
  );
}

export default WithItemsView;
