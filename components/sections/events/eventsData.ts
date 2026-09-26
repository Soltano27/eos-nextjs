// The Neuro Guild — Upcoming Events data.
// Same pattern as ../cortex/cortexArticles.ts: add one object here and its
// index card, detail page, and nav all generate automatically via
// eventsRender.ts. Nothing else needs to change.

export interface EventSpeaker {
  name: string;
  title: string; // e.g. "Resident Doctor"
  institution: string; // e.g. "Lagos State University Teaching Hospital"
  credentials: string; // e.g. "MBBS, MPH (in view)"
  bio: string;
  headshotSrc: string; // path under /public
  linkedin?: string;
  instagram?: string; // handle, without the @
}

export interface EventItem {
  num: number;
  id: string; // route: programs-guild-event-<num>
  status: "upcoming" | "past";
  gradFrom: string;
  gradTo: string;
  badgeBg: string;
  badgeColor: string;
  cardColor: string;

  seriesLabel: string; // e.g. "Neuro Guild Monthly · First Edition"
  title: string; // e.g. "Hustle No Go Kill You"
  subtitle: string; // e.g. "How to Deal with Stress, Anxiety & Burnout in This Economy"
  deck: string; // short description for cards/hero

  dateLabel: string; // e.g. "10 October 2026"
  location: string; // e.g. "Lagos, Nigeria"
  address?: string;
  formatLabel: string; // e.g. "Physical Community Hangout"
  capacityLabel: string; // e.g. "30–40 Young People"

  earlyBirdPrice: string; // e.g. "₦5,000"
  regularPrice: string; // e.g. "₦10,000"
  registrationUrl: string; // WhatsApp channel / registration link

  activities: { emoji: string; label: string }[];
  highlights: string[]; // "More than a hangout..." bullet list

  speakers: EventSpeaker[];
}

export const events: EventItem[] = [
  {
    num: 1,
    id: "programs-guild-event-1",
    status: "upcoming",
    gradFrom: "#3A1A0A",
    gradTo: "#7A3A1A",
    badgeBg: "rgba(251,146,60,0.2)",
    badgeColor: "#FED7AA",
    cardColor: "#FB923C",

    seriesLabel: "Neuro Guild Monthly · First Edition",
    title: "Hustle No Go Kill You",
    subtitle: "How to Deal with Stress, Anxiety & Burnout in This Economy",
    deck: "A fun space to pause, unwind, create and connect — because everybody is stressed, anxious, and burnt out in this economy, but we no go die for hustle.",

    dateLabel: "10 October 2026",
    location: "Lagos, Nigeria",
    address: "5 Kola Iyaomolere Street, Ogudu Ori-Oke, Lagos, Nigeria",
    formatLabel: "Physical Community Hangout",
    capacityLabel: "30–40 Young People",

    earlyBirdPrice: "₦5,000",
    regularPrice: "₦10,000",
    registrationUrl:
      "https://whatsapp.com/channel/0029Vb8Pwmn4inooPbef0X0x",

    activities: [
      { emoji: "🎨", label: "Sip & Paint" },
      { emoji: "🏺", label: "Pottery" },
      { emoji: "🧠", label: "Therapist Session" },
      { emoji: "🤝", label: "Connect & Chill" },
    ],
    highlights: [
      "Meet like-minded people",
      "Learn about your brain",
      "Ask real questions",
      "Have fun",
      "Connect with health professionals",
      "Become part of the Neuro Guild",
    ],

    speakers: [
      {
        name: "Dr Oluwaseun Idowu",
        title: "Resident Doctor",
        institution: "Lagos State University Teaching Hospital",
        credentials: "MBBS, MPH (in view)",
        bio: "Dr Oluwaseun Idowu is a medical doctor with clinical expertise spanning Internal Medicine, Neuropsychiatry, and Mental Health, and a strong interest in medical research and public health. Her work is driven by a commitment to evidence-based, patient-centred care and advancing equitable access to healthcare. Her research interests centre on mental health, psychological wellbeing, and health outcomes, with research experience including a cross-sectional study examining gender differences in psychological distress among medical students in Nigeria during the COVID-19 pandemic, alongside clinical audits and quality-improvement initiatives. Beyond clinical practice and research, Dr Idowu is actively engaged in medical education, leadership, and community-focused initiatives. She is particularly passionate about translating research and innovation into meaningful improvements in healthcare delivery, particularly for underserved populations.",
        headshotSrc: "/images/speaker-oluwaseun-idowu.jpg",
        linkedin: "https://www.linkedin.com/in/oluwaseun-idowu-2932b21a4",
        instagram: "Oluwaseun_id",
      },
    ],
  },
];
