import { CustomFilter, Item, ItemCategory } from '@/views/items/list/WithItems';
import { MantineColor, MantineThemeColors, DEFAULT_THEME as theme } from '@mantine/core';

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
    image: 'https://picsum.photos/200',
    name: 'Gömlek',
    category: 'ust-giyim',
    code: 'ABC1230',
    status: 'waiting',
    created_at: '2021-01-01 12:00:00',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200',
    name: 'Tişört',
    category: 'ust-giyim',
    code: 'ABC1231',
    status: 'inspecting',
    created_at: '2021-01-01 12:00:00',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200',
    name: 'Jeans',
    category: 'alt-giyim',
    code: 'ABC23431',
    status: 'on-process',
    created_at: '2021-01-01 12:00:00',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200',
    name: 'Nike Air Max',
    category: 'ayakkabi',
    code: 'ABC123432',
    status: 'stuck',
    created_at: '2021-01-01 12:00:00',
  },
];

const MockStatuses: {
  id: number;
  slug: string;
  name: string;
  color: MantineThemeColors[MantineColor];
}[] = [
  {
    id: 0,
    slug: 'waiting',
    name: 'Bekliyor',
    color: theme.colors.yellow,
  },
  {
    id: 1,
    slug: 'inspecting',
    name: 'İnceleniyor',
    color: theme.colors.blue,
  },
  {
    id: 4,
    slug: 'on-process',
    name: 'İşlemde',
    color: theme.colors.green,
  },
  {
    id: 3,
    slug: 'stuck',
    name: 'Takıldı',
    color: theme.colors.red,
  },
];

const MockCustomFilters: CustomFilter[] = [
  {
    id: 0,
    name: 'Tümü',
    slug: 'all',
  },
  {
    id: 1,
    name: 'Filtre Adı',
    slug: 'mock-filter-1',
  },
  {
    id: 2,
    name: 'Filtre Adı',
    slug: 'mock-filter-2',
  },
];

export { MockItemsCategories, MockItems, MockStatuses, MockCustomFilters };
