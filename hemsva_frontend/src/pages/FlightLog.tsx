import { useState } from "react";
import FlightLogTable from "../components/flightLog/FlightLogTable";
import Layout from "../components/Layout";
import FlightLogHeader from "../components/flightLog/FlightLogHeader";

function FlightLog() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  return (
    <div>
      <FlightLogHeader selected={selectedDate} setSelected={setSelectedDate} />
      {selectedDate && <FlightLogTable date={selectedDate} />}
    </div>
  );
}

export default FlightLog;
