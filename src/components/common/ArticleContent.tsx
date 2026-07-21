import { PortableText, type PortableTextComponents, type PortableTextBlock } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed text-[15px]">{children}</p>,
    h2: ({ children }) => <h2 className="text-xl font-bold text-neutral-900 pt-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold text-neutral-900 pt-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base font-bold text-neutral-900 pt-2">{children}</h4>,
    blockquote: ({ children }) => (
      <p className="font-serif text-lg text-neutral-900 italic border-l-2 border-brand-maroon pl-4 my-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 space-y-1 text-gray-700 text-[15px]">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 space-y-1 text-gray-700 text-[15px]">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-brand-maroon underline">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <span className="block rounded-xl overflow-hidden border border-gray-100 my-4">
        <span className="relative block w-full aspect-[16/9]">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ''}
            fill
            className="object-cover"
          />
        </span>
        {value.caption && <span className="block text-xs text-gray-400 text-center py-2">{value.caption}</span>}
      </span>
    ),
  },
};

export default function ArticleContent({
  content,
  disclaimer,
  showDisclaimer,
}: {
  content: PortableTextBlock[] | null;
  disclaimer?: PortableTextBlock[] | null;
  showDisclaimer?: boolean | null;
}) {
  return (
    <div className="space-y-6">
      {content && <PortableText value={content} components={components} />}

      {showDisclaimer !== false && disclaimer && disclaimer.length > 0 && (
        <div className="pt-6 mt-6 border-t border-gray-100">
          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-2">Disclaimer</p>
          <div className="text-xs text-gray-400 leading-relaxed [&_p]:text-xs [&_p]:text-gray-400 [&_p]:leading-relaxed">
            <PortableText value={disclaimer} />
          </div>
        </div>
      )}
    </div>
  );
}
