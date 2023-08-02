import dayjs from 'dayjs';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Image, Text } from '@mantine/core';
import { Item } from '@/views/items/list/WithItems';
import { useEdit } from '@/components/context/ItemEdit.context';
import { ScanBarcodeIcon, TimerIcon } from '@/components/icons';

import 'dayjs/locale/tr';

function ItemMainInfo() {
  const { item } = useEdit<Item>();
  return (
    <>
      <Box
        sx={{
          gap: 6,
          display: 'flex',
          flexWrap: 'wrap',
          width: 'fit-content',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            gap: 10,
            borderRadius: 5,
            display: 'flex',
            padding: '7px 10px',
            flexDirection: 'row',
            alignItems: 'center',
            color: t.colors.blue[7],
            justifyContent: 'center',
            backgroundColor: t.colors.blue[0],
            border: `1px solid ${t.colors.blue[0]}`,
          }}
        >
          <ScanBarcodeIcon width={12} height={12} />
          <Text
            sx={{
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '14.4px',
              color: t.colors.blue[5],
            }}
          >
            {item?.code}
          </Text>
        </Box>
        <Box
          sx={{
            gap: 5,
            borderRadius: 5,
            display: 'flex',
            padding: '7px 10px',
            flexDirection: 'row',
            alignItems: 'center',
            color: t.colors.blue[5],
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: `1px solid ${t.colors.blue[2]}`,
          }}
        >
          <TimerIcon width={12} height={12} />
          <Text
            sx={{
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '14.4px',
            }}
          >
            {dayjs(item?.created_at)
              .locale('tr')
              .format('DD MMMM YYYY - HH:mm')}
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          gap: 20,
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          wdith: 'fit-content',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Image fit="cover" width={58} height={58} radius={100} alt={item?.name} src={item?.image} />
        <Text
          sx={{
            color: '#000',
            maxWidth: 326,
            fontWeight: 500,
            fontSize: '26px',
            lineHeight: '31.2px',
            [t.fn.smallerThan('md')]: {
              fontSize: '20px',
              lineHeight: '24px',
            },
          }}
        >
          {item?.name}
        </Text>
      </Box>
    </>
  );
}

export default ItemMainInfo;
