import React from 'react';
import { ExportToCsv } from 'export-to-csv';
import { ProdobitAppColors } from '@/theme';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  MantineTheme,
  Select,
  Sx,
  Text,
  TextInput,
} from '@mantine/core';

import {
  SearchIcon,
  DownloadCloudIcon,
  CustomChevronDown,
  CustomFilterBarsIcon,
  CustomChevronUp,
  CustomChevrons,
  PGCHEndRight,
  PGCHright,
  PGCHleft,
  PGCHEndLeft,
} from '@/components/icons';
import { CustomFilter } from '@/views/items/list/WithItems';
import { useTable } from '@/components/context/Table.context';

const ToolbarInnerContainerSX: Sx = {
  gap: 5,
  padding: 10,
  minHeight: 65,
  display: 'flex',
  borderRadius: 15,
  alignItems: 'center',
  maxWidth: 'fit-content',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.82)',
  boxShadow: '0px 24px 54px -13px rgba(177, 109, 92, 0.30)',
};

const ButtonSX: Sx = (t: MantineTheme) => ({
  gap: 4,
  height: 'auto',
  border: 'none',
  minHeight: 45,
  display: 'flex ',
  fontWeight: 400,
  borderRadius: 5,
  fontSize: '15px',
  lineHeight: '18px',
  textAlign: 'center',
  padding: '13px 12px',
  color: t.colors.gray[8],
  justifyContent: 'center',
  backgroundColor: 'white',
  transition: 'all .15s ease',
  ':hover': {
    color: t.colors.blue[7],
    backgroundColor: t.colors.blue[1],
  },
});

type PaginationProps = {
  pagination: {
    page: number;
    perPage: string;
  };
  setPagination: React.Dispatch<
    React.SetStateAction<{
      page: number;
      perPage: string;
    }>
  >;
};

type Props = {
  sorting: boolean | string;
  setSorting: React.Dispatch<React.SetStateAction<boolean | string>>;
  selectedCF: CustomFilter | null;
  customFilters: CustomFilter[];
  setSelectedCF: React.Dispatch<React.SetStateAction<CustomFilter | null>>;
};

function Pagination({ pagination, setPagination }: PaginationProps) {
  const getCurrentPG = React.useCallback(() => {
    const current = pagination.page + 1;
    if (current < 10) return `0${current}`;

    return current;
  }, [pagination]);

  const PGbtnSX: Sx = (t: MantineTheme) => ({
    padding: 5,
    height: 'auto',
    border: 'none',
    borderRadius: 5,
    transition: 'all .15s ease',
    backgroundColor: 'transparent',
    ':hover': {
      color: t.colors.gray[9],
      backgroundColor: t.colors.gray[3],
    },
  });

  const onPgRightClick = React.useCallback(() => {
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
  }, [setPagination]);

  const onPgLeftClick = React.useCallback(() => {
    setPagination((prev) => ({
      ...prev,
      page: prev.page === 0 ? 0 : prev.page - 1,
    }));
  }, [setPagination]);

  const onPgRightEndClick = React.useCallback(() => {
    setPagination((prev) => ({
      ...prev,
      page: prev.page + 5,
    }));
  }, [setPagination]);

  const onPgLeftEndClick = React.useCallback(() => {
    setPagination((prev) => ({
      ...prev,
      page: prev.page - 5 < 0 ? 0 : prev.page - 5,
    }));
  }, [setPagination]);

  return (
    <Box
      sx={{
        ...ToolbarInnerContainerSX,
        flexDirection: 'row',
        width: 'calc(30% - 4px)',
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: 'flex',
          width: 'fit-content',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button onClick={onPgLeftEndClick} variant="default" sx={PGbtnSX}>
          <PGCHEndLeft width={12} height={12} />
        </Button>
        <Button onClick={onPgLeftClick} variant="default" sx={PGbtnSX}>
          <PGCHleft width={12} height={12} />
        </Button>
        <Text
          sx={(t) => ({
            fontWeight: 700,
            borderRadius: 18,
            fontSize: '15px',
            padding: '5px 8px',
            lineHeight: '18px',
            textAlign: 'center',
            color: t.colors.gray[8],
            border: '1px solid rgba(0, 0, 0, 0.20)',
          })}
        >
          {getCurrentPG()}
        </Text>
        <Button onClick={onPgRightClick} variant="default" sx={PGbtnSX}>
          <PGCHright width={12} height={12} />
        </Button>
        <Button onClick={onPgRightEndClick} variant="default" sx={PGbtnSX}>
          <PGCHEndRight width={12} height={12} />
        </Button>
      </Box>
      <Box sx={{ padding: 0, margin: 0, height: '100%', maxHeight: '70%' }}>
        <Divider
          color="rgba(0, 0, 0, 0.20)"
          sx={{ margin: '0px 10px', height: '100%' }}
          orientation="vertical"
        />
      </Box>
      <Select
        label="Gösterim"
        styles={(t) => ({
          root: {
            padding: 0,
            height: '100%',
            display: 'flex',
            position: 'relative',
            alignItems: 'stretch',
            maxWidth: 'fit-content',
            flexDirection: 'column',
          },
          wrapper: {
            margin: 0,
            padding: 0,
            height: '100%',
          },
          label: {
            bottom: -6,
            zIndex: 2,
            fontWeight: 300,
            fontSize: '12px',
            position: 'relative',
            lineHeight: '14.4px',
            pointerEvents: 'none',
            color: t.colors.gray[8],
          },
          input: {
            zIndex: 1,
            maxWidth: 55,
            height: '100%',
            border: 'none',
            fontWeight: 500,
            fontSize: '15px',
            width: 'fit-content',
            color: t.colors.gray[8],
            padding: '0px!important',
            backgroundColor: 'transparent',
          },
          rightSection: {
            right: 15,
            width: 20,
            margin: 0,
            top: '50%',
            padding: 0,
            height: '100%',
            transform: 'translateY(-50%)',
          },
          dropdown: {
            borderRadius: 15,
          },
          item: {
            borderRadius: 10,
          },
        })}
        defaultValue={pagination.perPage}
        onChange={(val: string) => {
          setPagination((prev) => ({ ...prev, perPage: val }));
        }}
        data={[
          {
            value: '5',
            label: '5',
          },
          {
            value: '10',
            label: '10',
          },
          {
            value: '30',
            label: '30',
          },
          {
            value: '50',
            label: '50',
          },
        ]}
      />
    </Box>
  );
}

function Toolbar({
  sorting,
  setSorting,
  selectedCF,
  customFilters,
  setSelectedCF,
  pagination,
  setPagination,
}: Props & PaginationProps) {
  const { table } = useTable<any>();
  const [sortCounter, setSortCounter] = React.useState(0);
  const [searchFocused, setSearchFocused] = React.useState(false);

  const onDownloadClick = React.useCallback(() => {
    const rows = table?.getRowModel().rows;
    const columns = table?.getAllColumns();

    const csvExporter = new ExportToCsv({
      useBom: true,
      showLabels: true,
      quoteStrings: '"',
      fieldSeparator: ',',
      decimalSeparator: '.',
      useKeysAsHeaders: false,
      filename: 'prodobit-export',
      headers: columns?.map((c) => c.header),
    });

    csvExporter.generateCsv(rows?.map((row) => row.original));
  }, [table]);

  const ChangeSort = React.useCallback(() => {
    setSortCounter((prev) => (prev === 2 ? 0 : prev + 1));

    switch (sortCounter) {
      case 0:
        setSorting(true);
        break;
      case 1:
        setSorting(false);
        break;

      default:
        setSorting('reset');
        break;
    }
  }, [setSorting, sortCounter]);

  return (
    <Box
      sx={{
        left: 0,
        bottom: 0,
        zIndex: 20,
        padding: 20,
        width: '100%',
        display: 'flex',
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          gap: 8,
          zIndex: 2,
          padding: 0,
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            ...ToolbarInnerContainerSX,
            width: 'calc(70% - 4px)',
          }}
        >
          <TextInput
            maw={searchFocused ? 300 : 150}
            onBlur={() => setSearchFocused(false)}
            onFocus={() => setSearchFocused(true)}
            icon={<SearchIcon width={15} height={15} color={ProdobitAppColors.green[6]} />}
            placeholder="Her Şey Ara"
            styles={{
              wrapper: {
                padding: 0,
                height: '100%',
              },
              input: {
                padding: 0,
                border: 'none',
                height: '100%',
              },
            }}
            sx={{
              height: '100%',
              transition: 'all .3s ease-in-out',
            }}
          />
          <Button
            onClick={(e) => {
              const checkbox = e.currentTarget.querySelector(
                'input[type="checkbox"]',
              ) as HTMLInputElement;

              checkbox.checked = !checkbox.checked;
            }}
            variant="default"
            sx={(t) => ({
              // @ts-ignore
              ...ButtonSX(t),
              fontWeight: 700,
            })}
          >
            <Checkbox
              mr={15}
              width={15}
              height={15}
              styles={(t) => ({
                input: {
                  borderRadius: 4,
                  pointerEvents: 'none',
                  border: `1px solid ${t.colors.gray[5]}`,
                },
              })}
            />
            <Text p={0} m={0} mr={4}>
              Filtre
            </Text>
            <CustomFilterBarsIcon width={12} height={12} />
          </Button>
          <Select
            value={selectedCF?.slug || null}
            styles={(t) => ({
              root: {
                margin: 0,
                padding: 0,
                width: 'auto',
                height: '100%',
                display: 'flex',
                maxWidth: '110px',
                position: 'relative',
                alignItems: 'stretch',
                '> div': {
                  margin: 0,
                  padding: 0,
                  minHeight: '100%!important',
                },
              },
              wrapper: {
                height: '100%',
              },
              input: {
                width: '100%',
                height: '100%',
                border: 'none',
                fontWeight: 400,
                fontSize: '15px',
                textAlign: 'left',
                lineHeight: '18px',
                padding: '13px 12px',
                transition: 'all .15s ease',
                ':hover': {
                  color: t.colors.blue[7],
                  backgroundColor: t.colors.blue[1],
                },
                '::placeholder': {
                  color: '#000',
                },
              },
              dropdown: {
                borderRadius: 15,
              },
              item: {
                borderRadius: 10,
              },
            })}
            clearable
            onChange={(val) => {
              const selected = customFilters?.find((filter) => filter.slug === val) as CustomFilter;
              setSelectedCF(selected || null);
            }}
            data={customFilters
              ?.filter((filter) => filter.slug !== 'all')
              .map((filter) => ({
                value: filter.slug,
                label: filter.name,
              }))}
            placeholder="Filtrelerim"
            variant="default"
          />
          <Button onClick={ChangeSort} variant="default" sx={ButtonSX}>
            <Text p={0} m={0} mr={4}>
              Sıralama
            </Text>
            {(() => {
              switch (sorting) {
                case true:
                  return <CustomChevronDown width={12} height={12} />;
                case false:
                  return <CustomChevronUp width={12} height={12} />;
                default:
                  return <CustomChevrons width={12} height={18} />;
              }
            })()}
          </Button>
          <Button onClick={onDownloadClick} variant="default" sx={ButtonSX}>
            <Text p={0} m={0} mr={4}>
              İndir
            </Text>
            <DownloadCloudIcon width={12} height={12} />
          </Button>
        </Box>
        <Pagination pagination={pagination} setPagination={setPagination} />
      </Box>
    </Box>
  );
}

export default Toolbar;
