export type PlanValue = 'demo' | 'lite' | 'standard' | 'pro' | 'b2b';

export interface PricingPlan {
  name: string;
  value: PlanValue;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
