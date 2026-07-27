export interface SiteAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  sourceUrl: string;
}

export const ASSETS = {
  hero: {
    src: '/images/grave-seasons-hero.jpg',
    alt: 'Official Grave Seasons key art from Blumhouse Games.',
    width: 2000,
    height: 1125,
    credit: 'Blumhouse Games official Grave Seasons page',
    sourceUrl: 'https://blumhouse.com/games/grave-seasons',
  },
  title: {
    src: '/images/grave-seasons-title.png',
    alt: 'Official Grave Seasons title treatment.',
    width: 1055,
    height: 591,
    credit: 'Blumhouse Games official Grave Seasons page',
    sourceUrl: 'https://blumhouse.com/games/grave-seasons',
  },
  steamHeader: {
    src: '/images/grave-seasons-steam-header.jpg',
    alt: 'Steam header image for Grave Seasons.',
    width: 460,
    height: 215,
    credit: 'Steam store page',
    sourceUrl: 'https://store.steampowered.com/app/3255110/Grave_Seasons/',
  },
  farmHarvest: {
    src: '/images/grave-seasons-farm-harvest.webp',
    alt: 'Official Grave Seasons screenshot named Farm Harvest.',
    width: 1280,
    height: 720,
    credit: 'Blumhouse Games official media gallery',
    sourceUrl: 'https://blumhouse.com/games/grave-seasons',
  },
  townNight: {
    src: '/images/grave-seasons-town-night.webp',
    alt: 'Official Grave Seasons screenshot named Town at Night.',
    width: 1280,
    height: 720,
    credit: 'Blumhouse Games official media gallery',
    sourceUrl: 'https://blumhouse.com/games/grave-seasons',
  },
  yuto: {
    src: '/images/grave-seasons-yuto.webp',
    alt: 'Official Grave Seasons screenshot captioned as talking to Yuto in the grocery store.',
    width: 1280,
    height: 720,
    credit: 'Blumhouse Games official media gallery',
    sourceUrl: 'https://blumhouse.com/games/grave-seasons',
  },
  hari: {
    src: '/images/grave-seasons-hari.webp',
    alt: 'Official Grave Seasons screenshot captioned as meeting Hari.',
    width: 1280,
    height: 720,
    credit: 'Blumhouse Games official media gallery',
    sourceUrl: 'https://blumhouse.com/games/grave-seasons',
  },
  monsterAttack: {
    src: '/images/grave-seasons-monster-attack.webp',
    alt: 'Official Grave Seasons screenshot captioned as a monster attack.',
    width: 1280,
    height: 720,
    credit: 'Blumhouse Games official media gallery',
    sourceUrl: 'https://blumhouse.com/games/grave-seasons',
  },
} satisfies Record<string, SiteAsset>;
