'use client';

import Container from '@/components/common/Container';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'overview', num: '01', title: 'Overview' },
  { id: 'information', num: '02', title: 'Information We Collect' },
  { id: 'usage', num: '03', title: 'How We Use Your Information' },
  { id: 'sharing', num: '04', title: 'Sharing of Information' },
  { id: 'security', num: '05', title: 'Data Security' },
  { id: 'cookies', num: '06', title: 'Cookies' },
  { id: 'third-party', num: '07', title: 'Third-Party Links' },
  { id: 'rights', num: '08', title: 'Your Rights' },
  { id: 'retention', num: '09', title: 'Data Retention' },
  { id: 'changes', num: '10', title: 'Changes to This Policy' },
  { id: 'contact', num: '11', title: 'Contact Us' },
] as const;

export default function PrivacyPolicy() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 },
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-black py-16 md:py-20">
        <Container className="mx-auto px-6 lg:px-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-3">
            Legal
          </p>
          <h1 className="font-playfair text-[clamp(36px,4vw,54px)] leading-[1.08] text-white font-bold mb-4">
            Privacy <em className="italic opacity-80">Policy</em>
          </h1>
          <p className="text-sm text-white/45 leading-relaxed max-w-[540px]">
            How Rational Equity and Asset Managers collects, uses, protects, and handles your personal information.
          </p>
        </Container>
      </section>

      {/* Content */}
      <Container className=" mx-auto px-6 lg:px-16 py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-20 items-start">
        {/* Sidebar TOC */}
        <aside className="lg:sticky lg:top-25">
          <p className="text-body-lg font-semibold tracking-[0.07em] uppercase text-[#6B6B6B] mb-4">
            Contents
          </p>
          <nav className="flex flex-col">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-body-md py-1.5 px-3 border-l-2 rounded-r transition-all duration-200 leading-snug ${
                  active === s.id
                    ? 'text-[#7A0000] border-[#7A0000] bg-[rgba(122,0,0,0.04)]'
                    : 'text-[#6B6B6B] border-[#E5E2DE] hover:text-[#7A0000] hover:border-[#7A0000] hover:bg-[rgba(122,0,0,0.04)]'
                }`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Policy body */}
        <div className="">
          <span className="text-xs text-[#6B6B6B] bg-[#F0EEEC] inline-block px-3.5 py-1.5 rounded-full mb-12">
            Last updated: June 2026
          </span>

          {/* 01 Overview */}
          <Section id="overview" num="01" title="Overview">
            <p>
              Rational Equity and Asset Managers (&ldquo;Rational&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a SEBI-registered Category III Alternate Investment Fund manager and IFSCA-registered GIFT City fund manager, headquartered in Mumbai, India.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect the personally identifiable information (&ldquo;PII&rdquo;) of individuals who visit our website, contact us, or engage with our services. We are committed to safeguarding your privacy in accordance with applicable Indian law, including the Information Technology Act 2000, the IT (Amendment) Act 2008, and the Digital Personal Data Protection Act 2023 (DPDP Act).
            </p>
            <Highlight>
              By using our website or submitting your information through any of our contact forms, you consent to the collection and use of your information as described in this Privacy Policy.
            </Highlight>
          </Section>

          {/* 02 Information We Collect */}
          <Section id="information" num="02" title="Information We Collect">
            <p>
              We may collect the following categories of personally identifiable information when you interact with our website or reach out to us directly:
            </p>
            <ul>
              <li><strong>Contact details</strong> — name, email address, phone number</li>
              <li><strong>Professional information</strong> — investor type, organisation name, designation</li>
              <li><strong>Financial information</strong> — investment interest, approximate investable surplus (only when voluntarily provided)</li>
              <li><strong>Communication data</strong> — messages, queries, and correspondence you send to us</li>
              <li><strong>Technical data</strong> — IP address, browser type, operating system, referring URLs, and page interaction data collected automatically when you visit our website</li>
              <li><strong>Subscription data</strong> — email address and preferences when you subscribe to The Bullion Bulletin or other newsletters</li>
            </ul>
            <p>
              We do not collect sensitive personal data such as biometric information, passwords, or government identification numbers through this website.
            </p>
          </Section>

          {/* 03 How We Use Your Information */}
          <Section id="usage" num="03" title="How We Use Your Information">
            <p>
              The information we collect is used solely for the following purposes:
            </p>
            <ul>
              <li>To respond to enquiries, schedule calls, and provide information about our funds and services</li>
              <li>To send fund materials, investor decks, and PPMs to prospective investors who have requested them</li>
              <li>To deliver The Bullion Bulletin and other research publications to subscribers</li>
              <li>To comply with SEBI, IFSCA, and other applicable regulatory requirements, including KYC and AML obligations</li>
              <li>To improve our website, services, and communications based on aggregate usage patterns</li>
              <li>To maintain records of investor and prospective investor interactions as required by law</li>
            </ul>
            <p>
              We do not use your personal information for automated decision-making or profiling purposes. We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </Section>

          {/* 04 Sharing of Information */}
          <Section id="sharing" num="04" title="Sharing of Information">
            <p>
              We do not share your personal information with third parties except in the following limited circumstances:
            </p>
            <ul>
              <li><strong>Fund administration and compliance</strong> — our fund administrator (Apex), legal counsel (Trilegal), auditors (PwC), and compliance partners (MGC Group) may access investor data strictly as required to fulfil their professional obligations</li>
              <li><strong>Regulatory authorities</strong> — SEBI, IFSCA, or other regulatory bodies may require us to disclose information as part of our licensing obligations, audits, or investigations</li>
              <li><strong>Banking partners</strong> — Kotak Mahindra Bank and other designated banking partners involved in fund operations may access relevant financial information as required for transaction processing</li>
              <li><strong>Legal obligations</strong> — where required by court order, law enforcement, or applicable regulation</li>
            </ul>
            <p>
              All third parties with whom we share data are bound by confidentiality obligations and applicable data protection laws.
            </p>
          </Section>

          {/* 05 Data Security */}
          <Section id="security" num="05" title="Data Security">
            <p>
              We implement industry-standard technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul>
              <li><strong>SSL/TLS encryption</strong> — all data transmitted via our website is encrypted using Secure Socket Layer technology</li>
              <li><strong>Access controls</strong> — personal information is accessible only to authorised personnel who require it in the course of their duties and are bound by confidentiality obligations</li>
              <li><strong>Secure storage</strong> — data is stored on secured servers with restricted access and regular security monitoring</li>
              <li><strong>Malware protection</strong> — our website and systems are scanned regularly to detect and eliminate security threats</li>
            </ul>
            <p>
              While we take all reasonable precautions, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to exercise care when sharing personal information online.
            </p>
          </Section>

          {/* 06 Cookies */}
          <Section id="cookies" num="06" title="Cookies and Tracking Technologies">
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyse traffic patterns, and understand how visitors interact with our content.
            </p>
            <ul>
              <li><strong>Essential cookies</strong> — required for the website to function correctly; these cannot be disabled</li>
              <li><strong>Analytics cookies</strong> — used to understand aggregate website traffic and usage patterns (e.g. Google Analytics); no personally identifiable information is collected</li>
              <li><strong>Preference cookies</strong> — used to remember your preferences and settings between visits</li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings at any time. Disabling certain cookies may affect the functionality of some features of our website. We do not use cookies for targeted advertising.
            </p>
          </Section>

          {/* 07 Third-Party Links */}
          <Section id="third-party" num="07" title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites, including media publications, research platforms, and regulatory bodies. These external sites have their own independent privacy policies, which we do not control and are not responsible for.
            </p>
            <p>
              We encourage you to review the privacy policy of any third-party website before submitting personal information to it. The presence of a link on our website does not constitute an endorsement of that website&apos;s privacy practices.
            </p>
          </Section>

          {/* 08 Your Rights */}
          <Section id="rights" num="08" title="Your Rights">
            <p>
              Under the Digital Personal Data Protection Act 2023 and applicable Indian law, you have the following rights with respect to your personal data:
            </p>
            <ul>
              <li><strong>Right to access</strong> — you may request a copy of the personal information we hold about you</li>
              <li><strong>Right to correction</strong> — you may request that inaccurate or incomplete information be corrected</li>
              <li><strong>Right to erasure</strong> — you may request deletion of your personal data, subject to our legal and regulatory obligations to retain certain records</li>
              <li><strong>Right to withdraw consent</strong> — you may withdraw consent for non-essential communications (such as newsletters) at any time by contacting us or using the unsubscribe link in any email</li>
              <li><strong>Right to grievance redressal</strong> — you may raise a complaint with us and expect a response within a reasonable time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at the details provided in Section 11 below.
            </p>
          </Section>

          {/* 09 Data Retention */}
          <Section id="retention" num="09" title="Data Retention">
            <p>
              We retain personal information for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law and regulation.
            </p>
            <ul>
              <li>Enquiry and contact form data is retained for up to 24 months from the date of last interaction</li>
              <li>Investor and onboarding records are retained in accordance with SEBI and IFSCA regulatory requirements, typically for a minimum of 5 years</li>
              <li>Newsletter subscription data is retained until you unsubscribe</li>
              <li>Website analytics data is retained in aggregate, anonymised form</li>
            </ul>
            <p>
              Upon expiry of the applicable retention period, personal data is securely deleted or anonymised.
            </p>
          </Section>

          {/* 10 Changes to This Policy */}
          <Section id="changes" num="10" title="Changes to This Policy">
            <p>
              We reserve the right to update this Privacy Policy at any time to reflect changes in our practices, applicable law, or regulatory requirements. The revised policy will be posted on this page with an updated effective date.
            </p>
            <p>
              We encourage you to review this page periodically. Your continued use of our website following any changes constitutes your acceptance of the revised Privacy Policy.
            </p>
          </Section>

          {/* 11 Contact Us */}
          <Section id="contact" num="11" title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us:
            </p>
            <Highlight>
              <strong>Rational Equity and Asset Managers</strong><br />
              <span className='font-bold'>Mumbai Address:</span> Unit 903, One Lodha Place, Senapati Bapat Marg, Lower Parel, Mumbai, 400013 <br/>
              <span className='font-bold'>GIFT City Address:</span> Unit No 110 seat no 1 to 4 Ground floor, Pragya Accelerator II Building 15B Block 15, Road No 1C Zone 1 GIFT SEZ Gift City, Gandhi Nagar, Gujarat, India, 382355
  <br /><br />
              Email:{' '}
              <a href="mailto:jaba@repllp.com" className="text-[#7A0000] underline">
                jaba@repllp.com
              </a>{' '}
              ·{' '}
              <a href="mailto:vikram@repllp.com" className="text-[#7A0000] underline">
                vikram@repllp.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+919911900096" className="text-[#7A0000] underline">
                +91 99119 00096
              </a>{' '}
              ·{' '}
              <a href="tel:+919987261105" className="text-[#7A0000] underline">
                +91 99872 61105
              </a>
            </Highlight>
            <p>
              We will endeavour to respond to all privacy-related requests within 30 days of receipt.
            </p>
          </Section>
        </div>
      </Container>
    </>
  );
}

/* ── Section component ── */
function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="mb-14 scroll-mt-[100px]">
      <h2 className="font-playfair text-[22px] font-bold text-[#1A1A1A] mb-4 pb-3 border-b border-[#E5E2DE]">
        <span className="text-[#7A0000] mr-2 text-[18px]">{num}</span>
        {title}
      </h2>
      <div className="[&>p]:text-body-md [&>p]:leading-[1.9] [&>p]:text-[#444] [&>p]:mb-3 [&>p:last-child]:mb-0 [&>ul]:my-3 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>ul>li]:text-body-md [&>ul>li]:leading-[1.75] [&>ul>li]:text-[#444] [&>ul>li]:pl-5 [&>ul>li]:relative [&>ul>li]:before:content-['—'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-[#7A0000] [&>ul>li]:before:text-xs [&>ul>li]:before:top-[2px]">
        {children}
      </div>
    </div>
  );
}

/* ── Highlight box ── */
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8F7F5] border border-[#E5E2DE] border-l-[3px] border-l-[#7A0000] rounded-r-xl px-5 py-4 my-5 text-body-md leading-[1.75] text-[#6B6B6B]">
      {children}
    </div>
  );
}
