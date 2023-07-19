import React from 'react';
import { Box } from '@mantine/core';
import { useLocation } from 'react-router-dom';

function RouteLeftIndicator() {
  const [pos, setPos] = React.useState(9999);

  const location = useLocation();

  function HandleIndication() {
    const el = document.querySelector('.main-route-link-active') as HTMLElement;

    if (el) {
      const Y = el.offsetTop;
      return setPos(Y);
    }

    return setPos(9999);
  }

  React.useEffect(() => {
    HandleIndication();

    window.addEventListener('resize', HandleIndication);
    window.addEventListener('load', HandleIndication);

    return () => {
      window.removeEventListener('resize', HandleIndication);
      window.removeEventListener('load', HandleIndication);
    };
  }, [location.pathname]);

  if (pos === 9999) return null;

  return (
    <Box
      component="div"
      className="route-indicator"
      sx={(theme) => ({
        left: 0,
        top: pos,
        width: 10,
        height: 63,
        position: 'absolute',
        borderRadius: '0px 20px 20px 0px',
        transition: 'all 0.15s ease-in-out',
        backgroundColor: theme.colors.foundationgreen[9],
        [theme.fn.smallerThan('md')]: {
          display: 'none',
        },
      })}
    />
  );
}

export default RouteLeftIndicator;
