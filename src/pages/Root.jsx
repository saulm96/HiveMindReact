import { Outlet, useLocation } from "react-router-dom";

import HeaderBar from "../components/LandingPageHeaderBar/HeaderBar";
import Footer from "../components/Footer/Footer";

export default function Root() {
    const location = useLocation();
    const isLandingPage = location.pathname === "/";
  return (
    <>
      <header>
        {isLandingPage && <HeaderBar />}
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
