// ---------------------------------------------------------------------------
// SITE CONTENT
// Edit the values below to update the site. No component code needs to change.
// ---------------------------------------------------------------------------

export const site = {
  name: "Sowmya Jillella",
  role: "Clinical Dietitian & Nutritionist",
  tagline:
    "Compassionate, evidence-based nutrition support for better patient wellbeing.",
  intro:
    "I am a newly qualified Dietitian with clinical internship experience in multispecialty hospitals. I am passionate about therapeutic diet planning, patient education, and helping individuals build sustainable, healthier lifestyles.",
  availability: "Open to Dietitian & Clinical Nutritionist opportunities",
  location: "India",
  // Replace with the final resume file at /public/resume.pdf
  resumeHref: "/resume.pdf",
  // TODO: replace with a real professional portrait at /public/images/profile.jpg
  // and update this path once the file is in place.
  profileImage: "/images/profile-placeholder.svg",
};

export const contact = {
  // TODO: replace with real contact details before publishing
  phone: "[PHONE_NUMBER]",
  email: "[EMAIL_ADDRESS]",
  linkedin: "[LINKEDIN_URL]", // set to "" to hide the LinkedIn link entirely
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Clinical Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Book a Session", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export const aboutValues = [
  {
    icon: "microscope",
    title: "Evidence-based care",
    description:
      "Clinical decisions grounded in nutrition science and current dietetic practice.",
  },
  {
    icon: "heart-handshake",
    title: "Patient-centred counselling",
    description:
      "Listening first, then building a plan around each patient's condition and daily life.",
  },
  {
    icon: "clipboard-list",
    title: "Therapeutic nutrition planning",
    description:
      "Individualised diet charts aligned with medical conditions and treatment goals.",
  },
  {
    icon: "sprout",
    title: "Continuous learning",
    description:
      "Staying current through seminars, webinars, and hands-on clinical exposure.",
  },
];

export const aboutStory = {
  heading: "Nutrition care with empathy and clinical purpose",
  paragraphs: [
    "Sowmya holds academic training in Food and Nutrition with Dietetics, and has spent her internships close to real patient care — observing and supporting therapeutic diet planning across inpatient and outpatient settings in multispecialty hospitals.",
    "Her approach centres on the person in front of her: understanding a patient's medical condition, habits, and preferences before recommending a plan they can actually sustain. She is now looking to bring that patient-first approach to a hospital or clinical nutrition team, working closely under senior dietitians and physicians.",
  ],
};

export const experience = [
  {
    hospital: "CARE Hospitals",
    roleTitle: "Dietitian Intern",
    location: "Visakhapatnam",
    period: "September 2025 – February 2026",
    points: [
      "Assisted clinical dietitians in planning and monitoring therapeutic diets for inpatients and outpatients.",
      "Conducted nutritional assessments and provided dietary counselling for patients with diabetes, hypertension, and other medical conditions.",
      "Observed patient-care workflows and clinical nutrition practices in a multispecialty hospital.",
      "Case exposure: fracture of proximal right tibia, cellulitis, and superficial burns.",
    ],
  },
  {
    hospital: "Kamineni Hospitals",
    roleTitle: "Dietitian Intern",
    location: "Hyderabad",
    period: "2025",
    points: [
      "Supported diet-planning activities and patient nutrition education under senior dietitians.",
      "Assisted with individualized diet charts based on medical conditions and nutritional requirements.",
    ],
  },
  {
    hospital: "Rainbow Children's Hospital",
    roleTitle: "Dietitian Intern",
    location: "Hyderabad",
    period: "2025",
    points: [
      "Observed paediatric nutrition assessment and dietary management practices.",
      "Assisted in counselling parents on balanced nutrition and healthy dietary practices for children.",
    ],
  },
];

export const experienceNote =
  "Clinical exposure across adult, paediatric, inpatient, and outpatient nutrition care.";

export const education = [
  {
    degree: "M.Sc. Food and Nutrition with Dietetics",
    institution: "St. Joseph's College for Women, Visakhapatnam",
    period: "2024 – 2026",
  },
  {
    degree: "B.Sc. Food and Nutrition",
    institution: "PRIST University, Hyderabad, India",
    period: "2019 – 2022",
  },
];

export const research = {
  title: "Product Development for Sarcopenia Management",
  summary:
    "This project focused on developing plant-based protein bars and protein-powder formulations to support individuals managing sarcopenia, the age-related loss of muscle mass and strength.",
  outcomes: [
    "Explored protein-rich food product formulation",
    "Analysed nutritional composition",
    "Examined the contribution of protein supplementation to muscle health and nutritional status",
  ],
};

export const skillGroups = [
  {
    title: "Clinical Nutrition",
    icon: "stethoscope",
    skills: [
      "Therapeutic diet planning",
      "Nutritional assessment",
      "Patient monitoring",
      "Diet chart preparation",
    ],
  },
  {
    title: "Patient Support",
    icon: "hand-heart",
    skills: [
      "Motivational interviewing",
      "Patient counselling and education",
      "Empathy and active listening",
      "Healthcare communication",
    ],
  },
  {
    title: "Health Promotion",
    icon: "leaf",
    skills: [
      "Lifestyle modification guidance",
      "Nutrition education",
      "Healthy dietary practices",
    ],
  },
  {
    title: "Professional Tools",
    icon: "monitor",
    skills: ["MS Office", "Clinical documentation", "Report preparation"],
  },
];

export const certifications = [
  "17th Apollo International Clinical Nutrition Update 2025",
  "World Food Safety Webinar",
  "Fostering Wellness During COVID-19 Outbreak",
  "Healthy Dietary Practices Webinar",
  "Major Foodborne Pathogens in Fish and Fish Products Seminar",
  "Malnutrition Seminar",
  "Physical Examination Seminar",
  "Free Health Camp by Lions Club Hyderabad",
];

export const cta = {
  heading: "Let's support better health through nutrition",
  text: "I am seeking an opportunity to begin my career in a hospital, clinical, or healthcare setting where I can contribute my training, learn from experienced professionals, and deliver thoughtful nutrition support.",
};

export const booking = {
  heading: "Book a 1:1 advice session",
  description:
    "Personalised nutrition guidance you can book directly online — pick the session that fits, pay securely, and get a confirmation email with next steps.",
  disclaimer:
    "These sessions are general nutrition and lifestyle guidance, not a substitute for medical treatment. If you have a diagnosed medical condition, please consult a physician or a registered clinical dietitian working under a hospital's care team.",
  currency: "INR",
  // Prices are in whole rupees — edit freely. They're converted to paise
  // automatically wherever Razorpay needs the smallest currency unit.
  tiers: [
    {
      id: "quick-consult",
      name: "Quick Consult",
      price: 499,
      duration: "20 minutes",
      description: "A focused call to answer specific nutrition questions.",
      features: [
        "20-minute video call",
        "One focus area (e.g. weight, diabetes-friendly eating)",
        "Simple written takeaways after the call",
      ],
      highlighted: false,
    },
    {
      id: "full-session",
      name: "Full Session",
      price: 1299,
      duration: "45 minutes",
      description: "A complete first consultation and personalised plan.",
      features: [
        "45-minute video call",
        "Diet & lifestyle history review",
        "Personalised nutrition plan (PDF)",
        "7 days of follow-up chat support",
      ],
      highlighted: true,
    },
    {
      id: "follow-up",
      name: "Follow-up Session",
      price: 799,
      duration: "30 minutes",
      description: "For existing clients continuing their plan.",
      features: [
        "30-minute video call",
        "Progress review & plan adjustments",
        "Updated written plan (PDF)",
      ],
      highlighted: false,
    },
  ],
};

export const seo = {
  title: "Sowmya Jillella | Clinical Dietitian & Nutritionist in India",
  description:
    "Portfolio of Sowmya Jillella, a clinically trained Dietitian and Nutritionist with multispecialty hospital internship experience in therapeutic diet planning and patient counselling. Open to hospital and clinical nutrition roles across India.",
  keywords: [
    "Clinical Dietitian in India",
    "Hospital Dietitian",
    "Nutritionist Portfolio",
    "Dietitian Internship",
    "Therapeutic Diet Planning",
    "Clinical Nutrition Hyderabad",
  ],
};
