import React from "react";

function FlightDataTab() {
  return (
    <div className="grid grid-cols-3 mt-5">
      <div>
        <p className="text-darkgray">
          <strong>ADATOK</strong>
        </p>
        <p>Repositioning</p>
        <p>
          Indulás: <strong>LHBB</strong>
        </p>
        <p>
          Érkezés: <strong>LHMC</strong>
        </p>
        <p>
          Légijármű: <strong>HA-HBI</strong>
        </p>
        <p>
          {/*Accepted: #5EB52F | Denied: #FF7D7F*/}
          Pontok: <strong className="text-[#5EB52F]">+560</strong>
        </p>
        <p>
          Repült idő: <strong>01:09</strong>
        </p>
        <p>
          VATSIM: <strong>Igen</strong> <span className="text-darkgray">(1582533)</span>
        </p>
      </div>
      <div>
        <p className="text-darkgray">
          <strong>METAR</strong>
        </p>
        <p>
          <strong>LHBP</strong> 231830Z 35009KT CAVOK 20/15 Q1015 NOSIG=
        </p>
        <p>
          <strong>LHNY</strong> 231830Z 14006KT CAVOK 19/16 Q1015 NOSIG=
        </p>
      </div>
      <div>
        <p className="text-darkgray">
          <strong>EREDMÉNY</strong>
        </p>
        <p>
          <strong className="text-[#5EB52F]">ELFOGADVA</strong>
        </p>
        <p>
          Kezelte: <strong>Földi Tibor</strong>
        </p>
      </div>
    </div>
  );
}

export default FlightDataTab;
