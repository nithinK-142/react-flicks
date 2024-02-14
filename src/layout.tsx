import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

export const Layout = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <Toaster />
      <main className="flex flex-col justify-between h-screen text-white font-kanit">
        <QueryClientProvider client={queryClient}>
          <Header />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </main>
    </>
  );
};
