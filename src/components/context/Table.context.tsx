import React from 'react';
import { MockCustomFilters } from 'mockdata';
import { MRT_TableInstance } from 'mantine-react-table';
import { CustomFilter } from '@/views/items/list/WithItems';

type TableContextProps<T extends Record<string, unknown>> = {
  table: MRT_TableInstance<T> | null;
  setTable: React.Dispatch<React.SetStateAction<MRT_TableInstance<T> | null>>;
  pagination: { page: number; perPage: string };
  setPagination: React.Dispatch<
    React.SetStateAction<{
      page: number;
      perPage: string;
    }>
  >;
  sorting: boolean | string;
  setSorting: React.Dispatch<React.SetStateAction<boolean | string>>;
  customFilters: CustomFilter[];
  selectedCF: CustomFilter | null;
  setSelectedCF: React.Dispatch<React.SetStateAction<CustomFilter | null>>;
};

const TableContext = React.createContext<TableContextProps<any>>({
  table: null,
  setTable: () => {},
  pagination: { page: 0, perPage: '5' },
  setPagination: () => {},
  sorting: 'reset',
  setSorting: () => {},
  customFilters: [],
  selectedCF: null,
  setSelectedCF: () => {},
});

export default function TableWrapper({ children }: { children: React.ReactNode }) {
  const [table, setTable] = React.useState<MRT_TableInstance<any> | null>(null);
  const [pagination, setPagination] = React.useState({ page: 0, perPage: '5' });
  const [sorting, setSorting] = React.useState<boolean | string>('reset');
  const [customFilters] = React.useState<CustomFilter[]>(MockCustomFilters);
  const [selectedCF, setSelectedCF] = React.useState<CustomFilter | null>(null);

  const value = React.useMemo(
    () => ({
      table,
      setTable,
      pagination,
      setPagination,
      sorting,
      setSorting,
      customFilters,
      selectedCF,
      setSelectedCF,
    }),
    [customFilters, pagination, selectedCF, sorting, table],
  );

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
}

export function useTable<T extends Record<string, unknown>>() {
  const context = React.useContext(TableContext as React.Context<TableContextProps<T>>);

  if (!context) {
    throw new Error('useTable must be used within a TableWrapper');
  }

  return context;
}
