import React, { useEffect } from 'react';

interface DynamicArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  children: React.ReactNode;
}

export const DynamicArticleModal: React.FC<DynamicArticleModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  heroImageUrl,
  heroImageAlt = "Article header image",
  children,
}) => {
  
  // Prevent background scrolling logic...
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      
      {/* Style Hook injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-modal-scroll::-webkit-scrollbar { width: 2px; }
        .custom-modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-modal-scroll::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.5); border-radius: 20px; }
        .custom-modal-scroll::-webkit-scrollbar-thumb:hover { background-color: rgba(107, 114, 128, 0.7); }
      `}} />

      {/* ── NEW OUTER ANCHOR CONTEXT ───────────────────────────────── */}
      {/* This invisible frame shares the exact dimensions of your modal box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col">
        
        {/* CLOSE BUTTON: Now perfectly anchored -4px outside the top right of the white container */}
        <button 
          onClick={onClose}
          className="absolute  top-3 right-3 sm:right-3 z-110 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 hover:text-black hover:scale-105 shadow-xl transition-all duration-200 border border-neutral-200/50 cursor-pointer group"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* YOUR WHITE CONTENT BOX */}
        <div className="custom-modal-scroll w-full h-full overflow-y-auto rounded-2xl bg-white shadow-2xl flex flex-col font-sans text-gray-800 selection:bg-amber-100">
          
          {/* Dynamic Hero Image / Top Banner */}
          {heroImageUrl && (
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/20 via-neutral-900/5 to-transparent z-10" />
              <img 
                src={heroImageUrl} 
                alt={heroImageAlt} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content slots */}
          <div className="p-6 sm:p-10 md:p-16 max-w-3xl mx-auto flex flex-col gap-8 w-full">
            <header className="flex flex-col gap-4">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-gray-500 font-medium text-sm sm:text-base border-b border-gray-100 pb-4">
                  {subtitle}
                </p>
              )}
            </header>

            <div className="prose prose-neutral max-w-none">
              {children}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};