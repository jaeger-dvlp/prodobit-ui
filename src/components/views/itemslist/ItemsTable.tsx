/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { Item } from '@/views/items/list/WithItems';
import { useTable } from '@/components/context/Table.context';
import { MRT_Localization_TR } from 'mantine-react-table/locales/tr';
import { MockItems, MockItemsCategories, MockStatuses, Order } from 'mockdata';
import {
  Box,
  Button,
  Image,
  Menu,
  Select,
  Text,
  TextInput,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';

import {
  type MRT_Icons,
  type MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
  MRT_Row,
} from 'mantine-react-table';

import {
  TrashIcon,
  EditIconItem,
  CustomChevrons,
  CustomChevronUp,
  CustomChevronDown,
  EyeIcon,
  CustomSmoothTooltipIllustration,
} from '@/components/icons';

import 'dayjs/locale/tr';
import { BsThreeDotsVertical } from 'react-icons/bs';

type Props<T extends Record<string, unknown>> = {
  items?: T[];
  controls?: {
    fastEdit: boolean;
    drawer: boolean;
    delete: boolean;
    fastInspect: boolean;
  };
};

function ItemsTable<T extends Item & Order<Item>>({
  items: outerItems,
  controls = {
    fastEdit: true,
    drawer: false,
    delete: true,
    fastInspect: false,
  },
}: Props<any>) {
  const t = useMantineTheme();
  const navigate = useNavigate();
  const { setTable, sorting, pagination } = useTable<T>();
  const [items, setItems] = React.useState<T[]>(outerItems || MockItems);

  const columns = React.useMemo<MRT_ColumnDef<T>[]>(
    () => [
      {
        accessorFn: (item) => item.name,
        id: 'item-name',
        header: 'Öğe Tanımı',
        filterVariant: 'autocomplete',
        Cell: ({
          renderedCellValue,
          row,
        }: {
          renderedCellValue: number | string | React.ReactNode;
          row: MRT_Row<T>;
        }) => (
          <Box sx={{ gap: 10, display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Image
              width={30}
              height={30}
              fit="cover"
              sx={{
                borderRadius: 100,
                overflow: 'hidden',
              }}
              src={row.original.image}
            />
            {renderedCellValue}
          </Box>
        ),
      },
      {
        accessorFn: (item) => item.code,
        id: 'item-code',
        header: 'Ürün Kodu',
        enableColumnFilter: true,
        filterVariant: 'autocomplete',
      },
      {
        accessorFn: (item) => MockItemsCategories.find((c) => c.slug === item.category)?.name,
        id: 'item-category',
        header: `Kategoriler (${MockItemsCategories.length})`,
        enableColumnFilter: true,
        filterVariant: 'autocomplete',
      },
      {
        accessorFn: (item) => item.status,
        id: 'item-status',
        header: 'Statüler',
        enableColumnFilter: true,
        filterVariant: 'autocomplete',
        Cell: ({
          renderedCellValue,
          row,
        }: {
          renderedCellValue: number | string | React.ReactNode;
          row: MRT_Row<T>;
        }) => (
          <Select
            onChange={(e: string) => {
              const newItems = [...items];
              newItems[row.index].status = e;
              setItems(newItems);
            }}
            variant="default"
            rightSection={<CustomChevronDown width={12} />}
            styles={{
              root: {
                width: 'auto',
                maxWidth: '145px',
                svg: {
                  color: `${MockStatuses.find((status) => status.slug === row.original.status)
                    ?.color?.[7]}!important`,
                },
              },
              input: {
                width: '100%',
                border: 'none',
                fontWeight: 500,
                fontSize: '15px',
                borderRadius: 10,
                textAlign: 'center',
                padding: '20px 13px',
                transition: 'all .15s ease',
                color: MockStatuses.find((status) => status.slug === row.original.status)
                  ?.color?.[7],
                backgroundColor: MockStatuses.find((status) => status.slug === row.original.status)
                  ?.color?.[1],
                ':hover': {
                  backgroundColor: MockStatuses.find(
                    (status) => status.slug === row.original.status,
                  )?.color?.[2],
                },
              },
              dropdown: {
                borderRadius: 15,
              },
              item: {
                borderRadius: 10,
              },
            }}
            data={MockStatuses.map((status) => ({
              value: status.slug,
              label: status.name,
            }))}
            defaultValue={renderedCellValue as string}
          />
        ),
      },
      {
        accessorFn: (item) => item.created_at,
        id: 'item-created_at',
        header: 'Eklenme Tarihi',
        enableColumnFilter: true,
        filterVariant: 'autocomplete',
        Cell: ({ renderedCellValue }: { renderedCellValue: number | string | React.ReactNode }) =>
          dayjs(renderedCellValue as string)
            .locale('tr')
            .format('DD MMMM / HH:mm'),
      },
      {
        id: 'item-actions',
        header: 'İşlemler',
        enableSorting: false,
        enableColumnFilter: false,
        Cell: ({ row }: { row: MRT_Row<T> }) => (
          <Box
            sx={{
              gap: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            {controls.fastEdit && (
              <Tooltip label="Düzenle">
                <Button
                  onClick={() =>
                    navigate(`/items/edit/${row.original.id}`, {
                      state: {
                        item: row.original,
                      },
                    })
                  }
                  sx={(theme) => ({
                    margin: 0,
                    padding: 6,
                    border: 'none',
                    color: theme.colors.gray[9],
                    borderRadius: 10,
                    height: 'fit-content',
                    backgroundColor: 'transparent',
                    transition: 'all 0.1s ease-in-out',
                    ':hover': {
                      backgroundColor: theme.colors.gray[4],
                    },
                  })}
                >
                  <EditIconItem width={24} height={24} />
                </Button>
              </Tooltip>
            )}
            {controls.delete && (
              <Tooltip label="Sil">
                <Button
                  onClick={() => null}
                  sx={(theme) => ({
                    margin: 0,
                    padding: 6,
                    border: 'none',
                    color: theme.colors.gray[9],
                    borderRadius: 10,
                    height: 'fit-content',
                    backgroundColor: 'transparent',
                    transition: 'all 0.1s ease-in-out',
                    ':hover': {
                      color: theme.colors.red[8],
                      backgroundColor: theme.colors.red[1],
                    },
                  })}
                >
                  <TrashIcon width={24} height={24} />
                </Button>
              </Tooltip>
            )}
            {controls.drawer && (
              <Tooltip label="İncele">
                <Button
                  onClick={() => null}
                  sx={(theme) => ({
                    margin: 0,
                    padding: 6,
                    border: 'none',
                    color: theme.colors.gray[9],
                    borderRadius: 10,
                    height: 'fit-content',
                    backgroundColor: 'transparent',
                    transition: 'all 0.1s ease-in-out',
                    ':hover': {
                      backgroundColor: theme.colors.gray[4],
                    },
                  })}
                >
                  <EyeIcon width={17} height={17} />
                </Button>
              </Tooltip>
            )}
            {controls.fastInspect && (
              <Menu zIndex={99} position="left">
                <Tooltip label="Düzenle">
                  <Menu.Target>
                    <Button
                      onClick={() => null}
                      sx={(theme) => ({
                        margin: 0,
                        padding: 6,
                        border: 'none',
                        color: theme.colors.gray[9],
                        borderRadius: 10,
                        height: 'fit-content',
                        backgroundColor: 'transparent',
                        transition: 'all 0.1s ease-in-out',
                        ':hover': {
                          backgroundColor: theme.colors.gray[4],
                        },
                      })}
                    >
                      <BsThreeDotsVertical width={19} height={19} />
                    </Button>
                  </Menu.Target>
                </Tooltip>
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
                      gap: 25,
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
                      '> .mantine-TextInput-root': {
                        paddingBottom: 18,
                        borderBottom: `1px solid ${t.colors.gray[3]}`,
                        '.mantine-TextInput-input': {
                          padding: 0,
                          border: 'none',
                          width: '100%',
                          fontWeight: 500,
                          fontSize: '31px',
                          lineHeight: '37.2px',
                          color: t.colors.gray[9],
                          backgroundColor: 'transparent!important',
                        },
                      },
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
                      Sipariş No
                    </Text>
                    <TextInput defaultValue={row.original.orderNo} />
                    <Box
                      sx={{
                        gap: 10,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        justifyContent: 'space-between',
                        '> button': {
                          width: '100%',
                          height: 'auto',
                          border: 'none',
                          borderRadius: 10,
                          padding: '12px 20px',
                          backgroundColor: t.colors.gray[1],
                          ':hover': {
                            backgroundColor: t.colors.gray[2],
                          },
                          '> div > span': {
                            gap: 10,
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '> svg': {
                              width: '24px',
                              height: '24px',
                            },
                          },
                        },
                      }}
                    >
                      <Button variant="default">
                        <EyeIcon />
                        <Text>İncele</Text>
                      </Button>
                      <Button variant="default">
                        <TrashIcon />
                        <Text>Sil</Text>
                      </Button>
                      <Button variant="default">
                        <EditIconItem />
                        <Text>Düzenle</Text>
                      </Button>
                    </Box>
                    <Text
                      sx={{
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '18px',
                        color: t.colors.gray[6],
                      }}
                    >
                      Müşteri Ayarı
                    </Text>
                    <Select
                      styles={{
                        input: {
                          padding: 20,
                          border: 'none',
                          borderRadius: 10,
                          fontSize: '15px',
                          fontWeight: 400,
                          lineHeight: '18px',
                          color: '#000',
                          minHeight: 58,
                          '::placeholder': {
                            color: '#000',
                          },
                          backgroundColor: t.colors.gray[1],
                        },
                        dropdown: {
                          padding: 10,
                          borderRadius: 15,
                          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
                        },
                        item: {
                          borderRadius: 10,
                          "&[data-selected='true']": {
                            backgroundColor: `${t.colors.green[6]}!important`,
                          },
                        },
                      }}
                      placeholder="Seçin"
                      defaultValue="appple"
                      data={[
                        { label: 'Apple', value: 'apple' },
                        {
                          label: 'Deneme',
                          value: 'deneme',
                        },
                      ]}
                    />{' '}
                    <Text
                      sx={{
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '18px',
                        color: t.colors.gray[6],
                      }}
                    >
                      Hızlı Fabrika Ayarı
                    </Text>
                    <Select
                      styles={{
                        input: {
                          padding: 20,
                          border: 'none',
                          borderRadius: 10,
                          fontSize: '15px',
                          fontWeight: 400,
                          lineHeight: '18px',
                          color: '#000',
                          minHeight: 58,
                          '::placeholder': {
                            color: '#000',
                          },
                          backgroundColor: t.colors.gray[1],
                        },
                        dropdown: {
                          padding: 10,
                          borderRadius: 15,
                          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
                        },
                        item: {
                          borderRadius: 10,
                          "&[data-selected='true']": {
                            backgroundColor: `${t.colors.green[6]}!important`,
                          },
                        },
                      }}
                      placeholder="Seçin"
                      defaultValue="appple"
                      data={[
                        { label: 'Apple', value: 'apple' },
                        {
                          label: 'Deneme',
                          value: 'deneme',
                        },
                      ]}
                    />
                    <Text
                      sx={{
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '18px',
                        color: t.colors.gray[6],
                      }}
                    >
                      Hızlı Miktar Ayarı
                    </Text>
                    <Select
                      styles={{
                        input: {
                          padding: 20,
                          border: 'none',
                          borderRadius: 10,
                          fontSize: '15px',
                          fontWeight: 400,
                          lineHeight: '18px',
                          color: '#000',
                          minHeight: 58,
                          '::placeholder': {
                            color: '#000',
                          },
                          backgroundColor: t.colors.gray[1],
                        },
                        dropdown: {
                          padding: 10,
                          borderRadius: 15,
                          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
                        },
                        item: {
                          borderRadius: 10,
                          "&[data-selected='true']": {
                            backgroundColor: `${t.colors.green[6]}!important`,
                          },
                        },
                      }}
                      placeholder="Seçin"
                      defaultValue="appple"
                      data={[
                        { label: 'Apple', value: 'apple' },
                        {
                          label: 'Deneme',
                          value: 'deneme',
                        },
                      ]}
                    />
                  </Box>
                </Menu.Dropdown>
              </Menu>
            )}
            {controls.fastEdit && (
              <Button
                variant="default"
                sx={(theme) => ({
                  marginLeft: 20,
                  borderRadius: 10,
                  padding: '10px 17px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.1s ease-in-out',
                  border: `1px solid ${theme.colors.gray[4]}`,
                  ':hover': {
                    color: theme.colors.blue[7],
                    borderColor: theme.colors.blue[4],
                    backgroundColor: theme.colors.blue[1],
                  },
                })}
              >
                <Text
                  sx={{
                    fontSize: '15px',
                    fontWeight: 500,
                  }}
                >
                  Hızlı Düzenle
                </Text>
              </Button>
            )}
          </Box>
        ),
      },
    ],
    [items, navigate],
  );

  const ReactIcons: Partial<MRT_Icons> = {
    IconArrowsSort: (props: any) => <CustomChevrons {...props} width={15} height={15} />,
    IconSortAscending: (props: any) => <CustomChevronUp {...props} width={15} height={15} />,
    IconSortDescending: (props: any) => <CustomChevronDown {...props} width={15} height={15} />,
  };

  const table = useMantineReactTable({
    columns,
    data: items,
    icons: ReactIcons,
    localization: MRT_Localization_TR,
    enablePagination: true,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableColumnActions: false,
    initialState: {
      showColumnFilters: false,
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    mantineTableHeadRowProps: {
      sx: {
        boxShadow: 'none!important',
        backgroundColor: 'transparent',
      },
    },
    mantineTableBodyProps: {
      sx: {
        overflow: 'visible',
        height: '100%',
        minHeight: '100%',
      },
    },
    mantineTableProps: {
      striped: false,
      sx: {
        border: 'none',
        overflow: 'visible',
        tableLayout: 'fixed',
        backgroundColor: 'transparent',
      },
    },
    mantineTableHeadProps: {
      sx: {
        backgroundColor: 'transparent',
      },
    },
    mantineTableHeadCellProps: {
      sx: {
        fontWeight: 700,
        fontSize: '12px',
        width: '100%!important',
        padding: '0px!important',
        '.mantine-TableHeadCell-Content-Labels': {
          width: '100%!important',
          padding: '15px 30px 15px 15px!important',
          justifyContent: 'space-between',
          '.mantine-Indicator-indicator.mantine-Indicator-common': {
            display: 'none!important',
          },
        },
        color: 'rgba(0,0,0, 0.5)!important',
        'button.mantine-UnstyledButton-root.mantine-ActionIcon-root': {
          margin: 0,
          padding: 3,
          width: 20,
          height: 20,
          backgroundColor: 'transparent',
          color: `${t.colors.gray[6]}!important`,
          transition: 'color 0.1s ease-in-out, background-color 0.1s ease-in-out',
          ':hover': {
            color: `${t.colors.gray[9]}`,
            backgroundColor: `${t.colors.gray[3]}`,
          },
        },
        '> *:not(:last-child)': {
          '>': {
            position: 'relative',
            '::after': {
              content: '""',
              width: 1,
              right: 10,
              height: 20,
              top: '50%',
              position: 'absolute',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0, 0.1)!important',
            },
          },
        },
      },
    },
    mantineTableContainerProps: {
      sx: {
        overflow: 'visible',
        height: '100%',
        minHeight: '100%',
      },
    },
    mantinePaperProps: {
      sx: {
        width: '100%',
        maxWidth: '100%',
        overflow: 'visible',
        height: '100%',
        boxShadow: 'none',
        minHeight: '100%',
        border: 'none!important',
        backgroundColor: 'transparent',
      },
    },
    mantineTopToolbarProps: {
      sx: {
        backgroundColor: 'transparent',
      },
    },
    mantineBottomToolbarProps: {
      sx: {
        backgroundColor: 'transparent',
      },
    },
    mantineTableBodyCellProps: {
      sx: {
        border: 'none!important',
        padding: '15px 15px!important',
        backgroundColor: 'transparent!important',
      },
    },
    mantineTableBodyRowProps: {
      sx: {
        borderRadius: '10px!important',
        backgroundColor: 'transparent',
        ':hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)!important',
        },
      },
    },
  });

  React.useEffect(() => {
    (() => {
      let customSorting: boolean | string = sorting;

      if (sorting === true) customSorting = true;

      if (!sorting) customSorting = false;

      if (sorting === 'reset') return table.resetSorting();

      const sortedCols = columns.map((column) => ({
        id: column?.id || '',
        desc: !!customSorting,
      }));
      return table.setSorting(sortedCols);
    })();
  }, [columns, sorting, table]);

  React.useEffect(() => {
    (() => {
      table.setPagination({
        pageIndex: pagination.page,
        pageSize: parseInt(pagination.perPage, 10),
      });
    })();
  }, [pagination, table]);

  React.useEffect(() => {
    if (table) setTable(table);
  }, [setTable, table]);

  return (
    <Box
      sx={{
        padding: 60,
        paddingTop: 0,
        marginTop: 40,
        width: '100%',
        height: '100%',
        display: 'flex',
        overflow: 'visible',
        alignItems: 'stretch',
        minHeight: 'fit-content',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      <MantineReactTable table={table} />
    </Box>
  );
}

export default ItemsTable;
