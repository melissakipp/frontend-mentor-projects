export interface PlanData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  link: string;
}

export interface CardDataType {
  free: PlanData;
  basic: PlanData;
  ultimate: PlanData;
}

export const cardData: CardDataType = {
  free: {
    title: 'Basic',
    subtitle: 'Free',
    description: 'Up to 5 users for free',
    features: [
      'Basic document collaboration',
      '2 GB storage',
      'Great security and support'
    ],
    link: '/officelite/sign-up/free'
  },
  basic: {
    title: 'Pro',
    subtitle: '$9.99',
    description: 'Per user, billed monthly',
    features: [
      'All essential integrations',
      '50 GB storage',
      'More control and insights'
    ],
    link: '/officelite/sign-up/basic'
  },
  ultimate: {
    title: 'Ultimate',
    subtitle: '$19.99',
    description: 'Per user, billed monthly',
    features: [
      'Robust work management',
      '100 GB storage',
      'VIP support'
    ],
    link: '/officelite/sign-up/ultimate'
  }
};
