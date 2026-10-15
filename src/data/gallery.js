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
  { src: '', alt: 'General session room set with stage and LED wall', title: 'General session', detail: 'Stage, LED wall, and theater seating' },
  { src: '', alt: 'Ballroom set for a banquet with uplighting', title: 'Banquet', detail: 'Rounds, uplighting, and a center stage' },
  { src: '', alt: 'Breakout room with projection and conferencing', title: 'Breakout', detail: 'Projection and hybrid conferencing', tall: true },
  { src: '', alt: 'Classroom set with table power at every seat', title: 'Classroom', detail: 'Table power at every seat' },
  { src: '', alt: 'Reception space with lighting and audio', title: 'Reception', detail: 'Lighting, audio, and branding' },
  { src: '', alt: 'Front of house audio and video control position', title: 'Control position', detail: 'Front of house audio and video' },
]
