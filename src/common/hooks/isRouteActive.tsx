import { useMatch } from 'react-router-dom';

const isRouteActive = (route: string) => {
  return useMatch(`${route.endsWith('/') ? route : `${route}/`}*`);
};

export default isRouteActive;
