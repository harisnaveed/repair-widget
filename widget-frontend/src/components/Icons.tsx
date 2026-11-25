export interface IconProps {
  className?: string;
}

/* Wrench / Logo */
export const WrenchIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.5 2.5-2.3-.6-.6-2.3z" />
  </svg>
);

/* Checkmark */
export const CheckIcon = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

/* Search magnifying glass */
export const SearchIcon = ({
  className = "h-[18px] w-[18px] text-muted",
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

/* Navigation & Arrow Icons */
export const ChevronLeftIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const ArrowRightIcon = ({
  className = "h-[18px] w-[18px]",
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeftIcon = ({
  className = "h-[18px] w-[18px]",
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

/* Cart & Action Icons */
export const CloseIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const PlusIcon = ({
  className = "h-[18px] w-[18px]",
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const SmartphoneIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </svg>
);

export const BoxIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.5 7.5l-8.5-5-8.5 5v9l8.5 5 8.5-5z" />
    <path d="M3.5 7.5L12 12.5l8.5-5M12 12.5v9" />
  </svg>
);

/* Phone illustration used on model cards */
export const PhoneArt = ({ selected }: { selected: boolean }) => (
  <svg width="40" height="66" viewBox="0 0 44 72" aria-hidden="true">
    <rect
      x="3"
      y="3"
      width="38"
      height="66"
      rx="8"
      strokeWidth="2.5"
      className={
        selected
          ? "fill-brand-100 stroke-brand-600"
          : "fill-slate-100 stroke-slate-400"
      }
    />
    <rect
      x="16"
      y="9"
      width="12"
      height="4"
      rx="2"
      className={selected ? "fill-brand-600" : "fill-slate-400"}
    />
  </svg>
);
