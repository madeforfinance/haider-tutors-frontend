/* ==========================================================================
   Haider Tutors — shared demo records (ht-data.js)
   These are the SAME reference IDs, subjects, levels, locations and statuses
   already shown on the existing screens, collected in one place so every
   screen stays consistent. Prototype data only — no backend.
   ========================================================================== */
window.HT_DATA = {
  requests: {
    'HT-REQ-2025-0842': {
      ref: 'HT-REQ-2025-0842', short: 'Physics & Chemistry', codes: 'CAIE Physics 0625 / Chem 0620', modeLocation: 'Home Tuition (Sector F-7/2)', title: 'Physics (0625) & Chemistry (0620)',
      student: 'Rayan Khan', level: 'Cambridge IGCSE (O-Level) • Year 10',
      board: 'Cambridge Assessment International Education (CAIE)',
      session: 'May/June 2026', mode: 'Home Tuition', location: 'Islamabad, Sector F-7/2',
      schedule: '3 days/wk • 5:00 – 6:30 PM PKT', budget: '45,000 PKR / Month',
      status: 'Under Academic Review', submitted: 'Oct 24, 2025',
      notes: 'Student preparing for final IGCSE sitting. Needs targeted past-paper drilling on Electricity, Thermal Physics and Stoichiometry calculations.'
    },
    'HT-REQ-2025-0791': {
      ref: 'HT-REQ-2025-0791', short: 'Pure Mathematics & Mechanics', codes: 'Edexcel P1\u2013P3 / M1', modeLocation: 'Online (Live 1-on-1 Digital Whiteboard)', title: 'Pure Mathematics (P1–P3) & Mechanics (M1)',
      student: 'Ayla Khan', level: 'Pearson Edexcel International A-Level • Year 1',
      board: 'Pearson Edexcel', session: 'January 2026',
      mode: 'Online (Live 1-on-1 Digital Whiteboard)', location: 'Global / UAE hub',
      schedule: '4 days/wk • Flexible timings', budget: '$220 USD / Month',
      status: 'Published to Vetted Educators', submitted: 'Oct 19, 2025',
      notes: 'Advanced-level mechanics focus. Shortlisting review in progress with the lead coordinator.'
    },
    'HT-REQ-2025-0618': {
      ref: 'HT-REQ-2025-0618', short: 'Computer Science \u2022 Python', codes: 'CAIE CS 0478', modeLocation: 'Online 1-on-1 (Islamabad Academic Hub)', title: 'Computer Science (0478) • Python & Architecture',
      student: 'Rayan Khan', level: 'Cambridge IGCSE • Year 10',
      board: 'Cambridge Assessment International Education (CAIE)',
      session: 'Ongoing', mode: 'Online 1-on-1', location: 'Islamabad Academic Hub',
      schedule: '2 days/wk • Tue & Fri 4:00 PM', budget: '35,000 PKR / Month',
      status: 'Coordination Completed & In Progress', submitted: 'Sep 12, 2025',
      notes: 'Active faculty: Engr. Bilal Tariq (FAST-NUCES). 12 of 24 sessions completed; 94% quiz average.'
    },
    'HT-REQ-2025-0810': {
      ref: 'HT-REQ-2025-0810', short: 'English Language & Literature', codes: 'CAIE 1123 / 0475', modeLocation: 'Home Tuition (Sector F-7)', title: 'English Language (1123) & Literature (0475)',
      student: 'Rayan Khan', level: 'Cambridge IGCSE • Year 10',
      board: 'Cambridge Assessment International Education (CAIE)',
      session: 'May/June 2026', mode: 'Home Tuition', location: 'Islamabad, Sector F-7',
      schedule: '2 days/wk • Weekend mornings', budget: '35,000 PKR / Month',
      status: 'Under Academic Review', submitted: 'Oct 21, 2025',
      notes: 'Focus on essay mechanics, directed writing and unseen poetry.'
    }
  },
  applications: {
    'APP-2025-0941': {
      app: 'APP-2025-0941', tuition: 'HT-REQ-2025-0842',
      title: 'Cambridge IGCSE Physics (0625) & Chemistry (0620)',
      board: 'Cambridge O-Level / Grade 10', mode: 'Home Tuition • Sector F-7/2, Islamabad',
      fee: '45,000 PKR / Month', status: 'Under Review', submitted: 'Oct 25, 2025',
      reviewer: 'Prof. M. Arshad (Physics Chair)', step: 2,
      note: 'Academic committee assessing syllabus credentials, prior IGCSE board results and transit schedule feasibility.'
    },
    'APP-2025-0955': {
      app: 'APP-2025-0955', tuition: 'HT-REQ-2025-0895',
      title: 'Pearson Edexcel A-Level Pure Mathematics (P1–P3) & Mechanics (M1)',
      board: 'Edexcel International A-Level • Year 12', mode: 'Online Interactive • Dubai Academic Hub (UAE)',
      fee: '$250 USD / Month', status: 'Submitted', submitted: 'Oct 24, 2025',
      reviewer: 'Awaiting Regional Officer queue handshake', step: 1,
      note: 'Initial dossier intake queue for coordinator evaluation. Queue position: #2.'
    },
    'APP-2025-0899': {
      app: 'APP-2025-0899', tuition: 'HT-REQ-2025-0791',
      title: 'Pure Mathematics (P1–P3) & Mechanics (M1)',
      board: 'Pearson Edexcel A-Level', mode: 'Online Interactive (UAE / Global)',
      fee: '$220 USD / Month', status: 'Accepted', submitted: 'Oct 20, 2025',
      reviewer: 'Dr. Tariq Mansoor (Academic Directorate)', step: 4,
      note: 'Family agreement finalised. Faculty appointment letter #HA-AP-9902 issued.'
    },
    'APP-2025-0812': {
      app: 'APP-2025-0812', tuition: 'HT-REQ-2025-0618',
      title: 'Computer Science (0478) • Python & Computer Architecture',
      board: 'Cambridge IGCSE • Year 11', mode: 'Online 1-on-1 • Islamabad Academic Hub',
      fee: '35,000 PKR / Month', status: 'Accepted', submitted: 'Sep 14, 2025',
      reviewer: 'Live execution — Term 1', step: 4,
      note: 'Teaching in progress. Next: Oct 28 (15:00 PKT). Mid-term evaluation milestone pending Nov 10, 2025.'
    },
    'APP-2025-0780': {
      app: 'APP-2025-0780', tuition: 'HT-REQ-2025-0550',
      title: 'AP Computer Science A & Data Structures',
      board: 'College Board AP / Advanced', mode: 'Online (USA Hub)',
      fee: '$350 USD / Month', status: 'Rejected', submitted: 'Aug 30, 2025',
      reviewer: 'Coordinator resolution note', step: 0,
      note: 'Schedule incompatibility: the family requested weekday morning slots (08:00 EST) which conflicted with stated evening availability. Tuition reassigned to North America regional bench.'
    }
  },
  listings: {
    'HT-REQ-2025-0842': { subjects: 'Physics (0625) & Chemistry (0620)', level: 'Cambridge IGCSE • Grade 10', mode: 'Home Tuition', location: 'Islamabad, Sector F-7', schedule: '3 Days/Week • Mon, Wed, Fri • 5:00–6:30 PM PKT', budget: '45,000 PKR / Month', tag: 'Urgent Allocation' },
    'HT-REQ-2025-0855': { subjects: 'IB MYP Integrated Sciences (Physics & Chemistry)', level: 'International Baccalaureate (IB) • MYP 4/5', mode: 'Home Tuition (In-Person)', location: 'Islamabad', schedule: '3 Days/Week • Mon, Wed, Thu • 4:30–6:00 PM', budget: '50,000 PKR / Month', tag: 'Open for Applications' },
    'HT-REQ-2025-0895': { subjects: 'Edexcel IAL Pure Mathematics (P1–P3) & Mechanics (M1)', level: 'Edexcel International A-Level • Year 12', mode: 'Online', location: 'Dubai Academic Hub (UAE)', schedule: '4 Sessions/Week • 6.0 Contact Hours', budget: '$250 USD / Month', tag: 'Open Intake' }
  }
};
