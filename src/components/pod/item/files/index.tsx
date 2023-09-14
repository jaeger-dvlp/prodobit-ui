import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text, Title, createStyles } from '@mantine/core';
import { ImageIcon, PenToolIcon } from '@/components/icons';

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
  headingGroup: {
    gap: 5,
    display: 'flex',
    paddingBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: `1px solid rgba(0, 0, 0, 0.20)`,
    '> .heading-buttons': {
      gap: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '> .heading-btn': {
        border: 'none',
        height: 'auto',
        fontWeight: 500,
        fontSize: '15px',
        borderRadius: 100,
        padding: '9px 18px',
        color: t.colors.gray[8],
        transition: 'all 0.2s ease',
        backdropFilter: 'blur(74px)',
        backgroundColor: 'transparent',
        boxShadow:
          '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0) inset',
        '> div > span': {
          gap: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '> svg': {
            width: 16,
            height: 16,
            color: t.colors.blue[5],
          },
        },
        "&[data-selected-category='true']": {
          color: t.colors.blue[5],
          backgroundColor: 'rgba(255, 255, 255, 0.40)',
          boxShadow:
            '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
        },
      },
    },
  },
  pageHeading: {
    fontWeight: 500,
    fontSize: '31px',
    color: t.colors.gray[9],
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PaProductionItemFilesContent({ item }: Props) {
  const { classes } = styles();
  const [selectedFilesCategory, setSelectedFilesCategory] = React.useState<string>('images');

  return (
    <Box className={classes.root}>
      <Box className={classes.headingGroup}>
        <Title className={classes.pageHeading} order={1}>
          Dosyalar
        </Title>
        <Box className="heading-buttons">
          <Button
            variant="default"
            className="heading-btn"
            onClick={() => setSelectedFilesCategory('images')}
            data-selected-category={selectedFilesCategory === 'images'}
          >
            <ImageIcon />
            <Text>Görseller</Text>
          </Button>
          <Button
            variant="default"
            className="heading-btn"
            onClick={() => setSelectedFilesCategory('technical-drawings')}
            data-selected-category={selectedFilesCategory === 'technical-drawings'}
          >
            <PenToolIcon />
            <Text>Teknik Çizim</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PaProductionItemFilesContent;
