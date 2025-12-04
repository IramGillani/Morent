import { useState, useEffect } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandInput,
  CommandEmpty,
} from "@/components/ui/command";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

export default function TimePicker({ value, change }) {
  const [time, setTime] = useState({ hour: null, minute: null });
  const [period, setPeriod] = useState("AM");

  // generate values
  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  useEffect(() => {
    if (!value) return;

    const [t, p] = value.split(" ");
    const [h, m] = t.split(":");

    setTime({ hour: h, minute: m });
    setPeriod(p);
  }, [value]);

  // build formatted time
  const finalTime =
    time.hour && time.minute ? `${time.hour}:${time.minute} ${period}` : null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-40 justify-start text-left font-normal",
            !finalTime && "text-muted-foreground"
          )}
        >
          {finalTime ?? "Select Time"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-0">
        {/* AM/PM Toggle */}
        <div className="flex items-center justify-between px-3 py-2 border-b">
          <span className="text-sm text-muted-foreground">AM / PM</span>
          <div className="flex gap-2">
            <Toggle
              pressed={period === "AM"}
              onPressedChange={() => {
                setPeriod("AM");
                if (time.hour && time.minute) {
                  change(`${time.hour}:${time.minute} AM`);
                }
              }}
              className="px-3"
            >
              AM
            </Toggle>
            <Toggle
              pressed={period === "PM"}
              onPressedChange={() => {
                setPeriod("PM");
                if (time.hour && time.minute) {
                  change(`${time.hour}:${time.minute} PM`);
                }
              }}
              className="px-3"
            >
              PM
            </Toggle>
          </div>
        </div>

        {/* Hours / Minutes selection */}
        <Command>
          <CommandInput placeholder="Search time..." />
          <CommandEmpty>No time found.</CommandEmpty>

          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto px-3 pb-3">
            {/* Hours */}
            <CommandGroup heading="Hours">
              {hours.map((h) => (
                <CommandItem
                  key={h}
                  onSelect={() => {
                    setTime((prev) => ({ ...prev, hour: h }));
                    change(`${h}:${time.minute ?? "00"} ${period}`);
                  }}
                >
                  {h}
                </CommandItem>
              ))}
            </CommandGroup>

            {/* Minutes */}
            <CommandGroup heading="Minutes">
              {minutes.map((m) => (
                <CommandItem
                  key={m}
                  onSelect={() => {
                    setTime((prev) => ({ ...prev, minute: m }));
                    change(`${time.hour ?? "01"}:${m} ${period}`);
                  }}
                >
                  {m}
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
