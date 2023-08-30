import loadable from '@loadable/component';
import Loader from '@/components/layout/Loader';

// LoadableWrapper is a wrapper for loadable components, its can take props.
const LoadableWrapper = (component: any) => loadable(() => component, { fallback: <Loader /> });

const Login = LoadableWrapper(import('@/views/app/auth/login'));

const Dashboard = LoadableWrapper(import('@/views/app/dashboard'));
const Items = LoadableWrapper(import('@/views/app/items'));
const ItemsList = LoadableWrapper(import('@/views/app/items/list'));
const ItemsEdit = LoadableWrapper(import('@/views/app/items/edit'));
const ItemsNew = LoadableWrapper(import('@/views/app/items/new'));
const ItemsCategories = LoadableWrapper(import('@/views/app/items/categories'));
const ItemsCategoriesList = LoadableWrapper(import('@/views/app/items/categories/list'));
const ItemsCategoriesDeleted = LoadableWrapper(import('@/views/app/items/categories/deleted'));
const ItemsCategoriesJobs = LoadableWrapper(import('@/views/app/items/categories/jobs'));
const ItemsPerformance = LoadableWrapper(import('@/views/app/items/performance'));

const Orders = LoadableWrapper(import('@/views/app/orders'));
const OrdersList = LoadableWrapper(import('@/views/app/orders/list'));

const Planning = LoadableWrapper(import('@/views/app/planning'));
const PlanningWorkflow = LoadableWrapper(import('@/views/app/planning/workflow'));

const Tasks = LoadableWrapper(import('@/views/app/tasks'));

const PodAppIndex = LoadableWrapper(import('@/views/pod'));

const Views = {
  App: {
    Auth: {
      Login,
    },
    Dashboard,
    Items: {
      Index: Items,
      List: ItemsList,
      Edit: ItemsEdit,
      New: ItemsNew,
      Categories: {
        Index: ItemsCategories,
        List: ItemsCategoriesList,
        Deleted: ItemsCategoriesDeleted,
        Jobs: ItemsCategoriesJobs,
      },
      Performance: ItemsPerformance,
    },
    Orders: {
      Index: Orders,
      List: OrdersList,
    },
    Planning: {
      Index: Planning,
      Workflow: PlanningWorkflow,
    },
    Tasks,
  },
  PodApp: {
    Index: PodAppIndex,
  },
};

export default Views;
