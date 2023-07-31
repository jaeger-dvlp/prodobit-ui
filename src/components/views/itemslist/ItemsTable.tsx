/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import dayjs from 'dayjs';
import { Item } from '@/views/items/list/WithItems';
import { Box, Button, Image, Select, Text, useMantineTheme } from '@mantine/core';
import { MockItems, MockItemsCategories, MockStatuses } from 'mockdata';

import {
  type MRT_Icons,
  type MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';

import { MRT_Localization_TR } from 'mantine-react-table/locales/tr';

import {
  TrashIcon,
  EditIconItem,
  CustomChevrons,
  CustomChevronUp,
  CustomChevronDown,
} from '@/components/icons';

import 'dayjs/locale/tr';
import { useTable } from '@/components/context/Table.context';

type Props = {
  items?: Item[];
};

function ItemsTable({ items: outerItems }: Props) {
  const t = useMantineTheme();
  const { setTable, sorting, pagination } = useTable<Item>();
  const [items, setItems] = React.useState<Item[]>(outerItems || MockItems);

  const columns = React.useMemo<MRT_ColumnDef<Item>[]>(
    () => [
      {
        accessorFn: (item) => item.name,
        id: 'item-name',
        header: 'Öğe Tanımı',
        filterVariant: 'autocomplete',
        Cell: ({ renderedCellValue, row }: { renderedCellValue: any; row: any }) => (
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
        Cell: ({ renderedCellValue, row }: { renderedCellValue: any; row: any }) => (
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
            defaultValue={renderedCellValue}
          />
        ),
      },
      {
        accessorFn: (item) => item.created_at,
        id: 'item-created_at',
        header: 'Eklenme Tarihi',
        enableColumnFilter: true,
        filterVariant: 'autocomplete',
        Cell: ({ renderedCellValue }: { renderedCellValue: any }) =>
          dayjs(renderedCellValue).locale('tr').format('DD MMMM / HH:mm'),
      },
      {
        id: 'item-actions',
        header: 'İşlemler',
        enableSorting: false,
        enableColumnFilter: false,
        Cell: () => (
          <Box
            sx={{
              gap: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <Button
              onClick={() => null}
              sx={(theme) => ({
                margin: 0,
                padding: 6,
                border: 'none',
                color: 'black',
                borderRadius: 10,
                height: 'fit-content',
                backgroundColor: 'transparent',
                transition: 'all 0.1s ease-in-out',
                ':hover': {
                  color: theme.colors.blue[8],
                  backgroundColor: theme.colors.blue[1],
                },
              })}
            >
              <EditIconItem width={24} height={24} />
            </Button>
            <Button
              onClick={() => null}
              sx={(theme) => ({
                margin: 0,
                padding: 6,
                border: 'none',
                color: 'black',
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
          </Box>
        ),
      },
    ],
    [items],
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
    mantineTableProps: {
      striped: false,
      sx: {
        border: 'none',
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
    mantinePaperProps: {
      sx: {
        boxShadow: 'none',
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
        display: 'flex',
        maxWidth: '100%',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'start',
        overflow: 'auto',
      }}
    >
      <MantineReactTable table={table} />
    </Box>
  );
}

export default ItemsTable;
