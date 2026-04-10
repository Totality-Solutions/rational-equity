import React from 'react';


export default function MapSection() {
  // To get your own URL: Google Maps > Share > Embed a map > Copy src link
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120651.92167145749!2d72.74109772186411!3d19.091353232675924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709214567890!5m2!1sen!2sin";

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