import { useState } from "react";
import "./app.css";

import Card from "./components/Card";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Button from "./components/Button";
import { steps, devices } from "./data";
import { SmartphoneIcon, BoxIcon, CheckIcon } from "./components/Icons";

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const [query, setQuery] = useState("");
  const [device, setDevice] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  // Find the selected device object to get its dynamic icon
  const currentDevice = devices.find((d) => d.name === device);

  const cartItems = [
    {
      key: "device",
      label: "Device type",
      value: device,
      icon: currentDevice?.icon ? (
        <i className={`bi ${currentDevice.icon} text-lg text-brand-600`}></i>
      ) : (
        <SmartphoneIcon />
      ),
      clear: () => setDevice(null),
    },
    {
      key: "brand",
      label: "Brand",
      value: brand,
      icon: <BoxIcon />,
      clear: () => setBrand(null),
    },
    {
      key: "model",
      label: "Model",
      value: selectedModel,
      icon: <CheckIcon className="h-5 w-5" />,
      clear: () => setSelectedModel(null),
    },
  ].filter((item) => item.value);

  // Filter devices based on search query
  const filteredDevices = devices.filter((d) =>
    d.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-surface text-left font-sans text-ink">
      {/* ============================ Header ============================ */}
      <Header steps={steps} />
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* ============================ Main ============================ */}
        <main className="flex min-w-0 flex-1 flex-col px-5 pt-8 pb-10 sm:px-9">
          <Button
            className="flex items-center gap-1.5 self-start border-0 bg-transparent p-0 text-sm font-semibold text-brand-600 hover:text-brand-700"
            disabled={false}
            icon="ChevronLeftIcon"
            text="Back to Brands"
          />

          <h1 className="mt-3.5 mb-1.5 text-[26px] leading-tight font-bold tracking-[-0.02em] text-ink sm:text-[30px]">
            Which device needs repair?
          </h1>
          <p className="mb-5.5 max-w-2xl text-[15px] text-muted">
            Select your device category below to get started.
          </p>

          {/* Search + active filter */}
          <Search query={query} setQuery={setQuery} />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredDevices.map((d) => (
              <Card
                key={d.name}
                title={d.name}
                subtitle={d.description}
                icon={d.icon}
                selected={device === d.name}
                onSelect={() => setDevice(d.name)}
              />
            ))}
          </div>
        </main>

        {/* ======================= Cart / sidebar ======================= */}
        <Sidebar cartItems={cartItems} selectedModel={selectedModel} />
      </div>
    </div>
  );
}
