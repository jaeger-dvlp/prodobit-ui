import React from 'react';

export type INewItem = {};

export type INewItemContext = {
  newItem: INewItem | null;
  currentStep: number;
  updateNewItem: (newItem: INewItem) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const NewItemContext = React.createContext<INewItemContext>({
  newItem: null,
  currentStep: 0,
  updateNewItem: () => {},
  setCurrentStep: () => {},
});

export default function NewItemWrapper({ children }: { children: React.ReactNode }) {
  const [newItem, setNewItem] = React.useState<INewItem | null>(null);
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const updateNewItem = React.useCallback((item: INewItem) => {
    setNewItem(item);
  }, []);

  const value = React.useMemo(
    () => ({
      newItem,
      currentStep,
      updateNewItem,
      setCurrentStep,
    }),
    [currentStep, newItem, updateNewItem],
  );

  return <NewItemContext.Provider value={value}>{children}</NewItemContext.Provider>;
}

export function useNewItem() {
  const context = React.useContext(NewItemContext);
  if (context === undefined) {
    throw new Error('useNewItem must be used within a NewItemWrapper');
  }
  return context;
}
