export type SourceStatus = 'official' | 'platform' | 'official-media';

export interface SourceRef {
  label: string;
  url: string;
  publisher: string;
  status: SourceStatus;
  lastChecked: string;
  note: string;
}

export const LAST_CHECKED = '2026-08-14';

export const SOURCES = {
  steam: {
    label: 'Steam store page',
    url: 'https://store.steampowered.com/app/3255110/Grave_Seasons/',
    publisher: 'Valve / Steam',
    status: 'platform',
    lastChecked: '2026-08-17',
    note: 'App id 3255110, developer, publisher, release text, genres, categories, languages, screenshots, and Steam description.',
  },
  blumhouse: {
    label: 'Blumhouse official game page',
    url: 'https://blumhouse.com/games/grave-seasons',
    publisher: 'Blumhouse Games',
    status: 'official',
    lastChecked: LAST_CHECKED,
    note: 'Official Grave Seasons page, Fall 2026 launch window, platform links, developer, summary, and image gallery.',
  },
  playstation: {
    label: 'PlayStation Store concept page',
    url: 'https://store.playstation.com/en-us/concept/10014259',
    publisher: 'Sony Interactive Entertainment',
    status: 'platform',
    lastChecked: LAST_CHECKED,
    note: 'Official PlayStation store listing for Grave Seasons.',
  },
  xbox: {
    label: 'Microsoft Store page',
    url: 'https://www.microsoft.com/store/productid/9n36kgdxkm0s',
    publisher: 'Microsoft',
    status: 'platform',
    lastChecked: LAST_CHECKED,
    note: 'Official Microsoft Store product page linked from Blumhouse.',
  },
  blumhouseMedia: {
    label: 'Blumhouse official media gallery',
    url: 'https://blumhouse.com/games/grave-seasons',
    publisher: 'Blumhouse Games',
    status: 'official-media',
    lastChecked: LAST_CHECKED,
    note: 'Official screenshots and alt text, including Yuto, Hari, town at night, monster attack, and farm harvest images.',
  },
  steamDevlog: {
    label: 'Official Steam devlogs (Perfect Garbage)',
    url: 'https://store.steampowered.com/news/app/3255110',
    publisher: 'Perfect Garbage / Blumhouse Games',
    status: 'official',
    lastChecked: LAST_CHECKED,
    note: 'First-party developer blogs and announcements on the Steam news hub for App 3255110: The Music of Grave Seasons (2025-09-10), the release-date and platform announcement (2026-03-26), Release News + Dev Log Updates (2026-06-05), and Day & Night Cycle (2026-06-17) - covering the soundtrack, the 24-hour cycle, the map of Ashenridge, and character customization.',
  },
} satisfies Record<string, SourceRef>;

export const CORE_SOURCES = [
  SOURCES.steam,
  SOURCES.blumhouse,
  SOURCES.playstation,
  SOURCES.xbox,
] as const;
