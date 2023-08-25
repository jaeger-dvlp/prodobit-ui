import { BsPlusLg } from 'react-icons/bs';
import { Button, Text } from '@mantine/core';

function AddButtons({
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonText,
  secondaryButtonText,
}: {
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}) {
  return (
    <>
      <Button
        type="button"
        variant="default"
        onClick={onPrimaryButtonClick}
        leftIcon={<BsPlusLg width={24} height={24} />}
        sx={(theme) => ({
          color: 'white',
          height: 'auto',
          fontWeight: 300,
          fontSize: '22px',
          borderRadius: 100,
          padding: '20px 30px',
          transition: 'all .15s ease',
          border: `1px solid ${theme.colors.green[6]}`,
          backgroundColor: `${theme.colors.green[6]}!important`,
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
          {primaryButtonText}
        </Text>
      </Button>
      <Button
        type="button"
        variant="default"
        onClick={onSecondaryButtonClick}
        leftIcon={<BsPlusLg width={24} height={24} />}
        sx={(theme) => ({
          height: 'auto',
          fontWeight: 300,
          fontSize: '22px',
          borderRadius: 100,
          padding: '20px 30px',
          transition: 'all .15s ease',
          backgroundColor: `white!important`,
          color: theme.colors.green[9],
          border: `1px solid ${theme.colors.green[6]}`,
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
          {secondaryButtonText}
        </Text>
      </Button>
    </>
  );
}

export default AddButtons;
