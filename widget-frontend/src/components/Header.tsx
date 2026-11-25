import ProgressSteps from "./ProgressSteps";
import type { StepItem } from "../types";
import { WrenchIcon } from "./Icons";

interface HeaderProps {
  steps: StepItem[];
}

function Header({ steps }: HeaderProps) {
  return (
    <header className="flex flex-none flex-wrap items-center gap-x-10 gap-y-3 border-b border-line bg-white px-5 py-4 sm:px-8 lg:h-18 lg:flex-nowrap lg:py-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 lg:w-50">
        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand-600 text-white">
          <WrenchIcon />
        </div>
        <span className="text-lg font-bold tracking-tight">RepairWidget</span>
      </div>

      {/* Progress steps */}
      <ProgressSteps steps={steps} />

      <button
        type="button"
        className="ml-auto flex justify-end border-0 bg-transparent p-0 text-sm font-medium text-muted hover:text-ink lg:ml-0 lg:w-50"
      >
        Need help?
      </button>
    </header>
  );
}

export default Header;
