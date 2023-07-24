/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import dayjs from 'dayjs';
import { Item } from '@/views/items/list/WithItems';
import { EditIconItem, TrashIcon } from '@/components/icons';
import { Box, Button, Image, Select, Text } from '@mantine/core';
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';

import 'dayjs/locale/tr';
import { MockItems, MockItemsCategories, MockStatuses } from 'mockdata';

type Props = {
  items?: Item[];
};

function ItemsTable({ items: outerItems }: Props) {
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
        header: 'Kategori',
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
            styles={{
              root: {
                maxWidth: '145px',
                width: 'auto',
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
                  filter: 'brightness(0.8)',
                },
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
        Cell: ({ row }: { row: any }) => (
          <Box
            sx={{
              gap: 10,
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => alert(`${row.original.name} edit`)}
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
                  color: theme.colors.indigo[9],
                  backgroundColor: theme.colors.indigo[1],
                },
              })}
            >
              <EditIconItem width={24} height={24} />
            </Button>
            <Button
              onClick={() => alert(`${row.original.name} delete`)}
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
                  color: theme.colors.indigo[9],
                  backgroundColor: theme.colors.indigo[1],
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
                border: `1px solid ${theme.colors.gray[5]}`,
                ':hover': {
                  borderColor: theme.colors.indigo[5],
                  color: theme.colors.indigo[9],
                  backgroundColor: theme.colors.indigo[1],
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
    [],
  );

  const table = useMantineReactTable({
    columns,
    data: items,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableColumnActions: false,
    initialState: { showColumnFilters: false },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    mantineTableHeadRowProps: {
      sx: {
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
        width: '100%',
        gap: `${200}px!important`,
        padding: '15px 0px!important',
      },
    },
    mantinePaperProps: {
      sx: {
        border: 'none!important',
        boxShadow: 'none',
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
        padding: '15px 0px!important',
        backgroundColor: 'transparent!important',
      },
    },
    mantineTableBodyRowProps: {
      sx: {
        backgroundColor: 'transparent',
        ':hover': {
          backgroundColor: 'transparent!important',
        },
      },
    },
  });

  return (
    <Box
      sx={{
        padding: 60,
        marginTop: 20,
      }}
    >
      <MantineReactTable table={table} />
    </Box>
  );
}

export default ItemsTable;
