import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import PodItemsNavbar from '@/components/pod/navbar';
import { Box, Title, createStyles } from '@mantine/core';

type Props = {
  item: any;
};

const styles = createStyles({
  root: {
    gap: 60,
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  pageHeading: {
    fontWeight: 500,
    fontSize: '31px',
    paddingBottom: 30,
    color: t.colors.gray[9],
    borderBottom: `1px solid rgba(0, 0, 0, 0.20)`,
  },
});

function PaProductionItemNotesContent({ item }: Props) {
  const { classes } = styles();
  console.log(item);
  return (
    <Box className={classes.root}>
      <PodItemsNavbar />
      <Title className={classes.pageHeading} order={1}>
        Üretim Notları
      </Title>
    </Box>
  );
}

export default PaProductionItemNotesContent;
