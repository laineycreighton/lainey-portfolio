// Case studies. The order here is the order on the site.
// To add one, copy a block, give it a new slug, and fill in the fields.
// Images: put files in public/images/work and set image to '/images/work/your-file.jpg'.
// Ideal card image: 1200 x 800 px (3:2), JPG or WebP under 300 KB.
// Ideal page hero image (heroImage): 1600 x 900 px (16:9), under 400 KB.
//
// A case study gets its own full page once it has a `detail` block.
// Without one, its card links to a "coming next" page.
//
// detail fields:
//   scope       label and value pairs for the "Scope at a glance" panel
//   challenge   paragraphs
//   approach    steps, each with a heading and paragraphs
//   results     big number callouts, lead with the strongest
//   resultText  paragraphs under the numbers
//   resultHeading  optional, replaces "The result" (for example "Where it stands")
//   diagram     name of a diagram in src/components/diagrams (optional)

export const caseStudies = [
  {
    slug: 'table-power-stations',
    title: 'Table power stations',
    kicker: 'Business case and executive buy in',
    summary:
      'A venue with no floor power. I built the business case, set the pricing, and secured executive approval for a capital purchase that paid back in 12 event days.',
    metric: { value: '24x', label: 'power revenue per event day' },
    tags: ['Business case', 'Executive buy in', 'Pricing model'],
    image: '',
    imageAlt: 'Portable power station on a conference table',

    detail: {
      heroImage: '',
      heroImageAlt: 'Portable power stations set on tables in a conference space',
      scope: [
        { label: 'Investment', value: 'Capital purchase of 12 portable power units' },
        { label: 'Requirement', value: 'Full coverage of the main event space for an 8 hour day' },
        { label: 'Sponsors', value: 'Executive stakeholders' },
        { label: 'Stakeholders', value: 'Sales, operations, and clients' },
        { label: 'My role', value: 'Program owner, from business case to rollout' },
      ],
      challenge: [
        'The main event space had no floor power. Power at the tables meant running cable across the floor from the walls.',
        'That created trip hazards and capped revenue at one small power fee per event. Clients wanted laptops running all day. The space couldn’t support it.',
      ],
      approach: [
        {
          heading: 'Define requirements before choosing a solution',
          body: [
            'I started with requirements, not a catalog. A full 8 hour day of laptop use at every seat, with no recharging mid program. That set the capacity each unit needed.',
          ],
        },
        {
          heading: 'Evaluate options on total cost, not price',
          body: [
            'I compared models on cost, weight, and how easily the operations team could move and recharge them between events. The cheapest unit wasn’t the best value if it slowed down every changeover.',
          ],
        },
        {
          heading: 'Build the financial model',
          body: [
            'I set pricing per event day and modeled payback at realistic demand. That turned an equipment request into a revenue decision.',
          ],
        },
        {
          heading: 'Secure buy in and protect scope',
          body: [
            'Executive stakeholders were new to the idea, so I brought the full case: requirements, options, pricing, and payback.',
            'A smaller pilot looked safer. I showed why 12 units was the minimum viable scope. Clients don’t buy power for half a room. Partial coverage would have meant partial adoption, and the pilot would have failed for the wrong reason.',
            'Stakeholders approved the full scope.',
          ],
        },
      ],
      diagram: 'TablePowerFloor',
      results: [
        { value: '24x', label: 'power revenue per event day' },
        { value: '12', label: 'event days to pay back the full purchase' },
        { value: '100%', label: 'of tables powered, no floor cable' },
      ],
      resultText: [
        'The investment paid for itself within 12 event days. Power went from a small one time fee to a per day line item clients add for every day of their event.',
        'The space is safer, and sales has a new revenue line to offer.',
      ],
      skills: ['Business case', 'Executive buy in', 'Pricing model'],
    },
  },
  {
    slug: 'the-war-board',
    title: 'The War Board',
    kicker: 'A scalable forecasting system',
    summary:
      'A forecasting and quoting system that turned event calendars into staffing plans across 10+ properties.',
    metric: { value: '10+', label: 'properties on one forecasting system' },
    tags: ['Forecasting', 'Process design', 'Cross functional alignment'],
    image: '',
    imageAlt: 'Color coded forecasting board organized by date and event space',

    detail: {
      heroImage: '',
      heroImageAlt: 'Forecasting board organized by date and event space, color coded by technical complexity',
      scope: [
        { label: 'Scale', value: '10+ properties in three states' },
        { label: 'Teams', value: 'Up to 12 staff and 60+ technicians' },
        { label: 'Stakeholders', value: 'Operations, sales teams, and clients' },
        { label: 'My role', value: 'Designed, built, and ran the system' },
      ],
      challenge: [
        'Across a region of 10+ properties, the work came from everywhere at once. Dozens of events shared the same spaces, equipment, and technicians.',
        'Conflicts were easy to miss until they were close. Staffing was hard to match to real demand, and each sales team built quotes its own way.',
      ],
      approach: [
        {
          heading: 'Put every project in one view',
          body: [
            'I built a board organized by date and event space, so every project in the region sat in one place.',
          ],
        },
        {
          heading: 'Color code by technical complexity',
          body: [
            'Each event was color coded by how much AV it needed. Tight turnarounds and early setups stood out at a glance. So did revenue and pricing opportunities.',
          ],
        },
        {
          heading: 'Turn demand into a staffing plan',
          body: [
            'Labor needs from the board became staggered technician shifts. Staffing followed the actual workload instead of a flat schedule.',
          ],
        },
        {
          heading: 'Standardize the quote',
          body: [
            'I worked with sales teams across brands to standardize quote structure. Same line items, same logic, at every property.',
          ],
        },
      ],
      diagram: 'WarBoard',
      results: [
        { value: '10+', label: 'properties on one forecasting system' },
        { value: '1', label: 'quote structure shared across brands' },
        { value: '60+', label: 'technicians staffed from one plan' },
      ],
      resultText: [
        'Conflicts surfaced early, while there was still time to plan around them. Day to day coverage got better, and setup, strike, and fast changeovers were timed to the plan.',
        'Scheduling became consistent across properties. Labor costs went down because shifts matched the real workload, and sales quoted the same way everywhere.',
      ],
      skills: ['Forecasting', 'Process design', 'Cross functional alignment'],
    },
  },
  {
    slug: 'department-from-zero',
    title: 'Building a department from zero',
    kicker: 'Sole technical owner',
    summary:
      'Every process, vendor partnership, and pricing tool behind a portfolio of 250+ corporate event projects a year.',
    metric: { value: '250+', label: 'projects a year' },
    tags: ['Operations design', 'Vendor management', 'Pricing'],
    image: '/images/work/department-from-zero.jpg',
    imageAlt: 'Event space set with rounds, a center projection screen, two side displays, and red uplighting',

    detail: {
      heroImage: '/images/work/department-from-zero.jpg',
      heroImageAlt: 'Event space set with rounds, a center projection screen, two side displays, and red uplighting',
      scope: [
        { label: 'Portfolio', value: '250+ corporate event projects a year' },
        { label: 'Starting point', value: 'No processes, no vendor network, no pricing system' },
        { label: 'Stakeholders', value: 'Sales, event operations, executive leadership, and clients' },
        { label: 'My role', value: 'Sole technical owner' },
      ],
      challenge: [
        'I came in as the only technical owner on site. There was no department to inherit: no processes, no vendor network, and no consistent way to scope or price the work.',
        'Corporate events kept booking while the structure was still being built.',
      ],
      approach: [
        {
          heading: 'Define the delivery standard',
          body: [
            'I set the scope, processes, and delivery standards every project follows, from first inquiry to final invoice.',
          ],
        },
        {
          heading: 'Build the quoting and pricing system',
          body: [
            'I designed a system that standardizes how every project is scoped, estimated, and priced. Sales gets consistent quotes, and clients get clear options.',
          ],
        },
        {
          heading: 'Flex capacity without fixed headcount',
          body: [
            'I sourced a network of subrental vendors and freelance technicians. Capacity scales with the calendar, not with payroll.',
          ],
        },
        {
          heading: 'Keep costs down and decisions in one place',
          body: [
            'I renegotiated vendor terms and optimized labor scheduling to bring operating costs down. Sales, event operations, and leadership come to one owner for technical decisions, which keeps scope, schedule, and budget aligned.',
          ],
        },
      ],
      diagram: 'DeptModel',
      results: [
        { value: '250+', label: 'corporate event projects a year' },
        { value: '1', label: 'standard for scoping, estimating, and pricing' },
        { value: '0', label: 'fixed headcount added to flex capacity' },
      ],
      resultText: [
        'A department that didn’t exist now runs 250+ projects a year on one standard. Capacity flexes with demand, and operating costs came down through labor optimization and vendor renegotiation.',
      ],
      skills: ['Operations design', 'Vendor management', 'Pricing'],
    },
  },
  {
    slug: 'led-wall-capital-program',
    title: 'LED wall capital program',
    kicker: 'Capital planning, decision pending',
    summary:
      'A business case to replace aging projection with an LED wall, built from repair history, downtime rentals, and total cost.',
    metric: null,
    tags: ['Capital planning', 'Business case', 'Executive reporting'],
    image: '/images/work/led-wall-capital-program.jpg',
    imageAlt: 'Large event space with projection screens, a stage, and round tables',

    detail: {
      heroImage: '/images/work/led-wall-capital-program.jpg',
      heroImageAlt: 'Large event space with projection screens, a stage, and round tables',
      scope: [
        { label: 'Investment', value: 'LED video wall, capital purchase' },
        { label: 'Replacing', value: 'Aging projection screens in the main event space' },
        { label: 'Stakeholders', value: 'Executive stakeholders, in weekly capital reviews' },
        { label: 'Status', value: 'Business case complete, decision pending' },
        { label: 'My role', value: 'Business case owner' },
      ],
      challenge: [
        'The main event space relied on aging projection screens. Every failure meant a repair bill, plus rented equipment to cover the gap.',
        'Those costs were real, but they were spread across separate invoices. The true cost of keeping the old system wasn’t visible in one place.',
      ],
      approach: [
        {
          heading: 'Build the repair history',
          body: [
            'I pulled together the repair history on the existing screens and what each failure cost to fix.',
          ],
        },
        {
          heading: 'Count the cost of downtime',
          body: [
            'When the screens went down, we rented equipment to cover. I added those rental costs, which rarely show up in an equipment budget.',
          ],
        },
        {
          heading: 'Compare total cost, not sticker price',
          body: [
            'I set the purchase cost of an LED wall against the ongoing cost of repairs and rentals, so the comparison was total cost of ownership.',
          ],
        },
        {
          heading: 'Bring it to the capital review',
          body: [
            'I present the case in weekly capital reviews with executive stakeholders.',
          ],
        },
      ],
      diagram: 'LedCase',
      resultHeading: 'Where it stands',
      results: [
        { value: '3', label: 'cost inputs: repairs, downtime rentals, and purchase' },
        { value: 'Weekly', label: 'capital reviews with executive stakeholders' },
        { value: 'Pending', label: 'final capital decision' },
      ],
      resultText: [
        'The decision is still with leadership. The case puts the full cost of keeping the old system next to the cost of replacing it, so the decision rests on total cost, not sticker price.',
      ],
      skills: ['Capital planning', 'Business case', 'Executive reporting'],
    },
  },
  {
    slug: 'two-million-production',
    title: '$2M production',
    kicker: 'Concept to closeout',
    summary:
      'An international customer summit for a global aerospace company. I owned scope, vendors, logistics, and execution from first call to final invoice.',
    metric: { value: '$2M', label: 'program value' },
    tags: ['End to end delivery', 'Vendor management', 'Budget'],
    image: '',
    imageAlt: 'Large general session stage with LED screens',

    detail: {
      heroImage: '',
      heroImageAlt: 'General session stage with LED screens before doors open',
      scope: [
        { label: 'Program value', value: '$2M' },
        { label: 'Timeline', value: '8 weeks, first call to closeout' },
        { label: 'Audience', value: 'About 1,200 to 1,500 attendees' },
        { label: 'Vendors', value: '3 to 5 partners' },
        { label: 'Client', value: 'A global aerospace company' },
        { label: 'My role', value: 'Program owner, concept to closeout' },
      ],
      challenge: [
        'A global aerospace company brought an international customer summit with a large audience and an 8 week runway.',
        'Scope, vendors, logistics, and execution all had to come together on one schedule, with one owner accountable for all of it.',
      ],
      approach: [
        {
          heading: 'Lock the scope early',
          body: [
            'I turned the client’s goals into a defined scope and budget before vendors were engaged. Everything after that had a baseline to measure against.',
          ],
        },
        {
          heading: 'Run every workstream on one schedule',
          body: [
            'Eight weeks left no room for drift. Design, contracting, logistics, and installation all ran on one schedule with clear milestones.',
          ],
        },
        {
          heading: 'Give every vendor a clear lane',
          body: [
            'I brought in and managed 3 to 5 vendor partners, each with a defined scope, so nothing fell between contracts.',
          ],
        },
        {
          heading: 'Own it through closeout',
          body: [
            'The client added scope along the way. Each change was scoped, priced, and folded into the plan. I ran the program on site and closed out with final costs reconciled.',
          ],
        },
      ],
      diagram: 'ProgramTimeline',
      results: [
        { value: '$2M', label: 'program value' },
        { value: '8 wks', label: 'from first call to closeout' },
        { value: '1,200+', label: 'attendees from around the world' },
      ],
      resultText: [
        'One owner, one schedule, and a vendor team that delivered as one. Scope grew as the client’s plans grew, and the program still went from first call to closeout in 8 weeks.',
      ],
      skills: ['End to end delivery', 'Vendor management', 'Budget'],
    },
  },
  {
    slug: 'regional-operations',
    title: 'Regional operations leadership',
    kicker: 'Three states, one standard',
    summary:
      'Directed event technology across 10+ properties in WA, OR, and WY, with teams of 12 staff and 60+ technicians.',
    metric: { value: '60%', label: 'AV revenue lift at one property in four months' },
    tags: ['People leadership', 'Budgets', 'Revenue strategy'],
    image: '/images/work/regional-operations.jpg',
    imageAlt: 'Gala dinner in a timber barn with round tables, floral centerpieces, uplighting, and a draped stage',

    detail: {
      heroImage: '/images/work/regional-operations.jpg',
      heroImageAlt: 'Gala dinner in a timber barn with round tables, floral centerpieces, uplighting, and a draped stage',
      scope: [
        { label: 'Region', value: '10+ properties in WA, OR, and WY' },
        { label: 'Team', value: 'Up to 12 full time staff and 60+ technicians' },
        { label: 'Ownership', value: 'Hiring, staffing, budgets, forecasting, and revenue strategy' },
        { label: 'My role', value: 'Director of Event Technology for the region' },
      ],
      challenge: [
        'Ten plus properties across three states, each with its own team, its own clients, and its own way of working.',
        'Leading the region meant raising the standard everywhere while every event still had to deliver.',
      ],
      approach: [
        {
          heading: 'Build the team',
          body: [
            'I owned hiring and staffing plans for up to 12 full time staff and 60+ technicians across the region.',
          ],
        },
        {
          heading: 'Run the region on one forecast',
          body: [
            'Budgets and staffing ran off the War Board, so every property planned the same way and labor matched real demand.',
          ],
        },
        {
          heading: 'Hold one standard',
          body: [
            'Same quote structure, same scheduling approach, and the same expectations at every property, in every state.',
          ],
        },
        {
          heading: 'Turn service into revenue',
          body: [
            'At a luxury resort property, I paired a targeted sales strategy with better service delivery. AV revenue rose 60% in four months.',
          ],
        },
      ],
      diagram: 'RegionModel',
      results: [
        { value: '60%', label: 'AV revenue lift at a luxury resort in four months' },
        { value: '10+', label: 'properties in three states on one standard' },
        { value: '60+', label: 'technicians staffed and led' },
      ],
      resultText: [
        'The region ran on one forecast, one quote structure, and one standard of service. Where that standard met a strong sales strategy, revenue followed.',
      ],
      skills: ['People leadership', 'Budgets', 'Revenue strategy'],
    },
  },
]
