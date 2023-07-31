import { Item } from '@/views/items/list/WithItems';
import React from 'react';

type EditContextProps<T> = {
  item: T | null;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
};

const EditContext = React.createContext<EditContextProps<any>>({
  item: null,
  setItem: () => {},
});

export default function EditWrapper({ children }: { children: React.ReactNode }) {
  const [item, setItem] = React.useState<any | null>(null);

  const value = React.useMemo(
    () => ({
      item,
      setItem,
    }),
    [item],
  );

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
}

export function useEdit<T>() {
  const context = React.useContext(EditContext as React.Context<EditContextProps<T>>);
  if (!context) {
    throw new Error('useEdit must be used within a EditContext');
  }
  return context;
}
