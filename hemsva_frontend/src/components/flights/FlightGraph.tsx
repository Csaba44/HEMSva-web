import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceDot, ResponsiveContainer, Label } from "recharts";
import type { Waypoint } from "../../types/Flight";
import { calculateDistanceNM } from "../../utils/calculateDistance";

type FlightGraphProps = {
  route: Waypoint[];
};

function FlightGraph({ route }: FlightGraphProps) {
  const data = useMemo(() => {
    let cumulativeDistance = 0;

    return route.map((wp, idx) => {
      if (idx > 0) {
        const prev = route[idx - 1];
        cumulativeDistance += calculateDistanceNM(prev.lat, prev.long, wp.lat, wp.long);
      }

      return {
        distance: parseFloat(cumulativeDistance.toFixed(2)),
        altitude: wp.altitude,
        speed: wp.speed ?? null,
        type: wp.type,
      };
    });
  }, [route]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;
    const { altitude, speed } = payload[0].payload;
    return (
      <div
        style={{
          background: "rgba(20,20,20,0.85)",
          borderRadius: "8px",
          padding: "6px 10px",
          color: "#fff",
          fontSize: "13px",
        }}
      >
        <div>Távolság: {label} NM</div>
        <div>Magasság: {altitude} ft</div>
        <div>Sebesség: {speed} KTS</div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-8 p-2">
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 30, right: 30, left: 40, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="distance" tickFormatter={v => `${v.toFixed(1)}`}>
              <Label value="Távolság (NM)" position="bottom" offset={0} />
            </XAxis>
            <YAxis
              domain={["auto", "auto"]}
              label={{
                value: "Magasság (ft AMSL)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
                offset: -5,
              }}
            />
            <Tooltip content={<CustomTooltip />} />

            <Line type="monotone" dataKey="altitude" stroke="#22d3ee" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />

            {data
              .filter(d => d.type === "takeoff")
              .map((d, i) => (
                <ReferenceDot
                  key={`tk-${i}`}
                  x={d.distance}
                  y={d.altitude}
                  r={6}
                  fill="#22c55e"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  label={{
                    value: "Takeoff",
                    position: "top",
                    fill: "#22c55e",
                    fontSize: 12,
                  }}
                />
              ))}

            {data
              .filter(d => d.type === "landing")
              .map((d, i) => (
                <ReferenceDot
                  key={`ld-${i}`}
                  x={d.distance}
                  y={d.altitude}
                  r={6}
                  fill="#ef4444"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  label={{
                    value: "Landing",
                    position: "top",
                    fill: "#ef4444",
                    fontSize: 12,
                  }}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 30, right: 30, left: 40, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="distance" tickFormatter={v => `${v.toFixed(1)}`}>
              <Label value="Távolság (NM)" position="bottom" offset={0} />
            </XAxis>
            <YAxis
              domain={["auto", "auto"]}
              label={{
                value: "Sebesség (kts)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
                offset: -5,
              }}
            />
            <Tooltip content={<CustomTooltip />} />

            <Line type="monotone" dataKey="speed" stroke="#facc15" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />

            {data
              .filter(d => d.type === "takeoff")
              .map((d, i) => (
                <ReferenceDot
                  key={`tk2-${i}`}
                  x={d.distance}
                  y={d.speed}
                  r={6}
                  fill="#22c55e"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  label={{
                    value: "Takeoff",
                    position: "top",
                    fill: "#22c55e",
                    fontSize: 12,
                  }}
                />
              ))}

            {data
              .filter(d => d.type === "landing")
              .map((d, i) => (
                <ReferenceDot
                  key={`ld2-${i}`}
                  x={d.distance}
                  y={d.speed}
                  r={6}
                  fill="#ef4444"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  label={{
                    value: "Landing",
                    position: "top",
                    fill: "#ef4444",
                    fontSize: 12,
                  }}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FlightGraph;
