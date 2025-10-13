type NavProps = {
  active?: string;
};

function Nav({ active = "dashboard" }: NavProps) {
  const baseItem = "flex items-center gap-2 mt-2 px-2 py-1 rounded-md cursor-pointer transition";
  const activeStyle = "bg-lightgray font-medium";

  const isDispatcher = true;
  const isAdmin = true;

  return (
    <div className="h-full border-r-2 border-lightgray px-5 py-3 min-w-[16%]">
      <div>
        <span className="text-darkgray font-bold">PROFIL</span>

        <div className={`${baseItem} ${active === "dashboard" ? activeStyle : "hover:bg-gray-50"}`}>
          <i className="fa-solid fa-light fa-grip text-black"></i>
          <p>Irányítópult</p>
        </div>

        <div className={`${baseItem} ${active === "stats" ? activeStyle : "hover:bg-gray-50"}`}>
          <i className="fa-solid fa-light fa-chart-waterfall text-black"></i>
          <p>Statisztikáim</p>
        </div>

        <div className={`${baseItem} ${active === "flights" ? activeStyle : "hover:bg-gray-50"}`}>
          <i className="fa-regular fa-light fa-helicopter-symbol text-black"></i>
          <p>Legutóbbi repüléseim</p>
        </div>
      </div>

      <div className="h-[2px] bg-lightgray my-5 -mx-5"></div>

      <div className="my-5">
        <span className="text-darkgray font-bold">REPÜLÉS</span>

        <div className={`${baseItem} ${active === "repositioning" ? activeStyle : "hover:bg-gray-50"}`}>
          <i className="fa-light fa-map-pin text-black"></i>
          <p>Repositioning</p>
        </div>
      </div>

      <div className="h-[2px] bg-lightgray my-5 -mx-5"></div>

      <div className="my-5">
        <span className="text-darkgray font-bold">OPS</span>

        <div className={`${baseItem} ${active === "documents" ? activeStyle : "hover:bg-gray-50"}`}>
          <i className="fa-classic fa-light fa-book text-black"></i>
          <p>Dokumentumok</p>
        </div>
        <div className={`${baseItem} ${active === "announcements" ? activeStyle : "hover:bg-gray-50"}`}>
          <i className="fa-classic fa-light fa-bullhorn text-black"></i>
          <p>Közlemények</p>
        </div>
        {isDispatcher && (
          <div className={`${baseItem} ${active === "new-dispatch" ? activeStyle : "hover:bg-gray-50"}`}>
            <i className="fa-classic fa-light fa-light-emergency-on text-black"></i>
            <p>Új riasztás</p>
          </div>
        )}
      </div>

      {isAdmin && (
        <>
          <div className="h-[2px] bg-lightgray my-5 -mx-5"></div>

          <div className="my-5">
            <span className="text-darkgray font-bold">ADMIN</span>

            <div className={`${baseItem} ${active === "manage-aircraft" ? activeStyle : "hover:bg-gray-50"}`}>
              <i className="fa-classic fa-light fa-helicopter text-black"></i>
              <p>Légijárművek kezelése</p>
            </div>
            <div className={`${baseItem} ${active === "manage-missions" ? activeStyle : "hover:bg-gray-50"}`}>
              <i className="fa-classic fa-light fa-bell text-black"></i>
              <p>Hívások kezelése</p>
            </div>
            <div className={`${baseItem} ${active === "manage-repositioning" ? activeStyle : "hover:bg-gray-50"}`}>
              <i className="fa-classic fa-light fa-location-arrow text-black"></i>
              <p>Repositioning kezelése</p>
            </div>
            <div className={`${baseItem} ${active === "manage-bases" ? activeStyle : "hover:bg-gray-50"}`}>
              <i className="fa-classic fa-light fa-helicopter-symbol text-black"></i>
              <p>Bázisok kezelése</p>
            </div>
            <div className={`${baseItem} ${active === "manage-users" ? activeStyle : "hover:bg-gray-50"}`}>
              <i className="fa-classic fa-light fa-user-pen text-black"></i>
              <p>Felhasználók kezelése</p>
            </div>
            <div className={`${baseItem} ${active === "manage-pireps" ? activeStyle : "hover:bg-gray-50"}`}>
              <i className="fa-classic fa-light fa-plane-circle-check text-black"></i>
              <p>Leadott repülések kezelése</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Nav;
