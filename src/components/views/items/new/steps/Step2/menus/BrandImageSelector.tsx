import React from 'react';
import { Dropzone } from '@mantine/dropzone';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Menu, Text, TextInput } from '@mantine/core';
import {
  ImageLightIcon,
  CustomSave2Icon,
  CustomSmoothTooltipIllustration,
} from '@/components/icons';

function ItemBrandImageSelector() {
  const [error, setError] = React.useState<string | null>(null);
  const [customImgUrl, setCustomImgUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    (() => {
      const UrlRegex = '(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)';

      if (customImgUrl && !customImgUrl.match(UrlRegex)) {
        setError('Lütfen geçerli bir URL girin.');
        return;
      }

      setError(null);
    })();
  }, [customImgUrl]);

  return (
    <Menu.Dropdown
      sx={{
        gap: 30,
        padding: 0,
        display: 'flex',
        borderRadius: 40,
        marginTop: 120,
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          left: 0,
          top: 150,
          zIndex: 9999,
          color: 'white',
          position: 'absolute',
          transform: 'translateX(-100%)',
        }}
      />
      <Box
        sx={{
          gap: 30,
          padding: 30,
          width: '100%',
          minWidth: 400,
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
              maxWidth: 350,
              padding: 5,
              border: 'none',
              borderRadius: 20,
              cursor: 'pointer',
              aspectRatio: '1/1',
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
            {'Sürükle\nBırak'}
          </Text>
          <Text
            sx={{
              bottom: 24,
              left: '50%',
              fontWeight: 300,
              fontSize: '12px',
              textAlign: 'center',
              lineHeight: '14.4px',
              position: 'absolute',
              color: t.colors.gray[7],
              transform: 'translateX(-50%)',
            }}
          >
            Ya da Tıklayıp Dosya Seçin
          </Text>
        </Dropzone>
        <Box
          sx={{
            gap: 25,
            display: 'flex',
            margin: '10px 0px',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            sx={{
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '18px',
              color: t.colors.gray[7],
            }}
          >
            URL İle Yükle
          </Text>
          <TextInput
            onChange={(e) => setCustomImgUrl(e.currentTarget.value)}
            styles={{
              input: {
                height: 26,
                padding: 0,
                color: '#000',
                border: 'none',
                fontSize: '22px',
                fontWeight: 500,
                lineHeight: '26.4px',
                backgroundColor: 'transparent',
              },
            }}
            placeholder="http://www.img...."
          />
          {error && (
            <Text
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                color: t.colors.red[4],
              }}
            >
              {error}
            </Text>
          )}
        </Box>
      </Box>
      <Button
        variant="default"
        sx={{
          border: 'none',
          color: '#fff',
          width: '100%',
          height: 'auto',
          borderRadius: 40,
          padding: '30px 40px',
          marginBottom: -3,
          backgroundColor: t.colors.green[7],
          transition: 'all 0.15s ease-in-out',
          '&:hover': {
            backgroundColor: t.colors.green[6],
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
            justifyContent: 'space-between',
          },
        }}
      >
        <Text>Görüntüyü Kaydet</Text>
        <Box
          sx={{
            padding: 13,
            display: 'flex',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.20)',
          }}
        >
          <CustomSave2Icon width={24} height={24} />
        </Box>
      </Button>
    </Menu.Dropdown>
  );
}

export default ItemBrandImageSelector;
