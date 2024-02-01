import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
};
