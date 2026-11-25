import type { ReactNode } from "react";
import { CheckIcon } from "./Icons";

interface CardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  selected: boolean;
  onSelect: () => void;
}

function Card({ title, subtitle, icon, selected, onSelect }: CardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className="model-card"
    >
      {/* Checkmark badge when selected */}
      {selected && (
        <span className="absolute top-2.5 right-2.5 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckIcon className="h-3 w-3" />
        </span>
      )}

      {/* Visual / Icon slot */}
      {icon && (
        <span className="flex h-21 items-center justify-center text-3xl text-brand-600">
          {typeof icon === "string" && icon.startsWith("bi-") ? (
            <i className={`bi ${icon}`}></i>
          ) : (
            icon
          )}
        </span>
      )}

      {/* Primary Title */}
      <span className="mt-1 text-center text-[15px] leading-tight font-semibold text-ink">
        {title}
      </span>

      {/* Optional Subtitle */}
      {subtitle && (
        <span className="text-[12.5px] text-muted text-center line-clamp-1">
          {subtitle}
        </span>
      )}
    </button>
  );
}

export default Card;
