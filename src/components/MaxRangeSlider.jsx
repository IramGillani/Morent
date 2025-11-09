// MaxValueSlider.jsx
// A simple single-thumb slider for selecting a maximum price value.
// Tailwind CSS based. Ideal for filtering items by max price.
// Props:
//  - min (number) default 0
//  - max (number) default 1000
//  - step (number) default 1
//  - initial (number) default = max
//  - currency (string) default '$'
//  - onChange (value) callback

import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function MaxValueSlider({
  min = 0,
  max = 1000,
  step = 1,
  initial,
  currency = "$",
  onChange,
}) {
  const [value, setValue] = useState(initial ?? max);

  useEffect(() => {
    if (typeof onChange === "function") onChange(value);
  }, [value, onChange]);

  const getPercent = useCallback(
    (v) => Math.round(((v - min) / (max - min)) * 100),
    [min, max]
  );

  const fmt = useCallback(
    (v) => `${currency}${v.toLocaleString()}`,
    [currency]
  );

  const rangeStyle = useMemo(
    () => ({
      width: `${getPercent(value)}%`,
    }),
    [value, getPercent]
  );

  function handleInput(e) {
    setValue(Number(e.target.value));
  }

  function reset() {
    setValue(max);
  }

  return (
    <div className="w-full max-w-xl p-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Maximum Price
      </label>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm">
        {/* Numeric input */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1">
            <div className="text-xs text-slate-500">Max Price</div>
            <input
              type="number"
              aria-label="Maximum price"
              className="w-full mt-1 p-2 border rounded-md text-sm"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleInput}
            />
          </div>
          <button
            onClick={reset}
            className="mt-6 inline-block px-3 py-2 text-sm border rounded-md"
          >
            Reset
          </button>
        </div>

        {/* Slider */}
        <div className="relative py-6">
          <div className="h-2 bg-slate-200 rounded-full relative">
            <div
              className="absolute h-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
              style={rangeStyle}
            />

            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleInput}
              className="absolute inset-0 w-full h-2 appearance-none bg-transparent cursor-pointer"
              style={{ zIndex: 4 }}
            />
          </div>

          <div className="flex justify-between mt-3 text-sm text-slate-600">
            <div>{fmt(min)}</div>
            <div>{fmt(max)}</div>
          </div>
        </div>

        <div className="mt-2 text-sm text-slate-700">
          Selected Max: <span className="font-semibold">{fmt(value)}</span>
        </div>
      </div>
    </div>
  );
}
