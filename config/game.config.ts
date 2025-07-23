import { z } from 'zod';

// Zod schemas for type safety
const VideoSchema = z.object({
  type: z.enum(['unmatched-ego-youtube', 'unmatched-ego-tiktok', 'unmatched-ego-shorts']),
  id: z.string(),
  title: z.string(),
  alt: z.string(),
});

const GameConfigSchema = z.object({
  site: z.object({
    name: z.string(),
    description: z.string(),
    canonicalUrl: z.string().url(),
    keywords: z.array(z.string()),
  }),
  game: z.object({
    name: z.string(),
    tagline: z.string(),
    shortDescription: z.string(),
    iframeUrl: z.string().url(),
    type: z.string(),
  }),
  guide: z.object({
    basicControls: z.array(z.string()),
    chatControls: z.array(z.string()),
    skillMoves: z.array(z.string()),
    advancedMoves: z.array(z.string()),
    coreObjective: z.string(),
  }),
  tips: z.array(z.string()),
  videos: z.array(VideoSchema),
});

export type VideoType = z.infer<typeof VideoSchema>;
export type GameConfig = z.infer<typeof GameConfigSchema>;

// Main configuration object
export const gameConfig: GameConfig = {
  site: {
    name: 'Unmatched Ego',
    description: 'Play Unmatched Ego online for free - a fast-paced 3v3 third-person soccer showdown where skill and style rule the pitch. Compete online or train offline, mastering sharp dribbles, slick tackles, and curved shots. Customize your soccer legend with unique looks and celebrations.',
    canonicalUrl: 'https://unmatchedego.org',
    keywords: [
      'Unmatched Ego',
      '3v3 soccer',
      'third person soccer',
      'online soccer game',
      'soccer showdown',
      'soccer skills',
      'football tricks',
      'multiplayer soccer',
      'soccer dribbles',
      'soccer action game'
    ],
  },
  game: {
    name: 'Unmatched Ego',
    tagline: 'Fast-Paced 3v3 Soccer Showdown',
    shortDescription: 'Unmatched Ego is a fast-paced 3v3 third-person soccer showdown where skill and style rule the pitch. Compete online or train offline, mastering sharp dribbles, slick tackles, and curved shots. Customize your soccer legend with unique looks and celebrations, and prove your mastery in high-energy matches that demand precision and flair.',
    iframeUrl: 'https://www.crazygames.com/game/unmatched-ego---soccer-action',
    type: '3v3 Soccer Action Game',
  },
  guide: {
    basicControls: [
      'WASD = movement around the field',
      'Mouse = look around and aim your shots',
      'V = sprint for extra speed and agility',
      'G = switch to goalkeeper position',
      'Shift (with ball) = pass the ball to teammates',
      'Shift (without ball) = tackle opponents and steal possession'
    ],
    chatControls: [
      '1 = "Pass" - communicate with teammates',
      '2 = "Nice" - show appreciation for good plays',
      '3 = "Sorry" - apologize for mistakes'
    ],
    skillMoves: [
      'R = skill move 1 (when skills are unlocked)',
      'F = skill move 2 (when skills are unlocked)'
    ],
    advancedMoves: [
      'Space + Shift = header for aerial dominance',
      'X + Shift = sliding tackle for defensive plays',
      'Q + Right Click = left drag/roulette move',
      'E + Right Click = right drag/roulette move',
      'X + Right Click = backwards drag technique',
      'Space + Right Click = flick/rainbow flick for style'
    ],
    coreObjective: 'Dominate in fast-paced 3v3 matches by mastering sharp dribbles, slick tackles, and curved shots. Customize your soccer legend with unique looks and celebrations, and prove your mastery in high-energy matches that demand precision and flair.',
  },
  tips: [
    'Master Unmatched Ego skill moves (R and F keys) - unlock advanced dribbling techniques to outplay defenders with style and flair',
    'Perfect your tackle timing in Unmatched Ego - use Shift without the ball to steal possession at the crucial moment',
    'Practice curved shots in Unmatched Ego - master the art of bending the ball around goalkeepers for spectacular goals',
    'Use strategic goalkeeper switching (G key) in Unmatched Ego - take control when your team needs crucial saves',
    'Master Unmatched Ego advanced moves - combine headers (Space + Shift) and sliding tackles (X + Shift) to dominate matches',
    'Utilize Unmatched Ego drag techniques - use Q/E + Right Click for left/right roulettes to confuse opponents',
    'Perfect Unmatched Ego flick moves - use Space + Right Click for rainbow flicks that showcase your technical skills',
    'Communicate effectively in Unmatched Ego - use number keys (1-3) to coordinate with teammates during intense matches'
  ],
  videos: [
    {
      type: 'unmatched-ego-youtube',
      id: '_IcCuKpWzYY',
      title: 'Blue Lock\'s ACE! Isagi Yoichi Gameplay - Unmatched Ego Soccer Action',
      alt: 'Unmatched Ego gameplay featuring Isagi Yoichi ace player skills, 2.5K views of epic soccer action'
    },
    {
      type: 'unmatched-ego-youtube',
      id: 'G5k74_6-MiI',
      title: 'Rin and Sae Builds Gameplay - Unmatched Ego',
      alt: 'Unmatched Ego character builds for Rin and Sae, 37K views showcasing Blue Lock soccer strategies'
    },
    {
      type: 'unmatched-ego-youtube',
      id: 'SRTgsCAAsRs',
      title: 'Ultimate Unmatched Ego Skills Compilation',
      alt: 'Unmatched Ego ultimate skills compilation, 40K views of the best soccer techniques and moves'
    },
    {
      type: 'unmatched-ego-tiktok',
      id: '@luffyxego/video/7500177538212171016',
      title: 'Luffy\'s Unmatched Ego Skills Showcase',
      alt: 'Unmatched Ego skills showcase by Luffy, featuring amazing soccer gameplay and Blue Lock techniques'
    },
    {
      type: 'unmatched-ego-tiktok',
      id: '@godlysniper8/video/7500421412772007174',
      title: 'Godly Sniper\'s Unmatched Ego Montage',
      alt: 'Unmatched Ego montage by Godly Sniper, showcasing precision shots and incredible soccer skills'
    },
    {
      type: 'unmatched-ego-tiktok',
      id: '@dani_olmo_unmatchedgo/video/7503694689195904262',
      title: 'Dani Olmo Style Unmatched Ego Gameplay',
      alt: 'Unmatched Ego gameplay in Dani Olmo style, featuring professional soccer techniques and moves'
    },
    {
      type: 'unmatched-ego-shorts',
      id: 'EBp-Wm-uH9g',
      title: 'Unmatched Ego Best Goals Moments #shorts',
      alt: 'Unmatched Ego best goals compilation, featuring spectacular soccer shots and amazing gameplay moments'
    },
    {
      type: 'unmatched-ego-shorts',
      id: '1SFQrGVq5hM',
      title: 'Unmatched Ego Pro Tips & Tricks #shorts',
      alt: 'Unmatched Ego pro tips and tricks, essential techniques for mastering Blue Lock soccer gameplay'
    },
    {
      type: 'unmatched-ego-youtube',
      id: 'qKmyrEMEkLE',
      title: 'Unmatched Ego Character Analysis & Strategy Guide',
      alt: 'Unmatched Ego character analysis and strategy guide, deep dive into Blue Lock soccer tactics'
    },
    {
      type: 'unmatched-ego-youtube',
      id: 'TvjvJ2QbiaA',
      title: 'Unmatched Ego Tournament Highlights',
      alt: 'Unmatched Ego tournament highlights, featuring competitive soccer matches and epic gameplay moments'
    },
    {
      type: 'unmatched-ego-shorts',
      id: 'FG1g83GnxRg',
      title: 'Unmatched Ego Epic Saves & Blocks #shorts',
      alt: 'Unmatched Ego epic saves and blocks, showcasing incredible goalkeeper skills and defensive plays'
    },
    {
      type: 'unmatched-ego-shorts',
      id: 'Srh3t5H3baY',
      title: 'Unmatched Ego New Update Features #shorts',
      alt: 'Unmatched Ego new update features, latest game improvements and exciting soccer gameplay additions'
    }
  ],
};

// Validate configuration at build time
GameConfigSchema.parse(gameConfig);
