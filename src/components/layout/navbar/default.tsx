import { Box } from '@mantine/core';

export default function DefaultNavbar({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Box>
  );
}
