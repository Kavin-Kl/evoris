// All site copy lives here so it can be edited without touching components.

/** Unsplash photo URL (free licence). */
export const photo = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const brand = {
  name: "Evoris",
  tagline: "Life, simplified.",
  descriptor: "Your Life Journey Service Partner",
};

export const contact = {
  email: "evoris.org@gmail.com",
  phone: "+91 91500 11035",
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
    image: "1679937698873-6065742c8d32",
    alt: "A bride and groom during a Tamil wedding ritual, surrounded by family",
    blurb:
      "Life’s happiest milestones deserve to be lived, not managed. From the first candle to the grandest vow, we design and deliver celebrations that feel entirely yours.",
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
    image: "1624434070018-4a74c7d91715",
    alt: "A grandmother in a saree holding her grandchild in a garden",
    blurb:
      "When the people you love need looking after, we step in with warmth and reliability. Compassionate, professional care that brings peace of mind to the whole family.",
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
    image: "1656236607879-cd489955e17b",
    alt: "A woman reviewing plans on a tablet by the water",
    blurb:
      "Financial clarity is the foundation of a confident life. We help you plan, grow and protect your wealth with guidance that is honest, informed and personal.",
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
    image: "1676569645218-05d93a50d8e8",
    alt: "A young woman working on a laptop on a bench",
    blurb:
      "Some turns in life call for a steady hand and a clear view ahead. Whether it’s a career change, a legal matter or a big decision, we help you choose the right road.",
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
    image: "1533253386197-6b67a7238177",
    alt: "A carved wooden door and stone steps of a yellow house",
    blurb:
      "Feeling safe is the quiet comfort every family deserves. We bring together smart technology and dependable people to protect your home and your loved ones.",
    services: [
      { name: "Home Secure & Safety Solutions Management" },
      { name: "Child Safety & Tracking Solutions" },
      { name: "Family Safety Management" },
    ],
  },
  {
    id: "property",
    title: "Securing Asset & Property Management",
    image: "1560838944-9e0177bbc294",
    alt: "A woman standing in a green paddy field",
    blurb:
      "Your land and property carry your hard work and your legacy. We look after them with care and transparency — wherever you are in the world.",
    services: [
      { name: "Farmland / Property Management" },
      { name: "Rental Non-Commercial & Commercial Property Management" },
    ],
  },
  {
    id: "pain",
    title: "Shouldering Moments of Pain",
    image: "1636619773834-c7e0762ddfe1",
    alt: "Clay oil lamps glowing in the dark",
    blurb:
      "In life’s most difficult hours, no one should have to carry the weight alone. We stand beside you with dignity, sensitivity and practical support.",
    services: [{ name: "Remembrance" }, { name: "There for You!!!" }],
  },
  {
    id: "support",
    title: "Towards Shared Support",
    image: "1780314501266-0158179ba545",
    alt: "An elderly man and a young boy sitting together, smiling",
    blurb:
      "Sometimes the most powerful help is someone who truly listens. Our counsellors, coaches and mentors help individuals and families find clarity, balance and strength.",
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
    image: "1623510848605-3cf32d03059e",
    alt: "Black and white portrait of an elderly man",
    blurb:
      "Every family has a story worth keeping. We capture your moments, trace your roots and preserve your history so it can be treasured for generations.",
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
    image: "1695566371955-5f07b6443657",
    alt: "A farmer planting rice seedlings in a flooded field",
    blurb:
      "A greener home is a healthier, happier home. We help you grow, nurture and reconnect with nature — from your balcony garden to your family farm.",
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
    image: "1593693411515-c20261bcad6e",
    alt: "A houseboat on the palm-lined backwaters of Kerala",
    blurb:
      "Time away together is where some of life’s best memories are made. We plan every detail so your only job is to relax and enjoy the journey.",
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

/** The chapters of a life — used for the pinned "life journey" section. */
export const chapters = [
  {
    title: "Beginnings",
    body: "Baby showers, naming ceremonies, first birthdays. And care for the mother through pregnancy and after.",
    services: ["Baby Shower", "Mothers Care", "Birthday"],
    image: "1780329930345-19a7f25e5fc6",
    alt: "A baby held gently in a parent's hands on a patterned blanket",
  },
  {
    title: "Growing up",
    body: "Half-saree functions, school choices and the moments you’ll want filmed, framed and remembered.",
    services: ["Half-Saree", "Education Choices", "Photo & Video"],
    image: "1635770618588-06bd8d5d73b9",
    alt: "A father lifting his laughing child into the air",
  },
  {
    title: "Finding your path",
    body: "Career planning, a new business, a job that ended too soon. Clear guidance when the road forks.",
    services: ["Career Planning", "Business Mentoring", "Legal Services"],
    image: "1676569641968-3858aa82bed5",
    alt: "A young woman working on her laptop outdoors",
  },
  {
    title: "Two families, one day",
    body: "Engagements, weddings and every ritual in between, planned so that you can be fully present.",
    services: ["Engagements", "Wedding", "Destination Celebrations"],
    image: "1754782500863-2491466d575a",
    alt: "Newlyweds in traditional attire resting together on the grass",
  },
  {
    title: "A home of your own",
    body: "Housewarmings, home safety, gardens, and property managed honestly, even from abroad.",
    services: ["Housewarming", "Home Safety", "Property Management"],
    image: "1730130596440-e9925840f028",
    alt: "A young family holding their child at a home ceremony",
  },
  {
    title: "Caring for those who cared for you",
    body: "Elder care, hospital stays and health monitoring, with someone you trust always on call.",
    services: ["Elderly Care", "Hospitalization Care", "Health Monitoring"],
    image: "1560885673-4e2f056f6e2a",
    alt: "A smiling grandmother in a floral saree",
  },
  {
    title: "Legacy",
    body: "Family trees, histories, films and remembrance. The story of who you are, kept for those who come next.",
    services: ["Family Tree", "Familiography", "Remembrance"],
    image: "1697305593259-d96aa6ed0e14",
    alt: "Two elderly women sitting together on a doorstep",
  },
];

export const images = {
  hero: { id: "1730130596425-197566414dc4", alt: "A family seated together at a home puja" },
  henna: { id: "1621801306185-8c0ccf9c8eb8", alt: "Two hands with intricate henna holding each other" },
  kolam: { id: "1739242895556-b1750c6f25de", alt: "A hand drawing a kolam at a doorstep" },
  lamps: { id: "1793626084803-854da20b8c46", alt: "A rangoli lit by small clay lamps at night" },
  family: { id: "1784816515435-ef6f6b1ddf7e", alt: "A father holding his child in a crowd at a festival" },
  grandmother: { id: "1624434070018-4a74c7d91715", alt: "A grandmother holding her grandchild" },
  wedding: { id: "1679937698873-6065742c8d32", alt: "A Tamil wedding ritual" },
  field: { id: "1560838944-9e0177bbc294", alt: "A woman in a paddy field" },
};
