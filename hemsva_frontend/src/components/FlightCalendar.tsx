import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import dayjs, { Dayjs } from "dayjs";

interface Flight {
  date: string;
  count: number;
}

interface UserFlights {
  userId: string;
  flights: Flight[];
}

const FlightCalendar: React.FC = () => {
  const year = 2025;
  const startOfYear = dayjs(`${year}-01-01`);
  const endOfYear = dayjs(`${year}-12-31`);
  const daysInYear = endOfYear.diff(startOfYear, "day") + 1;

  const userFlights: UserFlights = {
    userId: "user123",
    flights: [
      { date: "2025-01-05", count: 2 },
      { date: "2025-02-10", count: 2 },
      { date: "2025-05-11", count: 3 },
      { date: "2025-07-24", count: 5 },
      { date: "2025-10-09", count: 1 },
      { date: "2025-12-25", count: 4 },
      { date: "2025-03-15", count: 1 },
      { date: "2025-06-08", count: 3 },
      { date: "2025-08-22", count: 2 },
      { date: "2025-11-30", count: 4 },
      { date: "2025-04-18", count: 1 },
      { date: "2025-09-05", count: 2 },
      { date: "2025-02-28", count: 3 },
      { date: "2025-07-12", count: 1 },
      { date: "2025-10-31", count: 5 },
      { date: "2025-01-20", count: 2 },
      { date: "2025-05-30", count: 1 },
      { date: "2025-08-07", count: 3 },
      { date: "2025-12-15", count: 2 },
      { date: "2025-03-03", count: 4 },
    ],
  };

  const flightMap = useMemo(() => {
    const map: Record<string, number> = {};
    userFlights.flights.forEach(f => {
      map[f.date] = f.count;
    });
    return map;
  }, [userFlights]);

  const getColor = (count?: number): string => {
    if (!count) return "bg-gray-300";
    if (count === 1) return "bg-red-200";
    if (count === 2) return "bg-red-400";
    if (count === 3) return "bg-red-600";
    return "bg-red-800";
  };

  const days: Dayjs[] = useMemo(() => Array.from({ length: daysInYear }, (_, i) => startOfYear.add(i, "day")), [daysInYear, startOfYear]);

  const weeks = useMemo(() => {
    const weekArray: (Dayjs | null)[][] = [];
    let currentWeek: (Dayjs | null)[] = [];

    const firstDayOfYear = startOfYear.day();
    for (let i = 1; i < firstDayOfYear; i++) currentWeek.push(null);

    days.forEach(day => {
      currentWeek.push(day);
      if (day.day() === 0) {
        weekArray.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) currentWeek.push(null);
      weekArray.push(currentWeek);
    }

    return weekArray;
  }, [days, startOfYear]);

  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    text: string;
    x: number;
    y: number;
  }>({ visible: false, text: "", x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, text: string) => {
    setTooltip({
      visible: true,
      text,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tooltip.visible) return;
    setTooltip(prev => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const handleMouseLeave = () => setTooltip({ visible: false, text: "", x: 0, y: 0 });

  return (
    <>
      <div className="relative flex gap-1 overflow-x-auto overflow-y-visible p-2" onMouseMove={handleMouseMove}>
        <div className="grid grid-rows-7 gap-1 text-xs text-gray-500 mr-2">
          {["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"].map(day => (
            <div key={day} className="h-4 flex items-center">
              {day}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-1">
              {week.map((dateObj, dayIndex) => {
                if (!dateObj) return <div key={dayIndex} className="w-4 h-4" />;

                const dateStr = dateObj.format("YYYY-MM-DD");
                const count = flightMap[dateStr];
                const color = getColor(count);
                const text = `${dateStr} — ${count ? `${count} repülés` : "Nincs repülés"}`;

                return (
                  <div
                    key={dayIndex}
                    className={`w-4 h-4 rounded-sm ${color} hover:scale-110 transition-transform duration-100 cursor-pointer`}
                    onMouseEnter={e => handleMouseEnter(e, text)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {tooltip.visible &&
        ReactDOM.createPortal(
          <div
            className="fixed z-[9999] px-2 py-1 bg-black text-white text-xs rounded shadow-lg pointer-events-none whitespace-nowrap"
            style={{
              top: tooltip.y + 10,
              left: tooltip.x + 10,
              maxWidth: "300px",
            }}
          >
            {tooltip.text}
          </div>,
          document.body
        )}
    </>
  );
};

export default FlightCalendar;
