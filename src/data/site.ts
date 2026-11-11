import { SOURCES } from './sources';

export const SITE = {
  name: 'Grave Seasons Guide',
  shortName: 'GSG',
  url: 'https://graveseasonsguide.com',
  tagline: 'Official-source guides for Ashenridge',
  description:
    'Independent Grave Seasons guide with official-source release date, romance, character, farming, investigation, and tips pages for the Perfect Garbage and Blumhouse Games farming murder mystery.',
  locale: 'en',
  gameName: 'Grave Seasons',
  developer: 'Perfect Garbage',
  publisher: 'Blumhouse Games',
  releaseWindow: 'March 9, 2027',
  steamReleaseText: 'March 9, 2027',
  appId: '3255110',
  steamUrl: SOURCES.steam.url,
  officialUrl: SOURCES.blumhouse.url,
  playstationUrl: SOURCES.playstation.url,
  xboxUrl: SOURCES.xbox.url,
  contactEmail: 'nmlkareem161@gmail.com',
} as const;

export const NAV = [
  { label: 'Guide', href: '/guide/' },
  { label: 'Romance Guide', href: '/romance-guide/' },
  { label: 'One-Year Planner', href: '/grave-seasons-prelaunch-one-year-planner/' },
  { label: 'Characters', href: '/characters/' },
  { label: 'Farming Plan', href: '/farming-crafting-investigation/' },
  { label: 'Investigation', href: '/killer-decisions-and-replay/' },
] as const;

export const FOOTER_NAV = [
  ...NAV,
  { label: 'Tips', href: '/tips/' },
  { label: 'Release Date', href: '/release-date/' },
  { label: 'Demo & Download', href: '/demo-status/' },
] as const;

export const LATEST_GUIDES = [
  { href: '/procedural-mine-route-notebook/', title: 'Mine Navigation: Route Notebook', description: 'A focused pre-release method for marking generated branches, transitions, and the return path without assuming a fixed floor map.', priority: 'New' },
  {
    href: '/release-date/',
    title: 'Release Date: March 9, 2027',
    description:
      'The full dated history from the 2025 release-year trailer to the March 9, 2027 launch, plus platforms, Game Pass, price, and what content complete means.',
    priority: 'Updated',
  },
  {
    href: '/demo-status/',
    title: 'Demo & Download Status',
    description:
      'The PAX East demo, the cancelled June 15 Steam demo, why there is nothing to download yet, and how to spot fake installer sites.',
    priority: 'Updated',
  },
  { href: '/mines-roguelike-preview/', title: 'Mines Preview: Roguelike Levels and Energy', description: 'What the November 4 devlog confirms about generated mine levels, no enemies, time and energy pressure, rest rooms, and what is still unknown.', priority: 'New' },
  { href: '/controller-and-crowbar-gameplay-preview/', title: 'Controller Farming and Crowbar Exploration', description: 'A pre-release look at isometric farming controls, the crowbar, exploration, and the March 9, 2027 launch plan.', priority: 'New' },
  {
    href: '/grave-seasons-prelaunch-one-year-planner/',
    title: 'Grave Seasons Pre-Launch One-Year Planner',
    description: 'A spoiler-safe preparation guide for Ashenridge farming, resident notes, victim protection, and the confirmed one-year investigation window.',
    priority: 'New',
  },
  {
    href: '/multiplayer-co-op-status/',
    title: 'Grave Seasons Multiplayer and Co-op Status',
    description:
      'What is confirmed about Grave Seasons multiplayer, co-op, and shared farms: Steam lists Single-player, and no co-op mode has been announced.',
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
      'The September 30 developer announcement and current Steam listing give March 9, 2027. Not yet released.',
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
      'Officially announced for PC, Xbox Series X|S, PlayStation 5, and Nintendo Switch. Day 1 Xbox Game Pass was announced on March 26, 2026.',
    source: SOURCES.steamDevlog,
  },
] as const;

export const REQUIRED_GUIDES = [
  {
    href: '/release-date/',
    title: 'Release Date',
    description:
      'March 9, 2027 on PC, Xbox Series X|S, PS5, and Switch, with every dated delay, Game Pass, and price status in one place.',
    priority: 'Updated',
  },
  {
    href: '/multiplayer-co-op-status/',
    title: 'Grave Seasons Multiplayer and Co-op Status',
    description:
      'Grave Seasons multiplayer, co-op, and shared-farm status: Steam lists Single-player, and no co-op mode has been announced.',
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
      'What the 12 romance slots and changing killer scenarios mean for relationships and spoiler-safe guides.',
    priority: 'P0',
  },
  {
    href: '/characters/',
    title: 'Characters',
    description:
      'Confirmed cast overview: Yuto and Hari from official media, 30+ residents, 12 romance options, and the killer-candidate pool.',
    priority: 'P1',
  },
  {
    href: '/tips/',
    title: 'Tips',
    description:
      'Spoiler-safe starter tips built on confirmed systems: autosaved choices, the 24-hour clock, plot types, and the mines.',
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
    title: 'Demo & Download Status',
    description: 'The PAX East demo, the cancelled June 15 Steam demo, why there is nothing to download yet, and fake-installer warnings.',
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
