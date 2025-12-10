type FlightLogTableParams = {
  date: Date;
};
import hemslogo from "../../assets/hemslogo.png";

function FlightLogTable({ date }: FlightLogTableParams) {
  return (
    <div>
      <div className="w-full flex items-center arial relative px-5">
        <div className="w-[6%]">
          <img src={hemslogo} alt="HEMS Logo" />
        </div>
        <div className="w-[20%]">
          <h1 className="arial font-bold text-xl text-docred">HEMS HUNGARY VIRTUAL</h1>
        </div>
        <div className="w-[40%] flex justify-end">
          <h1 className="arial font-bold text-2xl text-docred">FLIGHT AND MAINTENANCE REPORT</h1>
        </div>
        <div className="w-[34%] flex justify-end">
          <div className="border grid text-left px-1 w-min text-nowrap min-h-[70px] relative">
            <p>REPORT NO</p>{" "}
            <input
              type="text"
              className="outline-0 arial text-xl w-[100px] absolute top-10 left-0 font-bold -translate-x-[6px] bottom-0 translate-y-1"
              style={{ color: "#000" }}
              defaultValue={92024}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start p-2 arial">
        <div className="w-full overflow-x-auto">
          {/* ELSŐ TABLE */}
          <table className="border-collapse border-2 border-docred w-full max-w-full">
            <thead>
              <tr className="whitespace-nowrap">
                <th className="border-2 border-docred p-2 align-top whitespace-nowrap">
                  <div className="flex flex-col items-start">
                    <p className="text-sm leading-none mb-1 text-docred">
                      DATE <span className="text-xs">(yyyy.mm.dd.)</span>
                    </p>
                    <input type="text" className="outline-0 caveat text-xl w-[100px]" />
                  </div>
                </th>

                <th className="border-2 border-docred p-2 align-top whitespace-nowrap">
                  <div className="flex flex-col items-start">
                    <p className="text-sm leading-none mb-1 text-docred">REG. MARK:</p>
                    <div className="flex items-center gap-1">
                      <span className="font-bold">HA-</span>
                      <input type="text" className="outline-0 caveat text-xl w-[60px]" maxLength={3} />
                    </div>
                  </div>
                </th>

                <th className="border-2 border-docred p-2 align-top whitespace-nowrap">
                  <div className="flex flex-col items-start">
                    <p className="text-sm leading-none mb-1 text-docred">TYPE VARIANT:</p>
                    <input type="text" className="outline-0 caveat text-xl w-[100px]" />
                  </div>
                </th>

                <th className="border-2 border-docred p-2 align-top whitespace-nowrap min-w-100">
                  <div className="flex flex-col items-start">
                    <p className="text-sm leading-none mb-1 text-docred">PILOT NAME:</p>
                    <input type="text" className="outline-0 caveat text-xl w-full" />
                  </div>
                </th>

                <th className="border-2 border-docred p-2 pb-0 align-top whitespace-nowrap min-w-100 h-[60px]">
                  <div className="flex flex-col items-center h-full">
                    <p className="text-sm leading-none mb-1 text-docred">PREFLIGHT CHECK CARRIED OUT:</p>
                    <div className="grid grid-cols-3 w-full h-full">
                      <div className="flex border-r border-dashed px-1 items-center">
                        <span>NAME: </span>
                        <input type="text" className="outline-0 caveat text-xl w-full" />
                      </div>
                      <div className="flex border-r border-dashed px-1 items-center">
                        <span>TIME: </span>
                        <input type="text" className="outline-0 caveat text-xl w-full" />
                      </div>
                      <div className="flex px-1 items-center">
                        <span>SIGN: </span>
                        <input type="text" className="outline-0 caveat text-xl w-full" />
                      </div>
                    </div>
                  </div>
                </th>

                <th className="border-2 border-docred p-2 align-top whitespace-nowrap min-w-100">
                  <div className="flex flex-col items-start">
                    <p className="text-sm leading-none mb-1 text-docred">A/C is transferred in operational condition: </p>
                    <div className="flex w-full">
                      <span>SIGN: </span>
                      <input type="text" className="outline-0 caveat text-xl w-full" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="w-full overflow-x-auto">
          {/* MÁSODIK TABLE */}
          <table className="border-collapse border border-docred mt-1 font-[Arial] text-black w-full">
            <thead>
              <tr className="whitespace-nowrap text-docred text-sm text-center leading-tight h-6">
                <th rowSpan={3} className="border border-docred  align-middle border-b-2 border-l-2 border-t-2">
                  FLIGHT <br /> NO
                </th>
                <th rowSpan={3} className="border border-docred  align-middle border-b-2 border-r-2 border-t-2">
                  PILOT *<br /> PREFLIGHT <br /> CHECK <br /> SIGN
                </th>
                <th colSpan={3} className="border border-docred  align-middle border-r-2 border-t-2">
                  CREW
                </th>
                <th rowSpan={3} className="border border-docred  align-middle [writing-mode:vertical-rl] rotate-180 border-b-2 border-t-2 px-1">
                  PLANNING <br /> TIME
                </th>
                <th
                  rowSpan={3}
                  className="border border-docred  align-middle [writing-mode:vertical-rl] rotate-180 border-b-2 border-r-2 border-t-2  px-1"
                >
                  FLIGHT <br /> CHARACT.
                </th>
                <th rowSpan={3} className="border border-docred  align-middle w-60 border-b-2 border-t-2">
                  FROM
                </th>
                <th rowSpan={3} className="border border-docred  align-middle w-60 border-b-2 border-t-2">
                  TO
                </th>
                <th colSpan={3} className="border border-docred  align-middle border-t-2">
                  FLIGHT TIME UTC
                </th>
                <th rowSpan={3} className="border border-docred  align-middle [writing-mode:vertical-rl] rotate-180 border-b-2 border-t-2">
                  START
                </th>
                <th rowSpan={3} className="border border-docred  align-middle [writing-mode:vertical-rl] rotate-180 border-b-2 border-r-2 border-t-2">
                  LDG
                </th>
                <th colSpan={2} className="border border-docred  align-middle border-r-2 border-t-2">
                  HOOK
                </th>
                <th colSpan={8} className="border border-docred  align-middle border-r-2 border-t-2">
                  FUEL
                </th>
                <th rowSpan={3} className="border border-docred  align-middle border-r-2 border-b-2 border-t-2 min-w-70 text-lg leading-5">
                  PM / SCP / <br /> HEMS PAX <br /> MANIFEST NO
                </th>
              </tr>
              <tr className="text-docred text-sm text-center leading-tight ">
                <th className="border border-docred">PIC</th>
                <th className="border border-docred">HEMS TC</th>
                <th className="border border-docred border-r-2">MEDP</th>
                <th className="border border-docred border-b-2" rowSpan={2}>
                  T/O
                </th>
                <th className="border border-docred border-b-2" rowSpan={2}>
                  LDG
                </th>
                <th className="border border-docred border-b-2" rowSpan={2}>
                  FLT <br /> TIME
                </th>
                <th rowSpan={2} className="border border-docred  align-middle [writing-mode:vertical-rl] rotate-180 border-b-2 border-r-2">
                  CYCLE
                </th>
                <th rowSpan={2} className="border border-docred  align-middle [writing-mode:vertical-rl] rotate-180 border-b-2 border-r-2">
                  TIME
                </th>
                <th className="border border-docred" colSpan={3}>
                  TOTAL FUEL IN
                </th>
                <th className="border border-docred" colSpan={3}>
                  REMAINING IN
                </th>
                <th className="border border-docred border-r-2" colSpan={2}>
                  REFUELED
                </th>
              </tr>
              <tr>
                <th className="border border-docred border-b-2">COMM</th>
                <th className="border border-docred border-b-2">TS</th>
                <th className="border border-docred border-b-2 border-r-2">TS</th>

                <th className="border border-docred border-b-2 border-r-dashed">L/S</th>
                <th className="border border-l-0 border-docred border-b-2 border-r-dashed">MAIN</th>
                <th className="border-docred border-b-2 border-r-1">R/S</th>

                <th className="border border-docred border-b-2 border-r-dashed">L/S</th>
                <th className="border border-l-0 border-docred border-b-2 border-r-dashed">MAIN</th>
                <th className="border-docred border-b-2 border-r-1">R/S</th>

                <th className="border border-docred border-b-2 border-r-dashed">Liter</th>
                <th className="border border-l-0 border-docred border-b-2 border-r-2">Kg</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 14 }).map((_, index) => (
                <tr>
                  <td className="border-1 pl-1 border-l-2 w-[3rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[6rem] border-r-2">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[4rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[4rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[4rem] border-r-2">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[4rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[3rem] border-r-2">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[3rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[3rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[5rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[5rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[3rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[2rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[2rem] border-r-2">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[2rem]">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[3rem] border-r-2">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[2rem] border-dashed border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[3rem] border-dashed border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[2rem] border-dashed border-r-solid border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[2rem] border-dashed border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[3rem] border-dashed border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[2rem] border-dashed border-r-solid border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>

                  <td className="border-1 pl-1 w-[2rem] border-dashed border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1  border-l-0 pl-1 w-[3rem] border-r-solid border-r-2 border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                  <td className="border-1 pl-1 w-[3rem] border-r-solid border-b-solid">
                    <div className="w-full">
                      <input type="text" className="outline-0 caveat text-xl w-full min-w-0" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FlightLogTable;
