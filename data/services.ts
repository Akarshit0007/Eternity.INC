// config/services.ts

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  svgPath: string; // Path pointing directly to your local .svg file
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web & Product Engineering",
    tagline: "High-performance full-stack web applications.",
    description: "We architect next-generation digital products built for scale and speed. From intuitive user interfaces to robust database configurations, we translate complex logic into ultra-responsive web solutions.",
    features: ["Next.js & React Frameworks", "Database Management (MySQL, PostgreSQL)", "API Design & Systems Integration"],
    svgPath: "/svg/development.svg"
  },
  {
    id: "test-automation",
    title: "Quality Assurance & Test Automation",
    tagline: "Bulletproof scripts ensuring zero-downtime reliability.",
    description: "We eliminate manual bottlenecks by engineering advanced test automation architecture. Our custom setups guarantee your platform performs flawlessly across all device layouts and edge cases.",
    features: ["Playwright Framework with TypeScript", "Appium Framework with Java", "BDD Automation (Cucumber)", "Cross-Browser & Visual Regression Testing"],
    svgPath: "/svg/automation.svg"
  },
  {
    id: "performance-testing",
    title: "Performance Testing",
    tagline: "Prepare your digital infrastructure for massive scales .",
    description: "Don't let unexpected traffic spikes slow down your application. We stress-test code environments, identify dynamic memory leaks, and tune processing performance so your architecture remains highly efficient.",
    features: ["Apache JMeter Architecture", "Dynamic Token Correlation", "Load Generator Stress Configuration"],
    svgPath: "/svg/performance.svg"
  },
  {
    id: "AI-Agents",
    title: "Custom Agentic Architectures",
    tagline: "Create AI Assistant/Agentic Flows",
    description: "Go beyond simple chatbots. We Build autonomous AI agents that reason, dynamically execute muli-step workflows, and seamlessly integrate into your existing business infrastructure.",
    features: ["Task Decomposition", "Human-In-The-Loop Safeguards", "Tools & API Integeration", "Self-Reflection Loops"],
    svgPath: "/svg/agents.svg"
  }
];