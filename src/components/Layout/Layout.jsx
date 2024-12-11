import FooterMenu from "../FooterMenu/FooterMenu";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar/>
      <Outlet/>
      <FooterMenu/>
    </>
  );
};

export default Layout;
