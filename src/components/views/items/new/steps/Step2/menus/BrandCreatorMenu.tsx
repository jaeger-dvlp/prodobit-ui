import { Dropzone } from '@mantine/dropzone';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Divider, Menu, Select, Text, Textarea } from '@mantine/core';
import { CustomSmoothTooltipIllustration, ImageLightIcon } from '@/components/icons';

function ItemBrandCreator() {
  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginTop: 30,
        width: '100%',
        maxWidth: 349,
        border: 'none',
        display: 'flex',
        borderRadius: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          left: '50%',
          top: '0px',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-65%) translateX(-50%) rotate(90deg)',
        }}
      />
      <Box
        sx={{
          gap: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          borderRadius: 20,
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
        }}
      >
        <Box
          sx={{
            gap: 0,
            padding: 10,
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Dropzone
            id="dropzone"
            onDrop={(files) => console.log(files)}
            styles={{
              root: {
                width: '100%',
                padding: 5,
                border: 'none',
                borderRadius: 10,
                cursor: 'pointer',
                aspectRatio: '3/1',
                position: 'relative',
                backgroundColor: t.colors.gray[1],
                ':hover': {
                  backgroundColor: t.colors.gray[3],
                },
              },
              inner: {
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
              },
            }}
          >
            <ImageLightIcon width={60} height={60} />
            <Text
              sx={{
                color: '#000',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '26.4px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {'Logo\nEkle'}
            </Text>
          </Dropzone>
          <Box
            sx={{
              gap: 25,
              marginTop: 20,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              padding: '10px 20px 40px 20px',
            }}
          >
            <Text
              sx={{
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '18px',
                color: t.colors.gray[6],
              }}
            >
              Marka Adı Belirle
            </Text>
            <Textarea
              autosize
              defaultValue="BK23SR25"
              styles={{
                input: {
                  padding: 0,
                  color: '#000',
                  border: 'none',
                  height: 'auto',
                  fontWeight: 400,
                  fontSize: '37px',
                  lineHeight: '44.4px',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  backgroundColor: 'transparent',
                },
              }}
            />
            <Divider w="100%" color={t.colors.gray[3]} />
          </Box>
          <Select
            styles={{
              input: {
                padding: 20,
                border: 'none',
                borderRadius: 10,
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '18px',
                color: '#000',
                minHeight: 58,
                '::placeholder': {
                  color: '#000',
                },
                backgroundColor: t.colors.gray[1],
              },
              dropdown: {
                padding: 10,
                borderRadius: 15,
                boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
              },
              item: {
                borderRadius: 10,
              },
            }}
            placeholder="Ana Grup Belirle"
            data={[{ label: 'deneme', value: 'deneme' }]}
          />
        </Box>
      </Box>
      <Button
        variant="default"
        sx={{
          marginTop: 5,
          border: 'none',
          color: '#fff',
          width: '100%',
          height: 'auto',
          borderRadius: 20,
          padding: '30px 40px',
          backgroundColor: t.colors.green[6],
          transition: 'all 0.15s ease-in-out',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '&:hover': {
            backgroundColor: t.colors.green[5],
          },
          '> div > span': {
            gap: 5,
            width: '100%',
            display: 'flex',
            fontWeight: 500,
            fontSize: '18px',
            alignItems: 'center',
            flexDirection: 'row',
            color: t.colors.gray[0],
            justifyContent: 'center',
          },
        }}
      >
        <Text>Kaydet</Text>
      </Button>
    </Menu.Dropdown>
  );
}

export default ItemBrandCreator;
