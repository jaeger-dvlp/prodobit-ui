import { Button } from '@mantine/core';
import { CustomCaret } from '@/components/icons';
import { NavLink, useMatch } from 'react-router-dom';

function MainRouteLink({
  to,
  children,
  haveSubRoutes,
}: {
  to: string;
  children: React.ReactNode;
  haveSubRoutes?: boolean;
}) {
  const routeStatus = useMatch(to);

  return (
    <Button
      to={to}
      variant="default"
      className={`main-route-link ${routeStatus && 'main-route-link-active'}`}
      component={NavLink}
      sx={(theme) => ({
        border: 'none',
        display: 'flex',
        fontSize: '20px',
        borderRadius: 20,
        padding: '20px 30px',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        height: 'fit-content',
        justifyContent: 'start',
        transition: 'all 0.15s ease-in-out',
        color: routeStatus ? theme.colors.foundationgreen[9] : '#676668',
        backgroundColor: routeStatus
          ? theme.colors.foundationgreen[1]
          : 'transparent',
        ':hover': {
          color: theme.colors.foundationgreen[9],
          backgroundColor: routeStatus
            ? theme.colors.foundationgreen[1]
            : 'transparent',
        },
      })}
    >
      {children}
      {haveSubRoutes && (
        <CustomCaret
          width={24}
          style={{
            right: 30,
            top: '50%',
            position: 'absolute',
            transition: 'all 0.15s ease-in-out',
            transform: `translateY(-50%) ${
              routeStatus ? 'rotate(180deg)' : 'rotate(0deg)'
            }`,
          }}
        />
      )}
    </Button>
  );
}

export default MainRouteLink;
