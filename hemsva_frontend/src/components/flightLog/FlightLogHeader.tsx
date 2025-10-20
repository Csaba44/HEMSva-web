import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

type FlightLogHeaderProps = {
  selected: Date | undefined;
  setSelected: (date: Date | undefined) => void;
};

function FlightLogHeader({ selected, setSelected }: FlightLogHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid items-center grid-cols-2 p-2 px-5">
      <div className="px-3">
        <button className="cursor-pointer flex gap-2 items-center text-darkest">
          <i className="text-2xl text-darkest fa-light fa-left-from-bracket"></i>
          <span>Back</span>
        </button>
      </div>
      <div className="relative flex justify-end">
        <div className="flex items-center gap-3">
          <i className="fa-classic fa-light fa-calendar text-darkest"></i>
          <input
            type="text"
            readOnly
            value={selected ? selected.toLocaleDateString() : ""}
            onClick={() => setOpen(!open)}
            placeholder="Válassz dátumot"
            className="px-2 py-2 border border-gray-300 rounded-md cursor-pointer outline-none text-darkest"
          />
        </div>

        {open && (
          <div className="absolute top-full bg-white border border-gray-200 rounded-md shadow-lg z-50 p-5">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={day => {
                setSelected(day);
                setOpen(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightLogHeader;
