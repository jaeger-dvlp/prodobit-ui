import loadable from '@loadable/component';
import Loader from '@/components/layout/Loader';

// LoadableWrapper is a wrapper for loadable components, its can take props.
const LoadableWrapper = (component: any) =>
  loadable(() => component, { fallback: <Loader /> });

const Dashboard = LoadableWrapper(import('@/views/dashboard'));
const Items = LoadableWrapper(import('@/views/items'));
const Analytics = LoadableWrapper(import('@/views/analytics'));
const AnalyticsSales = LoadableWrapper(import('@/views/analytics/sales'));
const AnalyticsGnAnalytics = LoadableWrapper(
  import('@/views/analytics/gn-analytics'),
);
const AnalyticsGnAnalyticsGeneral = LoadableWrapper(
  import('@/views/analytics/gn-analytics/general'),
);
const AnalyticsGnAnalyticsTasks = LoadableWrapper(
  import('@/views/analytics/gn-analytics/tasks'),
);
const AnalyticsGnAnalyticsJobs = LoadableWrapper(
  import('@/views/analytics/gn-analytics/jobs'),
);
const AnalyticsPerformance = LoadableWrapper(
  import('@/views/analytics/performance'),
);
const Requests = LoadableWrapper(import('@/views/requests'));
const Tasks = LoadableWrapper(import('@/views/tasks'));

const Views = {
  Dashboard,
  Items,
  Analytics: {
    Index: Analytics,
    Sales: AnalyticsSales,
    GnAnalytics: {
      Index: AnalyticsGnAnalytics,
      General: AnalyticsGnAnalyticsGeneral,
      Tasks: AnalyticsGnAnalyticsTasks,
      Jobs: AnalyticsGnAnalyticsJobs,
    },
    Performance: AnalyticsPerformance,
  },
  Requests,
  Tasks,
};

export default Views;
