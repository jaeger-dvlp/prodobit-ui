import React from 'react';
import dayjs from 'dayjs';

export type IWorkflow = {
  currentDay: string;
  currentMonth: string;
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMonth: React.Dispatch<React.SetStateAction<string>>;
};

const WorkflowContext = React.createContext<IWorkflow>({
  currentDay: dayjs().format('D'),
  currentMonth: dayjs().format('M'),
  setCurrentDay: () => {},
  setCurrentMonth: () => {},
});

export default function WorkflowWrapper({ children }: { children: React.ReactNode }) {
  const [currentDay, setCurrentDay] = React.useState<string>('1');
  const [currentMonth, setCurrentMonth] = React.useState<string>('8');

  const value = React.useMemo(
    () => ({
      currentDay,
      currentMonth,
      setCurrentDay,
      setCurrentMonth,
    }),
    [currentDay, currentMonth],
  );

  return <WorkflowContext.Provider value={value}>{children}</WorkflowContext.Provider>;
}

export function useWorkflow() {
  const context = React.useContext(WorkflowContext);
  if (context === undefined) {
    throw new Error('useWorkflow must be used within a WorkflowWrapper');
  }
  return context;
}
