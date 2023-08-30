import loadable from '@loadable/component';
import Loader from '@/components/layout/Loader';

// LoadableWrapper is a wrapper for loadable components, its can take props.
const LoadableWrapper = (component: any) => loadable(() => component, { fallback: <Loader /> });

const Login = LoadableWrapper(import('@/views/auth/login'));

const Dashboard = LoadableWrapper(import('@/views/dashboard'));
const Items = LoadableWrapper(import('@/views/items'));
const ItemsList = LoadableWrapper(import('@/views/items/list'));
const ItemsEdit = LoadableWrapper(import('@/views/items/edit'));
const ItemsNew = LoadableWrapper(import('@/views/items/new'));
const ItemsCategories = LoadableWrapper(import('@/views/items/categories'));
const ItemsCategoriesList = LoadableWrapper(import('@/views/items/categories/list'));
const ItemsCategoriesDeleted = LoadableWrapper(import('@/views/items/categories/deleted'));
const ItemsCategoriesJobs = LoadableWrapper(import('@/views/items/categories/jobs'));
const ItemsPerformance = LoadableWrapper(import('@/views/items/performance'));

const Orders = LoadableWrapper(import('@/views/orders'));
const OrdersList = LoadableWrapper(import('@/views/orders/list'));

const Planning = LoadableWrapper(import('@/views/planning'));
const PlanningWorkflow = LoadableWrapper(import('@/views/planning/workflow'));

const Tasks = LoadableWrapper(import('@/views/tasks'));

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
    Index: null,
  },
};

export default Views;
