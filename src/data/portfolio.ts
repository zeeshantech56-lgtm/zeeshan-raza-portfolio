export const CONTACT = {
  email: "zeeshantech56@gmail.com",
  linkedin: "https://linkedin.com/in/zeeshan-raza/",
} as const;

export type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  oneLiner: string;
  url?: string;
  image: string;
  imageAlt: string;
  milestone?: string;
  tagline?: string;
  details: { label: string; text: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "invoicer",
    index: "01",
    name: "Invoicer",
    category: "Productivity / Business Tool",
    oneLiner: "A simple invoice-generation web app that makes creating invoices quicker for shop owners.",
    url: "https://invoicer-nine-tau.vercel.app/",
    image: "/projects/invoicer-screenshot.webp",
    imageAlt: "Invoicer landing page: Create invoices fast. Send via WhatsApp.",
    milestone: "First paying customer — ₹150/month",
    details: [
      { label: "The problem", text: "Creating invoices is often slower and clunkier than it needs to be, especially for small shops." },
      { label: "The solution", text: "A web-based invoice generation tool, where invoices can be created quickly and shared over WhatsApp with a link." },
      { label: "My approach", text: "Turn the idea into a functional product, then put it in the hands of a real user — who became the first paying customer at ₹150 per month." },
    ],
  },
  {
    id: "cook-ji",
    index: "02",
    name: "Cook Ji Snacks",
    category: "Website / Food Brand",
    oneLiner: "A brand website for Cook Ji Snacks, an Indore-based frozen Indian snacks business.",
    url: "https://cook-ji.vercel.app/",
    image: "/projects/cook-ji-screenshot.webp",
    imageAlt: "Cook Ji Snacks website: Crafted with Care, Served with Love.",
    details: [
      { label: "The idea", text: "Give a food brand a clear, friendly online home that reflects its personality and products." },
      { label: "The experience", text: "Sections for products, the brand's promise and story, a partner section for distributors, and a quick WhatsApp enquiry route." },
      { label: "My approach", text: "Think like the customer and the distributor — what they need to see to trust a food brand — and shape the site around it." },
    ],
  },
  {
    id: "detrace",
    index: "03",
    name: "Detrace",
    category: "AI / Image Editing",
    oneLiner: "An image-editing web app for cleaning hidden metadata and working with images through a simple canvas.",
    url: "https://detrace-1yv3.vercel.app/",
    image: "/projects/detrace-screenshot.webp",
    imageAlt: "Detrace workspace: Anonymity & Silence, with an image upload canvas.",
    details: [
      { label: "The idea", text: "Explore how AI-powered tools can make image editing — and image privacy — accessible to anyone." },
      { label: "The use case", text: "A user drags an image onto the canvas and works with it, such as cleaning hidden data or painting over watermarks." },
      { label: "My approach", text: "Start from a single, clear user action (drop an image) and build a calm, focused workspace around it, with a credits-based sign-up." },
    ],
  },
  {
    id: "dr-garvit-arora",
    index: "04",
    name: "Dr. Garvit Arora",
    category: "Website / Digital Presence",
    oneLiner: "A dedicated website for a doctor, creating a professional digital presence for his practice.",
    url: "https://drgravitarora.vercel.app/",
    image: "/projects/dr-gravitar-arora-screenshot.webp",
    imageAlt: "Dr. Garvit Arora website: Expert Care. Trusted Healing.",
    details: [
      { label: "The idea", text: "A professional service deserves a professional online presence that patients can find and trust." },
      { label: "The experience", text: "A clean, premium site that presents the doctor's information, with clear routes to call or book an appointment." },
      { label: "My approach", text: "Understand what a patient is looking for in the first few seconds and design the page to answer it." },
    ],
  },
  {
    id: "class-keeper",
    index: "05",
    name: "Class Keeper",
    category: "Education / Productivity",
    oneLiner: "A classroom management web app — live as Attendly — that makes taking attendance simpler.",
    url: "https://class-keeper-phi.vercel.app/",
    image: "/projects/class-keeper-screenshot.webp",
    imageAlt: "Attendly landing page: Attendance, without the paperwork.",
    details: [
      { label: "The idea", text: "Bring a simple digital tool into the classroom to take some of the paperwork out of running a class." },
      { label: "The experience", text: "Teachers can mark a whole batch present in one tap and see who's here and who isn't, across classes." },
      { label: "My approach", text: "Drawing on my own teaching experience, focus on the small daily task that takes up a teacher's time." },
    ],
  },
  {
    id: "boon",
    index: "06",
    name: "Boon Welfare Foundation",
    category: "Website / Non-profit",
    oneLiner: "A website for a welfare-focused alumni foundation from Taiba College, Indore.",
    url: "https://boon-welfare-foundation.vercel.app/",
    image: "/projects/boon-welfare-screenshot.webp",
    imageAlt: "The BOON Welfare Foundation website: United by learning. Bound by service.",
    details: [
      { label: "The idea", text: "Give a welfare-focused organisation a warm, credible digital presence that represents its purpose." },
      { label: "The experience", text: "A site that introduces the foundation, its vision and mission, its work, and voices from its alumni community." },
      { label: "My approach", text: "Keep it human and purpose-driven, so the people behind the foundation come through first." },
    ],
  },
  {
    id: "rupya",
    index: "07",
    name: "Rupya",
    category: "Personal Finance / Voice Interaction",
    oneLiner: "A personal expense tracker where you can speak a transaction instead of typing it.",
    url: "https://rupya-app.vercel.app/",
    image: "/projects/rupya-screenshot.webp",
    imageAlt: "Rupya expense tracker: Know where your rupees go.",
    tagline: "Speak. Record. Track.",
    details: [
      { label: "The problem", text: "People often forget to log expenses, or find manual entry tedious enough to give up." },
      { label: "The concept", text: "Make expense tracking easier through voice — say the expense or amount into the microphone and the app records it." },
      { label: "The experience", text: "Speak a transaction instead of filling in a form, reducing the friction in a task that repeats every day." },
    ],
  },
];

export const METRICS = [
  { value: "38.9K+", label: "Product views", note: "through SEO-optimised product listings" },
  { value: "1.6K+", label: "Customer clicks", note: "on those listings" },
  { value: "20.5%", label: "Conversion rate", note: "recorded on the relevant listing performance" },
] as const;

export const INTRO = {
  name: "Zeeshan Raza",
  status: "Open to opportunities in Product, Growth, Business & E-commerce",
  summary:
    "Business student and e-commerce practitioner. I've worked on marketplace listings, pricing and growth, and I turn ideas into live web apps and websites using AI tools.",
} as const;

export const EXPERIENCE = {
  company: "GenAlphaShopers",
  role: "E-commerce Operations & Growth",
  year: "2026",
  summary:
    "Worked on e-commerce operations and growth, including product listings, catalog management, pricing, and marketplace performance analysis.",
  work: ["Product listing optimization", "Pricing", "Catalog management", "Marketplace performance analytics"],
  note: "Figures reflect the listings I worked on, not company-wide results.",
} as const;

export const LEADERSHIP = [
  { role: "Head of College AI Club", tag: "Leadership · Initiative" },
  { role: "Student Union Vice-President", tag: "Responsibility · Representation" },
  {
    role: "Taught Class 12 Information Practices",
    detail: "At Tech Thinkers for about three months, teaching 25+ students.",
    tag: "Communication · Teaching",
  },
] as const;

export const PILLARS = [
  { title: "Understanding consumers", text: "What people need, what motivates them, and how they decide." },
  { title: "Understanding businesses", text: "Business models, unit economics, operations, growth and profitability." },
  { title: "Building solutions", text: "Turning ideas into usable products and websites with AI-powered tools." },
] as const;

export const INTERESTS = [
  "Consumer Behaviour",
  "E-commerce",
  "Product Thinking",
  "Business Models",
  "Unit Economics",
  "Growth",
  "Retail & Operations",
  "Business Analytics",
  "AI & Emerging Technology",
] as const;

export const EDUCATION = [
  { title: "Postgraduate management education", meta: "Currently pursuing", current: true },
  { title: "B.Com with Computer Application", meta: "CGPA 8.23" },
  { title: "CA Foundation", meta: "Cleared" },
  { title: "Class 12 — Commerce", meta: "91%" },
  { title: "Class 10", meta: "90%" },
] as const;

export const OUTSIDE = ["Watching web series", "Playing cricket", "Exploring ideas, businesses, and how things work"] as const;
