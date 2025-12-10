import Layout from "../components/Layout";
import Widget from "../components/Widget";
import FlightCalendar from "../components/FlightCalendar";

function Stats() {
  return (
    <Layout>
      <div className="h-full flex flex-col">
        <h1 className="h1">Statisztikáim</h1>
        <section className="w-full px-5 grid grid-cols-4 grid-rows-2 gap-5 pt-5">
          <Widget title="Repült órák" iconClass="fa-classic fa-solid fa-clock" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">446.9 óra</h2>
          </Widget>
          <Widget title="Szállított betegek" iconClass="fa-classic fa-regular fa-hospital-user" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">652 fő</h2>
          </Widget>
          <Widget title="Teljesített leszállások" iconClass="fa-classic fa-solid fa-helicopter-symbol" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">256</h2>
          </Widget>
          <Widget title="Összegyűjtött pontok" iconClass="fa-classic fa-solid fa-hundred-points" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">8975 pont</h2>
          </Widget>

          <Widget title="Repült távolság" iconClass="fa-classic fa-solid fa-route" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">6782 nm</h2>
          </Widget>
          <Widget title="NVFR Repült Órák" iconClass="fa-classic fa-solid fa-moon" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">88.6 óra</h2>
          </Widget>
          <Widget title="Átlagos esethelyszínre érkezés" iconClass="fa-classic fa-solid fa-heart-pulse" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">19.65 perc</h2>
          </Widget>
          <Widget title="Jóváhagyott repülések aránya" iconClass="fa-classic fa-solid fa-badge-check" className="w-full">
            <h2 className="text-4xl mt-3 ml-2">89.96%</h2>
          </Widget>
        </section>

        <section className="w-full px-5 mt-5 flex">
          <Widget title="Repült idő lebontása" iconClass="fa-classic fa-solid fa-calendar-days" className="w-full">
            <div className="w-full h-full flex justify-center">
              <FlightCalendar />
            </div>
          </Widget>
        </section>
      </div>
    </Layout>
  );
}

export default Stats;
