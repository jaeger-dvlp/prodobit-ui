import dayjs from 'dayjs';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Image, Text } from '@mantine/core';
import { useEdit } from '@/components/context/ItemEdit.context';
import { ScanBarcodeIcon, TimerIcon } from '@/components/icons';
import { Item } from '@/views/app/items/list/WithItems';

import 'dayjs/locale/tr';

export function ItemBarcode({ barcode }: { barcode: string }) {
  return (
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
        {barcode}
      </Text>
    </Box>
  );
}

export function ItemDateBox({ date }: { date: string }) {
  return (
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
        {date}
      </Text>
    </Box>
  );
}

function ItemMainInfo({ withBrand = false }: { withBrand?: boolean }) {
  const { item } = useEdit<Item>();
  return (
    <Box
      sx={{
        gap: 20,
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          gap: 6,
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <ItemBarcode barcode={item?.code || '? Code'} />
        <ItemDateBox
          date={dayjs(item?.created_at)
            .locale('tr')
            .format('DD MMMM YYYY - HH:mm')}
        />

        {withBrand && (
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
            <Text
              sx={{
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '14.4px',
              }}
            >
              {item?.brand?.name || '? Brand'}
            </Text>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          gap: 20,
          display: 'flex',
          flexDirection: 'row',
          wdith: 'fit-content',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Image
          fit="cover"
          width={58}
          height={58}
          radius={100}
          alt={item?.name}
          src={item?.image || 'https://placehold.co/400'}
        />
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
          {item?.name || '? Product Name'}
        </Text>
      </Box>
    </Box>
  );
}

export default ItemMainInfo;
