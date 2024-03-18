import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Media from "../components/Media";
export default function Layout() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
        <Media />
      </div>
    </>
  );
}
