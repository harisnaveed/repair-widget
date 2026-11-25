import { CheckIcon, SmartphoneIcon } from "./Icons";
import type { DeviceItem } from "../types";

interface DeviceCardProps {
  device: DeviceItem;
  selected: boolean;
  onSelect: () => void;
}

export default function DeviceCard({
  device,
  selected,
  onSelect,
}: DeviceCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className="model-card"
    >
      {selected && (
        <span className="absolute top-2.5 right-2.5 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckIcon className="h-3 w-3" />
        </span>
      )}

      {/* Device Icon */}
      <span className="flex h-20 items-center justify-center text-brand-600">
        <SmartphoneIcon className="h-10 w-10 text-brand-600" />
      </span>

      {/* Device Name */}
      <span className="mt-2 text-center text-[16px] leading-tight font-semibold text-ink">
        {device.name}
      </span>
    </button>
  );
}
