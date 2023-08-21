import { Variant } from 'framer-motion';

import { TasksIcon, RequestsIcon, AnalyzesIcon, DashboardIcon } from '@/components/icons';

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
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      height: 'fit-content',
      marginTop: 25,
      transition: {
        duration: 0.2,
      },
    },
  },
};

export interface RouteMapItem {
  path: string;
  name: string;
  icon?: React.ReactNode;
  subRoutes?: RouteMapItem[];
  viewInSidebar: boolean;
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
    viewInSidebar: true,
  },
  {
    path: '/items',
    name: 'Öğeler',
    icon: <AnalyzesIcon {...IconProps} />,
    viewInSidebar: true,
    subRoutes: [
      {
        path: '/items/edit',
        name: 'Öğe Düzenle',
        viewInSidebar: false,
      },
      {
        path: '/items/new',
        name: 'Öğe Ekle',
        viewInSidebar: false,
      },
      {
        path: '/items/list',
        name: 'Öğe Listesi',
        viewInSidebar: true,
      },
      {
        path: '/items/categories',
        name: 'Kategoriler',
        viewInSidebar: true,
        subRoutes: [
          {
            path: '/items/categories/list',
            name: 'Kategori Listesi',
            viewInSidebar: true,
          },
          {
            path: '/items/categories/deleted',
            name: 'Silinenler',
            viewInSidebar: true,
          },
          {
            path: '/items/categories/jobs',
            name: 'İşler',
            viewInSidebar: true,
          },
        ],
      },
      {
        path: '/items/performance',
        name: 'Performans',
        viewInSidebar: true,
      },
    ],
  },
  {
    path: '/planning',
    name: 'Planlama',
    icon: <RequestsIcon {...IconProps} />,
    subRoutes: [
      {
        path: '/planning/workflow',
        name: 'İş Akışı',
        viewInSidebar: true,
      },
    ],
    viewInSidebar: true,
  },
  {
    path: '/tasks',
    name: 'Görevler',
    icon: <TasksIcon {...IconProps} />,
    viewInSidebar: true,
  },
];

export default RoutesMap;
