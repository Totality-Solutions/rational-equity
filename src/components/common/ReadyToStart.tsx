"use client";

import Container from "@/components/common/Container";
import CTAButton from "@/components/common/CTAButton";

interface CTAConfig {
  text: string;
  href: string;
  variant?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export interface ReadyToStartProps {
  title?: string;
  description?: string;
  primaryCTA?: Partial<CTAConfig>;
  secondaryCTA?: Partial<CTAConfig>;
}

const defaultPrimaryCTA: CTAConfig = {
  text: "Get In Touch",
  href: "#",
  iconClassName: "invert",
};

export default function ReadyToStart({
  title = "Ready to Start Investing?",
  description = "Speak to our team to receive the fund presentation and PPM.",
  primaryCTA,
  secondaryCTA,
  titleClassName = "",
  descriptionClassName = "",
  className = "",
}: ReadyToStartProps & { 
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}) {
  const finalPrimaryCTA = {
    ...defaultPrimaryCTA,
    ...primaryCTA,
  };

  return (
    <section className={`bg-black ${className}`}>
      <Container className=" ">
        <div className="py-8 lg:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:px-6">
          <div className="max-w-4xl">
            <h2 className={`font-playfair text-white font-extralight tracking-[0.015em] text-h3-mobile md:text-h3-tab lg:text-h3 ${titleClassName}`}>
              {title}
            </h2>

            <p className={`mt-2 text-[#7B7B7B] text-[18px] md:text-[20px] ${descriptionClassName}`}>
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <CTAButton
              href={finalPrimaryCTA.href}
              text={finalPrimaryCTA.text}
              variant="maroon-bg"
              onClick={primaryCTA?.onClick}
              iconClassName={finalPrimaryCTA.iconClassName}
            />

            {secondaryCTA && (
              <CTAButton
                href={secondaryCTA.href ?? "#"}
                text={secondaryCTA.text ?? "Learn More"}
                variant="dark"
                iconClassName={secondaryCTA.iconClassName}
                onClick={secondaryCTA?.onClick}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}