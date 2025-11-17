import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";

type NavItem = {
  path: string;
  name: string;
  icon: string;
  key: string;
};

function Nav() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  const isDispatcher = true;
  const isAdmin = true;

  const sections: { title: string; items: NavItem[] }[] = [
    {
      title: "PROFIL",
      items: [
        { path: "/dashboard", name: "Irányítópult", icon: "fa-solid fa-grip text-black", key: "dashboard" },
        { path: "/stats", name: "Statisztikáim", icon: "fa-solid fa-chart-waterfall text-black", key: "stats" },
        { path: "/flights", name: "Legutóbbi repüléseim", icon: "fa-regular fa-helicopter-symbol text-black", key: "flights" },
      ],
    },
    {
      title: "REPÜLÉS",
      items: [{ path: "/repositioning", name: "Repositioning", icon: "fa-light fa-map-pin text-black", key: "repositioning" }],
    },
    {
      title: "OPS",
      items: [
        { path: "/documents", name: "Dokumentumok", icon: "fa-light fa-file text-black", key: "documents" },
        { path: "/flight-log", name: "Fedélzeti naplók", icon: "fa-light fa-books text-black", key: "flight-log" },
        { path: "/announcements", name: "Közlemények", icon: "fa-light fa-bullhorn text-black", key: "announcements" },
        ...(isDispatcher
          ? [{ path: "/new-dispatch", name: "Új riasztás", icon: "fa-light fa-light-emergency-on text-black", key: "new-dispatch" }]
          : []),
      ],
    },
  ];

  if (isAdmin) {
    sections.push({
      title: "ADMIN",
      items: [
        { path: "/manage-aircraft", name: "Légijárművek kezelése", icon: "fa-light fa-helicopter text-black", key: "manage-aircraft" },
        { path: "/manage-missions", name: "Hívások kezelése", icon: "fa-light fa-bell text-black", key: "manage-missions" },
        {
          path: "/manage-repositioning",
          name: "Repositioning kezelése",
          icon: "fa-light fa-location-arrow text-black",
          key: "manage-repositioning",
        },
        { path: "/manage-bases", name: "Bázisok kezelése", icon: "fa-light fa-helicopter-symbol text-black", key: "manage-bases" },
        { path: "/manage-users", name: "Felhasználók kezelése", icon: "fa-light fa-user-pen text-black", key: "manage-users" },
        { path: "/manage-pireps", name: "Leadott repülések kezelése", icon: "fa-light fa-plane-circle-check text-black", key: "manage-pireps" },
      ],
    });
  }

  const allItems = sections.flatMap(s => s.items);

  useEffect(() => {
    const idx = allItems.findIndex(item => location.pathname.includes(item.path));
    if (idx >= 0) setActiveIndex(idx);
  }, [location.pathname]);

  const indicatorIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  const [indicatorStyle, setIndicatorStyle] = useState<{ top: number; height: number }>({ top: 0, height: 0 });

  useEffect(() => {
    const el = itemRefs.current[indicatorIndex];
    if (el) {
      const { offsetTop, offsetHeight } = el;
      setIndicatorStyle({ top: offsetTop, height: offsetHeight });
    }
  }, [indicatorIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setTransitionEnabled(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-full border-r-2 border-lightgray px-5 py-1 min-w-[16%] overflow-auto" onMouseLeave={() => setHoverIndex(null)}>
      {/* animated background */}
      <div
        className={`absolute left-5 w-68 mt-[9px] bg-lightgray rounded-md z-0 ${transitionEnabled ? "transition-all duration-300 ease-in-out" : ""}`}
        style={{
          top: indicatorStyle.top,
          height: indicatorStyle.height - 10,
        }}
      ></div>

      {/* sections */}
      <div className="flex flex-col relative z-10">
        {sections.map((section, sIdx) => (
          <div key={section.title}>
            <span className="text-darkgray font-bold">{section.title}</span>
            {section.items.map(item => {
              const globalIdx = allItems.findIndex(i => i.key === item.key);
              return (
                <div
                  key={item.key}
                  ref={el => {
                    itemRefs.current[globalIdx] = el;
                  }}
                  onMouseEnter={() => setHoverIndex(globalIdx)}
                  className="rounded-md"
                >
                  <Link to={item.path} className="flex items-center px-3 py-2.5 rounded-md cursor-pointer transition duration-150 ease-in-out w-full">
                    <i className={item.icon}></i>
                    <p className="ml-2">{item.name}</p>
                  </Link>
                </div>
              );
            })}
            {sIdx < sections.length - 1 && <div className="h-[2px] bg-lightgray my-5 -mx-5"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
