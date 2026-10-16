// All site copy lives here so it can be edited without touching components.

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const brand = {
  name: "Evoris",
  tagline: "Life, simplified.",
  descriptor: "Your Life Journey Service Partner",
};

// TODO: replace with real contact details before launch.
export const contact = {
  email: "hello@evoris.in",
  phone: "+91 98765 43210",
  address: "Chennai, Tamil Nadu, India",
  hours: "Mon – Sat · 9:00 AM – 7:00 PM",
};

export const founder = {
  name: "NJG Kennedy",
  title: "Founder · Life Journey Services Entrepreneur",
  intro: [
    "NJG Kennedy is a “Life Journey Services” entrepreneur who believes that the moments which shape us — a first birthday, a wedding vow, a hospital corridor at midnight, a career at a crossroads — deserve more than scattered vendors and last-minute calls.",
    "Evoris was born from a simple conviction: every family deserves one trusted partner who walks beside them through every season of life, bringing expertise, empathy and modern technology together under one roof.",
  ],
  promise:
    "I promise that Evoris will treat your life’s moments as if they were our own — with care in the tender ones, joy in the celebrations, steadiness at the crossroads, and honesty always. Whatever the moment, you will never have to face it alone.",
};

export const about = {
  lead:
    "Evoris is an end-to-end Life Journey Service Partner — planning, managing, enabling and supporting every vital life event, moment and necessity across every stage of life.",
  pillars: [
    {
      title: "One partner, every moment",
      body: "We engage, plan, manage, mentor, counsel, represent and deliver across celebrations, care, prosperity, safety, property, remembrance and growth — so life’s big and small moments feel effortless.",
    },
    {
      title: "Built on intelligence",
      body: "We integrate modernisation, artificial intelligence and automation into every service, making support faster, more personal and always within reach.",
    },
    {
      title: "Expertise on demand",
      body: "Through trusted partners, vendors and our own specialised departments — technology, legal, financial, property, medical, training, research, counselling and more — we source exactly the skill each moment needs.",
    },
    {
      title: "A living social conscience",
      body: "We contribute to research, surveys and publications on socio-cultural, economic, technological and educational trends — keeping our services, and our community, thoughtfully evolving.",
    },
  ],
  serve: [
    "Individuals",
    "Families",
    "Groups",
    "Corporates",
    "Educational Institutions",
    "Private & Public Sectors",
    "Partnerships & Proprietorships",
    "Government Organisations",
    "NGOs",
    "Social & Cultural Institutions",
  ],
  departments: [
    "Technology",
    "Legal",
    "Financial",
    "Administrative",
    "Property",
    "Medical",
    "Training",
    "Innovation",
    "Research",
    "Coaching",
    "Counselling",
    "Mentoring",
    "Human Resources",
    "Customer Experience",
    "Stakeholder Management",
  ],
};

export const process = [
  { title: "Connect", body: "Reach us by call, message or visit — members get a dedicated Life Journey Manager." },
  { title: "Understand", body: "We listen deeply to the moment, the people involved and what matters most to you." },
  { title: "Plan", body: "A tailored plan with clear timelines, budgets and choices, shaped together with you." },
  { title: "Source & Partner", body: "We bring in the right experts, vendors and technology from our trusted network." },
  { title: "Deliver", body: "We execute and manage every detail end-to-end, keeping you updated at each step." },
  { title: "Care & Follow-through", body: "We stay beside you after the moment — reviewing, supporting and refining." },
  { title: "Evolve Together", body: "Your journey continues; we grow with you into every next chapter of life." },
];

export type Service = { name: string; sub?: string[] };
export type Sphere = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  services: Service[];
};

export const spheres: Sphere[] = [
  {
    id: "celebrations",
    title: "Moments of Celebrations",
    blurb:
      "Life’s happiest milestones deserve to be lived, not managed. From the first candle to the grandest vow, we design and deliver celebrations that feel entirely yours.",
    image: "1530103862676-de8c9debad1d",
    alt: "Colourful balloons at a celebration",
    services: [
      { name: "Birthday" },
      { name: "Wedding" },
      { name: "Baby Shower" },
      { name: "Half-Saree" },
      { name: "Anniversary" },
      { name: "Engagements" },
      { name: "Housewarming" },
      { name: "Special Family Gatherings & Occasions" },
      { name: "Destination Oriented Special Celebrations" },
    ],
  },
  {
    id: "care",
    title: "Heart of Care",
    blurb:
      "When the people you love need looking after, we step in with warmth and reliability. Compassionate, professional care that brings peace of mind to the whole family.",
    image: "1576765608535-5f04d1e3f289",
    alt: "A caregiver gently attending to an elderly woman",
    services: [
      { name: "Elderly & Seniors Supportive Care" },
      { name: "Hospitalization Care" },
      { name: "Mothers Care (Pregnancy & Post Childbirth)" },
      { name: "Elderly Health Monitoring and Emergency Care Support" },
    ],
  },
  {
    id: "prosperity",
    title: "Towards Abundance, Prosperity & Wealth",
    blurb:
      "Financial clarity is the foundation of a confident life. We help you plan, grow and protect your wealth with guidance that is honest, informed and personal.",
    image: "1554224155-6726b3ff858f",
    alt: "Financial documents and a calculator on a desk",
    services: [
      { name: "Financial Planning Consultation" },
      { name: "Investment & Wealth Management" },
      { name: "Debt Consolidation and Financial Realignment" },
      { name: "Tax Management" },
    ],
  },
  {
    id: "crossroads",
    title: "Support @ Life Cross Road",
    blurb:
      "Some turns in life call for a steady hand and a clear view ahead. Whether it’s a career change, a legal matter or a big decision, we help you choose the right road.",
    image: "1464207687429-7505649dae38",
    alt: "People sitting on a hilltop overlooking a valley at sunrise",
    services: [
      { name: "Job Loss / Career Challenge Guidance and Consulting" },
      { name: "Career Planning" },
      { name: "Business & Entrepreneurship Guidance & Mentoring" },
      { name: "Legal Services & Management" },
      { name: "Education Choices and Options Enablement" },
    ],
  },
  {
    id: "safety",
    title: "Assuring Safety & Protection",
    blurb:
      "Feeling safe is the quiet comfort every family deserves. We bring together smart technology and dependable people to protect your home and your loved ones.",
    image: "1558002038-1055907df827",
    alt: "Smart lock on a door controlled by a phone",
    services: [
      { name: "Home Secure & Safety Solutions Management" },
      { name: "Child Safety & Tracking Solutions" },
      { name: "Family Safety Management" },
    ],
  },
  {
    id: "property",
    title: "Securing Asset & Property Management",
    blurb:
      "Your land and property carry your hard work and your legacy. We look after them with care and transparency — wherever you are in the world.",
    image: "1500382017468-9049fed747ef",
    alt: "Golden farmland at sunset",
    services: [
      { name: "Farmland / Property Management" },
      { name: "Rental Non-Commercial & Commercial Property Management" },
    ],
  },
  {
    id: "pain",
    title: "Shouldering Moments of Pain",
    blurb:
      "In life’s most difficult hours, no one should have to carry the weight alone. We stand beside you with dignity, sensitivity and practical support.",
    image: "1544027993-37dbfe43562a",
    alt: "Two hands reaching towards each other",
    services: [{ name: "Remembrance" }, { name: "There for You!!!" }],
  },
  {
    id: "support",
    title: "Towards Shared Support",
    blurb:
      "Sometimes the most powerful help is someone who truly listens. Our counsellors, coaches and mentors help individuals and families find clarity, balance and strength.",
    image: "1573497019940-1c28c88b4f3e",
    alt: "A smiling counsellor",
    services: [
      {
        name: "Counselling Support",
        sub: [
          "Individual Counselling",
          "Family Counselling",
          "Relationship Counselling",
          "Children Counselling",
        ],
      },
      { name: "Coaching & Mentoring" },
    ],
  },
  {
    id: "roots",
    title: "Capture Life Moments, Family Roots & History",
    blurb:
      "Every family has a story worth keeping. We capture your moments, trace your roots and preserve your history so it can be treasured for generations.",
    image: "1609220136736-443140cffec6",
    alt: "A father smiling with his young children",
    services: [
      { name: "Audio / Video / Photo Shoots and Capture" },
      {
        name: "The Roots",
        sub: [
          "“Family Tree” Mapping",
          "Chronicle and Capture Family History, Genealogy & Roots",
          "Familiography Scripting & Publishing",
          "Family Short Films & Documentaries",
          "Family Traditions Capture & Insight",
          "Family Website End-to-End Management",
        ],
      },
    ],
  },
  {
    id: "green",
    title: "Green@Home",
    blurb:
      "A greener home is a healthier, happier home. We help you grow, nurture and reconnect with nature — from your balcony garden to your family farm.",
    image: "1416879595882-3373a0480b5b",
    alt: "A garden trowel in fresh soil",
    services: [
      { name: "Green Home Solutions" },
      { name: "Home Garden Management & Maintenance" },
      { name: "Rent a Tree / Plant a Tree" },
      { name: "Family Farming" },
      { name: "Natural Agricultural / Farming Awareness" },
    ],
  },
  {
    id: "vacation",
    title: "Vacation, Leisure & Happy Moments Management",
    blurb:
      "Time away together is where some of life’s best memories are made. We plan every detail so your only job is to relax and enjoy the journey.",
    image: "1507525428034-b723cf961d3e",
    alt: "A calm tropical beach at sunrise",
    services: [
      { name: "Vacation & Holiday Planning" },
      { name: "Destination Family Vacation Support" },
      { name: "Special Occasion Holidaying Management" },
    ],
  },
];

export const membership = {
  title: "Evoris Members / Partners “Right”",
  lead:
    "Membership makes Evoris your family’s standing partner for life — one card, one relationship, every moment covered.",
  perks: [
    { title: "Dedicated Life Journey Manager", body: "A single point of contact who knows your family and your plans." },
    { title: "Priority Access", body: "First access to our experts, vendors and time-sensitive support." },
    { title: "Member Privileges", body: "Preferred pricing and curated offers across our partner network." },
    { title: "Life Calendar", body: "Reminders and early planning for the birthdays, anniversaries and milestones that matter." },
    { title: "Partner “Right”", body: "Individuals and organisations can join as partners and grow with the Evoris ecosystem." },
    { title: "Member Community", body: "Workshops, awareness sessions and gatherings with fellow members." },
  ],
};
