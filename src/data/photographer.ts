import type { CompanyInfo, ServiceDirection, Capability, WorkStep } from '@/types';

// Backward compatibility alias
export type PhotographerInfo = CompanyInfo;

export const photographerInfo: CompanyInfo = {
  name: 'INSON QADRI',
  tagline: 'MEDIA PRODUCTION',
  heroIntroduction: 'Biz jamiyatdagi real muammolarni ko\'taradigan, odamlarni o\'ylantiradigan, tarbiyalaydigan va harakatga undaydigan ta\'sirli video kontentlar yaratamiz.',
  about: `INSON QADRI MEDIA PRODUCTION — bu oddiy media jamoa emas.

Biz — inson qadri, ijtimoiy mas'uliyat va ishonch asosida ishlaydigan ijodiy va strategik media platformamiz.

Biz reklama qilmaymiz — mazmun orqali ishonch quramiz.`,
  mission: `Bizning asosiy maqsadimiz:
👉 inson qadrini ulug'lash
👉 jamiyatda ongli fikrlashni kuchaytirish
👉 va ishonchli kontent orqali foyda keltiradigan hamkorliklar yaratish

Biz ishonamiz:
Agar kontent foydali bo'lsa — u albatta tomosha qilinadi.
Agar kontent rost bo'lsa — u albatta ishonch keltiradi.`,
  principle: `Reklama o'tadi.
Ishonch qoladi.
Qadr esa doimiy.`,
  location: 'O\'zbekiston',
  email: 'hello@insonqadri.uz',
  phone: '+998 90 123 45 67',
  telegram: '@insonqadri',
  socialLinks: {
    instagram: 'https://instagram.com/insonqadri',
    youtube: 'https://youtube.com/@insonqadri',
    telegram: 'https://t.me/insonqadri'
  }
};

export const serviceDirections: ServiceDirection[] = [
  {
    id: 'ijtimoiy',
    icon: '🔹',
    title: 'Ijtimoiy kontent',
    items: [
      'Jamiyatdagi dolzarb muammolar',
      'Insoniy qadriyatlar',
      'Mas\'uliyat, halollik, vijdon'
    ]
  },
  {
    id: 'oilaviy',
    icon: '🔹',
    title: 'Oilaviy va tarbiyaviy kontent',
    items: [
      'Ota-ona va farzand munosabatlari',
      'Oila qadri',
      'Tarbiya va hayotiy saboqlar'
    ]
  },
  {
    id: 'hayotiy',
    icon: '🔹',
    title: 'Hayotiy syujetlar',
    items: [
      'Real voqealarga asoslangan videolar',
      'Tomoshabinni o\'zini ko\'radigan sahnalar',
      'Kuchli dramatik yechimlar'
    ]
  },
  {
    id: 'brend',
    icon: '🔹',
    title: 'Brendlar bilan syujetli hamkorlik',
    items: [
      'Reklama emas — hikoya',
      'Majburiy sotuv emas — ishonch',
      'Bir martalik emas — uzoq muddatli ta\'sir'
    ]
  }
];

export const capabilities: Capability[] = [
  {
    id: '1',
    title: 'Kuchli ssenariy va dramaturgiya',
    description: 'Professional yozuvchilar jamoasi'
  },
  {
    id: '2',
    title: 'Professional video prodakshn',
    description: 'Zamonaviy texnika va tajriba'
  },
  {
    id: '3',
    title: 'Ijtimoiy tarmoqlarda keng tarqatish',
    description: 'Millionlab ko\'rishlar'
  },
  {
    id: '4',
    title: 'Repost va organik o\'sishga mos kontent',
    description: 'Viral potentsial'
  },
  {
    id: '5',
    title: 'Individual yondashuv',
    description: 'Har bir brend va loyiha uchun'
  }
];

export const workSteps: WorkStep[] = [
  { number: 1, title: 'Loyiha va maqsadni tushunamiz' },
  { number: 2, title: 'Auditoriyaga mos syujet ishlab chiqamiz' },
  { number: 3, title: 'Kontentni professional tarzda suratga olamiz' },
  { number: 4, title: 'To\'g\'ri formatda e\'lon qilamiz' },
  { number: 5, title: 'Natijaga ishlaymiz' }
];

export const audienceStats = {
  views: 'Millionlab ko\'rishlar',
  engagement: 'Faol, fikrlaydigan va ishonadigan auditoriya',
  values: 'Oila, jamiyat va qadriyatlarga befarq bo\'lmagan odamlar'
};

export const businessBenefits = [
  'Brendingizga ishonch',
  'Auditoriya ko\'zida obro\'',
  'Reklama sezilmaydigan syujetli integratsiya',
  'Uzoq muddatli ta\'sir'
];

export const targetBusinesses = [
  'Ijtimoiy mas\'uliyatli kompaniyalar',
  'Oilaviy, ta\'limiy, tibbiy, servis va savdo sohalari',
  'Sifat va qadriyatni ustuvor qo\'yadigan brendlar'
];

export const governmentServices = [
  'Ijtimoiy kampaniyalar',
  'Tarbiyaviy tashabbuslar',
  'Ma\'naviy-ma\'rifiy loyihalar',
  'Yoshlar va oila bilan bog\'liq dasturlar'
];

export const contentBenefits = [
  'O\'ylashga majbur qiladigan kontent',
  'Hayotdan saboq beradigan voqealar',
  'Ijobiy o\'zgarishga turtki'
];

export const contentResults = [
  'Tomosha qilinadi',
  'Ulashiladi',
  'Esda qoladi'
];