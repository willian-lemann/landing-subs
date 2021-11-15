import Stripe from 'stripe';

const stripeApiKey = process.env.STRIPE_API_KEY as string;
const stripeAccount = process.env.STRIPE_ACCOUNT as string;

export const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Wipi subs',
    version: '1',
  },
  stripeAccount,
});
