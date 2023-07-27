import { MRT_TableInstance } from 'mantine-react-table';
import React from 'react';

type TableContextProps<T extends Record<string, unknown>> = {
  table: MRT_TableInstance<T> | null;
  setTable: React.Dispatch<React.SetStateAction<MRT_TableInstance<T> | null>>;
};

const TableContext = React.createContext<TableContextProps<any>>({
  table: null,
  setTable: () => {},
});

export default function TableWrapper({ children }: { children: React.ReactNode }) {
  const [table, setTable] = React.useState<MRT_TableInstance<any> | null>(null);

  const value = React.useMemo(() => ({ table, setTable }), [table, setTable]);

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
}

export function useTable<T extends Record<string, unknown>>() {
  const context = React.useContext(TableContext as React.Context<TableContextProps<T>>);

  if (!context) {
    throw new Error('useTable must be used within a TableWrapper');
  }

  return context;
}
