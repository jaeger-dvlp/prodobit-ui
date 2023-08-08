import { ProdobitAppTheme } from '@/theme';
import { MantineColor, MantineThemeColors } from '@mantine/core';
import { CustomFilter, Item, ItemCategory } from '@/views/items/list/WithItems';
import { ThreeBarsOne, ThreeBarsThree, ThreeBarsTwo } from '@/components/icons';

export type MockStockStatus = {
  id: number;
  Icon: any;
  text: string;
  color: MantineThemeColors[MantineColor];
  condition: string;
  excount: number;
};

export type TItemStatus = {
  id: number;
  slug: string;
  name: string;
  color: MantineThemeColors[MantineColor];
};

const MockStockStatuses: MockStockStatus[] = [
  {
    id: 0,
    Icon: ThreeBarsOne,
    text: 'Stokta Yok',
    color: ProdobitAppTheme.colors.red,
    condition: 'lower-than-1',
    excount: 0,
  },
  {
    id: 1,
    Icon: ThreeBarsOne,
    text: 'Kritik',
    color: ProdobitAppTheme.colors.red,
    condition: 'lower-than-10',
    excount: 9,
  },
  {
    id: 2,
    Icon: ThreeBarsTwo,
    text: 'Orta',
    color: ProdobitAppTheme.colors.orange,
    condition: 'lower-than-20',
    excount: 19,
  },
  {
    id: 3,
    Icon: ThreeBarsThree,
    text: 'Yeterli',
    color: ProdobitAppTheme.colors.green,
    condition: 'greater-than-20',
    excount: 21,
  },
];

const MockItemsCategories: ItemCategory[] = [
  {
    id: 0,
    name: 'Üst Giyim',
    slug: 'ust-giyim',
  },
  {
    id: 1,
    name: 'Alt Giyim',
    slug: 'alt-giyim',
  },
  {
    id: 2,
    name: 'Ayakkabı',
    slug: 'ayakkabi',
  },
  {
    id: 3,
    name: 'Aksesuar',
    slug: 'aksesuar',
  },
  {
    id: 4,
    name: 'Çanta',
    slug: 'canta',
  },
  {
    id: 5,
    name: 'Diğer',
    slug: 'diger',
  },
  {
    id: 6,
    name: 'Üst Giyim',
    slug: 'ust-giyim',
  },
  {
    id: 7,
    name: 'Alt Giyim',
    slug: 'alt-giyim',
  },
  {
    id: 8,
    name: 'Ayakkabı',
    slug: 'ayakkabi',
  },
  {
    id: 9,
    name: 'Aksesuar',
    slug: 'aksesuar',
  },
  {
    id: 10,
    name: 'Çanta',
    slug: 'canta',
  },
  {
    id: 11,
    name: 'Diğer',
    slug: 'diger',
  },
  {
    id: 12,
    name: 'Üst Giyim',
    slug: 'ust-giyim',
  },
  {
    id: 13,
    name: 'Alt Giyim',
    slug: 'alt-giyim',
  },
  {
    id: 14,
    name: 'Ayakkabı',
    slug: 'ayakkabi',
  },
  {
    id: 15,
    name: 'Aksesuar',
    slug: 'aksesuar',
  },
  {
    id: 16,
    name: 'Çanta',
    slug: 'canta',
  },
  {
    id: 17,
    name: 'Diğer',
    slug: 'diger',
  },
];

const MockItems: Item[] = [
  {
    id: 0,
    image: 'https://source.unsplash.com/random/200',
    name: 'Gömlek',
    category: 'ust-giyim',
    code: '12ASDFAE',
    status: 'waiting',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 1,
    image: 'https://source.unsplash.com/random/200',
    name: 'Tişört',
    category: 'ust-giyim',
    code: 'QWE1231',
    status: 'on-process',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/200',
    name: 'Jeans',
    category: 'alt-giyim',
    code: 'SAGDFS312',
    status: 'stuck',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/200',
    name: 'Adidas AX2S Terrex Erkek Outdoor Ayakkabı',
    category: 'ayakkabi',
    code: 'ASDAS123',
    status: 'inspecting',
    count: 1,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/random/200',
    name: 'Gömlek',
    category: 'ust-giyim',
    code: 'DSFSD123',
    status: 'inspecting',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/random/200',
    name: 'Tişört',
    category: 'ust-giyim',
    code: 'J213HNK',
    status: 'inspecting',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 6,
    image: 'https://source.unsplash.com/random/200',
    name: 'Jeans',
    category: 'alt-giyim',
    code: 'XCXZC123',
    status: 'inspecting',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 7,
    image: 'https://source.unsplash.com/random/200',
    name: 'Nike Air Max',
    category: 'ayakkabi',
    code: 'XQWE123',
    status: 'inspecting',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 8,
    image: 'https://source.unsplash.com/random/200',
    name: 'Gömlek',
    category: 'ust-giyim',
    code: 'MDFDAW31',
    status: 'inspecting',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
  {
    id: 9,
    image: 'https://source.unsplash.com/random/200',
    name: 'Tişört',
    category: 'ust-giyim',
    code: 'CVFVBDAS',
    status: 'inspecting',
    count: 20,
    created_at: '2021-05-15 20:30:00',
  },
];

const MockStatuses: TItemStatus[] = [
  {
    id: 0,
    slug: 'waiting',
    name: 'Bekliyor',
    color: ProdobitAppTheme.colors.yellow,
  },
  {
    id: 1,
    slug: 'inspecting',
    name: 'İnceleniyor',
    color: ProdobitAppTheme.colors.blue,
  },
  {
    id: 4,
    slug: 'on-process',
    name: 'İşlemde',
    color: ProdobitAppTheme.colors.green,
  },
  {
    id: 3,
    slug: 'stuck',
    name: 'Takıldı',
    color: ProdobitAppTheme.colors.red,
  },
];

const MockCustomFilters: CustomFilter[] = [
  {
    id: 0,
    name: 'Filtre Adı',
    slug: 'mock-filter-1',
  },
  {
    id: 1,
    name: 'Filtre Adı',
    slug: 'mock-filter-2',
  },
  {
    id: 2,
    name: 'Filtre Adı',
    slug: 'mock-filter-3',
  },
  {
    id: 3,
    name: 'Filtre Adı',
    slug: 'mock-filter-4',
  },
];

const MockSupplierData = [
  {
    id: 0,
    companyName: 'Büsan San. Tic. Ltd. Şti.',
    webSite: 'https://www.busan.com.tr',
    gMaps: 'https://goo.gl/maps/qT3cnZCVAiLKcZkj9',
    avatar: 'https://source.unsplash.com/random/200',
    persons: [
      {
        id: 0,
        role: 'Üretim Müdürü',
        fullName: 'Fatih GENÇ',
        phoneNumbers: ['+90 530 971 07 05', '+90 530 971 07 05'],
        emailAddresses: ['fatihgnnc@hotmail.com', 'fatihgnnc@hotmail.com'],
      },
      {
        id: 0,
        role: 'Proje Yöneticisi',
        fullName: 'Hasan YILDIZ',
        phoneNumbers: ['+90 555 555 55 55', '+90 555 555 55 55'],
        emailAddresses: ['hsnyldz@hotmail.com', 'hsnyldz@hotmail.com'],
      },
    ],
  },
  {
    id: 0,
    companyName: 'Büsan San. Tic. Ltd. Şti.',
    webSite: 'https://www.busan.com.tr',
    gMaps: 'https://goo.gl/maps/qT3cnZCVAiLKcZkj9',
    avatar: 'https://source.unsplash.com/random/200',
    persons: [
      {
        id: 0,
        role: 'Üretim Müdürü',
        fullName: 'Fatih GENÇ',
        phoneNumbers: ['+90 530 971 07 05', '+90 530 971 07 05'],
        emailAddresses: ['fatihgnnc@hotmail.com', 'fatihgnnc@hotmail.com'],
      },
      {
        id: 0,
        role: 'Proje Yöneticisi',
        fullName: 'Hasan YILDIZ',
        phoneNumbers: ['+90 555 555 55 55', '+90 555 555 55 55'],
        emailAddresses: ['hsnyldz@hotmail.com', 'hsnyldz@hotmail.com'],
      },
    ],
  },
  {
    id: 0,
    companyName: 'Büsan San. Tic. Ltd. Şti.',
    webSite: 'https://www.busan.com.tr',
    gMaps: 'https://goo.gl/maps/qT3cnZCVAiLKcZkj9',
    avatar: 'https://source.unsplash.com/random/200',
    persons: [
      {
        id: 0,
        role: 'Üretim Müdürü',
        fullName: 'Fatih GENÇ',
        phoneNumbers: ['+90 530 971 07 05', '+90 530 971 07 05'],
        emailAddresses: ['fatihgnnc@hotmail.com', 'fatihgnnc@hotmail.com'],
      },
      {
        id: 0,
        role: 'Proje Yöneticisi',
        fullName: 'Hasan YILDIZ',
        phoneNumbers: ['+90 555 555 55 55', '+90 555 555 55 55'],
        emailAddresses: ['hsnyldz@hotmail.com', 'hsnyldz@hotmail.com'],
      },
    ],
  },
];

export {
  MockItemsCategories,
  MockItems,
  MockStatuses,
  MockCustomFilters,
  MockStockStatuses,
  MockSupplierData,
};
