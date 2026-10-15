// Site wide content. Edit text here, not in the layout files.

export const site = {
  name: 'Lainey Creighton',
  role: 'Technology Program Manager',
  url: 'https://laineyportfolio.com',

  headline:
    'Complex technology programs, delivered. I own the scope, the budget, the vendors, and the outcome.',
  // The part of the headline shown in the accent color. Must match the end of the headline exactly, or set to ''.
  headlineEmphasis: 'and the outcome.',

  subline: [
    'PMP',
    'Event and AV technology programs',
    'Reno, open to remote',
  ],

  stats: [
    { value: '250+', label: 'event technology projects a year' },
    { value: '10+', label: 'properties led across three states' },
    { value: '$2M', label: 'largest single program, concept to closeout' },
  ],

  email: 'dev.lainey@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lainey-creighton',

  headshot: {
    src: '/images/headshot.webp',
    alt: 'Portrait of Lainey Creighton',
  },
}

// Contact page.
export const contact = {
  title: 'Let’s talk.',
  lede: 'Questions about any of this work? I’m happy to walk through it.',
  facts: [
    { label: 'Location', value: 'Reno, NV · Open to remote' },
    { label: 'Certification', value: 'PMP' },
  ],
}

// Certifications and credentials. Update status here when anything changes.
export const credentials = [
  { name: 'PMP', detail: 'Project Management Professional' },
  { name: 'Full stack web development', detail: 'Certificate, UC Berkeley Extension' },
]

// Delivery framework, used on Home and How I run programs.
// text: short line for the Home page. pmp: matching PMI process group.
// output: what exists at the end of the step.
export const framework = [
  {
    step: 'Intake',
    text: 'Define the goal, the budget, and who has to say yes.',
    pmp: 'Initiating',
    output: 'A clear scope, a budget range, and the name of every decision maker.',
  },
  {
    step: 'Plan',
    text: 'Scope, schedule, vendors, and staffing, all in one view.',
    pmp: 'Planning',
    output: 'A quote, a staffing plan, and vendor commitments tied to real dates and locations.',
  },
  {
    step: 'Align',
    text: 'Walk stakeholders through the plan and the risks before money moves.',
    pmp: 'Planning',
    output: 'Signed approval, known risks, and a plan for each one.',
  },
  {
    step: 'Deliver',
    text: 'Execute the plan. Track changes and make decisions in real time.',
    pmp: 'Executing, Monitoring and Controlling',
    output: 'A delivered program, with every change logged and priced.',
  },
  {
    step: 'Close out',
    text: 'Reconcile costs, capture lessons, feed the next forecast.',
    pmp: 'Closing',
    output: 'Final costs against the quote, and lessons that change the next plan.',
  },
]
