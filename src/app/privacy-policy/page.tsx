import PrivacyPolicy from '@/components/sections/privacy/PrivacyPolicy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Rational Equity and Asset Managers collects, uses, protects, and handles your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
