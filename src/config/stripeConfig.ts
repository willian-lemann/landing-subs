import { loadStripe } from '@stripe/stripe-js';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
const stripeAccount = process.env.STRIPE_ACCOUNT as string;

export const stripePromise = loadStripe(publishableKey, { stripeAccount });
