export type PlanValue = 'demo' | 'lite' | 'standard' | 'pro' | 'b2b';

export interface PricingPlan {
  name: string;
  value: PlanValue;
  price: string;
  description: string;
  details: Array<{
    label: string;
    value: string;
  }>;
  recommended?: boolean;
}
