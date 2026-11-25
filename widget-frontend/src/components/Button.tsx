import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from "./Icons";

interface ButtonProps {
  disabled?: boolean;
  className?: string;
  icon?: "arrowLeft" | "arrowRight" | "ChevronLeftIcon" | string;
  text: string;
  onClick?: () => void;
}

export default function Button({
  disabled = false,
  className = "btn-primary",
  icon,
  text,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {/* Show left arrow before text if arrowLeft or ChevronLeftIcon */}
      {icon === "arrowLeft" && <ArrowLeftIcon />}
      {icon === "ChevronLeftIcon" && <ChevronLeftIcon />}
      <span>{text}</span>
      {/* Show right arrow after text if arrowRight */}
      {icon === "arrowRight" && <ArrowRightIcon />}
    </button>
  );
}
