import type { PlanValue } from '~/types/pricing';

const validPlans: PlanValue[] = ['demo', 'lite', 'standard', 'pro', 'b2b'];

export const useSelectedPlan = () => {
  const route = useRoute();
  const router = useRouter();
  const selectedPlan = useState<PlanValue>('selected-plan', () => 'standard');

  const syncFromRoute = () => {
    const plan = route.query.plan;
    if (typeof plan === 'string' && validPlans.includes(plan as PlanValue)) {
      selectedPlan.value = plan as PlanValue;
    }
  };

  const selectPlan = async (plan: PlanValue) => {
    selectedPlan.value = plan;
    await router.push({ path: '/', query: { plan }, hash: '#contact' });
  };

  return {
    selectedPlan,
    syncFromRoute,
    selectPlan
  };
};
