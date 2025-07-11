import "@/styles/layouts/LayoutMain.css";
import { Outlet } from "react-router-dom";

export const LayoutMain = () => {
  return (
    <div className="layout-main">
      <div className="layout-main__container">
        <main className="layout-main__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
