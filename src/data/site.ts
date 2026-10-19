import { SOURCES } from './sources';

export const SITE = {
  name: 'Grave Seasons Guide',
  shortName: 'GSG',
  url: 'https://graveseasonsguide.com',
  tagline: 'Official-source guides for Ashenridge',
  description:
    'Independent Grave Seasons guide with official-source romance, walkthrough, character, quest, and tips pages for Blumhouse Games and Perfect Garbage Games farming murder mystery.',
  locale: 'en',
  gameName: 'Grave Seasons',
  developer: 'Perfect Garbage',
  publisher: 'Blumhouse Games',
  releaseWindow: 'Fall 2026',
  steamReleaseText: 'March 9, 2027',
  appId: '3255110',
  steamUrl: SOURCES.steam.url,
  officialUrl: SOURCES.blumhouse.url,
  playstationUrl: SOURCES.playstation.url,
  xboxUrl: SOURCES.xbox.url,
  contactEmail: 'nmlkareem161@gmail.com',
  lastVerified: '2026-08-14',
} as const;

export const NAV = [
  { label: 'Guide', href: '/guide/' },
  { label: 'Romance Guide', href: '/romance-guide/' },
  { label: 'Walkthrough', href: '/walkthrough/' },
  { label: 'Characters', href: '/characters/' },
  { label: 'Farming Plan', href: '/farming-crafting-investigation/' },
  { label: 'Investigation', href: '/killer-decisions-and-replay/' },
] as const;

export const FOOTER_NAV = [
  ...NAV,
  { label: 'Tips', href: '/tips/' },
  { label: 'Quests', href: '/quests/' },
  { label: 'Release Date', href: '/release-date/' },
  { label: 'Download', href: '/download/' },
] as const;

export const LATEST_GUIDES = [
  {
    href: '/steam-date-versus-fall-window/',
    title: 'Steam Date vs the Fall 2026 Window',
    description:
      'Steam lists March 9, 2027. Blumhouse still says Fall 2026. How to read both before launch.',
    priority: 'New',
  },
  {
    href: '/platforms-and-game-pass/',
    title: 'Platforms and Day 1 Game Pass',
    description:
      'PC, Xbox Series, PS5, and Switch are announced, plus Day 1 Xbox Game Pass. Steam itself is Windows only.',
    priority: 'New',
  },
  {
    href: '/price-and-file-size/',
    title: 'Price and File Size',
    description:
      'No US price and no install size are on the Steam coming-soon page. Do not use a leaked number.',
    priority: 'New',
  },
  {
    href: '/multiplayer-co-op-status/',
    title: 'Grave Seasons Multiplayer and Co-op Status',
    description:
      'What is currently confirmed about Grave Seasons multiplayer, co-op, shared farms, and the Fall 2026 plan.',
    priority: 'New',
  },
  {
    href: '/gameplay-preview/',
    title: 'Grave Seasons Gameplay Preview',
    description:
      'Official gameplay facts on farming, the one-year investigation, romance risk, Ashenridge, and replayable killer scenarios before launch.',
    priority: 'New',
  },
  {
    href: '/pre-launch-investigation-checklist/',
    title: 'Pre-Launch Investigation Checklist',
    description:
      'What the official one-year investigation, Ashenridge map, killer pool, romance system, and cancelled demo mean before launch.',
    priority: 'New',
  },
  {
    href: '/farming-grid-seasons-guide/',
    title: 'Farming Grid & Seasons Guide',
    description:
      'Official farming-grid rules, four seasons, 45+ seeds, and Arid, Regular, and Wet plot facts before launch.',
    priority: 'New',
  },
  {
    href: '/occult-items-victim-protection/',
    title: 'Occult Items & Victim Protection',
    description:
      'Official Steam facts on occult crafting, warding monsters, potential victims, and the details still unknown before launch.',
    priority: 'New',
  },
  {
    href: '/farming-crafting-investigation/',
    title: 'Farming, Crafting & Investigation',
    description:
      'A spoiler-safe daily and seasonal planning loop for farming, crafting, clues, and investigation.',
    priority: 'New',
  },
  {
    href: '/killer-decisions-and-replay/',
    title: 'Killer, Decisions & Replay',
    description:
      'How to log choices, resident risk, romance decisions, and changing killer scenarios across runs.',
    priority: 'New',
  },
] as const;

export const OFFICIAL_FACTS = [
  {
    label: 'Release window',
    value:
      'Blumhouse still lists "Launching Fall 2026". Steam App 3255110, checked October 18, 2026, lists March 9, 2027 and is still coming soon.',
    source: SOURCES.steamDevlog,
  },
  {
    label: 'Developer / publisher',
    value: 'Perfect Garbage / Blumhouse Games.',
    source: SOURCES.steam,
  },
  {
    label: 'Core pitch',
    value:
      'A narrative farming sim where someone in Ashenridge is a supernatural serial killer.',
    source: SOURCES.steam,
  },
  {
    label: 'Time structure',
    value: 'The Steam page says players have one year to protect victims and uncover the murders.',
    source: SOURCES.steam,
  },
  {
    label: 'Town scope',
    value: '30+ residents, 70+ interiors, and seven major locations are listed on Steam.',
    source: SOURCES.steam,
  },
  {
    label: 'Romance scope',
    value: 'Steam lists 12 potential romanceable folks, with a few potentially being the killer.',
    source: SOURCES.steam,
  },
  {
    label: 'Replayability',
    value:
      'Every playthrough selects a supernatural killer from a candidate pool, with killer-specific campaign, reasoning, kill styles, and targets.',
    source: SOURCES.steam,
  },
  {
    label: 'Platforms',
    value:
      'Officially announced for PC, Xbox Series X|S, PlayStation 5, and Nintendo Switch, plus Day 1 Xbox Game Pass.',
    source: SOURCES.steamDevlog,
  },
] as const;

export const REQUIRED_GUIDES = [
  {
    href: '/multiplayer-co-op-status/',
    title: 'Grave Seasons Multiplayer and Co-op Status',
    description:
      'Current Grave Seasons multiplayer, co-op, shared-farm, and Fall 2026 status, without assuming an unannounced feature.',
    priority: 'New',
  },
  {
    href: '/gameplay-preview/',
    title: 'Grave Seasons Gameplay Preview',
    description:
      'A source-tracked gameplay preview for farming, investigation, romance risk, Ashenridge, and replayable killer scenarios.',
    priority: 'New',
  },
  {
    href: '/pre-launch-investigation-checklist/',
    title: 'Pre-Launch Investigation Checklist',
    description:
      'A source-tracked checklist for the one-year investigation, killer scenarios, residents, romance, and the Fall 2026 launch window.',
    priority: 'New',
  },
  {
    href: '/farming-grid-seasons-guide/',
    title: 'Farming Grid & Seasons Guide',
    description:
      'The official grid layers, seasons, seed count, and plot types, with crop prices left for launch-day testing.',
    priority: 'New',
  },
  {
    href: '/occult-items-victim-protection/',
    title: 'Occult Items & Victim Protection',
    description:
      'Source-tracked preparation for the official occult-item and potential-victim systems.',
    priority: 'P1',
  },
  {
    href: '/romance-guide/',
    title: 'Romance Guide',
    description:
      '12 confirmed romance options, killer-risk tracking, and launch-day route update hub.',
    priority: 'P0',
  },
  {
    href: '/walkthrough/',
    title: 'Walkthrough',
    description:
      'Pre-launch walkthrough framework for the one-year Ashenridge investigation.',
    priority: 'P1',
  },
  {
    href: '/characters/',
    title: 'Characters',
    description:
      'Resident tracker built from Steam and official Blumhouse media captions.',
    priority: 'P1',
  },
  {
    href: '/collectibles/',
    title: 'Collectibles',
    description:
      'Crop, tool, item, and special-object tracker ready for release-day verification.',
    priority: 'P1',
  },
  {
    href: '/platforms/',
    title: 'Platforms',
    description:
      'PC, PlayStation, and Xbox availability notes with only official store data.',
    priority: 'P1',
  },
  {
    href: '/residents/',
    title: 'Residents',
    description:
      '30+ resident framework that separates confirmed names from launch-day roster work.',
    priority: 'P1',
  },
  {
    href: '/tips/',
    title: 'Tips',
    description:
      'Pre-release planning tips that avoid claiming unverified mechanics.',
    priority: 'P2',
  },
  {
    href: '/farming-crafting-investigation/',
    title: 'Farming & Investigation',
    description:
      'A spoiler-safe daily and seasonal planning loop for Ashenridge.',
    priority: 'P2',
  },
  {
    href: '/killer-decisions-and-replay/',
    title: 'Killer & Replay Planning',
    description:
      'How to log decisions, residents, romance risk, and changing killer scenarios.',
    priority: 'P2',
  },
  {
    href: '/quests/',
    title: 'Quests',
    description:
      'Quest and investigation tracker for release-day updates.',
    priority: 'P2',
  },
  {
    href: '/day-and-night/',
    title: 'Day & Night Cycle',
    description:
      'The 24-hour clock, night wandering, and time-as-resource, from the official devlog.',
    priority: 'P2',
  },
  {
    href: '/map-of-ashenridge/',
    title: 'Map of Ashenridge',
    description:
      'The farm, forest, coast, and the Local and Commercial districts, from the official devlog.',
    priority: 'P2',
  },
  {
    href: '/character-customization/',
    title: 'Character Customization',
    description:
      '35 wearables, 25 skin tones, and 33 ways to colour 18 hairstyles - official launch numbers.',
    priority: 'P2',
  },
  {
    href: '/soundtrack/',
    title: 'Soundtrack',
    description:
      'Composer Gisula, Suvi Savikko, day and night seasonal themes, and live instrumentation.',
    priority: 'P2',
  },
  {
    href: '/demo-status/',
    title: 'Demo Status',
    description: 'Current answer on the cancelled June demo, the Fall 2026 window, and where official access will appear.',
    priority: 'New',
  },
  {
    href: '/art-style/',
    title: 'Art Style',
    description:
      'The horror mood board, pixel art as a dread tool, and the devlog line about a world that changes.',
    priority: 'P2',
  },
] as const;
