import { Variant } from 'framer-motion';

import {
  AnalyzesIcon,
  DashboardIcon,
  RequestsIcon,
  TasksIcon,
} from '@/components/icons';

export const SubRouteAnims: {
  [key: string]: {
    [key: string]: Variant;
  };
} = {
  seconds: {
    hidden: {
      opacity: 0,
      y: -10,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.15,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: 'fit-content',
      marginTop: 30,
      transition: {
        duration: 0.15,
      },
    },
  },
  thirds: {
    hidden: {
      opacity: 0,
      x: -20,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.15,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      height: 'fit-content',
      marginTop: 30,
      transition: {
        duration: 0.15,
      },
    },
  },
};

export interface RouteMapItem {
  path: string;
  name: string;
  icon?: React.ReactNode;
  subRoutes?: RouteMapItem[];
}

const IconProps = {
  width: 23,
  height: 23,
  style: {
    marginRight: 15,
  },
  fill: 'currentColor',
};

const RoutesMap: RouteMapItem[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon {...IconProps} />,
  },
  {
    path: '/analytics',
    name: 'Analizler',
    icon: <AnalyzesIcon {...IconProps} />,
    subRoutes: [
      {
        path: '/analytics/sales',
        name: 'Satış',
      },
      {
        path: '/analytics/general-analytics',
        name: 'Genel Analiz',
        subRoutes: [
          {
            path: '/analytics/general-analytics/general',
            name: 'Genel',
          },
          {
            path: '/analytics/general-analytics/tasks',
            name: 'Görevler',
          },
          {
            path: '/analytics/general-analytics/jobs',
            name: 'İşler',
          },
        ],
      },
      {
        path: '/analytics/performance',
        name: 'Performans',
      },
    ],
  },
  {
    path: '/requests',
    name: 'Talepler',
    icon: <RequestsIcon {...IconProps} />,
  },
  {
    path: '/tasks',
    name: 'Görevler',
    icon: <TasksIcon {...IconProps} />,
  },
];

export default RoutesMap;
