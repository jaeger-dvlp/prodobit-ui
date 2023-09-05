import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Title, createStyles } from '@mantine/core';

type Props = {
  item: any;
};

const styles = createStyles({
  root: {
    gap: 30,
    width: '100%',
    paddingTop: 50,
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  pageHeading: {
    fontWeight: 500,
    fontSize: '31px',
    paddingBottom: 30,
    color: t.colors.gray[9],
    borderBottom: `1px solid rgba(0, 0, 0, 0.20)`,
  },
});

function PaProductionItemFilesContent({ item }: Props) {
  const { classes } = styles();
  console.log(item);
  return (
    <Box className={classes.root}>
      <Title className={classes.pageHeading} order={1}>
        Dosyalar
      </Title>
    </Box>
  );
}

export default PaProductionItemFilesContent;
