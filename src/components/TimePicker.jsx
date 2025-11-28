import { useState } from "react";
import { Clock } from "lucide-react";
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

export default function TimePicker() {
  const [time, setTime] = useState(null);
  const [period, setPeriod] = useState("AM"); // AM / PM

  // generate 12-hour times
  const times = [];
  for (let hour = 1; hour <= 12; hour++) {
    for (let minutes of ["00", "15", "30", "45"]) {
      times.push(`${hour.toString().padStart(2, "0")}:${minutes}`);
    }
  }

  const finalTime = time ? `${time} ${period}` : null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[200px] justify-start text-left font-normal",
            !finalTime && "text-muted-foreground"
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {finalTime || "Select time"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[240px] p-0">
        <div className="flex items-center justify-between p-2 border-b">
          <span className="text-sm text-muted-foreground">AM / PM</span>
          <div className="flex gap-2">
            <Toggle
              pressed={period === "AM"}
              onPressedChange={() => setPeriod("AM")}
            >
              AM
            </Toggle>
            <Toggle
              pressed={period === "PM"}
              onPressedChange={() => setPeriod("PM")}
            >
              PM
            </Toggle>
          </div>
        </div>

        <Command>
          <CommandInput placeholder="Search time..." />
          <CommandEmpty>No time found.</CommandEmpty>

          <CommandGroup>
            {times.map((t) => (
              <CommandItem
                key={t}
                value={t}
                onSelect={() => setTime(t)}
                className="cursor-pointer"
              >
                {t}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
