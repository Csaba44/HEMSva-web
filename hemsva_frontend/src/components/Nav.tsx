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

  const isDispatcher = true;
  const isAdmin = true;

  const items: NavItem[] = [
    { path: "/dashboard", name: "Irányítópult", icon: "fa-solid fa-grip text-black", key: "dashboard" },
    { path: "/stats", name: "Statisztikáim", icon: "fa-solid fa-chart-waterfall text-black", key: "stats" },
    { path: "/flights", name: "Legutóbbi repüléseim", icon: "fa-regular fa-helicopter-symbol text-black", key: "flights" },
    { path: "/repositioning", name: "Repositioning", icon: "fa-light fa-map-pin text-black", key: "repositioning" },
    { path: "/documents", name: "Dokumentumok", icon: "fa-light fa-book text-black", key: "documents" },
    { path: "/announcements", name: "Közlemények", icon: "fa-light fa-bullhorn text-black", key: "announcements" },
    ...(isDispatcher ? [{ path: "/new-dispatch", name: "Új riasztás", icon: "fa-light fa-light-emergency-on text-black", key: "new-dispatch" }] : []),
    ...(isAdmin
      ? [
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
        ]
      : []),
  ];

  useEffect(() => {
    const idx = items.findIndex(item => location.pathname.includes(item.path));
    if (idx >= 0) setActiveIndex(idx);
  }, [location.pathname]);

  const indicatorIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  const [indicatorStyle, setIndicatorStyle] = useState<{
    top: number;
    height: number;
  }>({ top: 0, height: 0 });

  useEffect(() => {
    const el = itemRefs.current[indicatorIndex];
    if (el) {
      const { offsetTop, offsetHeight } = el;
      setIndicatorStyle({ top: offsetTop, height: offsetHeight });
    }
  }, [indicatorIndex]);

  return (
    <div className="relative h-full border-r-2 border-lightgray px-5 py-3 min-w-[16%] overflow-hidden">
      <div
        className="absolute left-5 w-68 mt-[19px] bg-lightgray rounded-md transition-all duration-300 ease-in-out z-0"
        style={{
          top: indicatorStyle.top,
          height: indicatorStyle.height - 5,
        }}
      ></div>

      <div className="flex flex-col relative z-10">
        {items.map((item, idx) => (
          <div
            key={item.key}
            ref={el => {
              itemRefs.current[idx] = el;
            }}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Link to={item.path} className="flex items-center gap-2 mt-2 px-2 py-1 rounded-md cursor-pointer transition">
              <i className={item.icon}></i>
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
