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
    path: '/app/dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon {...IconProps} />,
    viewInSidebar: true,
  },
  {
    path: '/app/items',
    name: 'Öğeler',
    icon: <AnalyzesIcon {...IconProps} />,
    viewInSidebar: true,
    subRoutes: [
      {
        path: '/app/items/edit',
        name: 'Öğe Düzenle',
        viewInSidebar: false,
      },
      {
        path: '/app/items/new',
        name: 'Öğe Ekle',
        viewInSidebar: false,
      },
      {
        path: '/app/items/list',
        name: 'Öğe Listesi',
        viewInSidebar: true,
      },
      {
        path: '/app/items/categories',
        name: 'Kategoriler',
        viewInSidebar: true,
        subRoutes: [
          {
            path: '/app/items/categories/list',
            name: 'Kategori Listesi',
            viewInSidebar: true,
          },
          {
            path: '/app/items/categories/deleted',
            name: 'Silinenler',
            viewInSidebar: true,
          },
          {
            path: '/app/items/categories/jobs',
            name: 'İşler',
            viewInSidebar: true,
          },
        ],
      },
      {
        path: '/app/items/performance',
        name: 'Performans',
        viewInSidebar: true,
      },
    ],
  },
  {
    path: '/app/orders',
    name: 'Siparişler',
    icon: <AnalyzesIcon {...IconProps} />,
    viewInSidebar: true,
    subRoutes: [
      {
        path: '/app/orders/list',
        name: 'Sipariş Listesi',
        viewInSidebar: true,
      },
    ],
  },
  {
    path: '/app/planning',
    name: 'Planlama',
    icon: <RequestsIcon {...IconProps} />,
    subRoutes: [
      {
        path: '/app/planning/workflow',
        name: 'İş Akışı',
        viewInSidebar: true,
      },
    ],
    viewInSidebar: true,
  },
  {
    path: '/pod',
    name: 'Pod App',
    icon: <TasksIcon {...IconProps} />,
    viewInSidebar: true,
  },
];

export default RoutesMap;
