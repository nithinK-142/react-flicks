import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

export const Layout = () => {
  return (
    <>
      <Toaster />
      <main className="flex flex-col justify-between h-screen text-white font-kanit">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
