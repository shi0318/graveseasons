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
  { label: 'Romance', href: '/romance/' },
  { label: 'Tips', href: '/tips/' },
  { label: 'Quests', href: '/quests/' },
] as const;

export const OFFICIAL_FACTS = [
  {
    label: 'Release window',
    value: 'Blumhouse lists "Launching Fall 2026"; Steam currently lists "2026".',
    source: SOURCES.blumhouse,
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
      'Steam, PlayStation Store, and Microsoft Store pages are live; Steam appdetails currently lists Windows support.',
    source: SOURCES.blumhouse,
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
    href: '/romance/',
    title: 'Romance System',
    description:
      'A focused system explainer linked back to the full romance guide.',
    priority: 'P2',
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
] as const;
