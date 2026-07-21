import React from 'react';
import type { SanityContactPage } from '@/sanity/queries';

const defaultMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.643577692887!2d72.82855959999999!3d19.0016073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfe902cf8005%3A0x564f469b2595aa90!2sOne%20Lodha%20Place!5e0!3m2!1sen!2sin!4v1782302404717!5m2!1sen!2sin";

export default function MapSection({ map }: { map?: SanityContactPage['map'] }) {
  const mapEmbedUrl = map?.iframe || defaultMapEmbedUrl;

  return (
    <section className="w-full h-[300px] md:h-[400px] relative overflow-hidden bg-gray-100">
      <iframe
        title="Office Location"
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="transition-all duration-700 ease-in-out"
      />
    </section>
  );
}