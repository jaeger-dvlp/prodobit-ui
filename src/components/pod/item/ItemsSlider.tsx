import React from 'react';
import Swiper from 'swiper';
import { motion } from 'framer-motion';
import { PodMockProdLine } from 'mockdata';
import { ProdobitAppTheme as t } from '@/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper as SwiperComp, SwiperSlide } from 'swiper/react';
import { Box, Button, Divider, Text, createStyles } from '@mantine/core';
import { getColorByStatus, getProdItemPercent } from '@/views/pod/production/list';

import {
  SandTimerIcon,
  CustomPauseIcon,
  CustomArrowLeftIcon,
  CustomArrowRightIcon,
  CustomSpeedoMeterIcon,
} from '@/components/icons';

type Props = {
  item: any;
};

const styles = createStyles({
  topBar: {
    gap: 33,
    display: 'flex',
    padding: '0px 50px',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '> .back-btn': {
      height: '100%',
      borderRadius: 10,
      minHeight: '110px',
      padding: '10px 30px',
      backgroundColor: 'transparent',
      border: `1px solid rgba(0, 0, 0, 0.10)`,
      '> div > span': {
        gap: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '> svg': {
          width: 31,
          height: 31,
          color: t.colors.gray[8],
        },
        '> .mantine-Text-root': {
          fontWeight: 500,
          fontSize: '12px',
          color: t.colors.gray[9],
        },
      },
    },
    '> .item-line': {
      gap: 23,
      display: 'flex',
      width: '100%',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'stretch',
      '> .item-line-top-container': {
        gap: 15,
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '> .item-line-id': {
          gap: 20,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          '> .item-line-top-no': {
            fontWeight: 500,
            fontSize: '22px',
            borderRadius: 100,
            textAlign: 'center',
            padding: '10px 20px',
          },
          '> .item-line-top-name': {
            fontWeight: 700,
            fontSize: '15px',
            maxWidth: '120px',
            whiteSpace: 'pre-wrap',
            color: t.colors.gray[9],
          },
        },
        '> .item-line-spec-container': {
          gap: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '> .item-line-spec': {
            gap: 0,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
            '> .spec-name': {
              opacity: 0.4,
              lineHeight: 1,
              fontWeight: 700,
              fontSize: '12px',
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',

              color: t.colors.gray[9],
            },

            '>.spec-value': {
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: 1,
              color: t.colors.gray[9],
            },
          },
        },
      },
      '> .item-prods-container': {
        gap: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'stretch',
        '> .prod-progress-item': { height: 34, width: '100%', borderRadius: 5 },
      },
    },
  },
  container: {
    gap: 40,
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '60px 0px',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'stretch',
  },
  itemsSwiper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    overflowY: 'auto',
    minHeight: '400px',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    '.item-slide': {
      gap: 40,
      height: '100%',
      padding: 30,
      minHeight: 300,
      width: '100%',
      display: 'flex',
      borderRadius: 40,
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(255, 255, 255, 0.30)',
      '> .item-slide-top': {
        gap: 5,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '> .item-slide-top-name': {
          maxWidth: 130,
          fontWeight: 700,
          fontSize: '15px',
          color: t.colors.gray[9],
        },
        '> .item-slide-top-status': {
          fontSize: '15px',
          fontWeight: 400,
          borderRadius: 100,
          textAlign: 'center',
          padding: '10px 30px',

          color: t.colors.purple[5],
          border: `1px solid ${t.colors.purple[5]}`,
        },
      },
      '> .item-slide-act': {
        gap: 30,
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        '> .item-slide-act-group': {
          gap: 10,
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'center',
          '> .item-slide-act-group-title': {
            opacity: 0.6,
            fontWeight: 500,
            fontSize: '12px',
            color: t.colors.gray[9],
          },
          '> .fast-actions': {
            gap: 10,
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'stretch',
            '> .mantine-Button-root': {
              width: '100%',
              height: '100%',
              padding: '10px',
              borderRadius: 10,
              fontSize: '12px',
              fontWeight: 400,
              minWidth: 85 + 10,
              overflow: 'hidden',
              aspectRatio: '1/0.85',
              textOverflow: 'ellipsis',
              color: t.colors.gray[9],
              backgroundColor: 'transparent',
              border: '1px solid rgba(0, 0, 0, 0.10)',
              '&:hover': {
                backgroundColor: t.colors.gray[0],
              },
              '> div > span': {
                display: 'flex',
                width: '100%',
                whiteSpace: 'pre-wrap',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                '> svg': {
                  width: 18,
                  height: 18,
                },
              },
            },
          },
          '> .summary': {
            gap: 10,
            display: 'grid',
            placeItems: 'stretch',
            placeContent: 'center',
            gridAutoRows: 'minmax(0px, auto)',
            gridTemplateColumns: 'repeat(2, 1fr)',

            '> .summary-item': {
              gap: 10,
              display: 'flex',
              borderRadius: 15,
              padding: '15px 20px',
              flexDirection: 'column',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              '> .summary-item-title': {
                opacity: 0.4,
                fontWeight: 500,
                fontSize: '12px',
                color: t.colors.gray[9],
              },
              '> .summary-item-value': {
                opacity: 0.6,
                fontWeight: 700,
                fontSize: '31px',
                color: t.colors.gray[9],
              },
            },
          },
        },
      },
    },
  },
});

function TopBar({ item }: Props) {
  const { classes } = styles();
  const itemStatusColor = getColorByStatus(item?.status);

  return (
    <Box className={classes.topBar}>
      <Button className="back-btn" variant="default">
        <CustomArrowLeftIcon />
        <Text>Geri</Text>
      </Button>
      <Box className="item-line">
        <Box className="item-line-top-container">
          <Box className="item-line-id">
            <Text className="item-line-top-no" c={itemStatusColor[0]} bg={itemStatusColor[5]}>
              {item?.no}
            </Text>

            <Text className="item-line-top-name">{item?.name}</Text>
          </Box>
          <Divider orientation="vertical" c="#000" opacity={0.2} />
          <Box className="item-line-spec-container">
            <Box className="item-line-spec">
              <Text className="spec-name">SİLİNENLER</Text>
              <Text className="spec-value">3.460</Text>
            </Box>
            <Box className="item-line-spec">
              <Text className="spec-name">KRİTER DIŞI</Text>
              <Text className="spec-value">250</Text>
            </Box>
            <Box className="item-line-spec">
              <Text className="spec-name">TOPLAM ÜRETİM</Text>
              <Text className="spec-value">15.200</Text>
            </Box>
          </Box>
        </Box>
        <Box className="item-prods-container">
          {item &&
            item?.production &&
            item?.production.map((prod, i) => (
              <Box
                component={motion.div}
                transition={{
                  duration: 1,
                  ease: 'anticipate',
                  delay: i * 0.5 || 0.5,
                }}
                animate={{
                  maxWidth: [
                    '0px',
                    `${getProdItemPercent(
                      prod.count,
                      item.production.reduce((a, b) => a + b.count, 0),
                    )}%`,
                  ],
                }}
                className="prod-progress-item"
                key={`${item.id}-progress-${i}`}
                bg={getColorByStatus(prod.status)[4]}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

function Slider({ item }: Props) {
  const { classes } = styles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeSlide, setActiveSlide] = React.useState(
    PodMockProdLine.findIndex((elm) => elm.id === item.id),
  );
  const [theSwp, setTheSwp] = React.useState<Swiper | null>(null);

  const navigateAfterSlide = (index: number) => {
    const { id } = PodMockProdLine[index];
    if (id) {
      navigate(pathname.replace(item.id, id));
    }
  };

  const slideTo = (index: number) => {
    if (theSwp) {
      theSwp.slideTo(index);
    }
  };

  return (
    <Box
      speed={1000}
      centeredSlides
      spaceBetween={30}
      slidesPerView={1.5}
      component={SwiperComp}
      initialSlide={activeSlide}
      className={classes.itemsSwiper}
      onInit={(swiper) => setTheSwp(swiper)}
      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      onSlideChangeTransitionEnd={(swiper) => navigateAfterSlide(swiper.activeIndex)}
    >
      {PodMockProdLine.map((prod, i) => (
        <SwiperSlide key={`citem-${prod.id}-slide-${i}`}>
          <Box
            className="item-slide"
            opacity={theSwp?.activeIndex === i ? 1 : 0.5}
            onClick={() => i !== theSwp?.realIndex && slideTo(i)}
            sx={{
              cursor: theSwp?.activeIndex === i ? 'default' : 'pointer',
            }}
          >
            <Box className="item-slide-top">
              <Text className="item-slide-top-name">{prod.name}</Text>
              <Text className="item-slide-top-status">Yayında</Text>
            </Box>
            <Box
              sx={{
                pointerEvents: theSwp?.activeIndex === i ? 'all' : 'none',
              }}
              className="item-slide-act"
            >
              <Box className="item-slide-act-group">
                <Text className="item-slide-act-group-title">HIZLI EYLEM</Text>
                <Box className="fast-actions">
                  <Button variant="default">
                    <CustomPauseIcon />
                    <Text>Duraklat</Text>
                  </Button>
                  <Button variant="default">
                    <SandTimerIcon />
                    <Text>Beklemede</Text>
                  </Button>
                  <Button variant="default">
                    <CustomArrowRightIcon />
                    <Text>İşleniyor</Text>
                  </Button>
                  <Button variant="default">
                    <CustomSpeedoMeterIcon />
                    <Text>Kontrolde</Text>
                  </Button>
                </Box>
              </Box>
              <Box className="item-slide-act-group">
                <Text className="item-slide-act-group-title">ÖZET</Text>
                <Box className="summary">
                  <Box className="summary-item">
                    <Text className="summary-item-title">Toplam Sipariş</Text>
                    <Text className="summary-item-value">9.000</Text>
                  </Box>
                  <Box className="summary-item">
                    <Text className="summary-item-title">Kalan</Text>
                    <Text className="summary-item-value">2.430</Text>
                  </Box>
                  <Box className="summary-item">
                    <Text className="summary-item-title">Tamamlanan</Text>
                    <Text className="summary-item-value">593</Text>
                  </Box>
                  <Box className="summary-item">
                    <Text className="summary-item-title">Uygunsuz</Text>
                    <Text className="summary-item-value">25</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box classNames="item-slide-progress-cont">progress</Box>
          </Box>
        </SwiperSlide>
      ))}
    </Box>
  );
}

function ItemsSlider({ item }: Props) {
  const { classes } = styles();
  return (
    <Box className={classes.container}>
      <TopBar item={item} />
      <Slider item={item} />
    </Box>
  );
}

export default ItemsSlider;
