import { Database, Layers, Sparkles, ShieldCheck } from "lucide-react";

export interface PillarCapability {
  title: string;
  description: string;
  details: string[];
}

export interface PillarFAQ {
  question: string;
  answer: string;
}

export interface PillarSource {
  id: string;
  title: string;
  url: string;
  publisher?: string;
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  metaDescription: string;
  icon: typeof Database;
  accentColor: string;
  capabilities: PillarCapability[];
  faqs: PillarFAQ[];
  sources: PillarSource[];
}

export const pillars: Record<string, Pillar> = {
  acquire: {
    id: "acquire",
    number: "01",
    title: "ACQUIRE",
    subtitle: "Source the Impossible",
    tagline: "Data Acquisition for Frontier AI",
    description:
      "Collect diverse, high-quality training data at any scale. From egocentric video capture to licensed web-scale datasets, we source the data that powers breakthrough AI.",
    metaDescription:
      "Expert AI training data acquisition services. Human data collection, web-scale harvesting, synthetic generation, and data licensing for frontier AI labs.",
    icon: Database,
    accentColor: "var(--accent-primary)",
    capabilities: [
      {
        title: "Human Data Collection",
        description: "Capture real-world data through expert human collectors",
        details: [
          "Egocentric video capture at scale",
          "Physical world interaction data",
          "Expert-guided data gathering",
          "Multi-environment scenario coverage",
        ],
      },
      {
        title: "Web-Scale Harvesting",
        description: "Ethically sourced, properly licensed internet-scale data",
        details: [
          "Adaptive scraping infrastructure",
          "Copyright-safe content licensing",
          "Structured data extraction",
          "Multi-format support",
        ],
      },
      {
        title: "Synthetic Generation",
        description: "AI-augmented data creation with human validation",
        details: [
          "Unreal Engine environments",
          "Generative AI outputs",
          "Physics-accurate simulations",
          "Human quality validation",
        ],
      },
      {
        title: "Data Licensing",
        description: "Navigate complex data rights with full provenance",
        details: [
          "Content rights negotiation",
          "Provenance documentation",
          "Compliance frameworks",
          "Audit-ready data trails",
        ],
      },
    ],
    faqs: [
      {
        question: "What types of data can Claru acquire?",
        answer:
          "We specialize in human-collected data (egocentric video, physical world interactions), web-scale datasets with proper licensing, and synthetic data generated through game engines and AI models. All data comes with full provenance documentation.",
      },
      {
        question: "How do you ensure data quality during acquisition?",
        answer:
          "Quality starts at the source. Our expert collectors follow rigorous protocols, and all data passes through multi-stage validation. We maintain detailed metadata and provenance records, enabling full traceability from raw capture to final dataset.",
      },
      {
        question: "Can you acquire data for specialized domains?",
        answer:
          "Yes. We have domain specialist networks covering medical, legal, STEM, robotics, and creative fields. For niche domains, we build custom collection pipelines with subject matter experts who understand the specific requirements of your AI application.",
      },
      {
        question: "How do you handle data licensing and compliance?",
        answer:
          "Every dataset we deliver includes comprehensive licensing documentation. We navigate GDPR, CCPA, and copyright requirements, negotiate content rights with publishers, and provide audit trails that satisfy enterprise legal and compliance teams.",
      },
    ],
    sources: [
      {
        id: "venturebeat-data-challenge",
        title: "Why Data Remains the Greatest Challenge for ML Projects",
        url: "https://venturebeat.com/ai/why-data-remains-the-greatest-challenge-for-machine-learning-projects",
        publisher: "VentureBeat",
      },
      {
        id: "appen-data-sourcing",
        title: "Data Sourcing for Successful AI Models",
        url: "https://www.appen.com/blog/data-sourcing-for-successful-ai-models",
        publisher: "Appen",
      },
      {
        id: "kaptur-licensing",
        title: "The Hidden Economy Behind AI Data Licensing",
        url: "https://kaptur.co/the-hidden-economy-behind-ai-data-licensing-takes-center-stage/",
        publisher: "Kaptur",
      },
      {
        id: "restofworld-robots",
        title: "China Is Building Robot Training Centers",
        url: "https://restofworld.org/2026/china-robots-training-centers-workers/",
        publisher: "Rest of World",
      },
      {
        id: "deloitte-physical-ai",
        title: "Physical AI and Humanoid Robots",
        url: "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/physical-ai-humanoid-robots.html",
        publisher: "Deloitte",
      },
      {
        id: "open-x-embodiment",
        title: "Open X-Embodiment Dataset",
        url: "https://robotics-transformer-x.github.io/",
        publisher: "Google DeepMind",
      },
      {
        id: "labelyourdata-training",
        title: "AI Training Data Guide",
        url: "https://labelyourdata.com/articles/machine-learning/ai-training-data",
        publisher: "Label Your Data",
      },
      {
        id: "wef-synthetic",
        title: "AI Is Consuming Data Faster Than We Can Generate It",
        url: "https://www.weforum.org/stories/2025/12/data-ai-training-synthetic/",
        publisher: "World Economic Forum",
      },
    ],
  },
  prepare: {
    id: "prepare",
    number: "02",
    title: "PREPARE",
    subtitle: "Structure for Scale",
    tagline: "Data Preparation for Machine Learning",
    description:
      "Transform raw data into ML-ready datasets. Deduplication, filtering, and alignment at trillion-token scale.",
    metaDescription:
      "Enterprise data preparation services for ML. Billion-scale deduplication, multimodal alignment, and quality scoring for AI training pipelines.",
    icon: Layers,
    accentColor: "var(--accent-secondary)",
    capabilities: [],
    faqs: [],
    sources: [],
  },
  enrich: {
    id: "enrich",
    number: "03",
    title: "ENRICH",
    subtitle: "Add Human Intelligence",
    tagline: "Expert Data Annotation Services",
    description:
      "Expert annotation that captures nuance. RLHF, preference ranking, and domain-specialist labeling.",
    metaDescription:
      "Expert data annotation and RLHF services. PhD-level annotators, 95%+ accuracy, specialized in frontier AI model training.",
    icon: Sparkles,
    accentColor: "var(--accent-primary)",
    capabilities: [],
    faqs: [],
    sources: [],
  },
  validate: {
    id: "validate",
    number: "04",
    title: "VALIDATE",
    subtitle: "Ensure Quality & Safety",
    tagline: "AI Data Quality Assurance",
    description:
      "Rigorous testing before deployment. Red teaming, benchmark curation, and bias detection.",
    metaDescription:
      "AI red teaming and data validation services. Safety testing, benchmark curation, and bias detection for responsible AI deployment.",
    icon: ShieldCheck,
    accentColor: "var(--accent-secondary)",
    capabilities: [],
    faqs: [],
    sources: [],
  },
};

export const pillarOrder = ["acquire", "prepare", "enrich", "validate"];

export function getPillar(slug: string): Pillar | undefined {
  return pillars[slug];
}

export function getAllPillars(): Pillar[] {
  return pillarOrder.map((id) => pillars[id]);
}
