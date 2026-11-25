import type { ReactNode } from "react";
import Button from "./Button";
import { CloseIcon, PlusIcon } from "./Icons";

export interface CartItem {
  key: string;
  label: string;
  value: string | null;
  icon: ReactNode;
  clear: () => void;
}

interface SidebarProps {
  cartItems: CartItem[];
  selectedModel: string | null;
}

function Sidebar({ cartItems, selectedModel }: SidebarProps) {
  return (
    <aside
      aria-label="Your repair"
      className="flex w-full flex-none flex-col border-t border-line bg-white px-7 pt-8 pb-7 lg:w-95 lg:border-t-0 lg:border-l"
    >
      <div className="flex items-center gap-2.5">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          Your repair
        </h2>
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-600 px-1 text-xs font-bold text-white">
          {cartItems.length}
        </span>
      </div>
      <p className="mt-1.5 mb-2.5 text-[13.5px] text-muted">
        Your selections appear here as you go.
      </p>

      <ul>
        {cartItems.map((item) => (
          <li key={item.key} className="cart-row">
            <span className="cart-icon">{item.icon}</span>
            <div>
              <div className="text-xs font-medium text-muted">{item.label}</div>
              <div className="text-[14.5px] font-semibold">{item.value}</div>
            </div>
            <button
              type="button"
              aria-label={`Remove ${item.label.toLowerCase()}`}
              onClick={item.clear}
              className="cart-remove"
            >
              <CloseIcon />
            </button>
          </li>
        ))}

        {/* Empty slot for the next step */}
        <li className="flex items-center gap-3 py-3">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] border-[1.5px] border-dashed border-slate-300 text-muted">
            <PlusIcon />
          </span>
          <div>
            <div className="text-xs font-medium text-muted">Issue</div>
            <div className="text-[14.5px] font-medium text-muted">
              Choose in the next step
            </div>
          </div>
        </li>
      </ul>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 lg:mt-auto">
        <p className="rounded-xl bg-surface px-4 py-3.5 text-[13.5px] leading-normal text-muted">
          You can select more than one issue, such as a cracked screen and a
          battery replacement.
        </p>
        <Button
          className="btn-primary"
          disabled={!selectedModel}
          icon="arrowRight"
          text="Next: choose issue"
        />

        <Button
          className="btn-secondary"
          disabled={false}
          icon="arrowLeft"
          text="Back"
        />
      </div>
    </aside>
  );
}

export default Sidebar;
