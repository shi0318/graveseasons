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
    lastChecked: '2026-11-09',
    note: 'App id 3255110, developer, publisher, the March 9, 2027 release date, price and demo status (none shown), features (Single-player, Steam Achievements, Family Sharing), screenshots, and Steam description.',
  },
  blumhouse: {
    label: 'Blumhouse official game page',
    url: 'https://blumhouse.com/games/grave-seasons',
    publisher: 'Blumhouse Games',
    status: 'official',
    lastChecked: LAST_CHECKED,
    note: 'Official Grave Seasons page: platform links, developer, summary, and image gallery. Its release wording reflected the Fall 2026 window when last checked; the current date comes from the Steam sources.',
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
    lastChecked: '2026-11-09',
    note: 'First-party developer blogs and announcements on the Steam news hub for App 3255110, including SGF Trailer & Release Year! (2025-06-09), The Music of Grave Seasons (2025-09-10), Summer 2026! (2026-03-03), the release-date and platform announcement (2026-03-26), Release News + Dev Log Updates (2026-06-05), Day & Night Cycle (2026-06-17), the March 9, 2027 launch-date post (2026-09-30), and Devlog: The Mines! (2026-11-04) - covering release dates, platforms, the demo, the soundtrack, the 24-hour cycle, the map of Ashenridge, character customization, and the mines.',
  },
} satisfies Record<string, SourceRef>;

export const CORE_SOURCES = [
  SOURCES.steam,
  SOURCES.blumhouse,
  SOURCES.playstation,
  SOURCES.xbox,
] as const;
