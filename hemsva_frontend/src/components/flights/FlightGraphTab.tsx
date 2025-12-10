import React from "react";
import FlightGraph from "./FlightGraph";
import type { Waypoint } from "../../types/Flight";

function FlightGraphTab() {
  const route: Waypoint[] = [
    { lat: 47.45436, long: 18.90722, type: "takeoff", altitude: 415, speed: 32 },

    // Emelkedés
    { lat: 47.45297, long: 18.91012, type: "enroute", altitude: 520, speed: 58 },
    { lat: 47.45169, long: 18.91295, type: "enroute", altitude: 600, speed: 72 },
    { lat: 47.45013, long: 18.91587, type: "enroute", altitude: 685, speed: 85 },
    { lat: 47.44814, long: 18.91974, type: "enroute", altitude: 720, speed: 91 },
    { lat: 47.44603, long: 18.92281, type: "enroute", altitude: 875, speed: 96 },
    { lat: 47.44589, long: 18.9247, type: "enroute", altitude: 925, speed: 98 },
    { lat: 47.44364, long: 18.92923, type: "enroute", altitude: 1020, speed: 102 },
    { lat: 47.4423, long: 18.93155, type: "enroute", altitude: 1120, speed: 107 },
    { lat: 47.44157, long: 18.93389, type: "enroute", altitude: 1185, speed: 110 },

    // SAROKPONT 1
    { lat: 47.43956, long: 18.93852, type: "enroute", altitude: 1315, speed: 111 },
    { lat: 47.43839, long: 18.94077, type: "enroute", altitude: 1415, speed: 113 },
    { lat: 47.43725, long: 18.94307, type: "enroute", altitude: 1475, speed: 112 },

    // Stabilizálódás 1500 ft
    { lat: 47.43548, long: 18.94682, type: "enroute", altitude: 1498, speed: 114 },
    { lat: 47.43393, long: 18.94991, type: "enroute", altitude: 1510, speed: 116 },
    { lat: 47.4329, long: 18.95281, type: "enroute", altitude: 1520, speed: 117 },
    { lat: 47.43062, long: 18.95771, type: "enroute", altitude: 1500, speed: 115 },
    { lat: 47.42857, long: 18.96299, type: "enroute", altitude: 1495, speed: 112 },

    // SAROKPONT 2
    { lat: 47.42633, long: 18.96823, type: "enroute", altitude: 1508, speed: 110 },
    { lat: 47.42419, long: 18.97343, type: "enroute", altitude: 1510, speed: 114 },

    // Közbülső szakasz
    { lat: 47.42231, long: 18.97814, type: "enroute", altitude: 1528, speed: 117 },
    { lat: 47.42061, long: 18.98234, type: "enroute", altitude: 1532, speed: 113 },
    { lat: 47.41983, long: 18.98427, type: "enroute", altitude: 1535, speed: 115 },
    { lat: 47.41774, long: 18.98953, type: "enroute", altitude: 1502, speed: 118 },
    { lat: 47.41628, long: 18.99252, type: "enroute", altitude: 1490, speed: 119 },
    { lat: 47.41547, long: 18.99553, type: "enroute", altitude: 1485, speed: 116 },

    // SAROKPONT 3
    { lat: 47.4136, long: 19.00098, type: "enroute", altitude: 1492, speed: 114 },
    { lat: 47.41225, long: 19.00402, type: "enroute", altitude: 1501, speed: 112 },
    { lat: 47.41113, long: 19.00718, type: "enroute", altitude: 1505, speed: 113 },

    // Közeledés a második ponthoz
    { lat: 47.40912, long: 19.01266, type: "enroute", altitude: 1517, speed: 115 },
    { lat: 47.40758, long: 19.01635, type: "enroute", altitude: 1520, speed: 118 },
    { lat: 47.40679, long: 19.01924, type: "enroute", altitude: 1525, speed: 120 },
    { lat: 47.40494, long: 19.02509, type: "enroute", altitude: 1498, speed: 117 },
    { lat: 47.40357, long: 19.0286, type: "enroute", altitude: 1480, speed: 116 },
    { lat: 47.40246, long: 19.03169, type: "enroute", altitude: 1478, speed: 113 },

    // SAROKPONT 4
    { lat: 47.40044, long: 19.03707, type: "enroute", altitude: 1500, speed: 112 },
    { lat: 47.39814, long: 19.04455, type: "enroute", altitude: 1515, speed: 111 },

    // Közbülső szakasz
    { lat: 47.39647, long: 19.0496, type: "enroute", altitude: 1502, speed: 113 },
    { lat: 47.39489, long: 19.054, type: "enroute", altitude: 1498, speed: 115 },
    { lat: 47.39383, long: 19.0578, type: "enroute", altitude: 1490, speed: 114 },
    { lat: 47.39182, long: 19.064, type: "enroute", altitude: 1508, speed: 116 },
    { lat: 47.39052, long: 19.068, type: "enroute", altitude: 1522, speed: 118 },
    { lat: 47.38953, long: 19.07146, type: "enroute", altitude: 1530, speed: 117 },

    // SAROKPONT 5
    { lat: 47.38752, long: 19.07752, type: "enroute", altitude: 1510, speed: 115 },
    { lat: 47.38635, long: 19.08136, type: "enroute", altitude: 1502, speed: 113 },
    { lat: 47.38523, long: 19.08551, type: "enroute", altitude: 1505, speed: 112 },

    // Második pont környéke
    { lat: 47.38364, long: 19.09085, type: "enroute", altitude: 1492, speed: 115 },
    { lat: 47.38226, long: 19.09547, type: "enroute", altitude: 1480, speed: 117 },
    { lat: 47.38094, long: 19.09997, type: "enroute", altitude: 1485, speed: 116 },
    { lat: 47.37877, long: 19.10704, type: "enroute", altitude: 1508, speed: 118 },
    { lat: 47.37732, long: 19.11114, type: "enroute", altitude: 1515, speed: 115 },
    { lat: 47.37667, long: 19.11482, type: "enroute", altitude: 1520, speed: 114 },

    // SAROKPONT 6
    { lat: 47.3749, long: 19.1219, type: "enroute", altitude: 1502, speed: 113 },
    { lat: 47.37367, long: 19.12602, type: "enroute", altitude: 1518, speed: 111 },
    { lat: 47.37239, long: 19.13008, type: "enroute", altitude: 1510, speed: 110 },

    // Harmadik pont közelében
    { lat: 47.37204, long: 19.0928, type: "enroute", altitude: 1500, speed: 112 },
    { lat: 47.3741, long: 19.09763, type: "enroute", altitude: 1508, speed: 114 },
    { lat: 47.37612, long: 19.10159, type: "enroute", altitude: 1492, speed: 116 },
    { lat: 47.37789, long: 19.10547, type: "enroute", altitude: 1495, speed: 118 },
    { lat: 47.37996, long: 19.11152, type: "enroute", altitude: 1510, speed: 117 },
    { lat: 47.38144, long: 19.11484, type: "enroute", altitude: 1520, speed: 115 },
    { lat: 47.38276, long: 19.11829, type: "enroute", altitude: 1525, speed: 114 },

    // SAROKPONT 8
    { lat: 47.38506, long: 19.12444, type: "enroute", altitude: 1500, speed: 113 },
    { lat: 47.38632, long: 19.12787, type: "enroute", altitude: 1492, speed: 111 },
    { lat: 47.38763, long: 19.13127, type: "enroute", altitude: 1480, speed: 110 },
    { lat: 47.38954, long: 19.13608, type: "enroute", altitude: 1495, speed: 108 },
    { lat: 47.39116, long: 19.1403, type: "enroute", altitude: 1508, speed: 107 },
    { lat: 47.39251, long: 19.14439, type: "enroute", altitude: 1515, speed: 106 },

    // SAROKPONT 9
    { lat: 47.39437, long: 19.14909, type: "enroute", altitude: 1502, speed: 104 },
    { lat: 47.39602, long: 19.15327, type: "enroute", altitude: 1505, speed: 101 },
    { lat: 47.3974, long: 19.15766, type: "enroute", altitude: 1505, speed: 99 },

    // Negyedik pont közelében
    { lat: 47.39903, long: 19.16207, type: "enroute", altitude: 1492, speed: 97 },
    { lat: 47.40088, long: 19.16658, type: "enroute", altitude: 1485, speed: 93 },
    { lat: 47.40229, long: 19.17108, type: "enroute", altitude: 1490, speed: 89 },
    { lat: 47.40423, long: 19.17628, type: "enroute", altitude: 1502, speed: 83 },
    { lat: 47.40573, long: 19.18043, type: "enroute", altitude: 1510, speed: 75 },
    { lat: 47.40719, long: 19.18465, type: "enroute", altitude: 1528, speed: 70 },

    // SAROKPONT 10
    { lat: 47.40932, long: 19.19037, type: "enroute", altitude: 1410, speed: 65 },
    { lat: 47.4109, long: 19.19436, type: "enroute", altitude: 1335, speed: 58 },
    { lat: 47.41211, long: 19.19837, type: "enroute", altitude: 1250, speed: 52 },

    // Leszállási fázis
    { lat: 47.41383, long: 19.20347, type: "enroute", altitude: 1105, speed: 48 },
    { lat: 47.41539, long: 19.20772, type: "enroute", altitude: 1030, speed: 42 },
    { lat: 47.41703, long: 19.21224, type: "enroute", altitude: 985, speed: 39 },
    { lat: 47.41924, long: 19.21779, type: "enroute", altitude: 865, speed: 35 },
    { lat: 47.42089, long: 19.22206, type: "enroute", altitude: 780, speed: 31 },
    { lat: 47.42195, long: 19.22626, type: "enroute", altitude: 720, speed: 27 },
    { lat: 47.42417, long: 19.23221, type: "enroute", altitude: 610, speed: 22 },
    { lat: 47.42561, long: 19.23632, type: "enroute", altitude: 565, speed: 17 },
    { lat: 47.42689, long: 19.24044, type: "enroute", altitude: 550, speed: 12 },

    // Leszállás
    { lat: 47.42924, long: 19.23961, type: "enroute", altitude: 503, speed: 5 },
    { lat: 47.43019, long: 19.23926, type: "landing", altitude: 501, speed: 0 },
  ];

  return (
    <div className="w-full h-150 p-5">
      <FlightGraph route={route} />
    </div>
  );
}

export default FlightGraphTab;
