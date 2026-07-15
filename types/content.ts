export interface NavItem {
  label: string;
  href: string;
}

export interface PainPoint {
  title: string;
  reality: string;
  result: string;
  resultHighlight?: string;
  resultSuffix?: string;
}

export interface ServiceArea {
  key: string;
  title: string;
  summary: string;
  items: string[];
}

export interface ComparisonRow {
  label: string;
  fullTime: string;
  agency: string;
  monthlycso: string;
}

export interface ProcessStep {
  week: string;
  title: string;
  quote: string;
  body: string;
}

export interface OutputItem {
  title: string;
  plan: string;
  body: string;
  bodyHighlight?: string;
  bodySuffix?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CareerItem {
  label: string;
  value: string;
}
