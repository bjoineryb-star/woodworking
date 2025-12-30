import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import "./layout.scss";

export function AppLayout() {
  return (
    <div className="app">
      <TopBar />

      <div className="app-body">
        <SideNav />
        <main className="content">
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
