import { Text } from '@mantine/core';

function ItemCountDisplay({ itemCount }: { itemCount: number }) {
  if (itemCount === 0) {
    return (
      <Text
        sx={(theme) => ({
          color: '#39373A',
          fontSize: '22px',
          fontWeight: 400,
          [theme.fn.smallerThan('md')]: {
            fontSize: '18px',
          },
        })}
        miw="fit-content"
      >
        Öğe Bulunamadı
      </Text>
    );
  }

  return (
    <Text
      sx={(theme) => ({
        color: '#39373A',
        fontSize: '22px',
        fontWeight: 400,
        [theme.fn.smallerThan('md')]: {
          fontSize: '18px',
        },
      })}
      miw="fit-content"
    >
      <Text component="b">{itemCount}</Text> Öğe Bulundu
    </Text>
  );
}

export default ItemCountDisplay;
