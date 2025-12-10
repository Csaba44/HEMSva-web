import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlightTag from "../FlightTag";
import Widget from "../Widget";
import Button from "../Button";
import FlightDataTab from "./FlightDataTab";
import FlightMapTab from "./FlightMapTab";
import FlightGraphTab from "./FlightGraphTab";

type CompletedFlightParams = {
  type: "mission" | "transport_flight" | "repositioning";
  date: string;
};

function CompletedFlight({ type, date }: CompletedFlightParams) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"data" | "map" | "graph">("data");

  let iconClass = "";
  let widgetTitle = "";

  if (type === "mission") {
    widgetTitle = "Riasztás - " + date;
    iconClass = "fa-classic fa-solid fa-siren-on";
  } else if (type === "transport_flight") {
    widgetTitle = "Betegszállítás - " + date;
    iconClass = "fa-classic fa-solid fa-bed-pulse";
  } else if (type === "repositioning") {
    widgetTitle = "Repositioning - " + date;
    iconClass = "fa-classic fa-solid fa-paper-plane";
  }

  return (
    <Widget
      iconClass={iconClass}
      title={widgetTitle}
      className="cursor-pointer transition-all duration-200"
      onClickHeader={() => setIsOpen(prev => !prev)}
      flightTagHeader={<FlightTag type="accepted"></FlightTag>}
    >
      <div className="flex gap-3 items-center cursor-pointer select-none" onClick={() => setIsOpen(prev => !prev)}>
        <motion.i
          className={`fa-sharp fa-solid fa-angle-down`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
        <FlightTag type={type} />
        <FlightTag type="VFR" />
        <FlightTag type="location" location="M0 autópálya" />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="flight-content"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div className="flex gap-5 mt-5">
              <Button text="adatok" addClass="text-sm" active={activeTab === "data"} onClick={() => setActiveTab("data")} />
              <Button text="térkép" addClass="text-sm" active={activeTab === "map"} onClick={() => setActiveTab("map")} />
              <Button text="grafikon" addClass="text-sm" active={activeTab === "graph"} onClick={() => setActiveTab("graph")} />
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-4"
            >
              {activeTab === "data" && <FlightDataTab />}
              {activeTab === "map" && <FlightMapTab />}
              {activeTab === "graph" && <FlightGraphTab />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Widget>
  );
}

export default CompletedFlight;
