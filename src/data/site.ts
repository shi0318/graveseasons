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
  steamReleaseText: '2026',
  appId: '3255110',
  steamUrl: SOURCES.steam.url,
  officialUrl: SOURCES.blumhouse.url,
  playstationUrl: SOURCES.playstation.url,
  xboxUrl: SOURCES.xbox.url,
  contactEmail: 'nmlkareem161@gmail.com',
  lastVerified: '2026-07-27',
} as const;

export const NAV = [
  { label: 'Romance Guide', href: '/romance-guide/' },
  { label: 'Walkthrough', href: '/walkthrough/' },
  { label: 'Characters', href: '/characters/' },
  { label: 'Tips', href: '/tips/' },
  { label: 'Quests', href: '/quests/' },
  { label: 'Release Date', href: '/release-date/' },
  { label: 'Download', href: '/download/' },
] as const;

export const OFFICIAL_FACTS = [
  {
    label: 'Release window',
    value:
      'Perfect Garbage moved the August 14, 2026 date to "Fall of this year"; Blumhouse lists "Launching Fall 2026" and Steam lists "2026".',
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
] as const;
