import { Box, Text } from '@mantine/core';
import { ProdobitAppTheme as t } from '@/theme';

import {
  TagIcon,
  ChartUpIcon,
  ReceiptIcon,
  MaterialIcon,
  ChartDownIcon,
  PercentageSquareIcon,
} from '@/components/icons';

function ItemFinancialInfo() {
  // const { item } = useEdit<Item>();

  const FinancialSpecs = [
    {
      icon: ReceiptIcon,
      text: 'Maaliyet',
      value: '2500₺',
      status: 'up',
      status_value: '12%',
    },
    {
      icon: MaterialIcon,
      text: 'Hammadde',
      value: '15₺',
      status: 'down',
      status_value: '15%',
    },
    {
      icon: TagIcon,
      text: 'Satış',
      value: '3200₺',
      status: 'down',
      status_value: '05%',
    },
    {
      icon: PercentageSquareIcon,
      text: 'Kazanç',
      value: '%20',
      status: 'up',
      status_value: '12%',
    },
  ];

  return (
    <Box
      component="ul"
      sx={{
        gap: 45,
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {FinancialSpecs.map(({ icon: Icon, text, value, status, status_value }, i) => (
        <Box
          key={`i-f-spec-${i}`}
          component="li"
          sx={{
            gap: 7,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              gap: 7,
              display: 'flex',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
              alignItems: 'center',
              flexDirection: 'row',
              color: t.colors.gray[7],
              justifyContent: 'flex-start',
            }}
          >
            <Icon width={14} height={14} />
            <Text>{text}</Text>
          </Box>
          <Text
            sx={{
              marginTop: 5,
              fontWeight: 600,
              fontSize: '26px',
              lineHeight: '31.2px',
              color: t.colors.gray[7],
            }}
          >
            {value}
          </Text>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              fontWeight: 600,
              fontSize: '12px',
              borderRadius: 50,
              padding: '2px 6px',
              lineHeight: '14.4px',
              width: 'fit-content',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              color: status === 'up' ? t.colors.green[9] : t.colors.red[9],
              backgroundColor: status === 'up' ? t.colors.green[3] : t.colors.red[3],
            }}
          >
            {status === 'up' && <ChartUpIcon width={13} height={7} />}
            {status === 'down' && <ChartDownIcon width={13} height={7} />}
            <Text>{status_value}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ItemFinancialInfo;
