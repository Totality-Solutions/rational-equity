'use client';

import React, { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  // Main form lifecycle management states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  
  // Track up to 3 optional dates natively inside parent scope
  const [dates, setDates] = useState<string[]>(['']);
  
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '', // Consolidated key matching modified template field
    category: '',
    message: '',
  });

  // Lock parent window scroll context safely during active overlays
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle baseline text / select updates
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Automated form submission lifecycle
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Filter out completely blank un-selected option slots
    const filledDates = dates.filter((d) => d.trim() !== '');

    const completePayload = {
      ...formData,
      preferredDates: filledDates,
    };

    try {
      const response = await fetch('/api/schedule-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(completePayload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        
        // Reset states cleanly on successful transmission
        setFormData({ name: '', emailOrPhone: '', category: '', message: '' });
        setDates(['']);
        setIsSubmitted(true);
        
        // Short auto-close timer delay for enhanced UX feel
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setStatus({ type: '', message: '' });
        }, 1500);
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Server error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      
      {/* Scrollbar layout customization metrics style rules */}
      <style dangerouslySetInnerHTML={{__html: `
        .modal-form-scroll::-webkit-scrollbar { width: 6px; }
        .modal-form-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-form-scroll::-webkit-scrollbar-thumb { background-color: rgba(155, 0, 0, 0.2); border-radius: 10px; }
      `}} />

      {/* Main Modal Card Container */}
      <div className="modal-form-scroll relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl font-sans text-gray-800 border border-neutral-100">
        
        {/* Close Button Layout Frame */}
        <button 
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 md:top-8 md:right-8 text-neutral-400 hover:text-black transition-colors p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Content Wrapper */}
        <div className="space-y-4 mb-8">
          <h2 className="text-4xl md:text-[44px] font-semibold text-neutral-900 tracking-tight">
            Schedule a <span className="font-serif italic text-brand-maroon">Call</span>
          </h2>
          
          <p className="text-[15px] md:text-base text-neutral-500 max-w-3xl leading-relaxed font-normal">
            Talk to our investment team — we will walk you through our funds, strategy, and how to get started.
          </p>

          {/* Key Value Propositions Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[13px] font-medium text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="text-brand-maroon text-lg leading-none">•</span> 15+ Years Experience
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-maroon text-lg leading-none">•</span> SEBI Registered AIF
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-maroon text-lg leading-none">•</span> Personal Advisory
            </span>
          </div>

          <hr className="border-neutral-100 pt-2" />
        </div>

        {/* Core Scheduling Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 items-start">
            
            {/* Full Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[13px] font-bold font-sans text-gray-900 capitalize tracking-wide">
                Full Name <span className="text-brand-maroon ml-0.5">*</span>
              </label>
              <input 
                id="name"
                type="text" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Vivek Iyer"
                className="w-full h-13 px-4 rounded-xl bg-gray-50 text-[15px] border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:bg-white transition-all text-gray-900" 
              />
            </div>

            {/* Email Address / Phone Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="emailOrPhone" className="text-[13px] font-bold font-sans text-gray-900 capitalize tracking-wide">
                Email / Phone <span className="text-brand-maroon ml-0.5">*</span>
              </label>
              <input 
                id="emailOrPhone"
                type="text" 
                required
                value={formData.emailOrPhone}
                onChange={handleChange}
                placeholder="you@example.com or +91 99872 61105"
                className="w-full h-13 px-4 rounded-xl bg-gray-50 text-[15px] border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:bg-white transition-all text-gray-900" 
              />
            </div>

            {/* Preferred Date Multi-Option Dynamic Custom Block */}
            <div className="col-span-1 md:col-span-2">
              <PreferredDatesBlock dates={dates} setDates={setDates} />
            </div>

            {/* Investment Interest Dropdown Field */}
            <div className="flex flex-col gap-2 relative col-span-1 md:col-span-2">
              <label htmlFor="category" className="text-[13px] font-bold font-sans text-gray-900 capitalize tracking-wide">
                Investment Interest
              </label>
              <div className="relative">
                <select 
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-13 px-4 rounded-xl bg-gray-50 text-[15px] border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:bg-white transition-all text-gray-700 appearance-none pr-10 cursor-pointer"
                >
                  <option value="" disabled hidden>Select a fund</option>
                  <option value="india-long-only">India Long-Only Fund</option>
                  <option value="gold-silver-miners">Gold & Silver Miners Fund</option>
                  <option value="absolute-return">Absolute Return Fund</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Full Width Message/Requirements Textarea */}
          <div className="flex flex-col gap-2 pt-1">
            <label htmlFor="message" className="text-[13px] font-bold font-sans text-gray-900 capitalize tracking-wide">
              Message / Requirements (optional)
            </label>
            <textarea 
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your investment goals..."
              className="w-full p-4 rounded-xl bg-gray-50 text-[15px] border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:bg-white transition-all text-gray-900 resize-none"
            />
          </div>

          {/* Dynamic feedback state logging row updates */}
          {status.type === 'error' && (
            <p className="text-red-500 text-sm font-semibold text-center">{status.message}</p>
          )}
          {status.type === 'success' && (
            <p className="text-emerald-600 text-sm font-semibold text-center">{status.message}</p>
          )}

          {/* Form Action Buttons Container Area */}
          <div className="pt-4 flex flex-col items-center justify-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-maroon disabled:opacity-60 text-white font-semibold text-[15px] py-4 rounded-xl hover:bg-[#800000] transition-all active:scale-[0.99] shadow-sm cursor-pointer text-center"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule a Call'}
            </button>
            
            <p className="text-[12px] text-neutral-400 font-normal tracking-wide text-center">
              No commitment required. We will reach out within 24 hours.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
};

// Internal supportive component with parent context linking props
interface PreferredDatesBlockProps {
  dates: string[];
  setDates: React.Dispatch<React.SetStateAction<string[]>>;
}

function PreferredDatesBlock({ dates, setDates }: PreferredDatesBlockProps) {
  
  const handleAddDate = () => {
    if (dates.length < 3) {
      setDates([...dates, '']);
    }
  };

  const handleRemoveDate = (indexToRemove: number) => {
    if (dates.length === 1) {
      setDates(['']);
      return;
    }
    setDates(dates.filter((_, idx) => idx !== indexToRemove));
  };

  const handleDateChange = (index: number, value: string) => {
    const updatedDates = [...dates];
    updatedDates[index] = value;
    setDates(updatedDates);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Structural Label Area Layout */}
      <div className="flex items-center justify-between">
        <label className="text-[13px] font-bold font-sans text-gray-900 capitalize tracking-wide">
          Preferred Dates <span className="text-brand-maroon ml-0.5">*</span>
          <span className="text-gray-400 font-normal normal-case ml-1.5">(Select up to 3 options)</span>
        </label>

        {/* Dynamic Context Trigger Rule for Addition Button */}
        {dates.length < 3 && (
          <button
            type="button"
            onClick={handleAddDate}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-maroon hover:text-[#800000] transition-colors cursor-pointer"
          >
            <Plus size={14} strokeWidth={2.5} /> Add Alternate Date
          </button>
        )}
      </div>

      {/* Stacked Input Layout Block */}
      <div className="space-y-3">
        {dates.map((dateValue, index) => (
          <div key={index} className="flex items-center gap-2 group">
            <div className="relative flex-1">
              <input
                type={dateValue ? 'date' : 'text'}
                required={index === 0} 
                placeholder={index === 0 ? 'Select primary date...' : `Select alternate date option ${index + 1}...`}
                value={dateValue}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                onChange={(e) => handleDateChange(index, e.target.value)}
                className="w-full h-13 px-4 rounded-xl bg-gray-50 text-[15px] border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:bg-white transition-all text-left text-gray-900"
              />
            </div>

            {/* Delete Option Cross Trigger */}
            {(dates.length > 1 || dateValue !== '') && (
              <button
                type="button"
                onClick={() => handleRemoveDate(index)}
                className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-600 border border-gray-100 hover:border-red-100 transition-all cursor-pointer"
                title="Remove option"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}