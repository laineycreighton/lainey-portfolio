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
