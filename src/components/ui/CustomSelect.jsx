// components/CustomSelect.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CustomSelect({ label, name, value, onChange, options = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Find selected label
  const selected = options.find(opt => opt.value === value);

  return (
    <div className="w-full relative" ref={ref}>
      {label && (
        <label htmlFor={name} className="block text-warm-brown dark:text-gray-400 font-medium mb-2">
          {label}
        </label>
      )}
      <button
        type="button"
        id={name}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 bg-white dark:bg-[#181a1b] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 shadow-sm"
        onClick={() => setOpen(o => !o)}
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected ? selected.label : "Select event type"}
        </span>
        <FaChevronDown className={`ml-2 text-yellow-700 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby={name}
          className="absolute z-10 mt-2 w-full bg-white dark:bg-[#181a1b] border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto animate-fade-in"
        >
          {options.map(option => (
            <li
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-yellow-100 ${value === option.value ? 'bg-yellow-200 font-semibold' : ''}`}
              onClick={() => {
                onChange({ target: { name, value: option.value } });
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
