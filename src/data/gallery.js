// Room sets and events gallery.
//
// To add a photo:
//   1. Put the file in public/images/rooms (JPG or WebP, under 400 KB).
//   2. Fill in a slot below, or copy one to add more.
//
// Ideal size: 1600 x 1067 px (3:2 landscape). Portrait photos work too: set tall: true
// and use 1067 x 1600 px (2:3).
//
// Privacy: no identifiable guests, no client logos or names on screens or signage.
//
// Fields:
//   src      '/images/rooms/your-file.jpg'  (leave '' to show a placeholder)
//   alt      what the photo shows, for screen readers
//   title    short name, shown under the photo
//   detail   one line: room type, scale, or the tech involved
//   tall     true for portrait photos

export const galleryIntro = {
  title: 'Rooms and events',
  lede: 'A look at room sets and events I’ve designed, built, and run.',
}

export const gallery = [
  {
    src: '/images/rooms/gala-show-control.jpg',
    alt: 'Show control position overlooking a ballroom gala with an LED wall, projected star graphics, and long dinner tables',
    title: 'Gala show control',
    detail: 'Lighting, audio, and video run from one position',
  },
  {
    src: '/images/rooms/lantern-reception.jpg',
    alt: 'Reception room lit in red and pink with hanging lanterns, round rugs, and glass top tables',
    title: 'Lantern reception',
    detail: 'Full room color wash and hanging lantern decor',
    tall: true,
  },
  {
    src: '/images/rooms/keynote.jpg',
    alt: 'Fireside keynote room with theater seating, a small stage, warm drape uplighting, and speakers',
    title: 'Fireside keynote',
    detail: 'Warm uplighting, theater seating, and stage audio',
  },
  {
    src: '/images/rooms/hybrid-meeting.jpg',
    alt: 'Board meeting set in a U shape with table microphones, dual projection screens, and a remote video feed',
    title: 'Hybrid board meeting',
    detail: 'Table mics, dual screens, and a live video call',
  },
  {
    src: '/images/rooms/drape-install.jpg',
    alt: 'Crew on ladders installing pink drape and a floral chandelier along a carpeted corridor',
    title: 'Drape install',
    detail: 'Corridor transformed with drape, rugs, and color',
    tall: true,
  },
  {
    src: '/images/rooms/awards-dinner.jpg',
    alt: 'Barn dinner set with long farm tables, a clear lectern, two screens, a band stage, and chandeliers',
    title: 'Awards dinner',
    detail: 'Lectern, side screens, and a band stage',
  },
  {
    src: '/images/rooms/outdoor-lounge.jpg',
    alt: 'Outdoor lounge on a lawn beside a barn with string lights, white lounge furniture, and a bar',
    title: 'Outdoor lounge',
    detail: 'String lighting and power for an evening reception',
    tall: true,
  },
  {
    src: '/images/rooms/meeting-room.jpg',
    alt: 'Library style meeting room with a round table, worktables, a wall display, and overhead lighting',
    title: 'Meeting room',
    detail: 'Wall display and flexible table layout',
  },
  {
    src: '/images/rooms/general-session.jpg',
    alt: 'General session room with an LED backdrop, two side screens, a stage, and a camera riser',
    title: 'General session',
    detail: 'LED backdrop, side screens, and a camera riser',
  },
  {
    src: '/images/rooms/reception.jpg',
    alt: 'Reception lounge with purple uplighting, a bar, murals, and set tables',
    title: 'Reception',
    detail: 'Color uplighting and dinner tables in a lounge space',
  },
  {
    src: '/images/rooms/multicamera-production.jpg',
    alt: 'Production desk with a multiview monitor and a live video switcher in a demo kitchen',
    title: 'Multicamera production',
    detail: 'Six camera live switch for a culinary demo',
  },
  {
    src: '/images/rooms/panel-session.jpg',
    alt: 'Panel session with theater seating, a raised stage with six chairs, and three screens',
    title: 'Panel session',
    detail: 'Theater seating, raised stage, and three screens',
    tall: true,
  },
  {
    src: '/images/rooms/breakout.jpg',
    alt: 'Breakout room with round tables, a projection screen, and a speaker',
    title: 'Breakout',
    detail: 'Rounds, projection, and audio for a small group',
    tall: true,
  },
  {
    src: '/images/rooms/front-of-house.jpg',
    alt: 'Technician at the front of house position with an audio console, wireless racks, and playback laptop',
    title: 'Front of house',
    detail: 'Audio, wireless, and playback control',
    tall: true,
  },
]
