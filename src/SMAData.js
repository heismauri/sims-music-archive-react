const releasesData = [
  {
    slug: 'urbz-sims-in-the-city-handheld',
    title: 'The Urbz: Sims in the City ~Handheld Version~ (Original Soundtrack)',
    artists: [
      'Ian Stocker'
    ],
    content: `<p>
                This is the complete soundtrack for the handheld versions of The Urbz: Sims in the City whichoriginally
                appeared on <strong>Nintendo Game Boy Advance</strong> & <strong>Nintendo DS</strong> and were developed
                by <strong>Griptonite Games</strong>.
              </p>
              <p>
                The tracks featured in this release have been taken from their <strong>source recordings</strong>,
                remastered and correctly tagged so that they maintain the <strong>highest quality possible</strong>.
              </p>
              <p>
                We would like to thank our generous anonymous donor for providing us with the resources to make this
                release possible.
              </p>`,
    links: [
      {
        url: 'https://archive.org/compress/urbz-handheld-ost/formats=24BIT%20FLAC&file=/urbz-handheld-ost.zip',
        name: 'FLAC 24bit 48khz'
      },
      {
        url: 'https://archive.org/compress/urbz-handheld-ost/formats=VBR%20MP3&file=/urbz-handheld-ost.zip',
        name: 'MP3 V0 VBR'
      }
    ],
    iframe: 'https://archive.org/embed/urbz-handheld-ost&playlist=1&list_height=720',
    discs: [
      [
        'Title',
        'Intro',
        'King Tower',
        'Gym',
        'Jail / RnB',
        'Urbania (Day)',
        'Urbania (Night)',
        'Second Looks Thrift Emporium (The Simple Life Remix)',
        'Miniopolis Hospital / Miniopolis University (If You Really See Eurydice Remix)',
        'Sim Quarter (Day)',
        'Sim Quarter (Night)',
        'The Crypt / Cemetary (Night)',
        'Bayou (Day)',
        'Bayou (Night)',
        'Glasstown (Day)',
        'Glasstown (Night)',
        "Carnival (Down By The River / I'm The One Remix)",
        'Carnival Minigame',
        'Paradise Island (BoSIM Nova / Wet Your Whistle Remix)',
        'November 29, 1984',
        'Splicer Island (Ruins) / Jail Tunnel',
        'Splicer Island (Reconstructed)',
        'Amber Extraction',
        'The Pet Show',
        'TV - Action',
        'TV - Horror',
        'TV - Romance'
      ],
      [
        'Squeegee Clean',
        'Hoopz',
        'Doctor Max Stat!',
        'Comic Explosion',
        'Motocross Mayhem - Hard Rock',
        'Moogoo Monkey',
        'Moogoo Monkey Minigame (Lose) (Jingle)',
        'Moogoo Monkey Minigame (Stale) (Jingle)',
        'Moogoo Monkey Minigame (Win) (Jingle)',
        'Soul Music',
        'Sushi Sensei',
        'Chopper Garage (Day) - Oldies',
        'Chopper Garage (Night) - Disco',
        'Hip Hop',
        'Bossa Nova (Groceries Remix)',
        'Luau (Ending)',
        'Cracked Out Monkey Fandango (Credits)',
        'Unlock Area (Jingle)',
        'Unlock Item (Jingle)',
        'Gain Skill Point (Jingle)',
        'Learn New Social (Jingle)',
        'Goal Complete (Jingle)',
        'Negative (Jingle)',
        'Job Fail (Jingle)',
        'Job Complete 1 (Jingle)',
        'Job Complete 2 (Jingle)',
        'Job Complete 3 (Jingle)',
        'Job Complete 4 (Jingle)',
        'Mission Complete (Jingle)'
      ]
    ]
  },
  {
    slug: 'sims-two-pre-release-sampler',
    title: 'The Sims 2 Pre-Release Sampler Soundtrack',
    artists: [
      'Jerry Martin'
    ],
    content: `<p>
                Before Mark Mothersbaugh took over, Jerry was tasked with producing a set of tracks in a <strong>style
                reminiscent of his earlier work</strong> for The Sims. It is speculated that these tracks were employed
                in builds of The Sims 2 as recent as <strong>October 2003</strong>
              </p>
              <p>
                These compositions were initially accessible on Jerry's website, Jerry Martin Music, but have since
                become inaccessible <strong>unless the correct URL is known</strong>. Due to the dedicated efforts of
                our team, there is now no need for any guesswork!
              </p>
              <p>
                The objective of this album is to compile all these previously unused tracks into a single release for
                your listening enjoyment. Each track has been <strong>appropriately tagged and adorned with custom
                artwork</strong> for your pleasure.
              </p>`,
    links: [
      {
        // eslint-disable-next-line max-len
        url: 'https://archive.org/compress/the-sims-2-pre-release-sampler-soundtrack/formats=MPEG-4%20AUDIO&file=/the-sims-2-pre-release-sampler-soundtrack.zip',
        name: 'M4A 44.1 KHZ'
      }
    ],
    iframe: 'https://archive.org/embed/the-sims-2-pre-release-sampler-soundtrack&playlist=1&list_height=720',
    discs: [
      [
        'Neighborhood 2',
        'Upper Crust',
        'Big Breeze',
        'Blind Optimism',
        'Oh My God',
        'Sweetness'
      ]
    ]
  }
];

const upcomingReleasesData = [
  {
    slug: 'sims-the-ultimate-original-collection',
    title: 'The Sims: The Ultimate Original Soundtrack Collection',
    artist: 'Various Artists',
    progress: 74
  },
  {
    slug: 'sims-bustin-out',
    title: 'The Sims: Bustin\' Out Original Soundtrack',
    artist: 'Various Artists',
    progress: 47
  },
  {
    slug: 'sims-urbz-sims-in-the-city',
    title: 'The Urbz: Sims in the City Original Soundtrack',
    artist: 'Various Artists',
    progress: 10
  }
];

export { releasesData, upcomingReleasesData };
