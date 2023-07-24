import { BsPlusLg } from 'react-icons/bs';
import { Button, Text } from '@mantine/core';

function AddButtons({
  onItemAdd,
  onCategoryAdd,
}: {
  onItemAdd?: () => void;
  onCategoryAdd?: () => void;
}) {
  return (
    <>
      <Button
        type="button"
        variant="default"
        onClick={onItemAdd}
        leftIcon={<BsPlusLg width={24} height={24} />}
        sx={(theme) => ({
          color: 'white',
          height: 'auto',
          fontWeight: 300,
          fontSize: '22px',
          borderRadius: 100,
          padding: '20px 30px',
          transition: 'all .15s ease',
          border: `1px solid ${theme.colors.foundationgreen[6]}`,
          backgroundColor: `${theme.colors.foundationgreen[6]}!important`,
          ':hover': { filter: 'brightness(0.8)' },
          [theme.fn.smallerThan('md')]: {
            fontSize: '18px',
            padding: '15px 25px',
          },
        })}
      >
        <Text
          sx={{
            lineHeight: 1.2,
          }}
        >
          Öğe Ekle
        </Text>
      </Button>
      <Button
        type="button"
        variant="default"
        onClick={onCategoryAdd}
        leftIcon={<BsPlusLg width={24} height={24} />}
        sx={(theme) => ({
          height: 'auto',
          fontWeight: 300,
          fontSize: '22px',
          borderRadius: 100,
          padding: '20px 30px',
          transition: 'all .15s ease',
          backgroundColor: `white!important`,
          color: theme.colors.foundationgreen[9],
          border: `1px solid ${theme.colors.foundationgreen[6]}`,
          ':hover': { filter: 'brightness(0.8)' },
          [theme.fn.smallerThan('md')]: {
            fontSize: '18px',
            padding: '15px 25px',
          },
        })}
      >
        <Text
          sx={{
            lineHeight: 1.2,
          }}
        >
          Kategori Ekle
        </Text>
      </Button>
    </>
  );
}

export default AddButtons;
