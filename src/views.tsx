import loadable from '@loadable/component';
import Loader from '@/components/layout/Loader';

// LoadableWrapper is a wrapper for loadable components, its can take props.
const LoadableWrapper = (component: any) => loadable(() => component, { fallback: <Loader /> });

const Login = LoadableWrapper(import('@/views/auth/login'));

const Dashboard = LoadableWrapper(import('@/views/dashboard'));
const Items = LoadableWrapper(import('@/views/items'));
const ItemsList = LoadableWrapper(import('@/views/items/list'));
const ItemsCategories = LoadableWrapper(import('@/views/items/categories'));
const ItemsCategoriesList = LoadableWrapper(import('@/views/items/categories/list'));
const ItemsCategoriesDeleted = LoadableWrapper(import('@/views/items/categories/deleted'));
const ItemsCategoriesJobs = LoadableWrapper(import('@/views/items/categories/jobs'));
const ItemsPerformance = LoadableWrapper(import('@/views/items/performance'));

const Requests = LoadableWrapper(import('@/views/requests'));
const Tasks = LoadableWrapper(import('@/views/tasks'));

const Views = {
  Auth: {
    Login,
  },
  Dashboard,
  Items: {
    Index: Items,
    List: ItemsList,
    Categories: {
      Index: ItemsCategories,
      List: ItemsCategoriesList,
      Deleted: ItemsCategoriesDeleted,
      Jobs: ItemsCategoriesJobs,
    },
    Performance: ItemsPerformance,
  },
  Requests,
  Tasks,
};

export default Views;
