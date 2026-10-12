"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// min / max = allowed digit count of the national number (without country code or leading 0)
export const countryCodes = [
  { iso: "IN", code: "+91", min: 10, max: 10 },
  { iso: "US", code: "+1", min: 10, max: 10 },
  { iso: "GB", code: "+44", min: 9, max: 10 },
  { iso: "AE", code: "+971", min: 8, max: 9 },
  { iso: "SG", code: "+65", min: 8, max: 8 },
  { iso: "HK", code: "+852", min: 8, max: 8 },
  { iso: "AU", code: "+61", min: 9, max: 9 },
  { iso: "NZ", code: "+64", min: 8, max: 10 },
  { iso: "CA", code: "+1", min: 10, max: 10 },
  { iso: "SA", code: "+966", min: 9, max: 9 },
  { iso: "QA", code: "+974", min: 8, max: 8 },
  { iso: "KW", code: "+965", min: 8, max: 8 },
  { iso: "OM", code: "+968", min: 8, max: 8 },
  { iso: "BH", code: "+973", min: 8, max: 8 },
  { iso: "DE", code: "+49", min: 7, max: 12 },
  { iso: "FR", code: "+33", min: 9, max: 9 },
  { iso: "NL", code: "+31", min: 9, max: 9 },
  { iso: "CH", code: "+41", min: 9, max: 9 },
  { iso: "IE", code: "+353", min: 7, max: 9 },
  { iso: "IT", code: "+39", min: 6, max: 11 },
  { iso: "ES", code: "+34", min: 9, max: 9 },
  { iso: "SE", code: "+46", min: 7, max: 10 },
  { iso: "NO", code: "+47", min: 8, max: 8 },
  { iso: "DK", code: "+45", min: 8, max: 8 },
  { iso: "BE", code: "+32", min: 8, max: 9 },
  { iso: "LU", code: "+352", min: 6, max: 11 },
  { iso: "JP", code: "+81", min: 9, max: 10 },
  { iso: "CN", code: "+86", min: 10, max: 11 },
  { iso: "KR", code: "+82", min: 8, max: 10 },
  { iso: "MY", code: "+60", min: 9, max: 10 },
  { iso: "TH", code: "+66", min: 8, max: 9 },
  { iso: "ID", code: "+62", min: 9, max: 12 },
  { iso: "PH", code: "+63", min: 8, max: 10 },
  { iso: "VN", code: "+84", min: 9, max: 10 },
  { iso: "LK", code: "+94", min: 9, max: 9 },
  { iso: "NP", code: "+977", min: 8, max: 10 },
  { iso: "BD", code: "+880", min: 10, max: 10 },
  { iso: "MU", code: "+230", min: 7, max: 8 },
  { iso: "ZA", code: "+27", min: 9, max: 9 },
  { iso: "KE", code: "+254", min: 9, max: 9 },
  { iso: "NG", code: "+234", min: 8, max: 10 },
  { iso: "BR", code: "+55", min: 10, max: 11 },
  { iso: "MX", code: "+52", min: 10, max: 10 },
];

// Keep only digits/spaces/dashes and stop once the country's max digit count is reached
const limitDigits = (input: string, max: number) => {
  let digits = 0;
  let out = "";
  for (const ch of input.replace(/[^\d\s-]/g, "")) {
    if (/\d/.test(ch)) {
      if (digits === max) break;
      digits++;
    }
    out += ch;
  }
  return out;
};

interface PhoneInputProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  defaultCountry?: string;
  // Applied to both the country select and the number input so they match the surrounding form
  className?: string;
}

// Phone field with a country code dropdown. Emits the combined value, e.g. "+91 99872 61105".
export default function PhoneInput({
  id = "phone",
  value,
  onChange,
  required,
  placeholder = "XXXXX XXXXX",
  defaultCountry = "IN",
  className = "",
}: PhoneInputProps) {
  const [country, setCountry] = useState(defaultCountry);
  const [internalValue, setInternalValue] = useState("");
  const selected = countryCodes.find((c) => c.iso === country) ?? countryCodes[0];

  const fullValue = value ?? internalValue;
  const number = fullValue.startsWith(selected.code)
    ? fullValue.slice(selected.code.length).trimStart()
    : fullValue;

  const emit = (nextCode: string, nextNumber: string) => {
    const next = nextNumber ? `${nextCode} ${nextNumber}` : "";
    if (value === undefined) setInternalValue(next);
    onChange?.(next);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = countryCodes.find((c) => c.iso === e.target.value) ?? countryCodes[0];
    setCountry(next.iso);
    emit(next.code, limitDigits(number, next.max));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emit(selected.code, limitDigits(e.target.value, selected.max));
  };

  const lengthHint =
    selected.min === selected.max ? `${selected.max}` : `${selected.min}–${selected.max}`;

  return (
    <div className="flex gap-2">
      <div className="relative w-[112px] shrink-0">
        <select
          aria-label="Country code"
          value={country}
          onChange={handleCountryChange}
          className={`${className} w-full appearance-none pr-8 cursor-pointer`}
        >
          {countryCodes.map((c) => (
            <option key={c.iso} value={c.iso}>
              {c.iso} {c.code}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#000000]/40"
        />
      </div>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        required={required}
        placeholder={placeholder}
        value={number}
        onChange={handleNumberChange}
        pattern={`^(\\D*\\d){${selected.min},${selected.max}}\\D*$`}
        title={`Enter a ${lengthHint} digit phone number`}
        className={`${className} flex-1 min-w-0`}
      />
    </div>
  );
}
