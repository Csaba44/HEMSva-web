export type Waypoint = {
  lat: number;
  long: number;
  type: "takeoff" | "enroute" | "landing";
  altitude: number;
  speed: number;
};
