export interface TariType {
  id: string;
  name: string;
  origin: string;
  description: string;
  imageUrl: string;
}

export const tariData: TariType[] = [
  {
    id: '1',
    name: 'Tari Pendet',
    origin: 'Bali',
    description: 'Tari Pendet adalah tarian selamat datang dari Bali yang biasa dipentaskan untuk menyambut tamu.',
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/26/tari-pendet-yang-berasal-dari-bali_169.jpeg?w=1200'
  },
  {
    id: '2',
    name: 'Tari Saman',
    origin: 'Aceh',
    description: 'Tari Saman adalah tarian tradisional suku Gayo yang berasal dari Aceh, biasa disebut sebagai "tari seribu tangan".',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYL3_D-G0dPPJX80I6-PU_gdVp8w4355fPw&s'
  },
];