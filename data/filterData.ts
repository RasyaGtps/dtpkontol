export interface FilterItem {
  id: string;
  name: string;
  category: 'Tari' | 'Makanan' | 'Baju Adat' | 'Rumah Adat' | 'Bahasa Daerah';
  origin: string;
  description: string;
  imageUrl: string;
}

export const filterData: FilterItem[] = [
  {
    id: 't1',
    name: 'Tari Pendet',
    category: 'Tari',
    origin: 'Bali',
    description: 'Tari selamat datang dari Bali Wow',
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/26/tari-pendet-yang-berasal-dari-bali_169.jpeg?w=1200'
  },
  {
    id: 't2',
    name: 'Tari Saman',
    category: 'Tari',
    origin: 'Aceh',
    description: 'Tari tradisional suku Gayo',
    imageUrl: 'https://example.com/saman.jpg'
  },
  {
    id: 'm1',
    name: 'Nasi Goreng',
    category: 'Makanan',
    origin: 'Indonesia',
    description: 'Hidangan nasi yang digoreng dengan bumbu',
    imageUrl: 'https://example.com/nasigoreng.jpg'
  },
];