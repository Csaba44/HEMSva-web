import Announcement from "../components/Announcement";
import Layout from "../components/Layout";
import Map from "../components/Map";
import Widget from "../components/Widget";

function Dashboard() {
  const announcements = [
    {
      date: "2025.09.18.",
      author: "Ujhelyi Domonkos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed semper felis. Curabitur eget enim vulputate dolor fringilla luctus. Sed orci libero, venenatis vel pretium ac, tincidunt a nisl. ",
    },
    {
      date: "2025.09.26.",
      author: "Földi Tibor",
      content:
        "Quisque orci velit, dapibus sed vulputate sed, ullamcorper vitae quam. Ut non consectetur nibh. Curabitur eu risus massa. Maecenas malesuada pulvinar volutpat. Aenean id urna venenatis, iaculis diam eu, egestas est. Phasellus posuere sem vitae leo sagittis, vehicula commodo dolor aliquam. Pellentesque fermentum libero quam, vitae malesuada elit bibendum eget. Proin commodo ante et nunc molestie mattis. Donec sed lorem risus.",
    },
  ];

  return (
    <Layout>
      <div className="h-full flex flex-col">
        <h1 className="h1">Irányítópult</h1>
        <section className="w-full px-5 grid grid-cols-4 grid-rows-1 gap-13 pt-5">
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
        </section>

        <section className="w-full h-full px-5 grid grid-cols-3 grid-rows-1 gap-5 pt-5 ">
          <Widget title="Legutóbbi közlemények" iconClass="fa-classic fa-solid fa-bullhorn" className="w-full">
            {announcements.map((announcement, index) => (
              <Announcement
                key={index}
                lastOne={index == announcements.length - 1}
                author={announcement.author}
                date={announcement.date}
                content={announcement.content}
              />
            ))}
          </Widget>
          <Widget title="Aktív repülések - Térkép" iconClass="fa-classic fa-solid fa-map" className="w-full col-span-2">
            <Map />
          </Widget>
        </section>
      </div>
    </Layout>
  );
}

export default Dashboard;
