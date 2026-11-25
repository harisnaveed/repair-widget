import type { StepItem } from "../types";
import { CheckIcon } from "./Icons";

interface ProgressStepsProps {
  steps: StepItem[];
}

function ProgressSteps({ steps }: ProgressStepsProps) {
  return (
    <nav
      aria-label="Progress"
      className="order-last flex w-full items-center justify-center gap-1.5 md:gap-2.5 lg:order-0 lg:w-auto lg:flex-1"
    >
      {steps.map((step, i) => (
        <div
          key={step.id}
          className="flex flex-none items-center gap-1.5 md:gap-2.5"
        >
          <div className="flex items-center gap-1.5 md:gap-2">
            <span
              className="step-dot"
              data-state={step.state}
              aria-current={step.state === "current" ? "step" : undefined}
            >
              {step.state === "done" ? <CheckIcon /> : step.id}
            </span>
            <span className="step-label" data-state={step.state}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span
              className="step-line"
              data-state={step.state === "done" ? "done" : "upcoming"}
            />
          )}
        </div>
      ))}
    </nav>
  );
}

export default ProgressSteps;
